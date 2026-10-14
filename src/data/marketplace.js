export const MANDI_BENCHMARKS = [
  {
    crop: 'Guntur Teja Chilli',
    cropTe: 'గుంటూరు తేజా మిర్చి',
    mandi: 'Guntur Mirchi Yard',
    modalPrice: '₹24,500',
    unit: '/Quintal',
    change: '+₹650',
    trend: 'up',
    arrivals: '18,400 Bags'
  },
  {
    crop: 'Sona Masoori Paddy (Grade A)',
    cropTe: 'సోనా మసూరి వరి (గ్రేడ్ ఏ)',
    mandi: 'Tenali & Vijayawada',
    modalPrice: '₹2,320',
    unit: '/Quintal (MSP ₹2,300)',
    change: '+₹20',
    trend: 'up',
    arrivals: '32,100 Quintals'
  },
  {
    crop: 'Banganapalle Mango (Pre-order)',
    cropTe: 'బంగినపల్లి మామిడి',
    mandi: 'Nuzvid & Tirupati',
    modalPrice: '₹48,000',
    unit: '/Tonne',
    change: '+₹1,200',
    trend: 'up',
    arrivals: 'Season opening'
  },
  {
    crop: 'Madanapalle Hybrid Tomato',
    cropTe: 'మదనపల్లె టమోటా',
    mandi: 'Madanapalle Market Yard',
    modalPrice: '₹1,850',
    unit: '/30kg Crate (₹61/kg)',
    change: '-₹120',
    trend: 'down',
    arrivals: '45,000 Crates'
  },
  {
    crop: 'Duggirala Turmeric Finger',
    cropTe: 'దుగ్గిరాల నాణ్యమైన పసుపు కొమ్ములు',
    mandi: 'Duggirala Turmeric Yard',
    modalPrice: '₹16,200',
    unit: '/Quintal',
    change: '+₹400',
    trend: 'up',
    arrivals: '4,200 Bags'
  },
  {
    crop: 'Raw Cotton (Medium Staple)',
    cropTe: 'పత్తి (మధ్యస్థ పింజ)',
    mandi: 'Adoni & Guntur',
    modalPrice: '₹7,420',
    unit: '/Quintal',
    change: '+₹80',
    trend: 'up',
    arrivals: '12,000 Quintals'
  }
];

export const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    villageId: 'angalakuduru',
    villageName: 'Angalakuduru (Tenali, Guntur)',
    title: 'Authentic Guntur Teja Red Chilli (Sun-Dried)',
    titleTe: 'స్వచ్ఛమైన గుంటూరు తేజా ఎర్ర మిర్చి (సహజ ఎండబెట్టినవి)',
    category: 'Spices',
    categoryTe: 'మసాలా దినుసులు',
    price: 260,
    unit: '1 kg packet',
    mandiComparison: 'Direct farmgate · Retail is ₹320 in city',
    stock: 140,
    seller: {
      name: 'N. Srinivasa Rao',
      nameTe: 'ఎన్. శ్రీనివాసరావు',
      type: 'Registered Farmer (RBK Verified)',
      phone: '+91 94402 11928',
      acres: '4.5 Acres',
      rating: 4.9,
      reviewsCount: 38
    },
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80',
    description: 'High pungency, deep red natural SHU score dried in our family field under natural Andhra sun without artificial chemicals or color coating.',
    organicCertified: true
  },
  {
    id: 'prod-2',
    villageId: 'poranki',
    villageName: 'Poranki (Krishna District)',
    title: 'Aged Nellore Sona Masoori Raw Rice (12 Months Aged)',
    titleTe: 'పాత నెల్లూరు సోనా మసూరి బియ్యం (12 నెలల నిల్వ)',
    category: 'Grains',
    categoryTe: 'ధాన్యాలు & బియ్యం',
    price: 1350,
    unit: '25 kg Bag',
    mandiComparison: 'Direct mill rate · Supermarket charges ₹1600',
    stock: 85,
    seller: {
      name: 'P. Subba Rao',
      nameTe: 'పి. సుబ్బారావు',
      type: 'Direct Grower',
      phone: '+91 98485 77123',
      acres: '8 Acres',
      rating: 4.8,
      reviewsCount: 62
    },
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Single-origin Krishna river canal irrigated Sona Masoori paddy milled and naturally aged. Non-sticky, lightweight, aromatic white rice.',
    organicCertified: false
  },
  {
    id: 'prod-3',
    villageId: 'tagarapuvalasa',
    villageName: 'Tagarapuvalasa (Visakhapatnam)',
    title: 'Coastal Cashew Kernels (W-240 Premium Whole)',
    titleTe: 'విశాఖ తీరప్రాంత జీడిపప్పు (డబ్ల్యు-240 ప్రీమియం హోల్)',
    category: 'Dry Fruits & Nuts',
    categoryTe: 'డ్రై ఫ్రూట్స్',
    price: 820,
    unit: '1 kg Jar',
    mandiComparison: '₹120 cheaper than Vizag retail',
    stock: 50,
    seller: {
      name: 'K. Appalaraju',
      nameTe: 'కె. అప్పలరాజు',
      type: 'Coastal Orchard Owner',
      phone: '+91 99891 44321',
      acres: '3 Acres',
      rating: 5.0,
      reviewsCount: 29
    },
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy roasted whole cashews processed at local cooperative. Freshly packed vacuum pouches retain natural sweetness.',
    organicCertified: true
  },
  {
    id: 'prod-4',
    villageId: 'chandragiri',
    villageName: 'Chandragiri (Tirupati)',
    title: 'Desi Ongole Cow A2 Bilona Ghee (Hand-Churned)',
    titleTe: 'దేశీ ఒంగోలు ఆవు ఎ2 బిలోనా నెయ్యి (చేతితో చిలికిన సాంప్రదాయ పద్ధతి)',
    category: 'Dairy',
    categoryTe: 'పాడి ఉత్పత్తులు',
    price: 950,
    unit: '500 ml Glass Jar',
    mandiComparison: 'Temple purity standard',
    stock: 35,
    seller: {
      name: 'R. Lakshmi Devi',
      nameTe: 'ఆర్. లక్ష్మీదేవి',
      type: 'DWCRA Mahila Sangham',
      phone: '+91 97014 99120',
      acres: 'Dairy SHG',
      rating: 4.9,
      reviewsCount: 84
    },
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80',
    description: 'Crafted using ancient curd-churning (bilona) method on low flame with firewood. Golden grain texture with sacred aroma.',
    organicCertified: true
  },
  {
    id: 'prod-5',
    villageId: 'draksharamam',
    villageName: 'Draksharamam (Konaseema)',
    title: 'Fresh Konaseema Mature Tender Coconuts (Pack of 6)',
    titleTe: 'తాజా కోనసీమ కొబ్బరికాయలు (6 కాయల ప్యాక్)',
    category: 'Fresh Produce',
    categoryTe: 'తాజా తోటల ఉత్పత్తులు',
    price: 180,
    unit: '6 Pieces',
    mandiComparison: 'Straight from Godavari grove',
    stock: 120,
    seller: {
      name: 'G. Satyanarayana',
      nameTe: 'జి. సత్యనారాయణ',
      type: 'Coconut Grower',
      phone: '+91 94901 66211',
      acres: '5 Acres',
      rating: 4.7,
      reviewsCount: 41
    },
    image: 'https://images.unsplash.com/photo-1584447141399-be2c176210f1?auto=format&fit=crop&w=600&q=80',
    description: 'Thick sweet coconut water and rich copra meat harvested fresh from Godavari delta groves.',
    organicCertified: true
  },
  {
    id: 'prod-6',
    villageId: 'lepakshi',
    villageName: 'Lepakshi (Sri Sathya Sai)',
    title: 'Handloom Pure Mulberry Raw Silk Stole (Lepakshi Weave)',
    titleTe: 'లేపాక్షి చేనేత స్వచ్ఛమైన పట్టు శాలువా',
    category: 'Handicrafts',
    categoryTe: 'చేనేత హస్తకళలు',
    price: 1450,
    unit: '1 Piece (2.2m)',
    mandiComparison: 'No middleman · 100% goes to weaver',
    stock: 22,
    seller: {
      name: 'T. Mallikarjuna',
      nameTe: 'టి. మల్లికార్జున',
      type: 'Master Weaver SHG',
      phone: '+91 98492 88419',
      acres: 'Weaving Unit',
      rating: 5.0,
      reviewsCount: 19
    },
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    description: 'Woven on traditional pit-looms using locally farmed silkworm cocoons. Natural dyes with temple motif border.',
    organicCertified: false
  }
];
