# 🌾 GramSetu (గ్రామసేతు) · Andhra Pradesh Village Hub

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![AI Fact Check](https://img.shields.io/badge/Gemini_AI-Fact_Check_Shield-4285F4?logo=google-gemini&logoColor=white)](https://ai.google.dev/)
[![DPDP Act 2023](https://img.shields.io/badge/Privacy-DPDP_Act_2023_Compliant-00C853)](https://www.meity.gov.in/)
[![Trilingual](https://img.shields.io/badge/Languages-తెలుగు_•_English_•_हिंदी-FF6F00)](#-trilingual-localization)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **GramSetu (గ్రామసేతు)** empowers all 13,000+ Gram Panchayats in Andhra Pradesh by providing each village its own live digital hub for local governance, public works auditing, emergency disaster broadcasts, direct farm-to-consumer Rythu Bazaar, AI-powered fake news verification, and cyber fraud protection.

---

## 🏛️ Executive Summary

In rural India, citizens often travel miles to mandal offices for basic updates, face delays in finding DBT scheme benefits, fall prey to WhatsApp financial scams, and lose farm profits to middlemen. 

**GramSetu** bridges this gap as a state-wide Digital Panchayat platform aligned with the **Andhra Pradesh Real-Time Governance Society (RTGS)**. Built with an authentic retro-modern graphic aesthetic inspired by graph-paper field notebooks, GramSetu combines robust civic transparency with modern agentic AI.

---

## ✨ Key Features & Core Modules

### 1. 🗺️ Village Explorer & Dashboard
- Hierarchical drill-down from **District ➔ Mandal ➔ Village** covering 10 major AP districts (Visakhapatnam, Guntur, Tirupati, Krishna, Godavari, Anantapur, etc.).
- **Live Vitals**: Real-time telemetry on population, enrolled households, active farmlands, DWCRA women SHG repayment rates, Jal Jeevan tap saturation, and live weather radar.
- **Social Audit Telemetry**: Monthly governance performance indices with visual progress metrics.

### 2. 📢 Live News & Ongoing Works (Social Audit)
- **Public Works Transparency**: Geotagged tracking of sanctioned cement roads, canal desilting, and health camps with budgets, progress bars, and completion deadlines.
- **Village Gazettes**: Official notices issued directly by the Sarpanch and Panchayat Secretary.
- **State Feeds**: Real-time agricultural and infrastructure updates from AP Government departments.

### 3. 🚨 Emergency Disaster Alerts & Acoustic SOS
- Red emergency broadcast banners for cyclones, flash floods, canal breaches, and heatwaves.
- **Villager SOS Panic Button**: 5-second countdown with acoustic warning beeps (Web Audio API), instant GPS coordinate transmission to the AP 112 control room, and 1-tap toll-free dials (112 Police, 108 Ambulance, 181 Disha Women Safety).

### 4. 🛒 Rythu Bazaar (Zero-Middlemen Direct Marketplace)
- **100% Direct Farmer Payout**: Local farmers list vegetables, chillies, mangoes, milk, oils, and handlooms.
- **Official Agmarknet Mandi Feeds**: Live benchmark market yard rates (Guntur Chilli, Bapatla Sona, Vizag Cashew) refreshed hourly.
- **Direct UPI QR Checkout**: Buyers scan direct farmer UPI QR codes with zero platform commission.

### 5. 🛡️ Verify News AI (Anti-Fake News Shield)
- AI-assisted verification engine powered by Google Gemini architecture.
- Villagers paste viral WhatsApp rumors to corroborate claims against official AP Government Gazettes and PIB registries.
- Returns a truth rating (*Likely True*, *Misleading*, *Likely False*), reasons, and a 1-click **Shareable Warning Card**.

### 6. 📡 Scam Radar & Cyber Threat Protection
- Interactive heuristics scanner for rural financial scams (PM-Kisan OTP baits, fake power disconnection threats, loan penalty APKs).
- Instant risk scoring with direct escalation to the **National Cyber Crime Helpline (1930)**.

### 7. 🔒 India DPDP Act 2023 Compliant Directory
- Household and e-Crop land records masked by default to protect Personally Identifiable Information (PII).
- Consent-based unmasking available exclusively to authenticated village Sarpanches with an immutable audit log.

### 8. 🎖️ Sarpanch Command Console
- Dedicated single-village administrative panel:
  - Approve new resident applications & e-Crop subsidy enrollments.
  - Moderate and approve Rythu Bazaar farmer produce.
  - Dispatch instant village-wide emergency push broadcasts.
  - 1-Click CSV and official PDF governance report export.

---

## 🎨 Retro-Modern Presentation Theme

GramSetu features a distinctive graphic identity matching editorial presentation slides:
- **Background**: Warm cream/beige (`#F4EFE6`) with a subtle graph-paper coordinate grid (`.pdf-grid-bg`).
- **Typography**: Ultra-bold display sans (**Syne** & **Bricolage Grotesque**) paired with clean body sans (**Plus Jakarta Sans**).
- **Accents**: Charcoal navy (`#3B3F63`), periwinkle blue (`#A3B7D8`), and dark charcoal (`#363636`).
- **Stickers & Depth**: Custom SVG starbursts, bullseye rings, and rotated badge pills with thick black outlines and crisp offset drop shadows (`4px 4px 0px #1E1E24`).
- **Fluid Widescreen Support**: Edge-to-edge responsive layout eliminating side gaps on widescreen and multi-monitor setups.
- **🌙 Dark Theme Mode**: 1-click slate blueprint toggle (`#141620`) with luminous periwinkle gridlines and persistent storage.

---

## 🌐 Trilingual Localization

Full on-the-fly UI language toggle without external API dependencies:
- **తెలుగు (Telugu)**: Native language translation for all rural citizens and Grama Sachivalayam staff.
- **English**: Official government administrative and documentation format.
- **हिंदी (Hindi)**: Interstate trade and central ministry reporting.

---

## 🔐 Authentication Modes

1. **Mobile + 4-Digit OTP**:
   - Auto-prefixed `+91` input with simulated AP Government SMS gateway push (`VK-APGOVT`).
   - 4-box PIN auto-focus, 30s resend timer, and 1-tap auto-fill test chip (`8492`).
2. **Google Sign-In**:
   - Interactive OAuth dialog with simulated single-click accounts (Resident Villager, Sarpanch, Farmer).
3. **Grama Sachivalayam Officer Desk**:
   - Secure login for Village Revenue Officers and Mandal administrators.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 19, Vite 8 |
| **Styling** | Tailwind CSS v4, Custom CSS Graph Grids |
| **Icons** | Lucide React |
| **Visual FX** | Canvas Confetti, Web Audio API |
| **AI Integration** | Gemini API prompt pipeline for fact-checking & scam heuristics |
| **Standards** | India DPDP Act 2023, RTGS Amaravati Data Framework |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/gramsetu-ap.git
   cd gramsetu-ap
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**  
   Navigate to [http://localhost:5173/](http://localhost:5173/)

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Architecture

```
gramsetu/
├── index.html                   # HTML entry with Syne & Bricolage Grotesque fonts
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite bundler configuration
└── src/
    ├── main.jsx                 # React root bootstrap
    ├── App.jsx                  # Main router, state, floating dock, and modals
    ├── index.css                # Graph-paper grid, stickers, and dark theme classes
    ├── data/
    │   ├── villages.js          # AP Districts, Mandals, and Village datasets
    │   ├── marketplace.js       # Rythu Bazaar products & Agmarknet mandi benchmarks
    │   ├── extras.js            # AP Govt schemes, DWCRA SHG data, and grievances
    │   ├── directory.js         # DPDP Act compliant households & e-Crop records
    │   ├── verifyNewsAndScams.js# Gemini fact-check samples & scam radar heuristics
    │   └── translations.js      # Complete trilingual dictionary (Telugu, English, Hindi)
    └── components/
        ├── HeaderNavbar.jsx     # Branding, language pill toggle, role switcher & theme toggle
        ├── EmergencyBanner.jsx  # Red banner broadcast & disaster warning alerts
        ├── VillageOverview.jsx  # Hero command banner, 6-column vitals, and analytics
        ├── LiveNewsAndWorks.jsx # Social audit works progress & village gazette
        ├── Marketplace.jsx      # Rythu Bazaar farmer produce & direct UPI checkout
        ├── VerifyNewsAI.jsx     # Gemini AI anti-fake news verification engine
        ├── ScamRadar.jsx        # Cyber threat detector & 1930 helpline portal
        ├── VillageDirectory.jsx # DPDP 2023 consent-based PII registry & audit trail
        ├── ExtrasHub.jsx        # Schemes finder, weather advisory, SHG & complaints
        ├── SarpanchAdmin.jsx    # Village head control console & report export
        ├── LoginPage.jsx        # Mobile OTP, Google Sign-in & Sachivalayam login
        ├── SOSModal.jsx         # Acoustic warning countdown & 112 emergency dispatch
        ├── CartDrawer.jsx       # Produce basket & direct farmer DBT checkout
        ├── ThemeStickers.jsx    # Retro SVG Starburst, Plus, and Ring stickers
        └── Footer.jsx           # Government data integrations & helpline directory
```

---

## 📜 License & Compliance

- Distributed under the **MIT License**.
- Conforms to **Digital Personal Data Protection Act (DPDP) 2023** privacy principles.
- Designed for hackathon presentations and scalable civic technology deployments in Andhra Pradesh.
