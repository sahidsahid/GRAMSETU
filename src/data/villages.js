// Comprehensive Andhra Pradesh village database across districts and mandals
export const AP_DISTRICTS = [
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
    id: 'guntur',
    name: 'Guntur',
    nameTe: 'గుంటూరు',
    mandals: [
      { id: 'tenali', name: 'Tenali', nameTe: 'తెనాలి' },
      { id: 'mangalagiri', name: 'Mangalagiri', nameTe: 'మంగళగిరి' },
      { id: 'prathipadu', name: 'Prathipadu', nameTe: 'ప్రత్తిపాడు' },
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
  {
    id: 'tagarapuvalasa',
    code: 'AP-VZG-04',
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
      party: 'Independent / YSRCP-supported',
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
      },
      {
        id: 'w2',
        title: 'Gosthani River Canal Bund Repair',
        titleTe: 'గోస్తని నది కాలువ కట్ట మరమ్మతు',
        budget: '₹8.2 Lakhs',
        progress: 100,
        status: 'Completed',
        statusColor: 'emerald',
        expectedDate: 'Oct 02, 2026'
      },
      {
        id: 'w3',
        title: 'Polio & Seasonal Dengue Health Camp',
        titleTe: 'పోలియో మరియు డెంగ్యూ ఉచిత ఆరోగ్య శిబిరం',
        budget: '₹1.5 Lakhs',
        progress: 20,
        status: 'Scheduled',
        statusColor: 'blue',
        expectedDate: 'Oct 20, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'n1',
        title: 'Paddy Procurement Center (Rythu Bharosa Kendra) opens on Monday',
        titleTe: 'సోమవారం నుంచి రైతు భరోసా కేంద్రంలో వరి ధాన్యం కొనుగోళ్లు ప్రారంభం',
        author: 'Sarpanch Office',
        authorRole: 'Village Head',
        date: 'Today, 09:30 AM',
        category: 'Agriculture',
        categoryTe: 'వ్యవసాయం',
        content: 'Farmers are requested to bring their Aadhaar and e-Crop booking slips to the Tagarapuvalasa RBK. Minimum Support Price (MSP) will be deposited directly to DBT bank accounts.',
        verified: true,
        likes: 42,
        comments: 6
      },
      {
        id: 'n2',
        title: 'Notice: 4-Hour Power Outage for 33KV Substation Maintenance',
        titleTe: 'గమనిక: 33KV సబ్‌స్టేషన్ మరమ్మతు వల్ల 4 గంటల విద్యుత్ సరఫరా నిలిపివేత',
        author: 'APEPDCL Lineman Suresh',
        authorRole: 'Utility Officer',
        date: 'Yesterday, 04:00 PM',
        category: 'Utilities',
        categoryTe: 'విద్యుత్ సమాచారం',
        content: 'Scheduled power shutdown on Thursday from 08:00 AM to 12:00 PM affecting Tagarapuvalasa East & Fisherman colony for transformer upgradation.',
        verified: true,
        likes: 19,
        comments: 3
      }
    ]
  },
  {
    id: 'angalakuduru',
    code: 'AP-GNT-12',
    name: 'Angalakuduru',
    nameTe: 'అంగలకుదురు',
    district: 'guntur',
    districtName: 'Guntur',
    districtNameTe: 'గుంటూరు',
    mandal: 'tenali',
    mandalName: 'Tenali',
    mandalNameTe: 'తెనాలి',
    pincode: '522211',
    sarpanch: {
      name: 'Sri M. Sambasiva Rao',
      nameTe: 'శ్రీ ఎం. సాంబశివరావు',
      phone: '+91 94402 88192',
      term: '2021-2026',
      party: 'TDP-supported',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 6450,
      households: 1520,
      activeFarms: 580,
      cultivatedAcres: 2600,
      waterSources: 12,
      primaryHealthCenters: 1,
      schools: 4,
      shgGroups: 36,
      shgLoanRepayment: '99.1%'
    },
    primaryCrops: ['Guntur Teja Chilli (గుంటూరు మిర్చి)', 'Turmeric (పసుపు)', 'Black Gram (మినుము)', 'Paddy'],
    weather: {
      temp: '34°C',
      condition: 'Sunny & Dry',
      conditionTe: 'ఎండగా మరియు పొడిగా ఉంది',
      rainChance: '10%',
      humidity: '62%',
      windSpeed: '12 km/h'
    },
    activeAlert: {
      level: 'advisory',
      title: 'Pest Advisory: Thrips attack reported on Chilli seedlings',
      titleTe: 'మిర్చి పంటపై తామర పురుగుల ఉధృతి - శాస్త్రవేత్తల హెచ్చరిక',
      description: 'Tenali Krishi Vigyan Kendra advises farmers to spray Neem oil 5ml/L or approved bio-pesticides immediately. Do not buy unverified cocktails.',
      time: 'Updated 2 hours ago',
      isEmergency: false
    },
    ongoingWorks: [
      {
        id: 'w4',
        title: 'Internal CC Concrete Road in Ward 2 & 3',
        titleTe: 'వార్డ్ 2 మరియు 3 లో అంతర్గత సీసీ రోడ్ల నిర్మాణం',
        budget: '₹22.0 Lakhs',
        progress: 88,
        status: 'In Progress',
        statusColor: 'amber',
        expectedDate: 'Oct 30, 2026'
      },
      {
        id: 'w5',
        title: 'Canal Sluice Gate Modernization (Krishna Western Delta)',
        titleTe: 'కృష్ణా పశ్చిమ డెల్టా కాలువ తూము గేట్ల మరమ్మతు',
        budget: '₹12.0 Lakhs',
        progress: 100,
        status: 'Completed',
        statusColor: 'emerald',
        expectedDate: 'Sep 15, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'n3',
        title: 'Guntur Mirchi Yard: Teja Chilli touches record ₹24,500/Quintal',
        titleTe: 'గుంటూరు మిర్చి యార్డు: క్వింటాలు తేజా మిర్చి ధర రికార్డు స్థాయిలో ₹24,500',
        author: 'Agricultural Marketing Committee',
        authorRole: 'Mandi Officer',
        date: 'Today, 11:00 AM',
        category: 'Market Rates',
        categoryTe: 'మార్కెట్ ధరలు',
        content: 'Dry weather and high export demand for Europe & Bangladesh has pushed Teja grade chilli prices higher. Village farmers are urged to dry properly before loading.',
        verified: true,
        likes: 58,
        comments: 11
      }
    ]
  },
  {
    id: 'chandragiri',
    code: 'AP-TPT-09',
    name: 'Chandragiri',
    nameTe: 'చంద్రగిరి',
    district: 'tirupati',
    districtName: 'Tirupati',
    districtNameTe: 'తిరుపతి',
    mandal: 'chandragiri',
    mandalName: 'Chandragiri',
    mandalNameTe: 'చంద్రగిరి',
    pincode: '517101',
    sarpanch: {
      name: 'Smt. R. Anuradha',
      nameTe: 'శ్రీమతి ఆర్. అనూరాధ',
      phone: '+91 97014 55431',
      term: '2021-2026',
      party: 'Independent',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 8200,
      households: 1940,
      activeFarms: 640,
      cultivatedAcres: 2900,
      waterSources: 15,
      primaryHealthCenters: 2,
      schools: 5,
      shgGroups: 42,
      shgLoanRepayment: '97.9%'
    },
    primaryCrops: ['Groundnut (వేరుశనగ)', 'Sugarcane (చెరకు)', 'Dairy & Buffalo Milk', 'Mango Orchards'],
    weather: {
      temp: '32°C',
      condition: 'Sunny · Light Breeze',
      conditionTe: 'ఎండగా · చల్లని గాలి',
      rainChance: '15%',
      humidity: '58%',
      windSpeed: '14 km/h'
    },
    activeAlert: {
      level: 'danger',
      title: 'Wildlife Caution: Wild Elephant Herd spotted near Seshachalam Foothills',
      titleTe: 'శేషాచలం అటవీ అంచున ఏనుగుల గుంపు - ప్రజలు అప్రమత్తంగా ఉండాలి',
      description: 'Forest department and Chandragiri police alert farmers not to sleep in farm sheds tonight. Solar fence check team dispatched.',
      time: 'Updated 45 mins ago',
      isEmergency: true
    },
    ongoingWorks: [
      {
        id: 'w6',
        title: 'Solar Street Lights along Heritage Fort Approach Road',
        titleTe: 'చంద్రగిరి కోట రోడ్డు వెంట సౌర వీధి దీపాల ఏర్పాటు',
        budget: '₹18.0 Lakhs',
        progress: 60,
        status: 'In Progress',
        statusColor: 'amber',
        expectedDate: 'Nov 15, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'n4',
        title: 'Tirumala Tirupati Devasthanams (TTD) Desi Cow Ghee Procurement Registration',
        titleTe: 'టీటీడీ దేశీ ఆవు నెయ్యి కొనుగోలు కోసం గ్రామీణ రైతుల రిజిస్ట్రేషన్ ప్రారంభం',
        author: 'Gram Panchayat Office',
        authorRole: 'Village Head',
        date: 'Yesterday, 10:00 AM',
        category: 'Dairy & Animal Husbandry',
        categoryTe: 'పాడి పరిశ్రమ',
        content: 'Farmers rearing indigenous Sahiwal and Ongole cows can register at the village office to supply A2 milk and bilona ghee directly to TTD at premium rates.',
        verified: true,
        likes: 74,
        comments: 14
      }
    ]
  },
  {
    id: 'poranki',
    code: 'AP-KRI-15',
    name: 'Poranki',
    nameTe: 'పోరంకి',
    district: 'krishna',
    districtName: 'Krishna',
    districtNameTe: 'కృష్ణా',
    mandal: 'penamaluru',
    mandalName: 'Penamaluru',
    mandalNameTe: 'పెనమలూరు',
    pincode: '521137',
    sarpanch: {
      name: 'Sri P. Venkateswara Rao',
      nameTe: 'శ్రీ పి. వెంకటేశ్వరరావు',
      phone: '+91 99890 22105',
      term: '2021-2026',
      party: 'YSRCP-supported',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 5600,
      households: 1320,
      activeFarms: 420,
      cultivatedAcres: 1850,
      waterSources: 9,
      primaryHealthCenters: 1,
      schools: 3,
      shgGroups: 28,
      shgLoanRepayment: '99.4%'
    },
    primaryCrops: ['Nellore Sona Masoori Rice (వరి)', 'Karpura Chekkarakeli Bananas (అరటి)', 'Guava', 'Vegetables'],
    weather: {
      temp: '33°C',
      condition: 'Clear Sky',
      conditionTe: 'నిర్మలమైన ఆకాశం',
      rainChance: '5%',
      humidity: '66%',
      windSpeed: '10 km/h'
    },
    activeAlert: {
      level: 'normal',
      title: 'Krishna River Prakasam Barrage Inflow Normal (12,000 Cusecs)',
      titleTe: 'ప్రకాశం బ్యారేజీ వద్ద కృష్ణా నది నీటి ప్రవాహం సాధారణ స్థితిలో ఉంది',
      description: 'Canal release for second crop nursery on schedule. No flood warning.',
      time: 'Updated 1 hour ago',
      isEmergency: false
    },
    ongoingWorks: [
      {
        id: 'w7',
        title: 'RO Drinking Water Plant Renovation',
        titleTe: 'శుద్ధి చేసిన తాగునీటి ఆర్వో ప్లాంట్ ఆధునికీకరణ',
        budget: '₹6.0 Lakhs',
        progress: 100,
        status: 'Completed',
        statusColor: 'emerald',
        expectedDate: 'Oct 05, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'n5',
        title: 'Free Soil Health Card Testing Camp on October 18',
        titleTe: 'అక్టోబర్ 18న ఉచిత నేల ఆరోగ్య కార్డు పరీక్షా శిబిరం',
        author: 'Rythu Seva Kendram',
        authorRole: 'Agricultural Officer',
        date: 'Today, 08:00 AM',
        category: 'Soil Health',
        categoryTe: 'భూసార పరీక్ష',
        content: 'Farmers can bring 500g of dry soil sample from 6-inch depth for NPK and Micronutrient deficiency analysis.',
        verified: true,
        likes: 31,
        comments: 4
      }
    ]
  },
  {
    id: 'draksharamam',
    code: 'AP-EGD-07',
    name: 'Draksharamam',
    nameTe: 'ద్రాక్షారామం',
    district: 'east_godavari',
    districtName: 'East Godavari (Konaseema)',
    districtNameTe: 'తూర్పు గోదావరి (కోనసీమ)',
    mandal: 'ramachandrapuram',
    mandalName: 'Ramachandrapuram',
    mandalNameTe: 'రామచంద్రపురం',
    pincode: '533262',
    sarpanch: {
      name: 'Smt. G. Bhavani Devi',
      nameTe: 'శ్రీమతి జి. భవానీదేవి',
      phone: '+91 94901 77332',
      term: '2021-2026',
      party: 'TDP-supported',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 7100,
      households: 1680,
      activeFarms: 510,
      cultivatedAcres: 2400,
      waterSources: 18,
      primaryHealthCenters: 1,
      schools: 4,
      shgGroups: 38,
      shgLoanRepayment: '98.8%'
    },
    primaryCrops: ['Paddy (స్వర్ణ వరి)', 'Coconut (కోనసీమ కొబ్బరి)', 'Freshwater Prawns (రొయ్యల చెరువులు)'],
    weather: {
      temp: '30°C',
      condition: 'Overcast · Light Drizzle',
      conditionTe: 'ముసురు వర్షం · తుంపర్లు',
      rainChance: '60%',
      humidity: '84%',
      windSpeed: '16 km/h'
    },
    activeAlert: {
      level: 'advisory',
      title: 'Godavari Canal Irrigation Rotation Schedule Released',
      titleTe: 'గోదావరి కాలువల వంతులవారీ నీటి విడుదల షెడ్యూల్ విడుదల',
      description: 'Eastern delta branches will receive 1,800 cusecs for the next 7 days for paddy panicle initiation.',
      time: 'Updated 3 hours ago',
      isEmergency: false
    },
    ongoingWorks: [
      {
        id: 'w8',
        title: 'Temple Pond (Saptha Godavari) Desilting & Beautification',
        titleTe: 'సప్త గోదావరి పుష్కరిణి పూడికతీత పనులు',
        budget: '₹25.0 Lakhs',
        progress: 45,
        status: 'In Progress',
        statusColor: 'amber',
        expectedDate: 'Dec 01, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'n6',
        title: 'Konaseema Coconut Price Rebounds to ₹14 per piece',
        titleTe: 'కోనసీమ కొబ్బరికాయ ధర ఒక్కొక్కటి ₹14 కి చేరిన వైనం',
        author: 'Draksharamam Farmer Producer Co.',
        authorRole: 'FPO Chairman',
        date: 'Oct 12, 2026',
        category: 'Horticulture',
        categoryTe: 'ఉద్యానవన పంటలు',
        content: 'Direct truck procurement by Delhi and Maharashtra buyers has boosted farmgate prices by ₹3 compared to last month.',
        verified: true,
        likes: 67,
        comments: 8
      }
    ]
  },
  {
    id: 'lepakshi',
    code: 'AP-SSS-21',
    name: 'Lepakshi',
    nameTe: 'లేపాక్షి',
    district: 'sri_sathya_sai',
    districtName: 'Sri Sathya Sai (Anantapur)',
    districtNameTe: 'శ్రీ సత్యసాయి (అనంతపురం)',
    mandal: 'lepakshi',
    mandalName: 'Lepakshi',
    mandalNameTe: 'లేపాక్షి',
    pincode: '515331',
    sarpanch: {
      name: 'Sri K. Ramanjaneyulu',
      nameTe: 'శ్రీ కె. రామాంజనేయులు',
      phone: '+91 98492 65410',
      term: '2021-2026',
      party: 'Independent',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
    },
    stats: {
      population: 3900,
      households: 920,
      activeFarms: 380,
      cultivatedAcres: 1650,
      waterSources: 6,
      primaryHealthCenters: 1,
      schools: 2,
      shgGroups: 20,
      shgLoanRepayment: '99.0%'
    },
    primaryCrops: ['Mulberry / Silk Cocoons (పట్టు గూళ్ళు)', 'Groundnut (వేరుశనగ)', 'Foxtail Millet (కొర్రలు)', 'Handicrafts'],
    weather: {
      temp: '32°C',
      condition: 'Breezy & Sunny',
      conditionTe: 'గాడ్పులు మరియు ఎండ',
      rainChance: '5%',
      humidity: '42%',
      windSpeed: '22 km/h'
    },
    activeAlert: {
      level: 'normal',
      title: 'Silk Cocoon Government Incentive Scheme Subsidy Deposited',
      titleTe: 'పట్టు గూళ్ళ ప్రభుత్వ ప్రోత్సాహక రాయితీ రైతుల ఖాతాల్లో జమ',
      description: 'Sericulture farmers who sold at Hindupur market receive ₹50/kg incentive directly in Aadhaar linked bank accounts.',
      time: 'Updated 5 hours ago',
      isEmergency: false
    },
    ongoingWorks: [
      {
        id: 'w9',
        title: 'Check Dam Construction across Pennar Tributary',
        titleTe: 'పెన్నార్ ఉపనదిపై చెక్ డ్యామ్ నిర్మాణం',
        budget: '₹16.8 Lakhs',
        progress: 80,
        status: 'In Progress',
        statusColor: 'amber',
        expectedDate: 'Nov 20, 2026'
      }
    ],
    newsFeed: [
      {
        id: 'n7',
        title: 'Lepakshi Heritage Crafts Fair & Weaver Direct Stall at Bangalore',
        titleTe: 'బెంగళూరులో లేపాక్షి హస్తకళల ప్రదర్శన మరియు చేనేత స్టాల్స్',
        author: 'DWCRA Mahila Sangham',
        authorRole: 'SHG Coordinator',
        date: 'Oct 13, 2026',
        category: 'Handicrafts & SHG',
        categoryTe: 'చేనేత హస్తకళలు',
        content: 'Village women artisans will showcase pure silk sarees and traditional stone carvings directly without brokers.',
        verified: true,
        likes: 54,
        comments: 9
      }
    ]
  }
];
