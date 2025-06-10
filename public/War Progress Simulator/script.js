document.addEventListener('DOMContentLoaded', () => {
    const battalionsSlider = document.getElementById('battalions');
    const battalionsValue = document.getElementById('battalions-value');
    const scenarioType = document.getElementById('scenario-type'); // Not directly used in current simulation logic but kept for future expansion
    const simulateBtn = document.getElementById('simulate-btn');
    const warOutcome = document.getElementById('war-outcome');
    const territoryControlled = document.getElementById('territory-controlled');
    const plaPersonnel = document.getElementById('pla-personnel');
    const conflictDuration = document.getElementById('conflict-duration');

    const usAircraftLoss = document.getElementById('us-aircraft-losses');
    const jpAircraftLoss = document.getElementById('jp-aircraft-losses');
    const cnAircraftLoss = document.getElementById('cn-aircraft-losses');

    // Data points for interpolation/extrapolation:
    // [battalions, land_km2, us_air_losses, jp_air_losses, cn_air_losses, duration_days, pla_personnel_ashore]
    // Note: 'duration_days' and 'pla_personnel_ashore' are estimated based on general trends
    // and will need to be refined with actual report data if available.
    const optimisticPoint = [25, 780, 135, 56, 78, 18, 35000]; // Lower battalions, less land, lower losses, shorter duration, less personnel
    const basePoint = [37, 2600, 270, 112, 155, 28, 70000];
    const pessimisticPoint = [60, 6240, 484, 161, 327, 40, 120000]; // Higher battalions, more land, higher losses, longer duration, more personnel

    /**
     * Performs linear interpolation between two data points.
     * @param {number} x The input value to interpolate for.
     * @param {number} x0 The x-coordinate of the first point.
     * @param {number} y0 The y-coordinate of the first point.
     * @param {number} x1 The x-coordinate of the second point.
     * @param {number} y1 The y-coordinate of the second point.
     * @returns {number} The interpolated y-value.
     */
    function linearInterpolate(x, x0, y0, x1, y1) {
        if (x <= x0) return y0;
        if (x >= x1) return y1;
        return y0 + (x - x0) * (y1 - y0) / (x1 - x0);
    }

    /**
     * Performs linear extrapolation from a point given a slope.
     * @param {number} x The input value to extrapolate for.
     * @param {number} x0 The x-coordinate of the known point.
     * @param {number} y0 The y-coordinate of the known point.
     * @param {number} slope The slope for extrapolation.
     * @returns {number} The extrapolated y-value.
     */
    function extrapolate(x, x0, y0, slope) {
        return y0 + (x - x0) * slope;
    }

    /**
     * Calculates the simulation results based on the number of PLA battalions.
     * @param {number} battalions The number of PLA battalions landed.
     * @returns {object} An object containing the war outcome, territorial control, personnel, duration, and losses.
     */
    function calculateResults(battalions) {
        let outcome, outcomeClass; // outcomeClass will map to a CSS class for styling

        // 1. Determine War Outcome based on battalions
        if (battalions <= 25) {
            outcome = "U.S./Coalition Victory";
            outcomeClass = 'outcome-us-vic';
        } else if (battalions <= 40) {
            outcome = "Stalemate, Leaning U.S./Coalition";
            outcomeClass = 'outcome-lean-us';
        } else if (battalions <= 60) {
            outcome = "Stalemate, Indeterminate";
            outcomeClass = 'outcome-ind';
        } else if (battalions <= 80) {
            outcome = "Stalemate, Leaning China";
            outcomeClass = 'outcome-lean-cn';
        } else {
            outcome = "Chinese Victory";
            outcomeClass = 'outcome-cn-defeat'; // Assuming Chinese Victory uses the 'outcome-cn-defeat' style
        }
        
        let land_km2, us_air, jp_air, cn_air, duration_days, pla_personnel_ashore;

        // 2. Calculate values via interpolation/extrapolation
        if (battalions <= basePoint[0]) {
            // Interpolate between optimistic and base scenarios
            land_km2 = linearInterpolate(battalions, optimisticPoint[0], optimisticPoint[1], basePoint[0], basePoint[1]);
            us_air = linearInterpolate(battalions, optimisticPoint[0], optimisticPoint[2], basePoint[0], basePoint[2]);
            jp_air = linearInterpolate(battalions, optimisticPoint[0], optimisticPoint[3], basePoint[0], basePoint[3]);
            cn_air = linearInterpolate(battalions, optimisticPoint[0], optimisticPoint[4], basePoint[0], basePoint[4]);
            duration_days = linearInterpolate(battalions, optimisticPoint[0], optimisticPoint[5], basePoint[0], basePoint[5]);
            pla_personnel_ashore = linearInterpolate(battalions, optimisticPoint[0], optimisticPoint[6], basePoint[0], basePoint[6]);
        } else if (battalions <= pessimisticPoint[0]) {
            // Interpolate between base and pessimistic scenarios
            land_km2 = linearInterpolate(battalions, basePoint[0], basePoint[1], pessimisticPoint[0], pessimisticPoint[1]);
            us_air = linearInterpolate(battalions, basePoint[0], basePoint[2], pessimisticPoint[0], pessimisticPoint[2]);
            jp_air = linearInterpolate(battalions, basePoint[0], basePoint[3], pessimisticPoint[0], pessimisticPoint[3]);
            cn_air = linearInterpolate(battalions, basePoint[0], basePoint[4], pessimisticPoint[0], pessimisticPoint[4]);
            duration_days = linearInterpolate(battalions, basePoint[0], basePoint[5], pessimisticPoint[0], pessimisticPoint[5]);
            pla_personnel_ashore = linearInterpolate(battalions, basePoint[0], basePoint[6], pessimisticPoint[0], pessimisticPoint[6]);
        } else { 
            // Extrapolate for values beyond the pessimistic scenario (battalions > 60)
            const land_slope = (pessimisticPoint[1] - basePoint[1]) / (pessimisticPoint[0] - basePoint[0]);
            const us_air_slope = (pessimisticPoint[2] - basePoint[2]) / (pessimisticPoint[0] - basePoint[0]);
            const jp_air_slope = (pessimisticPoint[3] - basePoint[3]) / (pessimisticPoint[0] - basePoint[0]);
            const cn_air_slope = (pessimisticPoint[4] - basePoint[4]) / (pessimisticPoint[0] - basePoint[0]);
            const duration_slope = (pessimisticPoint[5] - basePoint[5]) / (pessimisticPoint[0] - basePoint[0]);
            const personnel_slope = (pessimisticPoint[6] - basePoint[6]) / (pessimisticPoint[0] - basePoint[0]);

            land_km2 = extrapolate(battalions, pessimisticPoint[0], pessimisticPoint[1], land_slope);
            us_air = extrapolate(battalions, pessimisticPoint[0], pessimisticPoint[2], us_air_slope);
            jp_air = extrapolate(battalions, pessimisticPoint[0], pessimisticPoint[3], jp_air_slope);
            cn_air = extrapolate(battalions, pessimisticPoint[0], pessimisticPoint[4], cn_air_slope);
            duration_days = extrapolate(battalions, pessimisticPoint[0], pessimisticPoint[5], duration_slope);
            pla_personnel_ashore = extrapolate(battalions, pessimisticPoint[0], pessimisticPoint[6], personnel_slope);
        }
        
        // Ensure values are non-negative and rounded
        us_air = Math.max(0, Math.round(us_air));
        jp_air = Math.max(0, Math.round(jp_air));
        cn_air = Math.max(0, Math.round(cn_air));
        land_km2 = Math.round(land_km2);
        duration_days = Math.max(7, Math.round(duration_days)); // Minimum 1 week duration
        pla_personnel_ashore = Math.max(0, Math.round(pla_personnel_ashore));

        const taiwanTotalAreaKm2 = 36000; // Approximate total area of Taiwan
        const land_percent = (land_km2 / taiwanTotalAreaKm2) * 100;

        return {
            outcome,
            outcomeClass,
            land_km2: land_km2,
            land_percent: land_percent.toFixed(1),
            duration_days: duration_days,
            pla_personnel_ashore: pla_personnel_ashore,
            losses: {
                us_air: us_air,
                jp_air: jp_air,
                cn_air: cn_air,
            }
        };
    }
    
    /**
     * Updates the HTML display with the calculated simulation results.
     */
    function updateDisplay() {
        const b_val = parseInt(battalionsSlider.value);
        battalionsValue.textContent = b_val;
        
        const results = calculateResults(b_val);
        
        // Update War Outcome display
        warOutcome.textContent = results.outcome;
        // Reset existing outcome-related classes and add the new one for dynamic styling
        warOutcome.className = 'outcome-display text-center p-3 rounded-md text-lg font-bold text-white'; // Base classes
        warOutcome.classList.add(results.outcomeClass);

        // Update Estimated Territorial Control
        territoryControlled.textContent = 
            `PLA controls an estimated ${results.land_km2.toLocaleString()} km² (${results.land_percent}%) of Taiwan.`;

        // Update Estimated PLA Personnel Ashore
        plaPersonnel.textContent = `${results.pla_personnel_ashore.toLocaleString()} personnel`;

        // Update Estimated Conflict Duration (display in weeks)
        const durationWeeks = (results.duration_days / 7);
        conflictDuration.textContent = `${durationWeeks.toFixed(1)} weeks`;

        // Update Estimated Aircraft Losses
        usAircraftLoss.textContent = results.losses.us_air.toLocaleString();
        jpAircraftLoss.textContent = results.losses.jp_air.toLocaleString();
        cnAircraftLoss.textContent = results.losses.cn_air.toLocaleString();

        // Per user request, ship losses are ignored and not displayed.
    }

    // Attach event listeners
    battalionsSlider.addEventListener('input', updateDisplay); // Update on slider change
    simulateBtn.addEventListener('click', updateDisplay);     // Update on button click

    // Initial call to populate the display when the page loads
    updateDisplay();

    // Set the current year in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});