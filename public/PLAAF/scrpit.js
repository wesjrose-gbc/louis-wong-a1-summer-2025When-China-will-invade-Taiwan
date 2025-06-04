document.addEventListener('DOMContentLoaded', function() {
    const navyJetList = document.getElementById('navy-jet-list');
    const airforceJetList = document.getElementById('airforce-jet-list');
    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    const serviceFilter = document.getElementById('service-filter');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const typeOverviewDiv = document.getElementById('type-overview');

    const plaAircraftData = {
        // Data for 2023 (Already provided with placeholders)
        2023: {
            navy: [
                // Naval Aviation Aircraft - 2023 Data
                { name: "J-11B/BS Flanker L", type: "Fighter/Ground Attack", quantity: "50", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-11B+Fighter", infoLink: "#" },
                { name: "J-15 Flanker", type: "Fighter/Ground Attack", quantity: "ε60", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-15+Fighter", infoLink: "#" },
                { name: "Y-9 ASW", type: "Anti-Submarine Warfare", quantity: "20+", silhouetteSrc: "https://placehold.co/100x60/2ecc71/ffffff?text=Y-9+ASW", infoLink: "#" },
                { name: "Y-8JB High New 2", type: "ELINT", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8JB+ELINT", infoLink: "#" },
                { name: "Y-8X", type: "ELINT", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8X+ELINT", infoLink: "#" },
                { name: "Y-9JZ", type: "ELINT", quantity: "6", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-9JZ+ELINT", infoLink: "#" },
                { name: "KJ-200 Moth", type: "AEW&C", quantity: "6", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=KJ-200+AEWC", infoLink: "#" },
                { name: "KJ-500", type: "AEW&C", quantity: "14+", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=KJ-500+AEWC", infoLink: "#" },
                { name: "Y-8J Mask", type: "AEW&C", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=Y-8J+AEWC", infoLink: "#" },
                { name: "Y-8C", type: "Transport (Medium)", quantity: "6", silhouetteSrc: "https://placehold.co/100x60/1abc9c/ffffff?text=Y-8C+TPT", infoLink: "#" },
                { name: "Y-5", type: "Transport (Light)", quantity: "20", silhouetteSrc: "https://placehold.co/100x60/1abc9c/ffffff?text=Y-5+TPT", infoLink: "#" },
                { name: "Y-7G", type: "Transport (Light)", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/1abc9c/ffffff?text=Y-7G+TPT", infoLink: "#" },
                { name: "Y-7H", type: "Transport (Light)", quantity: "6", silhouetteSrc: "https://placehold.co/100x60/1abc9c/ffffff?text=Y-7H+TPT", infoLink: "#" },
                { name: "CRJ-200", type: "PAX Transport", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/f39c12/ffffff?text=CRJ-200+PAX", infoLink: "#" },
                { name: "CRJ-700", type: "PAX Transport", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/f39c12/ffffff?text=CRJ-700+PAX", infoLink: "#" },
                { name: "CJ-6", type: "Training", quantity: "38", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=CJ-6+Training", infoLink: "#" },
                { name: "HY-7", type: "Training", quantity: "12", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=HY-7+Training", infoLink: "#" },
                { name: "JL-8", type: "Training", quantity: "16", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-8+Training", infoLink: "#" },
                { name: "JL-9", type: "Training", quantity: "28", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-9+Training", infoLink: "#" },
                { name: "JL-9G", type: "Training", quantity: "12", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-9G+Training", infoLink: "#" },
                { name: "JL-10", type: "Training", quantity: "12", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-10+Training", infoLink: "#" },
                // Naval Aviation Helicopters - 2023 Data
                { name: "Ka-28 Helix A", type: "ASW Helicopter", quantity: "14", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Ka-28+ASW", infoLink: "#" },
                { name: "Z-9C", type: "ASW Helicopter", quantity: "14", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Z-9C+ASW", infoLink: "#" },
                { name: "Z-18F", type: "ASW Helicopter", quantity: "5", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Z-18F+ASW", infoLink: "#" },
                { name: "Ka-31", type: "AEW Helicopter", quantity: "9", silhouetteSrc: "https://placehold.co/100x60/d35400/ffffff?text=Ka-31+AEW", infoLink: "#" },
                { name: "Z-18 AEW", type: "AEW Helicopter", quantity: "4+", silhouetteSrc: "https://placehold.co/100x60/d35400/ffffff?text=Z-18+AEW", infoLink: "#" },
                { name: "AS365N", type: "MRH Helicopter", quantity: "7", silhouetteSrc: "https://placehold.co/100x60/8e44ad/ffffff?text=AS365N+MRH", infoLink: "#" },
                { name: "Z-9D", type: "MRH Helicopter", quantity: "11", silhouetteSrc: "https://placehold.co/100x60/8e44ad/ffffff?text=Z-9D+MRH", infoLink: "#" },
                { name: "Ka-27PS", type: "SAR Helicopter", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Ka-27PS+SAR", infoLink: "#" },
                { name: "Z-8JH", type: "SAR Helicopter", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Z-8JH+SAR", infoLink: "#" },
                { name: "Z-8S", type: "SAR Helicopter", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Z-8S+SAR", infoLink: "#" },
                { name: "Z-9S", type: "SAR Helicopter", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Z-9S+SAR", infoLink: "#" },
                { name: "SA321 Super Frelon", type: "Heavy TPT Helicopter", quantity: "8", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=SA321+TPT", infoLink: "#" },
                { name: "Z-8", type: "Heavy TPT Helicopter", quantity: "9", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=Z-8+TPT", infoLink: "#" },
                { name: "Z-8J", type: "Heavy TPT Helicopter", quantity: "13", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=Z-8J+TPT", infoLink: "#" },
                { name: "Z-18", type: "Heavy TPT Helicopter", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=Z-18+TPT", infoLink: "#" },
                { name: "Mi-8 Hip", type: "Medium TPT Helicopter", quantity: "8", silhouetteSrc: "https://placehold.co/100x60/7f8c8d/ffffff?text=Mi-8+TPT", infoLink: "#" },
                { name: "BZK-005", type: "ISR UAV (Heavy)", quantity: "some", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=BZK-005+UAV", infoLink: "#" },
                { name: "BZK-007", type: "ISR UAV (Medium)", quantity: "some", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=BZK-007+UAV", infoLink: "#" },
            ],
            airforce: [
                // Air Force Aircraft - 2023 Data
                { name: "H-6A", type: "Bomber (Training)", quantity: "ε12", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6A+Bomber", infoLink: "#" },
                { name: "H-6G/G mod", type: "Bomber", quantity: "27", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6G+Bomber", infoLink: "#" },
                { name: "H-6J", type: "Bomber", quantity: "18", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6J+Bomber", infoLink: "#" },
                { name: "H-6H/M", type: "Bomber", quantity: "ε40", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6H+Bomber", infoLink: "#" },
                { name: "H-6K", type: "Bomber", quantity: "ε100", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6K+Bomber", infoLink: "#" },
                { name: "H-6N", type: "Bomber", quantity: "12+", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6N+Bomber", infoLink: "#" },
                { name: "J-7 Fishcan", type: "Fighter", quantity: "50", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-7+Fighter", infoLink: "#" },
                { name: "J-7E Fishcan", type: "Fighter", quantity: "119", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-7E+Fighter", infoLink: "#" },
                { name: "J-7G Fishcan", type: "Fighter", quantity: "120", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-7G+Fighter", infoLink: "#" },
                { name: "J-8F/H Finback", type: "Fighter", quantity: "50", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-8F+Fighter", infoLink: "#" },
                { name: "J-11", type: "Fighter", quantity: "95", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-11+Fighter", infoLink: "#" },
                { name: "Su-27UBK Flanker", type: "Fighter", quantity: "32", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=Su-27+Fighter", infoLink: "#" },
                { name: "J-10A Firebird A", type: "Fighter/Ground Attack", quantity: "236", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-10A+Fighter", infoLink: "#" },
                { name: "J-10B Firebird", type: "Fighter/Ground Attack", quantity: "55", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-10B+Fighter", infoLink: "#" },
                { name: "J-10C Firebird C", type: "Fighter/Ground Attack", quantity: "220", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-10C+Fighter", infoLink: "#" },
                { name: "J-10S Firebird", type: "Fighter/Ground Attack", quantity: "77", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-10S+Fighter", infoLink: "#" },
                { name: "J-11B/BS Flanker L", type: "Fighter/Ground Attack", quantity: "150", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-11B+Fighter", infoLink: "#" },
                { name: "J-16 Flanker N", type: "Fighter/Ground Attack", quantity: "ε280", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-16+Fighter", infoLink: "#" },
                { name: "J-20A", type: "Fighter/Ground Attack", quantity: "200+", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-20A+Fighter", infoLink: "#" },
                { name: "Su-30MK2 Flanker G", type: "Fighter/Ground Attack", quantity: "24", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=Su-30+Fighter", infoLink: "#" },
                { name: "Su-30MKK Flanker G", type: "Fighter/Ground Attack", quantity: "73", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=Su-30+Fighter", infoLink: "#" },
                { name: "Su-35 Flanker M", type: "Fighter/Ground Attack", quantity: "24", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=Su-35+Fighter", infoLink: "#" },
                { name: "JH-7A Flounder", type: "Ground Attack", quantity: "200", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=JH-7A+Attack", infoLink: "#" },
                { name: "J-16D Flanker*", type: "Electronic Warfare", quantity: "ε12", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=J-16D+EW", infoLink: "#" },
                { name: "Y-8CB High New 1", type: "Electronic Warfare", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8CB+EW", infoLink: "#" },
                { name: "Y-8DZ", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8DZ+EW", infoLink: "#" },
                { name: "Y-8G High New 3", "type": "Electronic Warfare", quantity: "6", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8G+EW", infoLink: "#" },
                { name: "Y-8XZ High New 7", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8XZ+EW", infoLink: "#" },
                { name: "Y-9G", type: "Electronic Warfare", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-9G+EW", infoLink: "#" },
                { name: "Y-9XZ", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-9XZ+EW", infoLink: "#" },
                { name: "Tu-154M/D Careless", type: "ELINT", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/8e44ad/ffffff?text=Tu-154M+ELINT", infoLink: "#" },
                { name: "JZ-8 Finback*", type: "ISR", quantity: "24", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=JZ-8+ISR", infoLink: "#" },
                { name: "JZ-8F Finback*", type: "ISR", quantity: "24", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=JZ-8F+ISR", infoLink: "#" },
                { name: "KJ-200 Moth", type: "AEW&C", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=KJ-200+AEWC", infoLink: "#" },
                { name: "KJ-500", type: "AEW&C", quantity: "20", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=KJ-500+AEWC", infoLink: "#" },
                { name: "KJ-2000", type: "AEW&C", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=KJ-2000+AEWC", infoLink: "#" },
                { name: "B-737", type: "C2", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=B-737+C2", infoLink: "#" },
                { name: "Y-8T High New 4", type: "C2", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=Y-8T+C2", infoLink: "#" },
                { name: "H-6U", type: "Tanker", quantity: "10", silhouetteSrc: "https://placehold.co/100x60/f39c12/ffffff?text=H-6U+Tanker", infoLink: "#" },
                { name: "Il-78 Midas", type: "Tanker", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/f39c12/ffffff?text=Il-78+Tanker", infoLink: "#" },
                { name: "YY-20A", type: "Tanker/Transport", quantity: "8", silhouetteSrc: "https://placehold.co/100x60/1abc9c/ffffff?text=YY-20A+Tanker", infoLink: "#" },
                { name: "Il-76MD/TD Candid", type: "Heavy Transport", quantity: "20", silhouetteSrc: "https://placehold.co/100x60/16a085/ffffff?text=Il-76+Heavy", infoLink: "#" },
                { name: "Y-20", type: "Heavy Transport", quantity: "50", silhouetteSrc: "https://placehold.co/100x60/16a085/ffffff?text=Y-20+Heavy", infoLink: "#" },
                { name: "Y-8C", type: "Medium Transport", quantity: "30", silhouetteSrc: "https://placehold.co/100x60/2ecc71/ffffff?text=Y-8C+Med", infoLink: "#" },
                { name: "Y-9 Claw", type: "Medium Transport", quantity: "30", silhouetteSrc: "https://placehold.co/100x60/2ecc71/ffffff?text=Y-9+Med", infoLink: "#" },
                { name: "Learjet 35A", type: "Light Transport", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Learjet+Light", infoLink: "#" },
                { name: "Y-5", type: "Light Transport", quantity: "70", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Y-5+Light", infoLink: "#" },
                { name: "Y-7/Y-7H", type: "Light Transport", quantity: "41", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Y-7+Light", infoLink: "#" },
                { name: "A319", type: "PAX Transport", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=A319+PAX", infoLink: "#" },
                { name: "B-737 (VIP)", type: "PAX Transport", quantity: "10", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=B-737+PAX", infoLink: "#" },
                { name: "CRJ-200", type: "PAX Transport", quantity: "5", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=CRJ-200+PAX", infoLink: "#" },
                { name: "CRJ-700", type: "PAX Transport", quantity: "5", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=CRJ-700+PAX", infoLink: "#" },
                { name: "Tu-154M Careless", type: "PAX Transport", quantity: "8", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Tu-154M+PAX", infoLink: "#" },
                { name: "CJ-6/-6A/-6B", type: "Training", quantity: "400", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=CJ-6+Training", infoLink: "#" },
                { name: "HY-7", type: "Training", quantity: "12", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=HY-7+Training", infoLink: "#" },
                { name: "JJ-7*", type: "Training", quantity: "50", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JJ-7+Training", infoLink: "#" },
                { name: "JJ-7A*", type: "Training", quantity: "150", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JJ-7A+Training", infoLink: "#" },
                { name: "JL-8*", type: "Training", quantity: "350", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-8+Training", infoLink: "#" },
                { name: "JL-9*", type: "Training", quantity: "45", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-9+Training", infoLink: "#" },
                { name: "JL-10*", type: "Training", quantity: "50+", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-10+Training", infoLink: "#" },
                // Air Force Helicopters - 2023 Data
                { name: "Z-20S", type: "SAR Helicopter", quantity: "15+", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Z-20S+SAR", infoLink: "#" },
                { name: "Z-9", type: "MRH Helicopter", quantity: "20", silhouetteSrc: "https://placehold.co/100x60/8e44ad/ffffff?text=Z-9+MRH", infoLink: "#" },
                { name: "Mi-17V-5 Hip H", type: "MRH Helicopter", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/8e44ad/ffffff?text=Mi-17V5+MRH", infoLink: "#" },
                { name: "Z-8", type: "Heavy TPT Helicopter", quantity: "18+", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=Z-8+Heavy+TPT", infoLink: "#" },
                { name: "AS332 Super Puma (VIP)", type: "Medium TPT Helicopter", quantity: "6+", silhouetteSrc: "https://placehold.co/100x60/7f8c8d/ffffff?text=AS332+TPT", infoLink: "#" },
                { name: "H225 (VIP)", type: "Medium TPT Helicopter", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/7f8c8d/ffffff?text=H225+TPT", infoLink: "#" },
                { name: "Mi-171", type: "Medium TPT Helicopter", quantity: "4+", silhouetteSrc: "https://placehold.co/100x60/7f8c8d/ffffff?text=Mi-171+TPT", infoLink: "#" },
                { name: "GJ-1", type: "CISR UAV (Heavy)", quantity: "12+", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=GJ-1+UAV", infoLink: "#" },
                { name: "GJ-2", type: "CISR UAV (Heavy)", quantity: "some", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=GJ-2+UAV", infoLink: "#" },
                { name: "GJ-11", type: "CISR UAV (Heavy)", quantity: "(in test)", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=GJ-11+UAV", infoLink: "#" },
                { name: "TB-001", type: "ISR UAV (Heavy)", quantity: "some", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=TB-001+UAV", infoLink: "#" },
                { name: "WZ-7", type: "ISR UAV (Heavy)", quantity: "12+", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=WZ-7+UAV", infoLink: "#" },
                { name: "WZ-8", type: "ISR UAV (Heavy)", quantity: "2+", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=WZ-8+UAV", infoLink: "#" },
                { name: "WZ-10", type: "ISR UAV (Heavy)", quantity: "some (ELINT/ISR)", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=WZ-10+UAV", infoLink: "#" },
            ]
        },
        // Data for 2024
        2024: {
            navy: [
                // Naval Aviation Aircraft - 2024 Data
                { name: "H-6G/G mod", type: "Bomber", quantity: "27", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6G+Bomber", infoLink: "#" },
                { name: "H-6J", type: "Bomber", quantity: "18", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6J+Bomber", infoLink: "#" },
                { name: "J-8F Finback", type: "Fighter", quantity: "24", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-8F+Fighter", infoLink: "#" },
                { name: "J-10A Firebird", type: "Fighter/Ground Attack", quantity: "16", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-10A+Fighter", infoLink: "#" },
                { name: "J-10S Firebird", type: "Fighter/Ground Attack", quantity: "7", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-10S+Fighter", infoLink: "#" },
                { name: "J-11B/BS Flanker L", type: "Fighter/Ground Attack", quantity: "72", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-11B+Fighter", infoLink: "#" },
                { name: "J-15 Flanker", type: "Fighter/Ground Attack", quantity: "ε60", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-15+Fighter", infoLink: "#" },
                { name: "Su-30MK2 Flanker G", type: "Fighter/Ground Attack", quantity: "24", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=Su-30+Fighter", infoLink: "#" },
                { name: "JH-7", type: "Ground Attack", quantity: "48", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=JH-7+Attack", infoLink: "#" },
                { name: "JH-7A Flounder", type: "Ground Attack", quantity: "72", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=JH-7A+Attack", infoLink: "#" },
                { name: "KQ-200", type: "Anti-Submarine Warfare", quantity: "20+", silhouetteSrc: "https://placehold.co/100x60/2ecc71/ffffff?text=KQ-200+ASW", infoLink: "#" },
                { name: "Y-8JB High New 2", type: "ELINT", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8JB+ELINT", infoLink: "#" },
                { name: "Y-8X", type: "ELINT", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8X+ELINT", infoLink: "#" },
                { name: "Y-9JZ", type: "ELINT", quantity: "6", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-9JZ+ELINT", infoLink: "#" },
                { name: "KJ-200 Moth", type: "AEW&C", quantity: "6", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=KJ-200+AEWC", infoLink: "#" },
                { name: "KJ-500", type: "AEW&C", quantity: "14+", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=KJ-500+AEWC", infoLink: "#" },
                { name: "Y-8J Mask", type: "AEW&C", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=Y-8J+AEWC", infoLink: "#" },
                { name: "H-6DU", type: "Tanker", quantity: "5", silhouetteSrc: "https://placehold.co/100x60/f39c12/ffffff?text=H-6DU+Tanker", infoLink: "#" },
                { name: "Y-8C", type: "Transport (Medium)", quantity: "6", silhouetteSrc: "https://placehold.co/100x60/1abc9c/ffffff?text=Y-8C+TPT", infoLink: "#" },
                { name: "Y-5", type: "Transport (Light)", quantity: "20", silhouetteSrc: "https://placehold.co/100x60/1abc9c/ffffff?text=Y-5+TPT", infoLink: "#" },
                { name: "Y-7G", type: "Transport (Light)", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/1abc9c/ffffff?text=Y-7G+TPT", infoLink: "#" },
                { name: "Y-7H", type: "Transport (Light)", quantity: "6", silhouetteSrc: "https://placehold.co/100x60/1abc9c/ffffff?text=Y-7H+TPT", infoLink: "#" },
                { name: "CRJ-200", type: "PAX Transport", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/f39c12/ffffff?text=CRJ-200+PAX", infoLink: "#" },
                { name: "CRJ-700", type: "PAX Transport", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/f39c12/ffffff?text=CRJ-700+PAX", infoLink: "#" },
                { name: "CJ-6", type: "Training", quantity: "38", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=CJ-6+Training", infoLink: "#" },
                { name: "HY-7", type: "Training", quantity: "12", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=HY-7+Training", infoLink: "#" },
                { name: "JL-8*", type: "Training", quantity: "16", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-8+Training", infoLink: "#" },
                { name: "JL-9*", type: "Training", quantity: "28", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-9+Training", infoLink: "#" },
                { name: "JL-9G*", type: "Training", quantity: "12", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-9G+Training", infoLink: "#" },
                { name: "JL-10*", type: "Training", quantity: "12", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-10+Training", infoLink: "#" },
                // Naval Aviation Helicopters - 2024 Data
                { name: "Ka-28 Helix A", type: "ASW Helicopter", quantity: "14", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Ka-28+ASW", infoLink: "#" },
                { name: "Z-9C", type: "ASW Helicopter", quantity: "14", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Z-9C+ASW", infoLink: "#" },
                { name: "Z-18F", type: "ASW Helicopter", quantity: "5", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Z-18F+ASW", infoLink: "#" },
                { name: "Ka-31", type: "AEW Helicopter", quantity: "9", silhouetteSrc: "https://placehold.co/100x60/d35400/ffffff?text=Ka-31+AEW", infoLink: "#" },
                { name: "Z-18 AEW", type: "AEW Helicopter", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/d35400/ffffff?text=Z-18+AEW", infoLink: "#" },
                { name: "AS365N", type: "MRH Helicopter", quantity: "7", silhouetteSrc: "https://placehold.co/100x60/8e44ad/ffffff?text=AS365N+MRH", infoLink: "#" },
                { name: "Z-9D", type: "MRH Helicopter", quantity: "11", silhouetteSrc: "https://placehold.co/100x60/8e44ad/ffffff?text=Z-9D+MRH", infoLink: "#" },
                { name: "Ka-27PS", type: "SAR Helicopter", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Ka-27PS+SAR", infoLink: "#" },
                { name: "Z-8JH", type: "SAR Helicopter", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Z-8JH+SAR", infoLink: "#" },
                { name: "Z-8S", type: "SAR Helicopter", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Z-8S+SAR", infoLink: "#" },
                { name: "Z-9S", type: "SAR Helicopter", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Z-9S+SAR", infoLink: "#" },
                { name: "SA321 Super Frelon", type: "Heavy TPT Helicopter", quantity: "8", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=SA321+TPT", infoLink: "#" },
                { name: "Z-8", type: "Heavy TPT Helicopter", quantity: "9", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=Z-8+TPT", infoLink: "#" },
                { name: "Z-8J", type: "Heavy TPT Helicopter", quantity: "13", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=Z-8J+TPT", infoLink: "#" },
                { name: "Z-18", type: "Heavy TPT Helicopter", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=Z-18+TPT", infoLink: "#" },
                { name: "Mi-8 Hip", type: "Medium TPT Helicopter", quantity: "8", silhouetteSrc: "https://placehold.co/100x60/7f8c8d/ffffff?text=Mi-8+TPT", infoLink: "#" },
                { name: "BZK-005", type: "ISR UAV (Heavy)", quantity: "some", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=BZK-005+UAV", infoLink: "#" },
                { name: "BZK-007", type: "ISR UAV (Medium)", quantity: "some", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=BZK-007+UAV", infoLink: "#" },
            ],
            airforce: [
                // Air Force Aircraft - 2024 Data
                { name: "H-6A", type: "Bomber (Training)", quantity: "ε12", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6A+Bomber", infoLink: "#" },
                { name: "H-6H/M", type: "Bomber", quantity: "ε60", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6H+Bomber", infoLink: "#" },
                { name: "H-6K", type: "Bomber", quantity: "ε100", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6K+Bomber", infoLink: "#" },
                { name: "H-6N", type: "Bomber", quantity: "4+", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=H-6N+Bomber", infoLink: "#" },
                { name: "J-7 Fishcan", type: "Fighter", quantity: "50", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-7+Fighter", infoLink: "#" },
                { name: "J-7E Fishcan", type: "Fighter", quantity: "119", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-7E+Fighter", infoLink: "#" },
                { name: "J-7G Fishcan", type: "Fighter", quantity: "120", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-7G+Fighter", infoLink: "#" },
                { name: "J-8F/H Finback", type: "Fighter", quantity: "30", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-8F+Fighter", infoLink: "#" },
                { name: "J-11", type: "Fighter", quantity: "95", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=J-11+Fighter", infoLink: "#" },
                { name: "Su-27UBK Flanker", type: "Fighter", quantity: "32", silhouetteSrc: "https://placehold.co/100x60/3498db/ffffff?text=Su-27+Fighter", infoLink: "#" },
                { name: "J-10A Firebird", type: "Fighter/Ground Attack", quantity: "220", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-10A+Fighter", infoLink: "#" },
                { name: "J-10B Firebird", type: "Fighter/Ground Attack", quantity: "55", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-10B+Fighter", infoLink: "#" },
                { name: "J-10C Firebird", type: "Fighter/Ground Attack", quantity: "220", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-10C+Fighter", infoLink: "#" },
                { name: "J-10S Firebird", type: "Fighter/Ground Attack", quantity: "70", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-10S+Fighter", infoLink: "#" },
                { name: "J-11B/BS Flanker L", type: "Fighter/Ground Attack", quantity: "130", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-11B+Fighter", infoLink: "#" },
                { name: "J-16 Flanker", type: "Fighter/Ground Attack", quantity: "250", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-16+Fighter", infoLink: "#" },
                { name: "J-20A", type: "Fighter/Ground Attack", quantity: "140+", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=J-20A+Fighter", infoLink: "#" },
                { name: "Su-30MKK Flanker G", type: "Fighter/Ground Attack", quantity: "73", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=Su-30+Fighter", infoLink: "#" },
                { name: "Su-35 Flanker M", type: "Fighter/Ground Attack", quantity: "24", silhouetteSrc: "https://placehold.co/100x60/2980b9/ffffff?text=Su-35+Fighter", infoLink: "#" },
                { name: "JH-7A Flounder", type: "Ground Attack", quantity: "120", silhouetteSrc: "https://placehold.co/100x60/e74c3c/ffffff?text=JH-7A+Attack", infoLink: "#" },
                { name: "J-16D Flanker*", type: "Electronic Warfare", quantity: "ε12", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=J-16D+EW", infoLink: "#" },
                { name: "Y-8CB High New 1", type: "Electronic Warfare", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8CB+EW", infoLink: "#" },
                { name: "Y-8DZ", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8DZ+EW", infoLink: "#" },
                { name: "Y-8G High New 3", type: "Electronic Warfare", quantity: "6", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8G+EW", infoLink: "#" },
                { name: "Y-8XZ High New 7", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-8XZ+EW", infoLink: "#" },
                { name: "Y-9G", type: "Electronic Warfare", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-9G+EW", infoLink: "#" },
                { name: "Y-9XZ", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/9b59b6/ffffff?text=Y-9XZ+EW", infoLink: "#" },
                { name: "Tu-154M/D Careless", type: "ELINT", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/8e44ad/ffffff?text=Tu-154M+ELINT", infoLink: "#" },
                { name: "JZ-8 Finback*", type: "ISR", quantity: "24", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=JZ-8+ISR", infoLink: "#" },
                { name: "JZ-8F Finback*", type: "ISR", quantity: "24", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=JZ-8F+ISR", infoLink: "#" },
                { name: "KJ-200 Moth", type: "AEW&C", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=KJ-200+AEWC", infoLink: "#" },
                { name: "KJ-500", type: "AEW&C", quantity: "20", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=KJ-500+AEWC", infoLink: "#" },
                { name: "KJ-2000", type: "AEW&C", quantity: "4", silhouetteSrc: "https://placehold.co/100x60/e67e22/ffffff?text=KJ-2000+AEWC", infoLink: "#" },
                { name: "B-737", type: "C2", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=B-737+C2", infoLink: "#" },
                { name: "Y-8T High New 4", type: "C2", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=Y-8T+C2", infoLink: "#" },
                { name: "H-6U", type: "Tanker", quantity: "10", silhouetteSrc: "https://placehold.co/100x60/f39c12/ffffff?text=H-6U+Tanker", infoLink: "#" },
                { name: "Il-78 Midas", type: "Tanker", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/f39c12/ffffff?text=Il-78+Tanker", infoLink: "#" },
                { name: "YY-20A", type: "Tanker/Transport", quantity: "8", silhouetteSrc: "https://placehold.co/100x60/1abc9c/ffffff?text=YY-20A+Tanker", infoLink: "#" },
                { name: "Il-76MD/TD Candid", type: "Heavy Transport", quantity: "20", silhouetteSrc: "https://placehold.co/100x60/16a085/ffffff?text=Il-76+Heavy", infoLink: "#" },
                { name: "Y-20", type: "Heavy Transport", quantity: "50", silhouetteSrc: "https://placehold.co/100x60/16a085/ffffff?text=Y-20+Heavy", infoLink: "#" },
                { name: "Y-8C", type: "Medium Transport", quantity: "30", silhouetteSrc: "https://placehold.co/100x60/2ecc71/ffffff?text=Y-8C+Med", infoLink: "#" },
                { name: "Y-9", type: "Medium Transport", quantity: "30", silhouetteSrc: "https://placehold.co/100x60/2ecc71/ffffff?text=Y-9+Med", infoLink: "#" },
                { name: "Y-5", type: "Light Transport", quantity: "70", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Y-5+Light", infoLink: "#" },
                { name: "Y-7/Y-7H", type: "Light Transport", quantity: "41", silhouetteSrc: "https://placehold.co/100x60/27ae60/ffffff?text=Y-7+Light", infoLink: "#" },
                { name: "A319", type: "PAX Transport", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=A319+PAX", infoLink: "#" },
                { name: "B-737 (VIP)", type: "PAX Transport", quantity: "9", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=B-737+PAX", infoLink: "#" },
                { name: "CRJ-200", type: "PAX Transport", quantity: "5", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=CRJ-200+PAX", infoLink: "#" },
                { name: "CRJ-700", type: "PAX Transport", quantity: "5", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=CRJ-700+PAX", infoLink: "#" },
                { name: "Tu-154M Careless", type: "PAX Transport", quantity: "8", silhouetteSrc: "https://placehold.co/100x60/f1c40f/333333?text=Tu-154M+PAX", infoLink: "#" },
                { name: "CJ-6/-6A/-6B", type: "Training", quantity: "400", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=CJ-6+Training", infoLink: "#" },
                { name: "HY-7", type: "Training", quantity: "12+", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=HY-7+Training", infoLink: "#" },
                { name: "JJ-7*", type: "Training", quantity: "50", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JJ-7+Training", infoLink: "#" },
                { name: "JJ-7A*", type: "Training", quantity: "150", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JJ-7A+Training", infoLink: "#" },
                { name: "JL-8*", type: "Training", quantity: "350", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-8+Training", infoLink: "#" },
                { name: "JL-9*", type: "Training", quantity: "30", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-9+Training", infoLink: "#" },
                { name: "JL-10*", type: "Training", quantity: "50+", silhouetteSrc: "https://placehold.co/100x60/c0392b/ffffff?text=JL-10+Training", infoLink: "#" },
                // Air Force Helicopters - 2024 Data
                { name: "Z-9", type: "MRH Helicopter", quantity: "20", silhouetteSrc: "https://placehold.co/100x60/8e44ad/ffffff?text=Z-9+MRH", infoLink: "#" },
                { name: "Mi-17V-5 Hip H", type: "MRH Helicopter", quantity: "2", silhouetteSrc: "https://placehold.co/100x60/8e44ad/ffffff?text=Mi-17V5+MRH", infoLink: "#" },
                { name: "Z-8", type: "Heavy TPT Helicopter", quantity: "18+", silhouetteSrc: "https://placehold.co/100x60/34495e/ffffff?text=Z-8+Heavy+TPT", infoLink: "#" },
                { name: "AS332 Super Puma (VIP)", type: "Medium TPT Helicopter", quantity: "6+", silhouetteSrc: "https://placehold.co/100x60/7f8c8d/ffffff?text=AS332+TPT", infoLink: "#" },
                { name: "H225 (VIP)", type: "Medium TPT Helicopter", quantity: "3", silhouetteSrc: "https://placehold.co/100x60/7f8c8d/ffffff?text=H225+TPT", infoLink: "#" },
                { name: "Mi-171", type: "Medium TPT Helicopter", quantity: "4+", silhouetteSrc: "https://placehold.co/100x60/7f8c8d/ffffff?text=Mi-171+TPT", infoLink: "#" },
                { name: "GJ-1", type: "CISR UAV (Heavy)", quantity: "12+", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=GJ-1+UAV", infoLink: "#" },
                { name: "GJ-2", type: "CISR UAV (Heavy)", quantity: "some", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=GJ-2+UAV", infoLink: "#" },
                { name: "GJ-11", type: "CISR UAV (Heavy)", quantity: "(in test)", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=GJ-11+UAV", infoLink: "#" },
                { name: "WZ-7", type: "ISR UAV (Heavy)", quantity: "12+", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=WZ-7+UAV", infoLink: "#" },
                { name: "WZ-8", type: "ISR UAV (Heavy)", quantity: "2+", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=WZ-8+UAV", infoLink: "#" },
                { name: "WZ-10", type: "ISR UAV (Heavy)", quantity: "some (EW/ISR)", silhouetteSrc: "https://placehold.co/100x60/95a5a6/ffffff?text=WZ-10+UAV", infoLink: "#" },
            ]
        }
    };
    
    /**
     * Populates the year filter dropdown with available years from the data.
     */
    function populateYearFilter() {
        const availableYears = Object.keys(plaAircraftData).sort((a, b) => b - a); // Sort descending
        yearFilter.innerHTML = '<option value="all">All Years</option>';
        availableYears.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            if (year === "2024") { // Set 2024 as default selected
                option.selected = true;
            }
            yearFilter.appendChild(option);
        });
    }

   function parseQuantity(quantityStr) {
       if (typeof quantityStr !== 'string') {
           return 0;
       }
       // Use a regular expression to find the first sequence of digits.
       const match = quantityStr.match(/\d+/);
       if (match) {
           return parseInt(match[0], 10);
       }
       return 0;
   }

   /**
    * Populates the year filter dropdown with available years from the data.
    */
   function populateYearFilter() {
       const availableYears = Object.keys(plaAircraftData).sort((a, b) => b - a); // Sort descending
       yearFilter.innerHTML = '<option value="all">All Years</option>';
       availableYears.forEach(year => {
           const option = document.createElement('option');
           option.value = year;
           option.textContent = year;
           if (year === "2024") { // Set 2024 as default selected
               option.selected = true;
           }
           yearFilter.appendChild(option);
       });
   }

   /**
    * Populates the aircraft type filter dropdown with unique aircraft types.
    * This function now considers all years to get a comprehensive list of types.
    */
   function populateTypeFilter() {
       const allTypes = new Set();
       Object.values(plaAircraftData).forEach(yearData => {
           (yearData.navy || []).forEach(aircraft => allTypes.add(aircraft.type));
           (yearData.airforce || []).forEach(aircraft => allTypes.add(aircraft.type));
       });

       typeFilter.innerHTML = '<option value="all">All Types</option>'; // Reset
       Array.from(allTypes).sort().forEach(type => {
           const option = document.createElement('option');
           option.value = type;
           option.textContent = type;
           typeFilter.appendChild(option);
       });
   }

   /**
    * Dynamically creates and appends aircraft cards to the specified container.
    * The number of silhouettes shown is responsive to the aircraft's quantity.
    *
    * @param {Array<Object>} aircraftData - An array of aircraft objects.
    * @param {HTMLElement} container - The DOM element where the cards will be appended.
    */
   function displayAircraft(aircraftData, container) {
       container.innerHTML = ''; // Clear existing content
       if (aircraftData.length === 0) {
           container.innerHTML = '<p>No aircraft found matching the selected filters.</p>';
           return;
       }

       aircraftData.forEach(aircraft => {
           const aircraftCard = document.createElement('div');
           aircraftCard.classList.add('jet-card');

           // This container will hold the silhouette images.
           const silhouetteContainer = document.createElement('div');
           silhouetteContainer.classList.add('jet-silhouette');

           const quantity = parseQuantity(aircraft.quantity);
           // Display a representative number of silhouettes.
           // Logic: 1 silhouette per 10 planes, capped at 10 for UI cleanliness.
           // Ensures at least 1 silhouette is shown if quantity > 0.
           const silhouettesToShow = quantity > 0 ? Math.min(10, Math.max(1, Math.ceil(quantity / 10))) : 0;

           if (silhouettesToShow > 0) {
               for (let i = 0; i < silhouettesToShow; i++) {
                   const imageLink = document.createElement('a');
                   imageLink.href = aircraft.infoLink || "#";

                   const image = document.createElement('img');
                   image.src = aircraft.silhouetteSrc;
                   image.alt = `${aircraft.name} silhouette`;
                   image.style.width = '60px'; // Example smaller size for multiple images
                   image.onerror = function() {
                       this.src = "https://placehold.co/60x40/CCCCCC/333333?text=N/A";
                       this.alt = "Image not available";
                   };
                   imageLink.appendChild(image);
                   silhouetteContainer.appendChild(imageLink);
               }
           } else {
                silhouetteContainer.innerHTML = `<div style="border: 1px dashed #999; padding: 10px; text-align: center;">No Image</div>`;
           }

           aircraftCard.appendChild(silhouetteContainer);

           const details = document.createElement('div');
           details.classList.add('jet-details');
           details.innerHTML = `
               <h3>${aircraft.name}</h3>
               <p><strong>Type:</strong> ${aircraft.type}</p>
               <p><strong>Quantity:</strong> ${aircraft.quantity}</p>
           `;
           aircraftCard.appendChild(details);

           container.appendChild(aircraftCard);
       });
   }

   /**
    * Filters aircraft data based on selected year, type, and service.
    * This function has been revised to correctly handle the 'All Years' selection.
    * @returns {Object} An object containing filtered navy and airforce aircraft arrays.
    */
   function filterAircraftData() {
       const selectedYear = yearFilter.value;
       const selectedType = typeFilter.value;
       const selectedService = serviceFilter.value;

       let navyData = [];
       let airforceData = [];
       
       const yearsToProcess = selectedYear === 'all' ? Object.keys(plaAircraftData) : [selectedYear];

       yearsToProcess.forEach(year => {
           if (plaAircraftData[year]) {
               navyData.push(...(plaAircraftData[year].navy || []));
               airforceData.push(...(plaAircraftData[year].airforce || []));
           }
       });

       const typeFilterFunc = aircraft => (selectedType === 'all' || aircraft.type === selectedType);

       let finalNavy = [];
       if (selectedService === 'all' || selectedService === 'navy') {
           finalNavy = navyData.filter(typeFilterFunc);
       }

       let finalAirforce = [];
       if (selectedService === 'all' || selectedService === 'airforce') {
           finalAirforce = airforceData.filter(typeFilterFunc);
       }

       return { navy: finalNavy, airforce: finalAirforce };
   }

   /**
    * Generates and displays an overview of aircraft types based on filtered data.
    * It now calculates total quantity per type and a grand total.
    * @param {Array<Object>} filteredData - The combined array of filtered aircraft.
    */
   function generateOverview(filteredData) {
       const typeQuantities = {};
       let totalQuantity = 0;

       filteredData.forEach(aircraft => {
           const quantity = parseQuantity(aircraft.quantity);
           typeQuantities[aircraft.type] = (typeQuantities[aircraft.type] || 0) + quantity;
           totalQuantity += quantity;
       });

       let overviewHtml = '';
       if (Object.keys(typeQuantities).length === 0) {
           overviewHtml = '<p>No aircraft found for overview based on current filters.</p>';
       } else {
           overviewHtml += '<h4>Aircraft Quantity by Type</h4>';
           const sortedTypes = Object.keys(typeQuantities).sort();
           sortedTypes.forEach(type => {
               overviewHtml += `<p><strong>${type}:</strong> ${typeQuantities[type]}</p>`;
           });
           overviewHtml += `<hr><p><strong>Total Aircraft Quantity:</strong> ${totalQuantity}</p>`;
       }
       typeOverviewDiv.innerHTML = overviewHtml;
   }

   /**
    * Applies all filters and updates the display.
    */
   function applyFilters() {
       const filtered = filterAircraftData();
       displayAircraft(filtered.navy, navyJetList);
       displayAircraft(filtered.airforce, airforceJetList);

       const allFilteredAircraft = [...filtered.navy, ...filtered.airforce];
       // Remove duplicates that might appear if 'All Services' is selected
       const uniqueAircraft = Array.from(new Set(allFilteredAircraft.map(a => a.name)))
           .map(name => {
               return allFilteredAircraft.find(a => a.name === name)
           });
       
       generateOverview(uniqueAircraft);
   }

   // Initial setup
   populateYearFilter();
   populateTypeFilter();
   applyFilters(); // Initial display
   applyFiltersBtn.addEventListener('click', applyFilters);
});