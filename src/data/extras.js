export const AP_SCHEMES = [
  {
    id: 'sch-1',
    name: 'YSR Rythu Bharosa - PM KISAN',
    nameTe: 'వైఎస్సార్ రైతు భరోసా - పీఎం కిసాన్',
    category: 'Farmer Income Support',
    categoryTe: 'రైతు ఆదాయ సహాయం',
    benefit: '₹13,500 per year in 3 installments',
    eligibility: 'Farmer owning cultivable land up to 5 acres, or recognized Tenant Farmers (CCRC card holders).',
    deadline: 'Ongoing e-Crop enrollment',
    documents: 'Aadhaar, Pattadar Passbook / CCRC, Bank Account linked to NPCI',
    status: 'Active',
    portalUrl: 'https://ysrrythubharosa.ap.gov.in'
  },
  {
    id: 'sch-2',
    name: 'Jagananna Amma Vodi',
    nameTe: 'జగనన్న అమ్మ ఒడి',
    category: 'Education & Child Welfare',
    categoryTe: 'విద్య మరియు పిల్లల సంక్షేమం',
    benefit: '₹15,000 per year directly to mother\'s bank account',
    eligibility: 'Mothers sending their children to recognized schools/junior colleges (Class 1 to 12) with 75% attendance.',
    deadline: 'Annual Renewal via Sachivalayam',
    documents: 'Student Aadhaar, Mother Aadhaar, Ration Card, School Attendance Certificate',
    status: 'Active',
    portalUrl: 'https://jaganannaammavodi.ap.gov.in'
  },
  {
    id: 'sch-3',
    name: 'YSR Cheyutha (Women Financial Empowerment)',
    nameTe: 'వైఎస్సార్ చేయూత',
    category: 'Women Entrepreneurship',
    categoryTe: 'మహిళా సాధికారత',
    benefit: '₹75,000 total (₹18,750 per year for 4 years)',
    eligibility: 'SC, ST, BC, and Minority women aged between 45 and 60 years for establishing grocery, dairy, or retail businesses.',
    deadline: 'Enrollment Open at Village Secretariat',
    documents: 'Caste Certificate, Age Proof, Aadhaar, Bank Passbook',
    status: 'Active',
    portalUrl: 'https://navasakam.ap.gov.in'
  },
  {
    id: 'sch-4',
    name: 'YSR Sunna Vaddi (Zero Interest Crop Loans & DWCRA)',
    nameTe: 'వైఎస్సార్ సున్నా వడ్డీ పథకం',
    category: 'Credit & Self Help Groups',
    categoryTe: 'రుణ రాయితీ & డ్వాక్రా సంఘాలు',
    benefit: '100% interest reimbursement on crop loans up to ₹1 Lakh and SHG micro-loans',
    eligibility: 'Farmers and DWCRA Mahila Sangham members who repay bank loans on time within scheduled term.',
    deadline: 'Quarterly DBT Settlement',
    documents: 'Bank Loan Sanction Letter, Timely Repayment Slip',
    status: 'Active',
    portalUrl: 'https://serp.ap.gov.in'
  },
  {
    id: 'sch-5',
    name: 'Free 9-Hour Agricultural Daytime Power',
    nameTe: 'రైతులకు పగటిపూట 9 గంటల ఉచిత నాణ్యమైన విద్యుత్',
    category: 'Irrigation & Utilities',
    categoryTe: 'వ్యవసాయ విద్యుత్',
    benefit: 'Zero electricity charge for borewell connections',
    eligibility: 'All registered agricultural electricity pump connections in Andhra Pradesh.',
    deadline: 'Perpetual',
    documents: 'Consumer Service Number, Passbook copy',
    status: 'Active',
    portalUrl: 'https://apepdcl.in'
  }
];

export const INITIAL_GRIEVANCES = [
  {
    id: 'GRV-AP-8491',
    villageId: 'tagarapuvalasa',
    subject: 'Street light failure on Fisherman Colony Main Cross',
    subjectTe: 'మత్స్యకార కాలనీ మెయిన్ క్రాస్ వద్ద వీధి దీపాలు వెలగడం లేదు',
    submittedBy: 'K. Appalaraju',
    category: 'Street Lighting & Electricity',
    status: 'Under Review',
    priority: 'Medium',
    date: '2026-10-13',
    notes: 'Sachivalayam electric assistant assigned. Replacement LED bulb dispatch scheduled.'
  },
  {
    id: 'GRV-AP-8492',
    villageId: 'angalakuduru',
    subject: 'Canal branch silt accumulation blocking water to Field #14',
    subjectTe: '14వ నంబర్ పొలానికి కాలువ పూడిక వల్ల నీరు అందడం లేదు',
    submittedBy: 'M. Sambasiva Rao',
    category: 'Irrigation & Water Canal',
    status: 'Action Taken',
    priority: 'High',
    date: '2026-10-12',
    notes: 'JCB mobilized by Gram Panchayat. Bund cleared and flow restored within 24 hours.'
  },
  {
    id: 'GRV-AP-8493',
    villageId: 'chandragiri',
    subject: 'Request for speed breaker near Zilla Parishad High School Gate',
    subjectTe: 'జడ్పీ హైస్కూల్ గేటు వద్ద స్పీడ్ బ్రేకర్ ఏర్పాటు చేయాలని వినతి',
    submittedBy: 'Headmaster S. Narayana',
    category: 'Road Safety & Works',
    status: 'Approved & Scheduled',
    priority: 'High',
    date: '2026-10-11',
    notes: 'Approved by Sarpanch council. Work included in upcoming CC road tender.'
  }
];

export const SHG_DATA = {
  totalGroupsInAP: 840000,
  activeVillages: 13324,
  averageRepaymentRate: '98.8%',
  currentVillageStats: {
    tagarapuvalasa: { groups: 24, members: 288, loanDisbursed: '₹1.44 Crores', repayment: '98.5%', popularBusiness: 'Dry fish processing & Cashew packaging' },
    angalakuduru: { groups: 36, members: 432, loanDisbursed: '₹2.16 Crores', repayment: '99.1%', popularBusiness: 'Turmeric grinding & Dairy cooperative' },
    chandragiri: { groups: 42, members: 504, loanDisbursed: '₹2.52 Crores', repayment: '97.9%', popularBusiness: 'A2 Cow Ghee & Handloom bags' },
    poranki: { groups: 28, members: 336, loanDisbursed: '₹1.68 Crores', repayment: '99.4%', popularBusiness: 'Banana chips & Pickles' },
    draksharamam: { groups: 38, members: 456, loanDisbursed: '₹2.28 Crores', repayment: '98.8%', popularBusiness: 'Coir mats & Coconut oil' },
    lepakshi: { groups: 20, members: 240, loanDisbursed: '₹1.20 Crores', repayment: '99.0%', popularBusiness: 'Silk weaving & Stone carving' },
  }
};
