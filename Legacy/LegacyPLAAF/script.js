document.addEventListener('DOMContentLoaded', function() {
    const navyJetList = document.getElementById('navy-jet-list');
    const airforceJetList = document.getElementById('airforce-jet-list');
    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    const serviceFilter = document.getElementById('service-filter');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const typeOverviewDiv = document.getElementById('type-overview');

    // Consolidated data for PLA Navy and Air Force aircraft, organized by year.
    // Each entry includes name, type, quantity, a placeholder for the silhouette image,
    // and an optional link for more information.
    const plaAircraftData = {
        // Data for 2023
        2023: {
            navy: [
                // Naval Aviation Aircraft - 2023 Data
                { name: "J-11B/BS Flanker L", type: "Fighter/Ground Attack", quantity: "50", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-15 Flanker", type: "Fighter/Ground Attack", quantity: "ε60", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-9 ASW", type: "Anti-Submarine Warfare", quantity: "20+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8JB High New 2", type: "ELINT", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8X", type: "ELINT", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-9JZ", type: "ELINT", quantity: "6", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KJ-200 Moth", type: "AEW&C", quantity: "6", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KJ-500", type: "AEW&C", quantity: "14+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8J Mask", type: "AEW&C", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8C", type: "Transport (Medium)", quantity: "6", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-5", type: "Transport (Light)", quantity: "20", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-7G", type: "Transport (Light)", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-7H", type: "Transport (Light)", quantity: "6", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CRJ-200", type: "PAX Transport", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CRJ-700", type: "PAX Transport", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CJ-6", type: "Training", quantity: "38", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "HY-7", type: "Training", quantity: "12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-8", type: "Training", quantity: "16", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-9", type: "Training", quantity: "28", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-9G", type: "Training", quantity: "12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-10", type: "Training", quantity: "12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                // Naval Aviation Helicopters - 2023 Data
                { name: "Ka-28 Helix A", type: "ASW Helicopter", quantity: "14", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-9C", type: "ASW Helicopter", quantity: "14", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-18F", type: "ASW Helicopter", quantity: "5", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Ka-31", type: "AEW Helicopter", quantity: "9", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-18 AEW", type: "AEW Helicopter", quantity: "4+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "AS365N", type: "MRH Helicopter", quantity: "7", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-9D", type: "MRH Helicopter", quantity: "11", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Ka-27PS", type: "SAR Helicopter", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-8JH", type: "SAR Helicopter", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-8S", type: "SAR Helicopter", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-9S", type: "SAR Helicopter", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "SA321 Super Frelon", type: "Heavy TPT Helicopter", quantity: "8", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-8", type: "Heavy TPT Helicopter", quantity: "9", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-8J", type: "Heavy TPT Helicopter", quantity: "13", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-18", type: "Heavy TPT Helicopter", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Mi-8 Hip", type: "Medium TPT Helicopter", quantity: "8", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "BZK-005", type: "ISR UAV (Heavy)", quantity: "some", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "BZK-007", type: "ISR UAV (Medium)", quantity: "some", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
            ],
            airforce: [
                // Air Force Aircraft - 2023 Data
                { name: "H-6A", type: "Bomber (Training)", quantity: "ε12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6G/G mod", type: "Bomber", quantity: "27", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6J", type: "Bomber", quantity: "18", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6H/M", type: "Bomber", quantity: "ε40", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6K", type: "Bomber", quantity: "ε100", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6N", type: "Bomber", quantity: "12+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-7 Fishcan", type: "Fighter", quantity: "50", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-7E Fishcan", type: "Fighter", quantity: "119", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-7G Fishcan", type: "Fighter", quantity: "120", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-8F/H Finback", type: "Fighter", quantity: "50", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-11", type: "Fighter", quantity: "95", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Su-27UBK Flanker", type: "Fighter", quantity: "32", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-10A Firebird A", type: "Fighter/Ground Attack", quantity: "236", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-10B Firebird", type: "Fighter/Ground Attack", quantity: "55", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-10C Firebird C", type: "Fighter/Ground Attack", quantity: "220", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-10S Firebird", type: "Fighter/Ground Attack", quantity: "77", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-11B/BS Flanker L", type: "Fighter/Ground Attack", quantity: "150", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-16 Flanker N", type: "Fighter/Ground Attack", quantity: "ε280", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-20A", type: "Fighter/Ground Attack", quantity: "200+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Su-30MK2 Flanker G", type: "Fighter/Ground Attack", quantity: "24", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Su-30MKK Flanker G", type: "Fighter/Ground Attack", quantity: "73", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Su-35 Flanker M", type: "Fighter/Ground Attack", quantity: "24", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JH-7A Flounder", type: "Ground Attack", quantity: "200", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-16D Flanker*", type: "Electronic Warfare", quantity: "ε12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8CB High New 1", type: "Electronic Warfare", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8DZ", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8G High New 3", type: "Electronic Warfare", quantity: "6", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8XZ High New 7", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-9G", type: "Electronic Warfare", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-9XZ", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Tu-154M/D Careless", type: "ELINT", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JZ-8 Finback*", type: "ISR", quantity: "24", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JZ-8F Finback*", type: "ISR", quantity: "24", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KJ-200 Moth", type: "AEW&C", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KJ-500", type: "AEW&C", quantity: "20", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KJ-2000", type: "AEW&C", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "B-737", type: "C2", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8T High New 4", type: "C2", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6U", type: "Tanker", quantity: "10", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6DU", type: "Tanker", quantity: "5", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Il-78 Midas", type: "Tanker", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "YY-20A", type: "Tanker/Transport", quantity: "8", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Il-76MD/TD Candid", type: "Heavy Transport", quantity: "20", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-20", type: "Heavy Transport", quantity: "50", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8C", type: "Medium Transport", quantity: "30", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-9 Claw", type: "Medium Transport", quantity: "30", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Learjet 35A", type: "Light Transport", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-5", type: "Light Transport", quantity: "70", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-7/Y-7H", type: "Light Transport", quantity: "41", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "A319", type: "PAX Transport", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "B-737 (VIP)", type: "PAX Transport", quantity: "10", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CRJ-200", type: "PAX Transport", quantity: "5", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CRJ-700", type: "PAX Transport", quantity: "5", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Tu-154M Careless", type: "PAX Transport", quantity: "8", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CJ-6/-6A/-6B", type: "Training", quantity: "400", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "HY-7", type: "Training", quantity: "12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JJ-7*", type: "Training", quantity: "50", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JJ-7A*", type: "Training", quantity: "150", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-8*", type: "Training", quantity: "350", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-9*", type: "Training", quantity: "45", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-10*", type: "Training", quantity: "50+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                // Air Force Helicopters - 2023 Data
                { name: "Z-20S", type: "SAR Helicopter", quantity: "15+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-9", type: "MRH Helicopter", quantity: "20", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Mi-17V-5 Hip H", type: "MRH Helicopter", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-8", type: "Heavy TPT Helicopter", quantity: "18+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "AS332 Super Puma (VIP)", type: "Medium TPT Helicopter", quantity: "6+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H225 (VIP)", type: "Medium TPT Helicopter", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Mi-171", type: "Medium TPT Helicopter", quantity: "4+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "GJ-1", type: "CISR UAV (Heavy)", quantity: "12+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "GJ-2", type: "CISR UAV (Heavy)", quantity: "some", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "GJ-11", type: "CISR UAV (Heavy)", quantity: "(in test)", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "TB-001", type: "ISR UAV (Heavy)", quantity: "some", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "WZ-7", type: "ISR UAV (Heavy)", quantity: "12+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "WZ-8", type: "ISR UAV (Heavy)", quantity: "2+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "WZ-10", type: "ISR UAV (Heavy)", quantity: "some (ELINT/ISR)", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
            ]
        },
        // Data for 2024
        2024: {
            navy: [
                // Naval Aviation Aircraft - 2024 Data
                { name: "H-6G/G mod", type: "Bomber", quantity: "27", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6J", type: "Bomber", quantity: "18", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-8F Finback", type: "Fighter", quantity: "24", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-10A Firebird", type: "Fighter/Ground Attack", quantity: "16", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-10S Firebird", type: "Fighter/Ground Attack", quantity: "7", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-11B/BS Flanker L", type: "Fighter/Ground Attack", quantity: "72", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-15 Flanker", type: "Fighter/Ground Attack", quantity: "ε60", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Su-30MK2 Flanker G", type: "Fighter/Ground Attack", quantity: "24", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JH-7", type: "Ground Attack", quantity: "48", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JH-7A Flounder", type: "Ground Attack", quantity: "72", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KQ-200", type: "Anti-Submarine Warfare", quantity: "20+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8JB High New 2", type: "ELINT", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8X", type: "ELINT", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-9JZ", type: "ELINT", quantity: "6", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KJ-200 Moth", type: "AEW&C", quantity: "6", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KJ-500", type: "AEW&C", quantity: "14+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8J Mask", type: "AEW&C", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6DU", type: "Tanker", quantity: "5", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8C", type: "Transport (Medium)", quantity: "6", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-5", type: "Transport (Light)", quantity: "20", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-7G", type: "Transport (Light)", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-7H", type: "Transport (Light)", quantity: "6", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CRJ-200", type: "PAX Transport", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CRJ-700", type: "PAX Transport", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CJ-6", type: "Training", quantity: "38", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "HY-7", type: "Training", quantity: "12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-8*", type: "Training", quantity: "16", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-9*", type: "Training", quantity: "28", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-9G*", type: "Training", quantity: "12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-10*", type: "Training", quantity: "12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                // Naval Aviation Helicopters - 2024 Data
                { name: "Ka-28 Helix A", type: "ASW Helicopter", quantity: "14", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-9C", type: "ASW Helicopter", quantity: "14", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-18F", type: "ASW Helicopter", quantity: "5", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Ka-31", type: "AEW Helicopter", quantity: "9", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-18 AEW", type: "AEW Helicopter", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "AS365N", type: "MRH Helicopter", quantity: "7", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-9D", type: "MRH Helicopter", quantity: "11", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Ka-27PS", type: "SAR Helicopter", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-8JH", type: "SAR Helicopter", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-8S", type: "SAR Helicopter", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-9S", type: "SAR Helicopter", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "SA321 Super Frelon", type: "Heavy TPT Helicopter", quantity: "8", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-8", type: "Heavy TPT Helicopter", quantity: "9", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-8J", type: "Heavy TPT Helicopter", quantity: "13", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-18", type: "Heavy TPT Helicopter", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Mi-8 Hip", type: "Medium TPT Helicopter", quantity: "8", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "BZK-005", type: "ISR UAV (Heavy)", quantity: "some", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "BZK-007", type: "ISR UAV (Medium)", quantity: "some", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
            ],
            airforce: [
                // Air Force Aircraft - 2024 Data
                { name: "H-6A", type: "Bomber (Training)", quantity: "ε12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6H/M", type: "Bomber", quantity: "ε60", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6K", type: "Bomber", quantity: "ε100", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6N", type: "Bomber", quantity: "4+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-7 Fishcan", type: "Fighter", quantity: "50", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-7E Fishcan", type: "Fighter", quantity: "119", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-7G Fishcan", type: "Fighter", quantity: "120", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-8F/H Finback", type: "Fighter", quantity: "30", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-11", type: "Fighter", quantity: "95", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Su-27UBK Flanker", type: "Fighter", quantity: "32", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-10A Firebird", type: "Fighter/Ground Attack", quantity: "220", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-10B Firebird", type: "Fighter/Ground Attack", quantity: "55", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-10C Firebird", type: "Fighter/Ground Attack", quantity: "220", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-10S Firebird", type: "Fighter/Ground Attack", quantity: "70", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-11B/BS Flanker L", type: "Fighter/Ground Attack", quantity: "130", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-16 Flanker", type: "Fighter/Ground Attack", quantity: "250", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-20A", type: "Fighter/Ground Attack", quantity: "140+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Su-30MKK Flanker G", type: "Fighter/Ground Attack", quantity: "73", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Su-35 Flanker M", type: "Fighter/Ground Attack", quantity: "24", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JH-7A Flounder", type: "Ground Attack", quantity: "120", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "J-16D Flanker*", type: "Electronic Warfare", quantity: "ε12", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8CB High New 1", type: "Electronic Warfare", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8DZ", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8G High New 3", type: "Electronic Warfare", quantity: "6", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8XZ High New 7", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-9G", type: "Electronic Warfare", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-9XZ", type: "Electronic Warfare", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Tu-154M/D Careless", type: "ELINT", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JZ-8 Finback*", type: "ISR", quantity: "24", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JZ-8F Finback*", type: "ISR", quantity: "24", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KJ-200 Moth", type: "AEW&C", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KJ-500", type: "AEW&C", quantity: "20", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "KJ-2000", type: "AEW&C", quantity: "4", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "B-737", type: "C2", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8T High New 4", type: "C2", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H-6U", type: "Tanker", quantity: "10", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Il-78 Midas", type: "Tanker", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "YY-20A", type: "Tanker/Transport", quantity: "8", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Il-76MD/TD Candid", type: "Heavy Transport", quantity: "20", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-20", type: "Heavy Transport", quantity: "50", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-8C", type: "Medium Transport", quantity: "30", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-9", type: "Medium Transport", quantity: "30", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-5", type: "Light Transport", quantity: "70", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Y-7/Y-7H", type: "Light Transport", quantity: "41", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "A319", type: "PAX Transport", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "B-737 (VIP)", type: "PAX Transport", quantity: "9", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CRJ-200", type: "PAX Transport", quantity: "5", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CRJ-700", type: "PAX Transport", quantity: "5", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Tu-154M Careless", type: "PAX Transport", quantity: "8", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "CJ-6/-6A/-6B", type: "Training", quantity: "400", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "HY-7", type: "Training", quantity: "12+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JJ-7*", type: "Training", quantity: "50", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JJ-7A*", type: "Training", quantity: "150", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-8*", type: "Training", quantity: "350", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-9*", type: "Training", quantity: "30", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "JL-10*", type: "Training", quantity: "50+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                // Air Force Helicopters - 2024 Data
                { name: "Z-9", type: "MRH Helicopter", quantity: "20", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Mi-17V-5 Hip H", type: "MRH Helicopter", quantity: "2", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Z-8", type: "Heavy TPT Helicopter", quantity: "18+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "AS332 Super Puma (VIP)", type: "Medium TPT Helicopter", quantity: "6+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "H225 (VIP)", type: "Medium TPT Helicopter", quantity: "3", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "Mi-171", type: "Medium TPT Helicopter", quantity: "4+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "GJ-1", type: "CISR UAV (Heavy)", quantity: "12+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "GJ-2", type: "CISR UAV (Heavy)", quantity: "some", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "GJ-11", type: "CISR UAV (Heavy)", quantity: "(in test)", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "WZ-7", type: "ISR UAV (Heavy)", quantity: "12+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "WZ-8", type: "ISR UAV (Heavy)", quantity: "2+", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
                { name: "WZ-10", type: "ISR UAV (Heavy)", quantity: "some (EW/ISR)", silhouetteSrc: "https://i.imgur.com/9lKS3iF.png", infoLink: "#" },
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

    /**
     * Populates the aircraft type filter dropdown with unique aircraft types.
     * This function now considers all years to get a comprehensive list of types.
     */
    function populateTypeFilter() {
        const allTypes = new Set();
        Object.values(plaAircraftData).forEach(yearData => {
            Object.values(yearData).forEach(service => {
                service.forEach(aircraft => {
                    allTypes.add(aircraft.type);
                });
            });
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
     * Each card displays the aircraft's name, type, quantity, and a silhouette image.
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
            aircraftCard.classList.add('jet-card'); // Apply styling for each card

            // Create a container for the silhouette image
            const silhouette = document.createElement('div');
            silhouette.classList.add('jet-silhouette');

            // Create a link wrapping the image (optional, for more info)
            const imageLink = document.createElement('a');
            imageLink.href = aircraft.infoLink || "#"; // Use provided link or a placeholder

            // Create the image element for the silhouette
            const image = document.createElement('img');
            image.src = aircraft.silhouetteSrc; // Set the image source
            image.alt = aircraft.name + " silhouette"; // Alt text for accessibility
            image.onerror = function() {
                // Fallback for broken images: display a text placeholder
                this.src = "https://placehold.co/180x120/CCCCCC/333333?text=No+Image"; // Use a placeholder image
                this.alt = "Image not available for " + aircraft.name;
                this.style.border = "1px dashed #999"; // Add a visual cue
            };
            imageLink.appendChild(image); // Append image to the link
            silhouette.appendChild(imageLink); // Append link to the silhouette container
            aircraftCard.appendChild(silhouette); // Append silhouette container to the card

            // Create a container for aircraft details
            const details = document.createElement('div');
            details.classList.add('jet-details');
            details.innerHTML = `
                <h3>${aircraft.name}</h3>
                <p><strong>Type:</strong> ${aircraft.type}</p>
                <p><strong>Quantity:</strong> ${aircraft.quantity}</p>
            `;
            aircraftCard.appendChild(details); // Append details to the card

            container.appendChild(aircraftCard); // Append the complete card to the main container
        });
    }

    /**
     * Filters the aircraft data based on selected year, type, and service.
     * @returns {Object} An object containing filtered navy and airforce aircraft arrays.
     */
    function filterAircraftData() {
        const selectedYear = yearFilter.value;
        const selectedType = typeFilter.value;
        const selectedService = serviceFilter.value;

        let currentYearData = [];
        if (selectedYear === 'all') {
            // If 'All Years' is selected, combine data from all available years
            Object.values(plaAircraftData).forEach(yearData => {
                currentYearData = currentYearData.concat(yearData.navy, yearData.airforce);
            });
        } else {
            // Otherwise, get data for the selected year
            currentYearData = [...(plaAircraftData[selectedYear]?.navy || []), ...(plaAircraftData[selectedYear]?.airforce || [])];
        }

        const filteredAircraft = currentYearData.filter(aircraft => {
            const matchesType = (selectedType === 'all' || aircraft.type === selectedType);
            let matchesService = true;
            if (selectedService !== 'all') {
                // Determine service based on which original array it came from
                const isNavy = plaAircraftData[selectedYear]?.navy.includes(aircraft);
                const isAirforce = plaAircraftData[selectedYear]?.airforce.includes(aircraft);

                if (selectedService === 'navy') {
                    matchesService = isNavy;
                } else if (selectedService === 'airforce') {
                    matchesService = isAirforce;
                }
            }
            return matchesType && matchesService;
        });

        // Separate filtered aircraft back into navy and airforce for display
        const finalNavy = [];
        const finalAirforce = [];

        filteredAircraft.forEach(aircraft => {
            // This logic assumes an aircraft belongs to only one service.
            // If an aircraft exists in both Navy and Air Force lists for a given year,
            // it will be added to both if 'All Services' is selected.
            // If a specific service is selected, it will only be added to that service's list.
            if (selectedService === 'all' || selectedService === 'navy') {
                if (plaAircraftData[selectedYear]?.navy.some(n => n.name === aircraft.name && n.type === aircraft.type)) {
                    finalNavy.push(aircraft);
                }
            }
            if (selectedService === 'all' || selectedService === 'airforce') {
                if (plaAircraftData[selectedYear]?.airforce.some(a => a.name === aircraft.name && a.type === aircraft.type)) {
                    finalAirforce.push(aircraft);
                }
            }
        });

        return { navy: finalNavy, airforce: finalAirforce };
    }

    /**
     * Generates and displays an overview of aircraft types based on the filtered data.
     * @param {Array<Object>} filteredData - The combined array of filtered aircraft.
     */
    function generateOverview(filteredData) {
        const typeCounts = {};
        filteredData.forEach(aircraft => {
            typeCounts[aircraft.type] = (typeCounts[aircraft.type] || 0) + 1;
        });

        let overviewHtml = '';
        if (Object.keys(typeCounts).length === 0) {
            overviewHtml = '<p>No aircraft found for overview based on current filters.</p>';
        } else {
            // Sort types alphabetically for consistent display
            const sortedTypes = Object.keys(typeCounts).sort();
            sortedTypes.forEach(type => {
                overviewHtml += `<p><strong>${type}:</strong> ${typeCounts[type]} aircraft</p>`;
            });
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

        // Combine all filtered aircraft for the overview, regardless of service
        const allFilteredAircraft = [...filtered.navy, ...filtered.airforce];
        generateOverview(allFilteredAircraft);
    }

    // Initial population and display when the page loads
    populateYearFilter();
    populateTypeFilter();
    applyFilters(); // Apply filters initially to show all data (defaulting to 2024)
    applyFiltersBtn.addEventListener('click', applyFilters);
});
