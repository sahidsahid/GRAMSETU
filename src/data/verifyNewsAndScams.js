export const FACT_CHECK_SAMPLES = [
  {
    headline: 'WhatsApp Forward: "Government depositing ₹50,000 Diwali bonus in all AP Rythu Bharosa accounts if you fill this link today (ap-gov-bonus.xyz)"',
    headlineTe: 'వాట్సాప్ ఫార్వర్డ్: "ap-gov-bonus.xyz లింక్ ఓపెన్ చేస్తే దీపావళికి ప్రతి రైతు ఖాతాలో ₹50,000 బోనస్ జమవుతుంది"',
    verdict: 'LIKELY FALSE',
    verdictTe: 'పూర్తిగా అవాస్తవం (నకిలీ)',
    verdictColor: 'red',
    confidence: '98%',
    reasons: [
      'The domain "ap-gov-bonus.xyz" is an unauthorized phishing site, not official ".ap.gov.in" or ".gov.in".',
      'The Andhra Pradesh Agriculture Department has announced no such unbudgeted festival bonus.',
      'Official DBT payments are credited directly via Aadhaar enabled NPCI gateway without requiring any external web form or OTP submission.'
    ],
    officialSource: 'AP Fact Check Department & PIB Fact Check AP Unit',
    riskLevel: 'HIGH PHISHING DANGER',
    warningText: 'DO NOT CLICK THE LINK. Do not share bank details or Aadhaar numbers.'
  },
  {
    headline: 'AP State Disaster Management Authority declares 2-day school holiday for 4 coastal districts due to Bay of Bengal depression',
    headlineTe: 'బంగాళాఖాతంలో అల్పపీడనం వల్ల 4 తీరప్రాంత జిల్లాల్లో పాఠశాలలకు 2 రోజులు సెలవులు ప్రకటించిన విపత్తు నిర్వహణ సంస్థ',
    verdict: 'LIKELY TRUE',
    verdictTe: 'నిజమైన సమాచారం (సత్యం)',
    verdictColor: 'emerald',
    confidence: '96%',
    reasons: [
      'Matches official press release issued by AP State Disaster Management Authority (APSDMA) Tadepalli.',
      'District collectors of Visakhapatnam, Kakinada, Bapatla, and Nellore issued corresponding local gazettes.',
      'Verified with IMD Amaravati meteorological radar center advisory.'
    ],
    officialSource: 'APSDMA Press Release No. 2026/10-B & District Collector Visakhapatnam',
    riskLevel: 'VERIFIED OFFICIAL NOTICE',
    warningText: 'Follow local administration advice and stay indoors during heavy gales.'
  },
  {
    headline: 'Viral Video claiming Krishna river water supply has been permanently poisoned near Vijayawada Barrage',
    headlineTe: 'విజయవాడ ప్రకాశం బ్యారేజీ వద్ద కృష్ణా నది నీటిలో విషం కలిపారని సోషల్ మీడియాలో ప్రచారమవుతున్న వీడియో',
    verdict: 'MISLEADING',
    verdictTe: 'తప్పుదోవ పట్టించే సమాచారం (అబద్ధం)',
    verdictColor: 'amber',
    confidence: '94%',
    reasons: [
      'The video is recycled footage from an industrial chemical leak in another northern state from 2021.',
      'AP Pollution Control Board (APPCB) and Vijayawada Municipal Corporation tested water samples this morning: TDS and pH are within safe BIS standards.',
      'Water supply across Krishna and Guntur delta networks remains uncompromised and fully treated.'
    ],
    officialSource: 'AP Police Social Media Cell & APPCB Vijayawada Regional Office',
    riskLevel: 'PANIC MONGERING RUMOR',
    warningText: 'Do not panic or forward unverified rumors. Legal action under Section 505 IPC applies.'
  }
];

export const FRAUD_ALERTS_LIST = [
  {
    id: 'fraud-1',
    category: 'Loan Fraud',
    categoryTe: 'రుణ యాప్ మోసాలు',
    severity: 'CRITICAL',
    title: 'Instant 7-Day Loan Apps Harassment Racket',
    titleTe: '7 రోజుల తక్షణ లోన్ యాప్‌ల వేధింపుల ముఠా జాగ్రత్త',
    targetAudience: 'Small farmers and rural youth needing quick money',
    modusOperandi: 'Apps downloaded via WhatsApp/Telegram APKs demand contact book permissions, deduct 40% processing fee, and blackmail contacts with morphed images after 6 days.',
    apCasesReported: '42 cases across Guntur and Visakhapatnam this month',
    prevention: 'Never download APK files outside Google Play. Verify RBI registered NBFC status at rbi.org.in. Report to Cyber Crime helpline 1930.',
    date: 'Oct 12, 2026',
    badge: 'Trending Threat'
  },
  {
    id: 'fraud-2',
    category: 'DBT / OTP Scam',
    categoryTe: 'రైతు భరోసా ఓటీపీ మోసం',
    severity: 'HIGH',
    title: 'Fake "Rythu Bharosa Officer" Calling for e-KYC Verification',
    titleTe: 'రైతు భరోసా ఈ-కేవైసీ పేరుతో వచ్చే నకిలీ ఫోన్ కాల్స్',
    targetAudience: 'Paddy and Chilli farmers waiting for installment release',
    modusOperandi: 'Caller claims Rythu Bharosa installment is stuck and asks for Aadhaar number and OTP received on phone. As soon as OTP is shared, money is debited via AePS.',
    apCasesReported: 'Multiple reports from Tenali and Chandragiri mandals',
    prevention: 'Sachivalayam staff or RBK officers NEVER ask for OTP over phone. Biometric e-KYC is only done in person at village secretariat.',
    date: 'Oct 10, 2026',
    badge: 'Immediate Action'
  },
  {
    id: 'fraud-3',
    category: 'Employment Fraud',
    categoryTe: 'గ్రామ సచివాలయ ఉద్యోగాల మోసం',
    severity: 'HIGH',
    title: 'Fake AP Grama Sachivalayam Appointment Letter Scam',
    titleTe: 'నకిలీ గ్రామ సచివాలయ నియామక పత్రాల పేరిట దళారుల మోసం',
    targetAudience: 'Rural graduates and diploma holders',
    modusOperandi: 'Fraudsters collect ₹25,000 to ₹50,000 under the guise of "Direct Sarpanch Quota" or "Outsourcing Secretarial Cadre" with forged AP government seal.',
    apCasesReported: '18 youths trapped in Rayalaseema districts',
    prevention: 'All AP government recruitments happen exclusively through APPSC or official gramasachivalayam.ap.gov.in portals. There is NO Sarpanch quota.',
    date: 'Oct 08, 2026',
    badge: 'Recruitment Alert'
  },
  {
    id: 'fraud-4',
    category: 'Marketplace Fraud',
    categoryTe: 'యూపీఐ క్యూఆర్ కోడ్ మార్పిడి',
    severity: 'MEDIUM',
    title: 'Pasting Fake UPI QR Stickers over Farmer Stalls in Weekly Mandis',
    titleTe: 'రైతు సంతలలో నకిలీ క్యూఆర్ కోడ్ స్టిక్కర్లు అంటించే మోసం',
    targetAudience: 'Vegetable sellers, milk vendors, and fruit stall owners',
    modusOperandi: 'Scammers stick their own phonepe/gpay QR sticker over the farmer’s payment placard while the stall is busy.',
    apCasesReported: 'Reported in Tagarapuvalasa and Poranki weekly shandies',
    prevention: 'Sellers must keep QR voice box notification active or verify SMS confirmation before allowing buyers to leave.',
    date: 'Oct 05, 2026',
    badge: 'Mandi Notice'
  }
];

export const SCAM_RADAR_KEYWORDS = [
  { word: 'otp', weight: 35, warning: 'Requests OTP which bank/govt never asks' },
  { word: 'apk', weight: 40, warning: 'Asks to download unsafe Android APK outside Play Store' },
  { word: 'urgent', weight: 20, warning: 'Creates fake emergency/deadline to bypass critical thinking' },
  { word: 'lottery', weight: 45, warning: 'Unsolicited prize or lottery claim requiring advance fees' },
  { word: 'bonus', weight: 25, warning: 'Free money promises requiring private details' },
  { word: 'blocked', weight: 30, warning: 'Threatens electricity disconnection or account freeze' },
  { word: 'free recharge', weight: 40, warning: 'Phishing trap for phone recharge' },
  { word: 'pan card', weight: 25, warning: 'Urgent PAN linking notice via unofficial SMS link' },
  { word: 'click here', weight: 15, warning: 'Generic hyperlink redirection' },
  { word: 'link', weight: 15, warning: 'Directs to external unknown URL' },
  { word: 'aadhaar', weight: 20, warning: 'Aadhaar credential harvesting' }
];
