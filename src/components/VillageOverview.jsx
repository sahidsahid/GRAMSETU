import React, { useState } from 'react';
import { 
  Users, 
  Home, 
  Tractor, 
  Droplets, 
  Coins, 
  CloudSun, 
  MapPin, 
  Phone, 
  Search,
  ArrowRight,
  Radio,
  ExternalLink,
  ChevronDown,
  Sparkles,
  ShieldAlert,
  AlertTriangle
} from 'lucide-react';
import { AP_DISTRICTS } from '../data/villages';

export function VillageOverview({
  currentVillage,
  villages,
  onSelectVillage,
  onTabChange,
  activeLang,
  t,
  onOpenSOS
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [activeVillageView, setActiveVillageView] = useState(false); // false = landing page matching screenshot, true = expanded village details

  const o = t.overview || {};
  const c = t.common || {};
  const tick = t.ticker || {};

  // Filter villages by district and search query
  const filteredVillages = villages.filter(v => {
    const matchDistrict = selectedDistrict === 'all' || v.district === selectedDistrict;
    const matchSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (v.nameTe && v.nameTe.includes(searchTerm)) ||
      v.districtName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.mandalName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchDistrict && matchSearch;
  });

  const handleOpenVillage = (villageId) => {
    onSelectVillage(villageId);
    setActiveVillageView(true);
    // Smooth scroll down to details
    setTimeout(() => {
      const el = document.getElementById('village-live-dashboard');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="w-full space-y-12">
      {/* 1. HERO SECTION - EXACT MATCH TO SCREENSHOT */}
      <div className="relative pt-6 pb-8 overflow-hidden">
        {/* Floating Stickers on Right side matching screenshot */}
        <div className="absolute top-2 right-6 sm:right-16 select-none pointer-events-none animate-pulse">
          {/* 12-point starburst in pale blue #C8D8ED */}
          <svg width="78" height="78" viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[4px_4px_0px_#0A0C14]">
            <path
              d="M50 0 L61 24 L85 15 L78 39 L100 50 L78 61 L85 85 L61 78 L50 100 L39 78 L15 85 L22 61 L0 50 L22 39 L15 15 L39 24 Z"
              fill="#C8D8ED"
              stroke="#10121C"
              strokeWidth="5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="absolute bottom-6 right-16 sm:right-32 select-none pointer-events-none hidden sm:block">
          {/* Slate Plus sticker matching screenshot */}
          <svg width="48" height="48" viewBox="0 0 100 100" className="w-12 h-12 drop-shadow-[4px_4px_0px_#0A0C14]">
            <path
              d="M35 5 H65 V35 H95 V65 H65 V95 H35 V65 H5 V35 H35 Z"
              fill="#2E344A"
              stroke="#10121C"
              strokeWidth="6"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Left Side Giant Typography */}
        <div className="max-w-4xl relative">
          {/* Top-left Ring Sticker attached to the "G" in GRAM */}
          <div className="absolute -top-3 sm:-top-5 -left-3 sm:-left-4 select-none pointer-events-none z-20">
            <svg width="52" height="52" viewBox="0 0 100 100" className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-[3px_3px_0px_#0A0C14]">
              <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#10121C" strokeWidth="9" />
              <circle cx="50" cy="50" r="23" fill="#121422" stroke="#10121C" strokeWidth="5" />
            </svg>
          </div>

          <div className="font-giant text-7xl sm:text-9xl md:text-[135px] text-[#DCE6F8] tracking-tighter leading-[0.84] select-none">
            GRAM
          </div>

          <div className="font-giant text-7xl sm:text-9xl md:text-[135px] text-[#DCE6F8] tracking-tighter leading-[0.84] select-none relative mt-1 sm:mt-2">
            SETU

            {/* Rotated "Andhra Pradesh" black pill overlaid across bottom of S and E */}
            <div className="absolute -bottom-3 sm:-bottom-5 left-4 sm:left-12 transform -rotate-6 select-none z-20">
              <div className="bg-[#181B26] text-white font-chunky text-sm sm:text-xl md:text-2xl px-5 sm:px-7 py-1.5 sm:py-2.5 rounded-full border-2 border-black sticker-shadow shadow-xl tracking-wide">
                Andhra Pradesh
              </div>
            </div>
          </div>

          {/* Subtitle matching screenshot */}
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mt-6 sm:mt-8 font-normal leading-relaxed">
            {activeLang === 'te' 
              ? 'ఆంధ్రప్రదేశ్‌లోని ప్రతి గ్రామానికి ప్రత్యేక లైవ్ పేజీ. తాజా వార్తలు, అత్యవసర హెచ్చరికలు, పొలాలు మరియు స్థానిక రైతు బజార్ - అన్నీ ఒకే చోట.' 
              : activeLang === 'hi'
              ? 'आंध्र प्रदेश के प्रत्येक गांव के लिए एक समर्पित लाइव पेज। वास्तविक समय समाचार, अलर्ट, खेत और स्थानीय मंडी, सब एक जगह।'
              : 'One page for every village in Andhra Pradesh. Live news, alerts, farms and a local marketplace, all in one place.'}
          </p>
        </div>
      </div>

      {/* 2. "FIND YOUR VILLAGE" SECTION - EXACT MATCH TO SCREENSHOT */}
      <div className="space-y-4">
        <h2 className="font-chunky text-2xl sm:text-3xl text-white font-black tracking-tight">
          {activeLang === 'te' ? 'మీ గ్రామాన్ని కనుగొనండి' : activeLang === 'hi' ? 'अपना गांव खोजें' : 'Find your village'}
        </h2>

        {/* Search Input & District Dropdown matching screenshot */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={activeLang === 'te' ? 'గ్రామం పేరుతో శోధించండి...' : 'Search village name'}
              className="bg-[#121422] border border-[#2D3349] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#A3B7D8] w-64 sm:w-80"
            />
          </div>

          <div className="relative">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="bg-[#121422] border border-[#2D3349] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#A3B7D8] cursor-pointer pr-8 appearance-none"
            >
              <option value="all">{activeLang === 'te' ? 'అన్ని జిల్లాలు' : 'All districts'}</option>
              {AP_DISTRICTS.map((d) => (
                <option key={d.id} value={d.id}>
                  {activeLang === 'te' ? d.nameTe : d.name}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Village Cards Grid (6 across on desktop matching screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-2">
          {filteredVillages.map((village) => (
            <div
              key={village.id}
              onClick={() => handleOpenVillage(village.id)}
              className={`bg-[#151826] border rounded-2xl p-4 flex flex-col justify-between hover:border-[#A3B7D8] transition-all cursor-pointer ${
                currentVillage.id === village.id ? 'border-[#A3B7D8] ring-1 ring-[#A3B7D8]' : 'border-[#262B3D]'
              }`}
            >
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs font-bold text-gray-300">
                    {activeLang === 'te' ? village.districtNameTe : village.districtName}
                  </span>
                  <span className="bg-[#262B3D] text-white text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
                    {village.code}
                  </span>
                </div>

                <h3 className="font-chunky text-lg sm:text-xl text-white font-black mb-1">
                  {activeLang === 'te' ? village.nameTe : village.name}
                </h3>

                <div className="text-[11px] text-gray-400 font-medium">
                  {activeLang === 'te' ? 'జనాభా' : 'Population'}: {village.stats.population.toLocaleString()}&nbsp;&nbsp;{activeLang === 'te' ? 'పొలాలు' : 'Farms'}: {village.stats.activeFarms}
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenVillage(village.id);
                }}
                className="text-xs text-gray-400 hover:text-white underline mt-3 text-left cursor-pointer"
              >
                {activeLang === 'te' ? 'గ్రామం పేజీ తెరవండి' : 'Open village'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SELECTED VILLAGE LIVE PAGE (Integrated Below the Cards) */}
      <div id="village-live-dashboard" className="pt-8 border-t border-[#262B3D] space-y-6 animate-in fade-in">
        {/* Active Emergency Alert if present */}
        {currentVillage.activeAlert && (
          <div className="bg-[#E5484D] text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg border border-black/40">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-white text-[#E5484D] animate-pulse">
                <AlertTriangle size={20} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm uppercase tracking-wide">
                    {activeLang === 'te' && currentVillage.activeAlert.titleTe ? currentVillage.activeAlert.titleTe : currentVillage.activeAlert.title}
                  </span>
                  <span className="bg-yellow-300 text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                    {currentVillage.activeAlert.time}
                  </span>
                </div>
                <p className="text-xs text-red-100 mt-1 max-w-4xl">
                  {currentVillage.activeAlert.description}
                </p>
              </div>
            </div>
            <button
              onClick={onOpenSOS}
              className="bg-yellow-300 hover:bg-yellow-400 text-black font-black text-xs px-4 py-2 rounded-full border border-black flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shadow"
            >
              <ShieldAlert size={14} />
              <span>{t.sosButton || 'Villager SOS'}</span>
            </button>
          </div>
        )}

        {/* Active Village Header Bar */}
        <div className="bg-[#171A29] rounded-3xl border border-[#2D3349] p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/20 bg-gray-800 flex-shrink-0">
              <img
                src={currentVillage.sarpanch.photo}
                alt={currentVillage.sarpanch.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#A3B7D8] text-black text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  {activeLang === 'te' ? 'గ్రామ సర్పంచ్' : 'Village Head'}
                </span>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-700">
                  {currentVillage.code} · {currentVillage.districtName}
                </span>
              </div>
              <h2 className="font-chunky text-2xl sm:text-4xl text-white">
                {activeLang === 'te' ? currentVillage.nameTe : currentVillage.name}
              </h2>
              <p className="text-xs text-gray-300 mt-1">
                {activeLang === 'te' ? currentVillage.sarpanch.nameTe : currentVillage.sarpanch.name} ({currentVillage.sarpanch.term}) · PIN: {currentVillage.pincode}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${currentVillage.sarpanch.phone}`}
              className="bg-[#23273A] hover:bg-[#2B3149] text-white text-xs font-bold px-4 py-2 rounded-xl border border-white/10 flex items-center gap-1.5"
            >
              <Phone size={13} />
              <span>{currentVillage.sarpanch.phone}</span>
            </a>
            <button
              onClick={() => onTabChange('adminPanel')}
              className="bg-[#DCE6F8] hover:bg-white text-black text-xs font-black px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{activeLang === 'te' ? 'సర్పంచ్ ప్యానెల్' : 'Manage Village'}</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* 6 Key Vitals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5">
          <div className="bg-[#151826] border border-[#262B3D] rounded-2xl p-4">
            <span className="text-xs font-bold text-gray-400 block">{c.population || 'Population'}</span>
            <div className="font-chunky text-2xl sm:text-3xl text-white mt-1">
              {currentVillage.stats.population.toLocaleString()}
            </div>
            <span className="text-[10px] text-emerald-400 font-bold block mt-1">100% Aadhaar Linked</span>
          </div>

          <div className="bg-[#151826] border border-[#262B3D] rounded-2xl p-4">
            <span className="text-xs font-bold text-gray-400 block">{c.households || 'Households'}</span>
            <div className="font-chunky text-2xl sm:text-3xl text-white mt-1">
              {currentVillage.stats.households.toLocaleString()}
            </div>
            <span className="text-[10px] text-gray-400 font-bold block mt-1">100% Electrified</span>
          </div>

          <div className="bg-[#151826] border border-[#262B3D] rounded-2xl p-4">
            <span className="text-xs font-bold text-gray-400 block">{c.activeFarms || 'Active Farms'}</span>
            <div className="font-chunky text-2xl sm:text-3xl text-white mt-1">
              {currentVillage.stats.activeFarms}
            </div>
            <span className="text-[10px] text-gray-400 font-bold block mt-1">{currentVillage.stats.cultivatedAcres} Acres Farmed</span>
          </div>

          <div className="bg-[#151826] border border-[#262B3D] rounded-2xl p-4">
            <span className="text-xs font-bold text-gray-400 block">SHG Repayment</span>
            <div className="font-chunky text-2xl sm:text-3xl text-emerald-400 mt-1">
              {currentVillage.stats.shgLoanRepayment}
            </div>
            <span className="text-[10px] text-gray-400 font-bold block mt-1">{currentVillage.stats.shgGroups} Women Groups</span>
          </div>

          <div className="bg-[#151826] border border-[#262B3D] rounded-2xl p-4">
            <span className="text-xs font-bold text-gray-400 block">Jal Jeevan Taps</span>
            <div className="font-chunky text-2xl sm:text-3xl text-blue-400 mt-1">
              {currentVillage.stats.waterSources} Points
            </div>
            <span className="text-[10px] text-gray-400 font-bold block mt-1">Safe RO Drinking Water</span>
          </div>

          <div className="bg-[#151826] border border-[#262B3D] rounded-2xl p-4">
            <span className="text-xs font-bold text-gray-400 block">{o.weatherNow || 'Weather'}</span>
            <div className="font-chunky text-2xl sm:text-3xl text-[#A3B7D8] mt-1">
              {currentVillage.weather.temp}
            </div>
            <span className="text-[10px] text-gray-300 font-bold block mt-1">
              {activeLang === 'te' ? currentVillage.weather.conditionTe : currentVillage.weather.condition}
            </span>
          </div>
        </div>

        {/* Quick Action Navigation Grid for the selected Village */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => onTabChange('marketplace')}
            className="bg-[#171A29] hover:bg-[#1D2133] border border-[#2D3349] hover:border-[#A3B7D8] rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl mb-2 block">🌾</span>
              <h3 className="font-chunky text-lg text-white font-bold">
                {activeLang === 'te' ? 'రైతు బజార్' : 'Rythu Bazaar Marketplace'}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {activeLang === 'te' ? 'దళారులు లేకుండా నేరుగా రైతుల వద్ద నుంచి కొనండి.' : 'Zero middlemen. Buy fresh farm harvest with direct UPI payment.'}
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-[#A3B7D8] flex items-center gap-1">
              <span>{activeLang === 'te' ? 'ఉత్పత్తులు చూడండి' : 'Browse Produce'}</span>
              <ArrowRight size={13} />
            </div>
          </div>

          <div
            onClick={() => onTabChange('newsWorks')}
            className="bg-[#171A29] hover:bg-[#1D2133] border border-[#2D3349] hover:border-[#A3B7D8] rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl mb-2 block">📋</span>
              <h3 className="font-chunky text-lg text-white font-bold">
                {activeLang === 'te' ? 'వార్తలు & పనులు' : 'Ongoing Public Works'}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {activeLang === 'te' ? 'సీసీ రోడ్లు, తాగునీరు మరియు కాలువల పనుల సోషల్ ఆడిట్.' : 'Geotagged social audit of road repair and water desilting projects.'}
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-[#A3B7D8] flex items-center gap-1">
              <span>{activeLang === 'te' ? 'పురోగతిని చూడండి' : 'Inspect Works'}</span>
              <ArrowRight size={13} />
            </div>
          </div>

          <div
            onClick={() => onTabChange('verifyNews')}
            className="bg-[#171A29] hover:bg-[#1D2133] border border-[#2D3349] hover:border-[#A3B7D8] rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl mb-2 block">🛡️</span>
              <h3 className="font-chunky text-lg text-white font-bold">
                {activeLang === 'te' ? 'నకిలీ వార్తల AI తనిఖీ' : 'Verify News AI'}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {activeLang === 'te' ? 'వాట్సాప్ వదంతులను ప్రభుత్వ రికార్డులతో సరిచూడండి.' : 'Corroborate viral WhatsApp forwards against official AP Gazettes.'}
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-[#A3B7D8] flex items-center gap-1">
              <span>{activeLang === 'te' ? 'వార్తను తనిఖీ చేయండి' : 'Check Forward'}</span>
              <ArrowRight size={13} />
            </div>
          </div>

          <div
            onClick={() => onTabChange('fraudRadar')}
            className="bg-[#171A29] hover:bg-[#1D2133] border border-[#2D3349] hover:border-[#A3B7D8] rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl mb-2 block">📡</span>
              <h3 className="font-chunky text-lg text-white font-bold">
                {activeLang === 'te' ? 'సైబర్ మోసాల రాడార్' : 'Scam Radar & 1930'}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {activeLang === 'te' ? 'కరెంట్ కట్ బెదిరింపులు, లోన్ స్కామ్‌లను స్కాన్ చేయండి.' : 'Scan suspicious SMS for power disconnection threats & fake OTP baits.'}
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-[#A3B7D8] flex items-center gap-1">
              <span>{activeLang === 'te' ? 'స్కామ్ స్కాన్ చేయండి' : 'Scan Message'}</span>
              <ArrowRight size={13} />
            </div>
          </div>
        </div>

        {/* Primary Crops Section */}
        <div className="bg-[#151826] border border-[#262B3D] rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-chunky text-xl text-white">
                {activeLang === 'te' ? 'ప్రధాన పంటలు' : 'Primary Agricultural Harvests'}
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                {currentVillage.name} ({currentVillage.districtName})
              </p>
            </div>
            <button
              onClick={() => onTabChange('marketplace')}
              className="text-xs font-bold text-[#A3B7D8] hover:underline"
            >
              {activeLang === 'te' ? 'రైతు బజార్‌లో కొనండి →' : 'Buy directly on Rythu Bazaar →'}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {currentVillage.primaryCrops.map((crop, idx) => (
              <div key={idx} className="bg-[#1D2133] border border-white/5 p-3 rounded-xl text-xs font-bold text-gray-200 flex items-center gap-2">
                <span>🌱</span>
                <span>{crop}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
