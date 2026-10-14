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
  ExternalLink,
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Activity,
  ShieldAlert,
  ChevronRight,
  Radio
} from 'lucide-react';
import { AP_DISTRICTS } from '../data/villages';
import { StarburstSticker, PlusSticker, RingSticker, RotatedPill } from './ThemeStickers';

export function VillageOverview({
  currentVillage,
  villages,
  onSelectVillage,
  onTabChange,
  activeLang,
  t
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const o = t.overview || {};
  const c = t.common || {};
  const tick = t.ticker || {};

  // Filter villages by district and search query
  const filteredVillages = villages.filter(v => {
    const matchDistrict = selectedDistrict === 'all' || v.districtId === selectedDistrict;
    const matchSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (v.nameTe && v.nameTe.includes(searchTerm)) ||
      v.mandalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.districtName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.pincode.includes(searchTerm);
    return matchDistrict && matchSearch;
  });

  return (
    <div className="w-full space-y-8 animate-in fade-in">
      {/* 1. HERO COMMAND BANNER - Full Width Fluid */}
      <div className="relative bg-white/70 dark:bg-[#1A1D29]/90 rounded-[36px] border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow-lg p-6 sm:p-10 overflow-hidden">
        {/* Retro Design Stickers */}
        <div className="absolute -top-3 left-6 hidden sm:block">
          <RingSticker size={64} outerColor="#A3B7D8" innerColor="#3B3F63" />
        </div>
        <div className="absolute top-4 right-8">
          <StarburstSticker size={84} color="#A3B7D8" />
        </div>
        <div className="absolute bottom-4 right-1/3 hidden lg:block">
          <PlusSticker size={52} color="#A3B7D8" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-extrabold text-xs uppercase tracking-widest text-[#3B3F63] dark:text-[#A3B7D8] bg-white dark:bg-[#141620] px-4 py-1 rounded-full border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow">
                {t.stateBadge} · {o.heroTag || 'Digital Panchayat Platform · RTGS AP'}
              </span>
              <span className="bg-[#E5484D] text-white text-[11px] font-black px-3 py-1 rounded-full border border-black flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>{c.live || 'LIVE'}</span>
              </span>
            </div>

            <h1 className="font-chunky text-4xl sm:text-6xl lg:text-7xl text-[#3B3F63] dark:text-white uppercase tracking-tight leading-[0.95] mb-4">
              {activeLang === 'te' ? 'గ్రామసేతు' : activeLang === 'hi' ? 'ग्रामसेतु' : 'GramSetu'}
              <span className="text-[#3B3F63] dark:text-[#A3B7D8] mx-2">·</span>
              <span className="text-[#3B3F63] dark:text-[#A3B7D8]">
                {activeLang === 'te' ? currentVillage.nameTe : currentVillage.name}
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <RotatedPill
                text={o.hubSubtitle || 'Andhra Pradesh Live Hub'}
                rotation="-rotate-2"
                bg="bg-[#363636] dark:bg-[#A3B7D8]"
                textColor="text-white dark:text-black"
              />
              <span className="text-xs sm:text-sm font-bold text-[#3B3F63] dark:text-gray-200 bg-white dark:bg-[#141620] px-4 py-2 rounded-full border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow">
                {currentVillage.mandalName} {c.mandal || 'Mandal'} · {currentVillage.districtName} {c.district || 'District'}
              </span>
              <span className="text-xs sm:text-sm font-black text-black bg-[#A3B7D8] px-3.5 py-2 rounded-full border-2 border-[#1E1E24] sticker-shadow">
                {c.pincode || 'PIN'}: {currentVillage.pincode}
              </span>
            </div>
          </div>

          {/* Quick Action Badges on right side */}
          <div className="flex flex-wrap lg:flex-col gap-3 w-full lg:w-auto self-stretch justify-end">
            <button
              onClick={() => onTabChange('marketplace')}
              className="flex-1 lg:flex-none bg-[#363636] hover:bg-black dark:bg-[#A3B7D8] dark:hover:bg-white text-white dark:text-black font-black text-xs sm:text-sm px-5 py-3 rounded-2xl border-2 border-black sticker-shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{o.visitMarketBtn || 'Visit Rythu Bazaar'}</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onTabChange('newsWorks')}
              className="flex-1 lg:flex-none bg-white hover:bg-gray-100 dark:bg-[#1E212E] dark:hover:bg-[#252839] text-[#3B3F63] dark:text-white font-black text-xs sm:text-sm px-5 py-3 rounded-2xl border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{o.trackWorksBtn || 'Track Ongoing Works'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Real-time Telemetry News Ticker Strip */}
        <div className="mt-6 pt-4 border-t-2 border-[#1E1E24]/20 dark:border-white/10 flex items-center gap-3 overflow-hidden text-xs">
          <div className="flex items-center gap-1.5 bg-[#E5484D] text-white px-3 py-1 rounded-full font-black uppercase text-[11px] whitespace-nowrap shadow-sm">
            <Radio size={12} className="animate-pulse" />
            <span>{tick.liveUpdate || 'LIVE UPDATES'}</span>
          </div>
          <div className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-none font-bold text-[#3B3F63] dark:text-gray-300 flex items-center gap-8 text-xs py-1">
            <span>🌾 {tick.item1 || 'Rythu Bharosa 3rd Installment direct DBT credits underway across all AP mandals'}</span>
            <span>•</span>
            <span>🌶️ {tick.item2 || 'Agmarknet AP: Guntur Chilli Teja variety benchmark ₹18,400/Qtl, Bapatla Sona Rice ₹2,600/Qtl'}</span>
            <span>•</span>
            <span>🌊 {tick.item3 || 'APSDMA Alert: Coastal Fishermen advisory in effect'}</span>
            <span>•</span>
            <span>🚰 {tick.item4 || 'Jal Jeevan Mission: 100% functional tap connection achieved in 13 districts'}</span>
          </div>
        </div>
      </div>

      {/* 2. DISTRICT / MANDAL / VILLAGE DRILLDOWN SEARCH - Full Width */}
      <div className="w-full bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5 sm:p-7">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3B3F63]/60 dark:text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchVillagePlaceholder}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#F5EFE6] dark:bg-[#141620] border-2 border-[#1E1E24] dark:border-[#383D54] text-xs sm:text-sm font-bold text-[#3B3F63] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B3F63]"
            />
          </div>

          <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedDistrict('all')}
              className={`px-4 py-2.5 rounded-full text-xs font-black whitespace-nowrap border-2 border-[#1E1E24] transition-all cursor-pointer ${
                selectedDistrict === 'all'
                  ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow'
                  : 'bg-gray-100 dark:bg-gray-800 text-[#3B3F63] dark:text-gray-200 hover:bg-gray-200'
              }`}
            >
              {activeLang === 'te' ? 'అన్ని జిల్లాలు' : activeLang === 'hi' ? 'सभी जिले' : 'All Districts'}
            </button>
            {AP_DISTRICTS.map((dist) => (
              <button
                key={dist.id}
                onClick={() => setSelectedDistrict(dist.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-black whitespace-nowrap border-2 border-[#1E1E24] transition-all cursor-pointer ${
                  selectedDistrict === dist.id
                    ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow'
                    : 'bg-gray-100 dark:bg-gray-800 text-[#3B3F63] dark:text-gray-200 hover:bg-gray-200'
                }`}
              >
                {activeLang === 'te' ? dist.nameTe : dist.name}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Village Quick Switcher Pills */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center gap-2">
          <span className="text-xs font-black uppercase text-[#3B3F63]/70 dark:text-gray-300 mr-2">
            {o.exploreVillages || 'Explore Village Hubs:'}
          </span>
          {filteredVillages.map((v) => (
            <button
              key={v.id}
              onClick={() => onSelectVillage(v.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold border-2 border-[#1E1E24] transition-transform hover:scale-105 cursor-pointer ${
                v.id === currentVillage.id
                  ? 'bg-[#363636] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow'
                  : 'bg-[#A3B7D8] text-black hover:bg-[#91A6C8]'
              }`}
            >
              {activeLang === 'te' ? v.nameTe : v.name} ({v.code})
            </button>
          ))}
        </div>
      </div>

      {/* 3. SARPANCH COMMAND PROFILE & JURISDICTION CARD - Full Width */}
      <div className="w-full bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow bg-gray-200 flex-shrink-0">
              <img
                src={currentVillage.sarpanch.photo}
                alt={currentVillage.sarpanch.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#363636] dark:bg-[#A3B7D8] text-white dark:text-black text-[11px] font-black uppercase px-3 py-0.5 rounded-full border border-black shadow">
                  {o.villageHead || 'Village Head'}
                </span>
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-300">
                  {o.gramSabhaActive || 'Active · Regular Session'}
                </span>
              </div>
              <h3 className="font-chunky text-2xl sm:text-3xl text-[#3B3F63] dark:text-white leading-tight mt-1">
                {activeLang === 'te' ? currentVillage.sarpanch.nameTe : currentVillage.sarpanch.name}
              </h3>
              <p className="text-xs font-bold text-gray-600 dark:text-gray-400 mt-1">
                {o.term || 'Term'}: {currentVillage.sarpanch.term} · {currentVillage.sarpanch.party} · {o.secretariatCode || 'Secretariat'}: <strong className="text-[#3B3F63] dark:text-white font-mono">{currentVillage.code}</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${currentVillage.sarpanch.phone}`}
              className="flex-1 md:flex-none bg-[#F5EFE6] dark:bg-[#141620] text-[#3B3F63] dark:text-white font-bold text-xs px-4 py-2.5 rounded-2xl border-2 border-[#1E1E24] dark:border-[#383D54] flex items-center justify-center gap-2 hover:bg-gray-200"
            >
              <Phone size={14} />
              <span>{currentVillage.sarpanch.phone}</span>
            </a>
            <button
              onClick={() => onTabChange('adminPanel')}
              className="flex-1 md:flex-none bg-[#3B3F63] hover:bg-black text-white text-xs font-black px-5 py-2.5 rounded-2xl border-2 border-black sticker-shadow flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>{o.manageVillage || 'Manage Village'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* 4. KEY VITALS CARDS - Fluid 6-Column Grid Spanning Widescreen */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* Card 1: Population */}
        <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5 flex flex-col justify-between hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase text-[#3B3F63]/70 dark:text-gray-400">
              {c.population || 'Population'}
            </span>
            <div className="w-8 h-8 rounded-full bg-[#A3B7D8] flex items-center justify-center border-2 border-[#1E1E24]">
              <Users size={16} className="text-black" />
            </div>
          </div>
          <div>
            <div className="font-chunky text-3xl sm:text-4xl text-[#3B3F63] dark:text-white">
              {currentVillage.stats.population.toLocaleString()}
            </div>
            <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 mt-1">
              {o.aadhaarLinked || '100% Aadhaar Linked'}
            </p>
          </div>
        </div>

        {/* Card 2: Households */}
        <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5 flex flex-col justify-between hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase text-[#3B3F63]/70 dark:text-gray-400">
              {c.households || 'Households'}
            </span>
            <div className="w-8 h-8 rounded-full bg-[#A3B7D8] flex items-center justify-center border-2 border-[#1E1E24]">
              <Home size={16} className="text-black" />
            </div>
          </div>
          <div>
            <div className="font-chunky text-3xl sm:text-4xl text-[#3B3F63] dark:text-white">
              {currentVillage.stats.households.toLocaleString()}
            </div>
            <p className="text-[11px] font-bold text-gray-600 dark:text-gray-400 mt-1">
              {o.electrified || '100% Electrified'}
            </p>
          </div>
        </div>

        {/* Card 3: Active Farms */}
        <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5 flex flex-col justify-between hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase text-[#3B3F63]/70 dark:text-gray-400">
              {c.activeFarms || 'Active Farms'}
            </span>
            <div className="w-8 h-8 rounded-full bg-[#A3B7D8] flex items-center justify-center border-2 border-[#1E1E24]">
              <Tractor size={16} className="text-black" />
            </div>
          </div>
          <div>
            <div className="font-chunky text-3xl sm:text-4xl text-[#3B3F63] dark:text-white">
              {currentVillage.stats.activeFarms}
            </div>
            <p className="text-[11px] font-bold text-gray-600 dark:text-gray-400 mt-1">
              {currentVillage.stats.cultivatedAcres} {o.cultivatedAcres || 'Acres'}
            </p>
          </div>
        </div>

        {/* Card 4: DWCRA / SHG Repayment Rate */}
        <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5 flex flex-col justify-between hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase text-[#3B3F63]/70 dark:text-gray-400">
              {o.shgRepayment || 'SHG Repayment'}
            </span>
            <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center border-2 border-[#1E1E24]">
              <Coins size={16} className="text-emerald-900" />
            </div>
          </div>
          <div>
            <div className="font-chunky text-3xl sm:text-4xl text-emerald-700 dark:text-emerald-400">
              {currentVillage.stats.shgLoanRepayment}
            </div>
            <p className="text-[11px] font-bold text-gray-600 dark:text-gray-400 mt-1">
              {currentVillage.stats.shgGroups} {o.shgGroups || 'SHG Groups'}
            </p>
          </div>
        </div>

        {/* Card 5: Water & Canal Saturation */}
        <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5 flex flex-col justify-between hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase text-[#3B3F63]/70 dark:text-gray-400">
              {o.waterPoints || 'Water Points'}
            </span>
            <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center border-2 border-[#1E1E24]">
              <Droplets size={16} className="text-blue-900" />
            </div>
          </div>
          <div>
            <div className="font-chunky text-3xl sm:text-4xl text-[#3B3F63] dark:text-white">
              {currentVillage.stats.waterSources}
            </div>
            <p className="text-[11px] font-bold text-gray-600 dark:text-gray-400 mt-1">
              {o.waterSub || 'Jal Jeevan Taps & RO'}
            </p>
          </div>
        </div>

        {/* Card 6: Live Weather Snapshot */}
        <div className="bg-[#363636] dark:bg-[#151722] text-white rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5 flex flex-col justify-between hover:-translate-y-1 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase text-[#A3B7D8]">
              {o.weatherNow || 'Live Weather'}
            </span>
            <CloudSun size={20} className="text-[#A3B7D8]" />
          </div>
          <div>
            <div className="font-chunky text-3xl sm:text-4xl text-[#A3B7D8]">
              {currentVillage.weather.temp}
            </div>
            <p className="text-[11px] font-bold text-gray-200 mt-1">
              {activeLang === 'te' ? currentVillage.weather.conditionTe : currentVillage.weather.condition}
            </p>
            <div className="text-[10px] text-gray-400 mt-1 flex items-center gap-1.5">
              <span>{o.rain || 'Rain'}: {currentVillage.weather.rainChance}</span>
              <span>•</span>
              <span>{o.wind || 'Wind'}: {currentVillage.weather.windSpeed}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ANALYTICS & INSIGHTS - Full Width Presentation Card (Slide 9) */}
      <div className="w-full bg-[#363636] dark:bg-[#181B26] text-white rounded-[32px] border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow-lg p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-4 left-4 hidden sm:block">
          <RingSticker size={48} outerColor="#363636" innerColor="#A3B7D8" />
        </div>
        <div className="absolute bottom-4 right-4 hidden sm:block">
          <PlusSticker size={42} color="#A3B7D8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 sm:pl-10">
            <div className="inline-block bg-[#A3B7D8] text-black font-black text-xs px-3.5 py-1 rounded-full mb-3 border border-black shadow">
              {o.analyticsBadge || 'Village Performance Index'}
            </div>
            <h2 className="font-chunky text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-3">
              {o.analyticsTitle || 'Analytics & Governance Insights'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal mb-5">
              {o.analyticsDesc || 'Real-time village governance telemetry covering e-Crop verification coverage, grievance resolution speed, Rythu Bazaar trade volume, and Jal Jeevan tap saturation for'}{' '}
              <strong className="text-white">{activeLang === 'te' ? currentVillage.nameTe : currentVillage.name}</strong>.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onTabChange('newsWorks')}
                className="bg-[#A3B7D8] text-[#1E1E24] font-black text-xs px-5 py-2.5 rounded-full border-2 border-black sticker-shadow hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{o.trackWorksBtn || 'Track Ongoing Works'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Interactive Chart Visualizer */}
          <div className="lg:col-span-7 bg-[#282828] dark:bg-[#12141D] rounded-2xl p-6 border-2 border-white/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black text-gray-300 uppercase tracking-wider">
                {o.chartTitle || 'Monthly Governance Metric Progress (2026)'}
              </span>
              <span className="text-xs font-bold text-emerald-400">
                {o.chartEfficiency || '+18.4% Efficiency'}
              </span>
            </div>

            {/* Line chart / bars simulation */}
            <div className="h-44 w-full flex items-end justify-between gap-3 pt-6 pb-2 border-b border-gray-700 relative">
              <div className="absolute inset-x-0 top-0 border-b border-gray-800 text-[10px] text-gray-500">100%</div>
              <div className="absolute inset-x-0 top-1/2 border-b border-gray-800 text-[10px] text-gray-500">50%</div>

              {[
                { label: activeLang === 'te' ? 'ఈ-క్రాప్ నమోదు' : 'e-Crop Booking', value: 88, color: 'bg-[#A3B7D8]' },
                { label: activeLang === 'te' ? 'జల్ జీవన్ కుళాయిలు' : 'Jal Jeevan Taps', value: 92, color: 'bg-blue-400' },
                { label: activeLang === 'te' ? 'సమస్యల పరిష్కారం' : 'Grievance SLA', value: 96, color: 'bg-emerald-400' },
                { label: activeLang === 'te' ? 'డీబీటీ చెల్లింపులు' : 'DBT Settlement', value: 99, color: 'bg-amber-300' },
                { label: activeLang === 'te' ? 'డ్వాక్రా రికవరీ' : 'SHG Recovery', value: 98, color: 'bg-purple-300' },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 z-10">
                  <span className="text-[10px] font-extrabold text-white">{item.value}%</span>
                  <div
                    className={`w-full max-w-[48px] ${item.color} rounded-t-lg transition-all duration-700 hover:opacity-90`}
                    style={{ height: `${item.value * 1.2}px` }}
                  ></div>
                  <span className="text-[10px] font-bold text-gray-300 text-center line-clamp-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
              <span>{o.chartSource || 'Source: AP Real Time Governance Society (RTGS) Amaravati'}</span>
              <span className="text-[#A3B7D8] font-bold">{o.chartVerified || '100% Verified'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. PRIMARY AGRICULTURAL CROPS - Full Width Responsive Grid */}
      <div className="w-full bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="font-chunky text-2xl text-[#3B3F63] dark:text-white uppercase">
              {o.cropsTitle || 'Primary Agricultural Crops'}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
              {o.cropsSub || 'Major harvests and specialty produce farmed in'}{' '}
              <strong>{activeLang === 'te' ? currentVillage.nameTe : currentVillage.name}</strong>
            </p>
          </div>
          <button
            onClick={() => onTabChange('marketplace')}
            className="bg-[#363636] hover:bg-black dark:bg-[#A3B7D8] dark:hover:bg-white text-white dark:text-black text-xs font-black px-4 py-2 rounded-full border border-black transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>{o.visitMarketBtn || 'Visit Rythu Bazaar'}</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {currentVillage.primaryCrops.map((crop, idx) => (
            <div
              key={idx}
              className="bg-[#F5EFE6] dark:bg-[#141620] rounded-2xl border-2 border-[#1E1E24] dark:border-[#383D54] p-3 text-center hover:bg-[#EAE2D3] dark:hover:bg-[#1E212E] transition-colors"
            >
              <span className="text-2xl">🌱</span>
              <div className="font-bold text-xs sm:text-sm text-[#3B3F63] dark:text-gray-200 mt-1">
                {crop}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
