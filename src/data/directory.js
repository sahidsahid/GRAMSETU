export const INITIAL_HOUSEHOLDS = [
  {
    id: 'hh-1',
    villageId: 'tagarapuvalasa',
    doorNo: '4-12/A, Gandhi Veedhi',
    headName: 'Kondepudi Ramana Murthy',
    headNameTe: 'కొండేపూడి రమణమూర్తి',
    familyMembers: 4,
    rationCard: 'WAP029381920 (White Card - BPL)',
    occupation: 'Farmer & Cashew Cultivator',
    phone: '+91 98481 23490',
    schemesAvailed: ['YSR Rythu Bharosa', 'PM-Kisan', 'Jal Jeevan Tap'],
    verifiedStatus: 'Verified by Sachivalayam'
  },
  {
    id: 'hh-2',
    villageId: 'tagarapuvalasa',
    doorNo: '2-45, Fisherman Colony',
    headName: 'Mylapalli Polamma',
    headNameTe: 'మైలపల్లి పోలమ్మ',
    familyMembers: 5,
    rationCard: 'WAP029384511 (White Card - BPL)',
    occupation: 'Fisherwoman & SHG Leader',
    phone: '+91 99890 88219',
    schemesAvailed: ['YSR Cheyutha', 'Matsyakara Bharosa'],
    verifiedStatus: 'Verified by Sachivalayam'
  },
  {
    id: 'hh-3',
    villageId: 'angalakuduru',
    doorNo: '7-88, Tenali Road',
    headName: 'Nallamothu Srinivasa Rao',
    headNameTe: 'నల్లమోతు శ్రీనివాసరావు',
    familyMembers: 4,
    rationCard: 'PAP018274992 (Pink Card)',
    occupation: 'Commercial Chilli Farmer',
    phone: '+91 94402 11928',
    schemesAvailed: ['e-Crop Insurance (PMFBY)', 'Subsidized Drip'],
    verifiedStatus: 'Verified by Sachivalayam'
  },
  {
    id: 'hh-4',
    villageId: 'angalakuduru',
    doorNo: '1-14, DWCRA Street',
    headName: 'Bolla Hymavathi',
    headNameTe: 'బొల్లా హైమావతి',
    familyMembers: 3,
    rationCard: 'WAP018275510 (White Card - BPL)',
    occupation: 'Artisan & Dairy Micro-enterprise',
    phone: '+91 94408 66321',
    schemesAvailed: ['YSR Sunna Vaddi', 'Amma Vodi'],
    verifiedStatus: 'Verified by Sachivalayam'
  },
  {
    id: 'hh-5',
    villageId: 'chandragiri',
    doorNo: '3-21, Fort Gate Lane',
    headName: 'Rayaprolu Venkatappa',
    headNameTe: 'రాయప్రోలు వెంకటప్ప',
    familyMembers: 6,
    rationCard: 'WAP033481920 (White Card - BPL)',
    occupation: 'Dairy Farmer & Sugarcane',
    phone: '+91 97014 55412',
    schemesAvailed: ['YSR Rythu Bharosa', 'Gopala Mitra Dairy Aid'],
    verifiedStatus: 'Verified by Sachivalayam'
  }
];

export const INITIAL_FARMS = [
  {
    id: 'farm-1',
    villageId: 'angalakuduru',
    surveyNo: '142/2B',
    farmerName: 'Nallamothu Srinivasa Rao',
    farmerNameTe: 'నల్లమోతు శ్రీనివాసరావు',
    crop: 'Guntur Teja Red Chilli',
    cropTe: 'గుంటూరు తేజా మిర్చి',
    areaAcres: 4.5,
    irrigation: 'Krishna Canal + Drip',
    season: 'Kharif 2026',
    soilType: 'Black Cotton Soil (నల్లరేగడి)',
    eCropStatus: 'e-Crop Verified (RBK Digital Entry)',
    estimatedYield: '110 Quintals'
  },
  {
    id: 'farm-2',
    villageId: 'tagarapuvalasa',
    surveyNo: '88/1A',
    farmerName: 'Kondepudi Ramana Murthy',
    farmerNameTe: 'కొండేపూడి రమణమూర్తి',
    crop: 'Cashew Nut Plantation (VRI-3)',
    cropTe: 'జీడిమామిడి తోట',
    areaAcres: 3.2,
    irrigation: 'Rainfed Coastal',
    season: 'Perennial Horticulture',
    soilType: 'Red Sandy Loam (ఎర్ర ఇసుక నేల)',
    eCropStatus: 'e-Crop Verified',
    estimatedYield: '35 Bags Raw Nuts'
  },
  {
    id: 'farm-3',
    villageId: 'poranki',
    surveyNo: '204/3',
    farmerName: 'Puvvada Subba Rao',
    farmerNameTe: 'పువ్వాడ సుబ్బారావు',
    crop: 'Nellore Sona Masoori Paddy (BPT 5204)',
    cropTe: 'సోనా మసూరి వరి',
    areaAcres: 8.0,
    irrigation: 'Canal Irrigated',
    season: 'Kharif 2026',
    soilType: 'Alluvial River Basin (ఒండ్రు నేల)',
    eCropStatus: 'e-Crop Verified (MSP Procurement Ready)',
    estimatedYield: '280 Bags'
  },
  {
    id: 'farm-4',
    villageId: 'chandragiri',
    surveyNo: '67/4C',
    farmerName: 'Rayaprolu Venkatappa',
    farmerNameTe: 'రాయప్రోలు వెంకటప్ప',
    crop: 'Groundnut (K-6 Variety) & Fodder Grass',
    cropTe: 'వేరుశనగ మరియు పశుగ్రాసం',
    areaAcres: 5.0,
    irrigation: 'Borewell Sprinkler',
    season: 'Kharif 2026',
    soilType: 'Red Soil',
    eCropStatus: 'e-Crop Verified',
    estimatedYield: '65 Quintals'
  },
  {
    id: 'farm-5',
    villageId: 'draksharamam',
    surveyNo: '112/1',
    farmerName: 'Gollapudi Satyanarayana',
    farmerNameTe: 'గొల్లపూడి సత్యనారాయణ',
    crop: 'East Coast Tall Coconut Palms',
    cropTe: 'కోనసీమ కొబ్బరి తోట',
    areaAcres: 5.5,
    irrigation: 'Godavari Delta Channel',
    season: 'Perennial',
    soilType: 'Rich Delta Alluvium',
    eCropStatus: 'e-Crop Verified',
    estimatedYield: '14,000 Nuts/Quarter'
  }
];

export const INITIAL_AUDIT_LOG = [
  {
    id: 'aud-1',
    timestamp: '2026-10-14 10:15:32',
    user: 'Sarpanch K. Venkatalakshmi',
    role: 'Village Head',
    village: 'Tagarapuvalasa',
    action: 'Verified Household Registry & Unmasked PII for PM-Kisan audit',
    complianceStandard: 'DPDP Act 2023 Sec 6(1) Purpose Limitation'
  },
  {
    id: 'aud-2',
    timestamp: '2026-10-14 09:42:10',
    user: 'Agriculture Officer M. Prasad',
    role: 'Mandal Officer',
    village: 'Angalakuduru',
    action: 'e-Crop Survey Land Records Exported for MSP Procurement',
    complianceStandard: 'DPDP Act 2023 Sec 8 Data Security Safeguards'
  },
  {
    id: 'aud-3',
    timestamp: '2026-10-13 16:20:05',
    user: 'Super Admin Tech Unit',
    role: 'State Administrator',
    village: 'All Villages (AP State)',
    action: 'Encrypted Daily Backup and Cloud Gateway Access Rotation',
    complianceStandard: 'DPDP Act 2023 Sec 11 Governance & Accountability'
  }
];
