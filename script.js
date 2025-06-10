// --- Data Store ---
const initialSliderValues = {
    prcMilitaryReadiness: 7,
    taiwanDefenseCapability: 6,
    usInterventionLikelihood: 7,
    internationalPressure: 6,
    prcEconomicStability: 5,
    leadershipRiskTolerance: 7,
    informationWarfareEffectiveness: 6
};

const militaryData = {
    airForces: {
        prcTheater: { fighters: 800, bombersAttack: 300, specialMission: 150, transport: 40 },
        taiwan: { fighters: 350, bombersAttack: 0, specialMission: 20, transport: 50 }
    },
    missileForces: {
        prcTheaterRelevantLaunchers: 650,
        prcTheaterRelevantMissiles: 1200,
        taiwanComparableLaunchers: 50,
        taiwanComparableMissiles: 150
    }
};

// --- Chart Instances ---
let likelihoodGaugeChart = null;
let militaryBalanceAirChart = null;
let militaryBalanceMissileChart = null;
let factorInfluenceChart = null;

// --- Slider Setup ---
const sliders = [
    { id: 'prcMilitaryReadiness', valueId: 'prcMilitaryReadinessValue', weight: 0.20, riskFactor: true },
    { id: 'taiwanDefenseCapability', valueId: 'taiwanDefenseCapabilityValue', weight: 0.15, riskFactor: false },
    { id: 'usInterventionLikelihood', valueId: 'usInterventionLikelihoodValue', weight: 0.20, riskFactor: false },
    { id: 'internationalPressure', valueId: 'internationalPressureValue', weight: 0.10, riskFactor: false },
    { id: 'prcEconomicStability', valueId: 'prcEconomicStabilityValue', weight: 0.10, riskFactor: false },
    { id: 'leadershipRiskTolerance', valueId: 'leadershipRiskToleranceValue', weight: 0.15, riskFactor: true },
    { id: 'informationWarfareEffectiveness', valueId: 'informationWarfareEffectivenessValue', weight: 0.10, riskFactor: true }
];

function setupSliders() {
    sliders.forEach(sliderConfig => {
        const sliderElement = document.getElementById(sliderConfig.id);
        const valueElement = document.getElementById(sliderConfig.valueId);
        if (sliderElement && valueElement) {
            sliderElement.value = initialSliderValues[sliderConfig.id];
            valueElement.textContent = sliderElement.value;
            sliderElement.addEventListener('input', () => {
                valueElement.textContent = sliderElement.value;
            });
        }
    });
}

function resetSliders() {
    sliders.forEach(sliderConfig => {
        const sliderElement = document.getElementById(sliderConfig.id);
        const valueElement = document.getElementById(sliderConfig.valueId);
        if (sliderElement && valueElement) {
            sliderElement.value = initialSliderValues[sliderConfig.id];
            valueElement.textContent = initialSliderValues[sliderConfig.id];
        }
    });
    document.getElementById('likelihoodScoreDisplay').textContent = "--";
    document.getElementById('likelihoodTextDisplay').textContent = "Adjust sliders and run simulation.";
    if (likelihoodGaugeChart) likelihoodGaugeChart.destroy();
    if (factorInfluenceChart) factorInfluenceChart.destroy();
    initLikelihoodGaugeChart(0);
    initFactorInfluenceChart({});
}

// --- Simulation Logic ---
function runSimulation() {
    let overallScore = 0;
    const factorValues = {};
    const factorInfluences = {};

    sliders.forEach(s => {
        const sliderElement = document.getElementById(s.id);
        if (sliderElement) {
            const value = parseInt(sliderElement.value);
            factorValues[s.id] = value;
            let weightedValue = value * s.weight;

            if (s.riskFactor) {
                overallScore += weightedValue;
                factorInfluences[s.id] = weightedValue;
            } else {
                overallScore -= weightedValue;
                factorInfluences[s.id] = -weightedValue;
            }
        }
    });

    let riskEnhancerScore = 0;
    let riskReducerScore = 0;
    const normalizedInfluences = {};

    sliders.forEach(s => {
        const value = factorValues[s.id];
        if (s.riskFactor) {
            riskEnhancerScore += value * s.weight;
            normalizedInfluences[s.id] = value * (s.weight / 0.05);
        } else {
            riskReducerScore += value * s.weight;
            normalizedInfluences[s.id] = value * (s.weight / 0.05);
        }
    });

    let rawScore = riskEnhancerScore - riskReducerScore;

    if (factorValues.usInterventionLikelihood >= 9) {
        rawScore *= 0.7;
    } else if (factorValues.usInterventionLikelihood >= 7) {
        rawScore *= 0.85;
    }

    if (factorValues.prcMilitaryReadiness <= 2) {
        rawScore = Math.min(rawScore, rawScore * 0.5);
    }
    
    if (factorValues.leadershipRiskTolerance >= 9 && factorValues.prcMilitaryReadiness >= 7) {
        rawScore *= 1.2;
    }

    const minRaw = -5.05;
    const maxRaw = 3.95;
    let finalScore = ((rawScore - minRaw) / (maxRaw - minRaw)) * 9 + 1;
    finalScore = Math.max(1, Math.min(10, finalScore));

    displayResults(finalScore);
    updateFactorInfluenceChart(factorValues, sliders);
}

// --- Display Logic ---
function displayResults(score) {
    const scoreDisplay = document.getElementById('likelihoodScoreDisplay');
    const textDisplay = document.getElementById('likelihoodTextDisplay');
    if (!scoreDisplay || !textDisplay) {
        console.error('Display elements not found');
        return;
    }
    score = parseFloat(score.toFixed(1));
    scoreDisplay.textContent = score;

    let text = "";
    let color = "";

    if (score <= 3) {
        text = "Low Likelihood: Strong deterrence, high risks for China.";
        color = '#4ade80';
    } else if (score <= 6) {
        text = "Moderate Likelihood: Uncertain calculus, significant risks present.";
        color = '#facc15';
    } else if (score <= 8) {
        text = "High Likelihood: Factors tilt toward potential action.";
        color = '#f97316';
    } else {
        text = "Very High Likelihood: Crisis point, military action highly probable.";
        color = '#ef4444';
    }
    textDisplay.textContent = text;
    updateLikelihoodGaugeChart(score, color);
}

// --- Chart Initializations and Updates ---
function initLikelihoodGaugeChart(initialScore = 0) {
    const canvas = document.getElementById('likelihoodGaugeChart');
    if (!canvas) {
        console.error('Canvas for likelihoodGaugeChart not found');
        return;
    }
    const ctx = canvas.getContext('2d');
    if (likelihoodGaugeChart) {
        likelihoodGaugeChart.destroy();
    }
    likelihoodGaugeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Likelihood', 'Remaining'],
            datasets: [{
                data: [initialScore, 10 - initialScore],
                backgroundColor: ['#3b82f6', '#e5e7eb'],
                borderColor: ['#ffffff', '#ffffff'],
                borderWidth: 2,
                circumference: 180,
                rotation: 270
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        }
    });
}

function updateLikelihoodGaugeChart(score, color) {
    if (likelihoodGaugeChart) {
        likelihoodGaugeChart.data.datasets[0].data[0] = score;
        likelihoodGaugeChart.data.datasets[0].data[1] = 10 - score;
        likelihoodGaugeChart.data.datasets[0].backgroundColor[0] = color;
        likelihoodGaugeChart.update();
    } else {
        console.warn('likelihoodGaugeChart not initialized');
        initLikelihoodGaugeChart(score);
    }
}

function initMilitaryBalanceCharts() {
    const airCtx = document.getElementById('militaryBalanceAirChart');
    if (!airCtx) {
        console.error('Canvas for militaryBalanceAirChart not found');
        return;
    }
    if (militaryBalanceAirChart) militaryBalanceAirChart.destroy();
    militaryBalanceAirChart = new Chart(airCtx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Fighters', 'Bombers/Attack', 'Special Mission', 'Transport'],
            datasets: [
                {
                    label: 'China (Relevant Theater)',
                    data: [
                        militaryData.airForces.prcTheater.fighters,
                        militaryData.airForces.prcTheater.bombersAttack,
                        militaryData.airForces.prcTheater.specialMission,
                        militaryData.airForces.prcTheater.transport
                    ],
                    backgroundColor: 'rgba(239, 68, 68, 0.7)',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Taiwan',
                    data: [
                        militaryData.airForces.taiwan.fighters,
                        militaryData.airForces.taiwan.bombersAttack,
                        militaryData.airForces.taiwan.specialMission,
                        militaryData.airForces.taiwan.transport
                    ],
                    backgroundColor: 'rgba(59, 130, 246, 0.7)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, stacked: false } },
            plugins: { legend: { position: 'top' } }
        }
    });

    const missileCtx = document.getElementById('militaryBalanceMissileChart');
    if (!missileCtx) {
        console.error('Canvas for militaryBalanceMissileChart not found');
        return;
    }
    if (militaryBalanceMissileChart) militaryBalanceMissileChart.destroy();
    militaryBalanceMissileChart = new Chart(missileCtx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Launchers (SRBM/MRBM)', 'Missiles (SRBM/MRBM)'],
            datasets: [
                {
                    label: 'China (Relevant Theater)',
                    data: [
                        militaryData.missileForces.prcTheaterRelevantLaunchers,
                        militaryData.missileForces.prcTheaterRelevantMissiles
                    ],
                    backgroundColor: 'rgba(239, 68, 68, 0.7)',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Taiwan (Comparable Systems)',
                    data: [
                        militaryData.missileForces.taiwanComparableLaunchers,
                        militaryData.missileForces.taiwanComparableMissiles
                    ],
                    backgroundColor: 'rgba(59, 130, 246, 0.7)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } },
            plugins: { legend: { position: 'top' } }
        }
    });
}

function initFactorInfluenceChart(factorValuesData = {}) {
    const canvas = document.getElementById('factorInfluenceChart');
    if (!canvas) {
        console.error('Canvas for factorInfluenceChart not found');
        return;
    }
    const ctx = canvas.getContext('2d');
    if (factorInfluenceChart) {
        factorInfluenceChart.destroy();
    }

    const labels = sliders.map(s => {
        const labelElement = document.querySelector(`label[for='${s.id}']`);
        return labelElement ? labelElement.innerText.split('\n')[0].trim() : s.id;
    });
    
    const dataPoints = sliders.map(s => factorValuesData[s.id] || 0);

    factorInfluenceChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Factor Settings (1-10)',
                data: dataPoints,
                fill: true,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: 'rgb(59, 130, 246)',
                pointBackgroundColor: 'rgb(59, 130, 246)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(59, 130, 246)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 10,
                    ticks: { stepSize: 2 }
                }
            },
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.r !== null) {
                                label += context.parsed.r;
                                const sliderConfig = sliders.find(s => {
                                    const labelElement = document.querySelector(`label[for='${s.id}']`);
                                    return labelElement && labelElement.innerText.split('\n')[0].trim() === context.label;
                                });
                                if (sliderConfig) {
                                    label += sliderConfig.riskFactor ? ' (Risk Enhancer)' : ' (Risk Reducer)';
                                }
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function initFactorInfluenceChart(factorValuesData = {}) {
    const canvas = document.getElementById('factorInfluenceChart');
    if (!canvas) {
        console.error('Canvas for factorInfluenceChart not found');
        return;
    }
    const ctx = canvas.getContext('2d');
    if (factorInfluenceChart) {
        factorInfluenceChart.destroy();
    }

    const labels = sliders.map(s => {
        const labelElement = document.querySelector(`label[for='${s.id}']`);
        return labelElement ? labelElement.innerText.split('\n')[0].trim() : s.id;
    });
    
    const dataPoints = sliders.map(s => factorValuesData[s.id] || 0);

    factorInfluenceChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: '因素設定 (1-10)',
                data: dataPoints,
                fill: true,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: 'rgb(59, 130, 246)',
                pointBackgroundColor: 'rgb(59, 130, 246)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(59, 130, 246)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 10,
                    ticks: { stepSize: 2 }
                }
            },
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.r !== null) {
                                label += context.parsed.r;
                                const sliderConfig = sliders.find(s => {
                                    const labelElement = document.querySelector(`label[for='${s.id}']`);
                                    return labelElement && labelElement.innerText.split('\n')[0].trim() === context.label;
                                });
                                if (sliderConfig) {
                                    label += sliderConfig.riskFactor ? '（增強風險）' : '（降低風險）';
                                }
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function updateFactorInfluenceChart(factorValues, sliderConfigs) {
    if (factorInfluenceChart) {
        const dataPoints = sliderConfigs.map(s => factorValues[s.id] || 0);
        factorInfluenceChart.data.datasets[0].data = dataPoints;
        factorInfluenceChart.update();
    } else {
        initFactorInfluenceChart(factorValues);
    }
}

// --- Tab Functionality ---
function openTab(event, tabName) {
    let i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }
    const targetTab = document.getElementById(tabName);
    if (!targetTab) {
        console.error(`Tab ${tabName} not found`);
        return;
    }
    targetTab.style.display = "block";
    targetTab.classList.add("active");
    event.currentTarget.classList.add("active");

    if (tabName === 'visualizationsTab') {
        requestAnimationFrame(() => {
            initMilitaryBalanceCharts();
            if (!factorInfluenceChart || factorInfluenceChart.data.datasets[0].data.every(d => d === 0)) {
                const currentFactorValues = {};
                sliders.forEach(s => {
                    const sliderElement = document.getElementById(s.id);
                    if (sliderElement) currentFactorValues[s.id] = parseInt(sliderElement.value);
                });
                initFactorInfluenceChart(currentFactorValues);
            }
            if (militaryBalanceAirChart) militaryBalanceAirChart.update();
            if (militaryBalanceMissileChart) militaryBalanceMissileChart.update();
            if (factorInfluenceChart) factorInfluenceChart.update();
        });
    }
}

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    setupSliders();
    initLikelihoodGaugeChart(0);
    document.querySelector('.tab-button').click();
});