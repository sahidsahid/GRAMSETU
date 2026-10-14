// Comprehensive Andhra Pradesh village database across districts and mandals
export const AP_DISTRICTS = [
  {
    id: 'guntur',
    name: 'Guntur',
    nameTe: 'గుంటూరు',
    mandals: [
      { id: 'pedakakani', name: 'Pedakakani', nameTe: 'పెదకాకాని' },
      { id: 'chebrolu', name: 'Chebrolu', nameTe: 'చేబ్రోలు' },
      { id: 'medikonduru', name: 'Medikonduru', nameTe: 'మేడికొండూరు' },
      { id: 'vatticherukuru', name: 'Vatticherukuru', nameTe: 'వట్టిచెరుకూరు' },
      { id: 'tenali', name: 'Tenali', nameTe: 'తెనాలి' },
      { id: 'mangalagiri', name: 'Mangalagiri', nameTe: 'మంగళగిరి' }
    ]
  },
  {
    id: 'bapatla',
    name: 'Bapatla',
    nameTe: 'బాపట్ల',
    mandals: [
      { id: 'karlapalem', name: 'Karlapalem', nameTe: 'కార్లపాలెం' },
      { id: 'addanki', name: 'Addanki', nameTe: 'అద్దంకి' },
      { id: 'bapatla', name: 'Bapatla', nameTe: 'బాపట్ల' }
    ]
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam',
    nameTe: 'విశాఖపట్నం',
    mandals: [
      { id: 'bheemunipatnam', name: 'Bheemunipatnam', nameTe: 'భీమునిపట్నం' },
      { id: 'anandapuram', name: 'Anandapuram', nameTe: 'ఆనందపురం' },
      { id: 'pendurthi', name: 'Pendurthi', nameTe: 'పెందుర్తి' },
    ]
  },
  {
    id: 'tirupati',
    name: 'Tirupati',
    nameTe: 'తిరుపతి',
    mandals: [
      { id: 'chandragiri', name: 'Chandragiri', nameTe: 'చంద్రగిరి' },
      { id: 'renigunta', name: 'Renigunta', nameTe: 'రేణిగుంట' },
      { id: 'srikalahasti', name: 'Srikalahasti', nameTe: 'శ్రీకాళహస్తి' },
    ]
  },
  {
    id: 'krishna',
    name: 'Krishna',
    nameTe: 'కృష్ణా',
    mandals: [
      { id: 'penamaluru', name: 'Penamaluru', nameTe: 'పెనమలూరు' },
      { id: 'machilipatnam', name: 'Machilipatnam', nameTe: 'మచిలీపట్నం' },
      { id: 'gannavaram', name: 'Gannavaram', nameTe: 'గన్నవరం' },
    ]
  },
  {
    id: 'east_godavari',
    name: 'East Godavari',
    nameTe: 'తూర్పు గోదావరి',
    mandals: [
      { id: 'ramachandrapuram', name: 'Ramachandrapuram', nameTe: 'రామచంద్రపురం' },
      { id: 'samalkota', name: 'Samalkota', nameTe: 'సామర్లకోట' },
      { id: 'kakinada_rural', name: 'Kakinada Rural', nameTe: 'కాకినాడ రూరల్' },
    ]
  },
  {
    id: 'sri_sathya_sai',
    name: 'Sri Sathya Sai (Anantapur)',
    nameTe: 'శ్రీ సత్యసాయి',
    mandals: [
      { id: 'lepakshi', name: 'Lepakshi', nameTe: 'లేపాక్షి' },
      { id: 'hindupur', name: 'Hindupur', nameTe: 'హిందూపురం' },
      { id: 'dharmavaram', name: 'Dharmavaram', nameTe: 'ధర్మవరం' },
    ]
  }
];

export const INITIAL_VILLAGES = [
  // 1. Pedakakani (Exact from Screenshot)
  {
    id: 'pedakakani',
    code: '01',
    name: 'Pedakakani',
    nameTe: 'పెదకాకాని',
    district: 'guntur',
    districtName: 'Guntur',
    districtNameTe: 'గుంటూరు',
    mandal: 'pedakakani',
    mandalName: 'Pedakakani',
    mandalNameTe: 'పెదకాకాని',
    pincode: '522509',
    sarpanch: {
      name: 'Sri K. Venkata Siva Rao',
      nameTe: 'శ్రీ కె. వెంకట శివరావు',
      phone: '+91 94401 28391',
      term: '2021-2026',
      party: 'Elected Gram Panchayat',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 6786,
      households: 1620,
      activeFarms: 902,
      cultivatedAcres: 2840,
      waterSources: 14,
      primaryHealthCenters: 1,
      schools: 4,
      shgGroups: 42,
      shgLoanRepayment: '99.2%'
    },
    primaryCrops: ['Guntur Teja Chilli (గుంటూరు మిర్చి)', 'Paddy (వరి)', 'Turmeric (పసుపు)', 'Cotton (ప్రత్తి)'],
    weather: {
      temp: '32°C',
      condition: 'Clear Sky · Moderate Breeze',
      conditionTe: 'నిర్మలమైన ఆకాశం · మోస్తరు గాలి',
      rainChance: '5%',
      humidity: '58%',
      windSpeed: '12 km/h'
    },
    activeAlert: {
      level: 'advisory',
      title: 'Canal Water Release: Western Krishna Main Branch Open',
      titleTe: 'కృష్ణా పశ్చిమ ప్రధాన కాలువ నీటి విడుదల సమాచారం',
      description: 'Irrigation water released from Prakasam Barrage. Sluices will remain open for 72 hours for Rabi pre-sowing.',
      time: 'Updated 1 hour ago',
      isEmergency: false
    },
    ongoingWorks: [
      {
        id: 'pk-w1',
        title: 'Concrete CC Road Construction in Shiva Temple Street',
        titleTe: 'శివాలయం వీధిలో సీసీ రోడ్డు నిర్మాణం',
        budget: '₹18.5 Lakhs',
        progress: 85,
        status: 'In Progress',
        statusColor: 'amber',
        expectedDate: 'Nov 15, 2026'
      },
      {
        id: 'pk-w2',
        title: 'Jal Jeevan Mission Functional Household Tap Connection',
        titleTe: 'జల్ జీవన్ మిషన్ ద్వారా ప్రతి ఇంటికీ తాగునీటి కుళాయి',
        budget: '₹24.0 Lakhs',
        progress: 100,
        status: 'Completed',
        statusColor: 'emerald',
        expectedDate: 'Oct 01, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'pk-n1',
        title: 'Gram Sabha Meeting Scheduled on Thursday at Panchayat Office',
        titleTe: 'గురువారం పంచాయతీ కార్యాలయంలో గ్రామసభ నిర్వహణ',
        author: 'Sarpanch Office',
        authorRole: 'Village Head',
        date: 'Today, 10:00 AM',
        category: 'Governance',
        categoryTe: 'పాలన',
        content: 'Social audit of all sanctioned NREGS works and Rythu Bharosa verification will be reviewed by the Village Revenue Officer and Sarpanch.',
        verified: true,
        likes: 38,
        comments: 4
      }
    ]
  },

  // 2. Chebrolu (Exact from Screenshot)
  {
    id: 'chebrolu',
    code: '02',
    name: 'Chebrolu',
    nameTe: 'చేబ్రోలు',
    district: 'guntur',
    districtName: 'Guntur',
    districtNameTe: 'గుంటూరు',
    mandal: 'chebrolu',
    mandalName: 'Chebrolu',
    mandalNameTe: 'చేబ్రోలు',
    pincode: '522212',
    sarpanch: {
      name: 'Smt. P. Lakshmi Kameswari',
      nameTe: 'శ్రీమతి పి. లక్ష్మీ కామేశ్వరి',
      phone: '+91 98492 44102',
      term: '2021-2026',
      party: 'Elected Gram Panchayat',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 6015,
      households: 1450,
      activeFarms: 798,
      cultivatedAcres: 2450,
      waterSources: 11,
      primaryHealthCenters: 1,
      schools: 3,
      shgGroups: 38,
      shgLoanRepayment: '98.9%'
    },
    primaryCrops: ['Chilli (మిర్చి)', 'Black Gram (మినుము)', 'Paddy (వరి)', 'Maize (మొక్కజొన్న)'],
    weather: {
      temp: '33°C',
      condition: 'Sunny & Warm',
      conditionTe: 'ఎండగా మరియు ఆహ్లాదకరంగా ఉంది',
      rainChance: '10%',
      humidity: '54%',
      windSpeed: '10 km/h'
    },
    activeAlert: {
      level: 'advisory',
      title: 'Agricultural Power Supply Schedule: Daytime 7 Hours',
      titleTe: 'వ్యవసాయ విద్యుత్ సరఫరా షెడ్యూల్: పగటిపూట 7 గంటలు',
      description: 'Continuous 3-phase agricultural power will be supplied from 07:00 AM to 02:00 PM for borewell irrigation.',
      time: 'Updated 30 mins ago',
      isEmergency: false
    },
    ongoingWorks: [
      {
        id: 'ch-w1',
        title: 'Desilting of Chebrolu Irrigation Tank Bund',
        titleTe: 'చేబ్రోలు చెరువు కట్ట పూడికతీత పనులు',
        budget: '₹9.2 Lakhs',
        progress: 100,
        status: 'Completed',
        statusColor: 'emerald',
        expectedDate: 'Sep 20, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'ch-n1',
        title: 'Subsidized Seeds Distribution at Chebrolu Rythu Bharosa Kendra',
        titleTe: 'చేబ్రోలు రైతు భరోసా కేంద్రంలో రాయితీ విత్తనాల పంపిణీ',
        author: 'Agricultural Officer',
        authorRole: 'Grama Sachivalayam',
        date: 'Yesterday',
        category: 'Agriculture',
        categoryTe: 'వ్యవసాయం',
        content: 'Black gram and Bengal gram certified seeds available at 50% subsidy with Aadhaar biometric verification.',
        verified: true,
        likes: 29,
        comments: 2
      }
    ]
  },

  // 3. Medikonduru (Exact from Screenshot)
  {
    id: 'medikonduru',
    code: '03',
    name: 'Medikonduru',
    nameTe: 'మేడికొండూరు',
    district: 'guntur',
    districtName: 'Guntur',
    districtNameTe: 'గుంటూరు',
    mandal: 'medikonduru',
    mandalName: 'Medikonduru',
    mandalNameTe: 'మేడికొండూరు',
    pincode: '522438',
    sarpanch: {
      name: 'Sri B. Subba Rao',
      nameTe: 'శ్రీ బి. సుబ్బారావు',
      phone: '+91 94411 77281',
      term: '2021-2026',
      party: 'Elected Gram Panchayat',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 2308,
      households: 610,
      activeFarms: 377,
      cultivatedAcres: 1200,
      waterSources: 6,
      primaryHealthCenters: 1,
      schools: 2,
      shgGroups: 19,
      shgLoanRepayment: '98.2%'
    },
    primaryCrops: ['Cotton (ప్రత్తి)', 'Chilli (మిరప)', 'Red Gram (కందులు)'],
    weather: {
      temp: '32°C',
      condition: 'Fair Weather',
      conditionTe: 'సాధారణ వాతావరణం',
      rainChance: '15%',
      humidity: '60%',
      windSpeed: '14 km/h'
    },
    activeAlert: null,
    ongoingWorks: [
      {
        id: 'mk-w1',
        title: 'Solar Street Lights Installation across All 4 Wards',
        titleTe: 'అన్ని వార్డులలో సోలార్ వీధి దీపాల ఏర్పాటు',
        budget: '₹6.8 Lakhs',
        progress: 70,
        status: 'In Progress',
        statusColor: 'amber',
        expectedDate: 'Nov 30, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'mk-n1',
        title: 'Free Veterinary Vaccination Camp for Cattle',
        titleTe: 'పాడి పశువులకు ఉచిత నట్టల నివారణ టీకాల శిబిరం',
        author: 'Veterinary Assistant',
        authorRole: 'Grama Sachivalayam',
        date: 'Today, 08:30 AM',
        category: 'Animal Husbandry',
        categoryTe: 'పశుసంవర్ధక శాఖ',
        content: 'Free FMD vaccination for buffaloes and cows will be conducted tomorrow morning at the veterinary sub-center.',
        verified: true,
        likes: 18,
        comments: 1
      }
    ]
  },

  // 4. Vatticherukuru (Exact from Screenshot)
  {
    id: 'vatticherukuru',
    code: '04',
    name: 'Vatticherukuru',
    nameTe: 'వట్టిచెరుకూరు',
    district: 'guntur',
    districtName: 'Guntur',
    districtNameTe: 'గుంటూరు',
    mandal: 'vatticherukuru',
    mandalName: 'Vatticherukuru',
    mandalNameTe: 'వట్టిచెరుకూరు',
    pincode: '522212',
    sarpanch: {
      name: 'Smt. T. Anasuya',
      nameTe: 'శ్రీమతి టి. అనసూయ',
      phone: '+91 98488 90312',
      term: '2021-2026',
      party: 'Elected Gram Panchayat',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 2462,
      households: 640,
      activeFarms: 415,
      cultivatedAcres: 1350,
      waterSources: 7,
      primaryHealthCenters: 1,
      schools: 2,
      shgGroups: 22,
      shgLoanRepayment: '99.0%'
    },
    primaryCrops: ['Turmeric (పసుపు)', 'Paddy (వరి)', 'Chilli (మిర్చి)', 'Banana (అరటి)'],
    weather: {
      temp: '31°C',
      condition: 'Partly Cloudy',
      conditionTe: 'పాక్షిక మేఘావృతం',
      rainChance: '20%',
      humidity: '66%',
      windSpeed: '11 km/h'
    },
    activeAlert: null,
    ongoingWorks: [
      {
        id: 'vt-w1',
        title: 'Underground Drainage Repair in Main Bazaar',
        titleTe: 'ప్రధాన బజార్‌లో అండర్‌గ్రౌండ్ డ్రైనేజీ మరమ్మతు',
        budget: '₹7.5 Lakhs',
        progress: 90,
        status: 'In Progress',
        statusColor: 'amber',
        expectedDate: 'Oct 28, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'vt-n1',
        title: 'DWCRA Women SHG Micro-Enterprise Loan Sanctioned',
        titleTe: 'డ్వాక్రా మహిళా సంఘాలకు సున్నా వడ్డీ రుణాల మంజూరు',
        author: 'DWCRA Community Coordinator',
        authorRole: 'SERP Andhra Pradesh',
        date: 'Oct 12, 2026',
        category: 'Welfare',
        categoryTe: 'సంక్షేమం',
        content: 'YSR Sunna Vaddi interest subsidy credited to 22 SHG bank accounts directly.',
        verified: true,
        likes: 31,
        comments: 3
      }
    ]
  },

  // 5. Karlapalem (Exact from Screenshot)
  {
    id: 'karlapalem',
    code: '05',
    name: 'Karlapalem',
    nameTe: 'కార్లపాలెం',
    district: 'bapatla',
    districtName: 'Bapatla',
    districtNameTe: 'బాపట్ల',
    mandal: 'karlapalem',
    mandalName: 'Karlapalem',
    mandalNameTe: 'కార్లపాలెం',
    pincode: '522311',
    sarpanch: {
      name: 'Sri G. Venkateswarlu',
      nameTe: 'శ్రీ జి. వెంకటేశ్వర్లు',
      phone: '+91 94403 66190',
      term: '2021-2026',
      party: 'Elected Gram Panchayat',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 4597,
      households: 1180,
      activeFarms: 810,
      cultivatedAcres: 2700,
      waterSources: 9,
      primaryHealthCenters: 1,
      schools: 3,
      shgGroups: 31,
      shgLoanRepayment: '98.7%'
    },
    primaryCrops: ['Bapatla Sona Rice (బాపట్ల సోనా)', 'Groundnut (వేరుశనగ)', 'Black Gram (మినుము)'],
    weather: {
      temp: '30°C',
      condition: 'Coastal Breeze · Pleasant',
      conditionTe: 'సముద్రపు చల్లని గాలి · ఆహ్లాదకరం',
      rainChance: '25%',
      humidity: '72%',
      windSpeed: '16 km/h'
    },
    activeAlert: {
      level: 'warning',
      title: 'High Tide & Sea Surge Alert for Coastal Bapatla',
      titleTe: 'బాపట్ల తీరప్రాంతంలో ఆటుపోట్లు - మత్స్యకారులకు హెచ్చరిక',
      description: 'IMD Amaravati forecasts 2.5m waves along Bapatla and Suryalanka coast. Keep small fishing crafts moored safely.',
      time: 'Updated 45 mins ago',
      isEmergency: true
    },
    ongoingWorks: [
      {
        id: 'kp-w1',
        title: 'Coastal Shelter Cyclone Resistance Upgradation',
        titleTe: 'తుఫాను పునరావాస భవనం ఆధునికీకరణ',
        budget: '₹16.0 Lakhs',
        progress: 80,
        status: 'In Progress',
        statusColor: 'amber',
        expectedDate: 'Nov 20, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'kp-n1',
        title: 'Bapatla Rice Research Station Releases High-Yield Seed Variety',
        titleTe: 'బాపట్ల వ్యవసాయ పరిశోధనా కేంద్రం నూతన వరి వంగడం విడుదల',
        author: 'Agricultural Research Station',
        authorRole: 'ANGRAU',
        date: 'Oct 11, 2026',
        category: 'Research',
        categoryTe: 'పరిశోధన',
        content: 'BPT-3291 saline-resistant variety seeds now available for coastal farmers with subsidized rates.',
        verified: true,
        likes: 45,
        comments: 7
      }
    ]
  },

  // 6. Addanki (Exact from Screenshot)
  {
    id: 'addanki',
    code: '06',
    name: 'Addanki',
    nameTe: 'అద్దంకి',
    district: 'bapatla',
    districtName: 'Bapatla',
    districtNameTe: 'బాపట్ల',
    mandal: 'addanki',
    mandalName: 'Addanki',
    mandalNameTe: 'అద్దంకి',
    pincode: '523201',
    sarpanch: {
      name: 'Smt. M. Rajeswari',
      nameTe: 'శ్రీమతి ఎం. రాజేశ్వరి',
      phone: '+91 98499 11029',
      term: '2021-2026',
      party: 'Elected Gram Panchayat',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 3281,
      households: 890,
      activeFarms: 556,
      cultivatedAcres: 1980,
      waterSources: 8,
      primaryHealthCenters: 1,
      schools: 3,
      shgGroups: 26,
      shgLoanRepayment: '99.4%'
    },
    primaryCrops: ['Cotton (ప్రత్తి)', 'Chilli (మిర్చి)', 'Paddy (వరి)', 'Pulses (పప్పుదినుసులు)'],
    weather: {
      temp: '33°C',
      condition: 'Sunny · Dry',
      conditionTe: 'ఎండగా మరియు పొడిగా ఉంది',
      rainChance: '5%',
      humidity: '50%',
      windSpeed: '9 km/h'
    },
    activeAlert: null,
    ongoingWorks: [
      {
        id: 'ad-w1',
        title: 'Nagarjuna Sagar Right Canal Distributary Desilting',
        titleTe: 'నాగార్జున సాగర్ కుడి కాలువ పిల్ల కాలువల పూడికతీత',
        budget: '₹11.5 Lakhs',
        progress: 100,
        status: 'Completed',
        statusColor: 'emerald',
        expectedDate: 'Sep 25, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'ad-n1',
        title: 'Cotton Market Yard Electronic Weighbridge Calibration Done',
        titleTe: 'అద్దంకి కాటన్ మార్కెట్ యార్డులో ఎలక్ట్రానిక్ కాటాల తనిఖీ',
        author: 'Marketing Inspector',
        authorRole: 'Agricultural Marketing Dept',
        date: 'Oct 13, 2026',
        category: 'Market Yard',
        categoryTe: 'మార్కెట్ యార్డ్',
        content: 'Strict electronic weighbridge calibration completed to ensure 100% fair price per quintal for cotton farmers.',
        verified: true,
        likes: 24,
        comments: 2
      }
    ]
  },

  // 7. Tagarapuvalasa (Visakhapatnam)
  {
    id: 'tagarapuvalasa',
    code: '07',
    name: 'Tagarapuvalasa',
    nameTe: 'తగరపువలస',
    district: 'visakhapatnam',
    districtName: 'Visakhapatnam',
    districtNameTe: 'విశాఖపట్నం',
    mandal: 'bheemunipatnam',
    mandalName: 'Bheemunipatnam',
    mandalNameTe: 'భీమునిపట్నం',
    pincode: '531162',
    sarpanch: {
      name: 'Smt. K. Venkatalakshmi',
      nameTe: 'శ్రీమతి కె. వెంకటలక్ష్మి',
      phone: '+91 98480 34120',
      term: '2021-2026',
      party: 'Elected Gram Panchayat',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 4820,
      households: 1140,
      activeFarms: 310,
      cultivatedAcres: 1420,
      waterSources: 8,
      primaryHealthCenters: 1,
      schools: 3,
      shgGroups: 24,
      shgLoanRepayment: '98.5%'
    },
    primaryCrops: ['Cashew Nuts (జీడిపప్పు)', 'Paddy (వరి)', 'Coconut (కొబ్బరి)', 'Marine Fishery'],
    weather: {
      temp: '31°C',
      condition: 'Partly Cloudy · High Humidity',
      conditionTe: 'పాక్షిక మేఘావృతం · అధిక తేమ',
      rainChance: '45%',
      humidity: '78%',
      windSpeed: '18 km/h'
    },
    activeAlert: {
      level: 'warning',
      title: 'Cyclone Michaung Watch · Bay of Bengal',
      titleTe: 'బంగాళాఖాతంలో మిచాంగ్ తుఫాను హెచ్చరిక',
      description: 'Coastal fishermen advised not to venture into sea for 48 hours. Emergency shelter set up at ZP High School.',
      time: 'Updated 20 mins ago',
      isEmergency: true
    },
    ongoingWorks: [
      {
        id: 'w1',
        title: 'Jal Jeevan Mission Pipeline to Ward 4',
        titleTe: 'వార్డ్ 4 కు జల్ జీవన్ మిషన్ తాగునీటి పైప్‌లైన్',
        budget: '₹14.5 Lakhs',
        progress: 75,
        status: 'In Progress',
        statusColor: 'amber',
        expectedDate: 'Nov 10, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'n1',
        title: 'Paddy Procurement Center Commences Operations',
        titleTe: 'సోమవారం నుంచి రైతు భరోసా కేంద్రంలో వరి ధాన్యం కొనుగోళ్లు ప్రారంభం',
        author: 'Sarpanch Office',
        authorRole: 'Village Head',
        date: 'Today, 09:30 AM',
        category: 'Agriculture',
        categoryTe: 'వ్యవసాయం',
        content: 'Farmers are requested to bring their Aadhaar and e-Crop booking slips to the Tagarapuvalasa RBK.',
        verified: true,
        likes: 42,
        comments: 6
      }
    ]
  }
];
