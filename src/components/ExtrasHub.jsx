import React, { useState } from 'react';
import { 
  CloudSun, 
  HelpCircle, 
  Search, 
  Coins, 
  Zap, 
  Droplet, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  Send, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { AP_SCHEMES, INITIAL_GRIEVANCES, SHG_DATA } from '../data/extras';
import { StarburstSticker, PlusSticker, RingSticker, RotatedPill } from './ThemeStickers';
import confetti from 'canvas-confetti';

export function ExtrasHub({ currentVillage, activeLang, t }) {
  const [activeSubTab, setActiveSubTab] = useState('schemes'); // 'schemes', 'weather', 'shg', 'outages', 'grievance'

  // Scheme Finder state
  const [filterOccupation, setFilterOccupation] = useState('all');
  const [filterLand, setFilterLand] = useState('all');

  // Grievance state
  const [grievances, setGrievances] = useState(INITIAL_GRIEVANCES);
  const [grvSubject, setGrvSubject] = useState('');
  const [grvCategory, setGrvCategory] = useState('Street Lighting & Electricity');
  const [grvName, setGrvName] = useState('');
  const [newTicketId, setNewTicketId] = useState(null);

  const villageShg = SHG_DATA.currentVillageStats[currentVillage.id] || {
    groups: 25,
    members: 300,
    loanDisbursed: '₹1.50 Crores',
    repayment: '98.5%',
    popularBusiness: 'Agri-processing'
  };

  const handleLodgeGrievance = (e) => {
    e.preventDefault();
    if (!grvSubject.trim()) return;

    const generatedId = `GRV-AP-${Math.floor(1000 + Math.random() * 9000)}`;
    const newGrv = {
      id: generatedId,
      villageId: currentVillage.id,
      subject: grvSubject,
      subjectTe: grvSubject,
      submittedBy: grvName || 'Resident Villager',
      category: grvCategory,
      status: 'Under Review',
      priority: 'Medium',
      date: 'Today',
      notes: 'Acknowledged by Grama Sachivalayam desk. Token dispatched via SMS.'
    };

    setGrievances([newGrv, ...grievances]);
    setNewTicketId(generatedId);
    setGrvSubject('');
    setGrvName('');
    confetti({ particleCount: 35, spread: 60 });
  };

  const ex = t.extras || {};

  return (
    <div className="w-full space-y-8 animate-in fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-[#1E1E24] dark:border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <RotatedPill text={ex.badge || "Citizen Services & Welfare"} rotation="-rotate-1" bg="bg-[#A3B7D8]" textColor="text-black" />
            <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
              Government Schemes, DWCRA SHG Tracker & Grievance Portal
            </span>
          </div>
          <h2 className="font-chunky text-3xl sm:text-5xl text-[#3B3F63] dark:text-white uppercase tracking-tight">
            {ex.title || "Schemes, SHG & Services"}
          </h2>
        </div>
      </div>

      {/* Extras Sub Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-300 dark:border-gray-700 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveSubTab('schemes')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'schemes' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-300'
          }`}
        >
          <HelpCircle size={15} />
          <span>{ex.tabSchemes || 'Scheme Finder'}</span>
        </button>

        <button
          onClick={() => setActiveSubTab('weather')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'weather' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-300'
          }`}
        >
          <CloudSun size={15} />
          <span>{ex.tabWeather || 'Weather & Crop Advisory'}</span>
        </button>

        <button
          onClick={() => setActiveSubTab('shg')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'shg' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-300'
          }`}
        >
          <Coins size={15} />
          <span>{ex.tabShg || 'DWCRA SHG Tracker'}</span>
        </button>

        <button
          onClick={() => setActiveSubTab('outages')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'outages' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-300'
          }`}
        >
          <Zap size={15} />
          <span>{ex.tabOutages || 'Utilities & Outages'}</span>
        </button>

        <button
          onClick={() => setActiveSubTab('grievance')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'grievance' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-300'
          }`}
        >
          <MessageSquare size={15} />
          <span>{ex.tabGrievance || 'Complaint Box'} ({grievances.length})</span>
        </button>
      </div>

      {/* 1. GOVERNMENT SCHEME FINDER */}
      {activeSubTab === 'schemes' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6">
            <h3 className="font-chunky text-2xl text-[#3B3F63] uppercase mb-2">
              AP Government Scheme Eligibility Matcher
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              Filter by beneficiary category to discover eligible DBT welfare schemes for your household.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AP_SCHEMES.map((scheme) => (
                <div
                  key={scheme.id}
                  className="bg-[#F5EFE6] rounded-2xl border-2 border-[#1E1E24] p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase bg-[#363636] text-white px-2.5 py-0.5 rounded-full">
                        {scheme.category}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                        {scheme.status}
                      </span>
                    </div>

                    <h4 className="font-chunky text-lg text-[#3B3F63] mb-1">
                      {activeLang === 'te' ? scheme.nameTe : scheme.name}
                    </h4>

                    <div className="text-sm font-black text-emerald-700 mb-2">
                      Benefit: {scheme.benefit}
                    </div>

                    <p className="text-xs text-gray-700 mb-3">
                      <strong>Eligibility:</strong> {scheme.eligibility}
                    </p>

                    <div className="text-[11px] text-gray-600 bg-white/70 p-2.5 rounded-xl border border-gray-300">
                      <strong>Mandatory Documents:</strong> {scheme.documents}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-300 flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-bold">{scheme.deadline}</span>
                    <a
                      href={scheme.portalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-extrabold text-[#3B3F63] hover:underline flex items-center gap-1"
                    >
                      <span>Apply at Sachivalayam</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. WEATHER & CROP ADVISORY */}
      {activeSubTab === 'weather' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#363636] text-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase text-[#A3B7D8]">IMD Amaravati Forecast</span>
                <div className="font-chunky text-5xl text-white my-3">
                  {currentVillage.weather.temp}
                </div>
                <div className="font-extrabold text-base text-gray-200">
                  {currentVillage.weather.condition}
                </div>
                <div className="text-xs text-gray-400 mt-2 space-y-1">
                  <div>Rain Probability: <strong>{currentVillage.weather.rainChance}</strong></div>
                  <div>Relative Humidity: <strong>{currentVillage.weather.humidity}</strong></div>
                  <div>Wind Velocity: <strong>{currentVillage.weather.windSpeed}</strong></div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-700 text-[11px] text-gray-400">
                Automatic Doppler Radar Feed · Visakhapatnam Station
              </div>
            </div>

            <div className="md:col-span-2 bg-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6 space-y-4">
              <h3 className="font-chunky text-2xl text-[#3B3F63] uppercase">
                Rythu Bharosa Crop Advisory (Weekly Bulletin)
              </h3>

              <div className="bg-[#F5EFE6] rounded-2xl p-4 border-2 border-[#1E1E24]/30 space-y-2">
                <div className="font-bold text-xs uppercase text-emerald-800 flex items-center gap-1.5">
                  <FileCheck size={14} />
                  <span>Rice / Paddy Advisory:</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Panicle initiation phase in progress. Maintain 2-3 cm standing water in fields. Apply second split of nitrogen fertilizer along with MOP. Monitor for stem borer infestation; install pheromone traps at 4 per acre.
                </p>
              </div>

              <div className="bg-[#F5EFE6] rounded-2xl p-4 border-2 border-[#1E1E24]/30 space-y-2">
                <div className="font-bold text-xs uppercase text-amber-800 flex items-center gap-1.5">
                  <FileCheck size={14} />
                  <span>Chilli & Horticulture Advisory:</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Due to dry spells and diurnal temperature variation, black thrips incidence reported in Guntur & Krishna districts. Spray blue sticky traps (15 per acre) and use certified bio-pesticides. Avoid unauthorized heavy chemical mixes.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. DWCRA SHG TRACKER */}
      {activeSubTab === 'shg' && (
        <div className="space-y-6">
          <div className="bg-[#363636] text-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="bg-[#A3B7D8] text-black text-xs font-black px-3 py-1 rounded-full uppercase">
                  SERP Andhra Pradesh
                </span>
                <h3 className="font-chunky text-3xl uppercase text-white mt-2">
                  DWCRA Women SHG Village Tracker
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Empowering rural women micro-entrepreneurs across {currentVillage.name}.
                </p>
              </div>
              <div className="bg-emerald-400 text-black px-4 py-2 rounded-2xl border-2 border-black font-chunky text-2xl text-center">
                {villageShg.repayment}
                <span className="block text-[10px] font-bold uppercase">Repayment Rate</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#242424] p-4 rounded-2xl border border-gray-700">
                <span className="text-xs text-gray-400 block font-bold">Active SHG Groups</span>
                <div className="font-chunky text-3xl text-white mt-1">{villageShg.groups}</div>
              </div>
              <div className="bg-[#242424] p-4 rounded-2xl border border-gray-700">
                <span className="text-xs text-gray-400 block font-bold">Total Women Members</span>
                <div className="font-chunky text-3xl text-white mt-1">{villageShg.members}</div>
              </div>
              <div className="bg-[#242424] p-4 rounded-2xl border border-gray-700">
                <span className="text-xs text-gray-400 block font-bold">Bank Credit Disbursed</span>
                <div className="font-chunky text-3xl text-yellow-300 mt-1">{villageShg.loanDisbursed}</div>
              </div>
              <div className="bg-[#242424] p-4 rounded-2xl border border-gray-700">
                <span className="text-xs text-gray-400 block font-bold">Primary Enterprises</span>
                <div className="font-bold text-xs text-emerald-400 mt-1 line-clamp-2">{villageShg.popularBusiness}</div>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl text-xs text-gray-300 flex items-center justify-between">
              <span>Zero-Interest Subvention (YSR Sunna Vaddi) active for all compliant groups.</span>
              <span className="font-bold text-[#A3B7D8]">Audit Verified</span>
            </div>
          </div>
        </div>
      )}

      {/* 4. UTILITIES & OUTAGES */}
      {activeSubTab === 'outages' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap size={20} className="text-amber-600" />
              <h3 className="font-chunky text-xl text-[#3B3F63] uppercase">
                Electricity Schedule (APEPDCL / APCPDCL)
              </h3>
            </div>
            <div className="space-y-3">
              <div className="bg-[#F5EFE6] p-3 rounded-2xl border border-black/20 text-xs">
                <div className="flex justify-between font-bold text-[#3B3F63]">
                  <span>Agricultural 9-Hour Supply:</span>
                  <span className="text-emerald-700">06:00 AM - 03:00 PM (Active)</span>
                </div>
                <p className="text-gray-600 mt-1">High quality 3-phase power for all village farm pump sets.</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-2xl border border-amber-300 text-xs">
                <div className="flex justify-between font-bold text-amber-900">
                  <span>Scheduled Maintenance Notice:</span>
                  <span>Thursday, 08:00 AM - 12:00 PM</span>
                </div>
                <p className="text-amber-800 mt-1">Transformer upgrade in Ward 3 and 4.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6">
            <div className="flex items-center gap-2 mb-3">
              <Droplet size={20} className="text-blue-600" />
              <h3 className="font-chunky text-xl text-[#3B3F63] uppercase">
                Canal Irrigation & Drinking Water
              </h3>
            </div>
            <div className="space-y-3">
              <div className="bg-[#F5EFE6] p-3 rounded-2xl border border-black/20 text-xs">
                <div className="flex justify-between font-bold text-[#3B3F63]">
                  <span>Canal Water Release Rota:</span>
                  <span className="text-blue-700">Continuous 7 Days</span>
                </div>
                <p className="text-gray-600 mt-1">1,800 Cusecs discharged into village branch distributaries.</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-2xl border border-blue-300 text-xs">
                <div className="flex justify-between font-bold text-blue-900">
                  <span>RO Plant Operating Hours:</span>
                  <span>06:00 AM - 11:00 AM & 04:00 PM - 08:00 PM</span>
                </div>
                <p className="text-blue-800 mt-1">Subsidized clean drinking water at ₹5 per 20L can.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. GRIEVANCE & COMPLAINT BOX */}
      {activeSubTab === 'grievance' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Lodge Complaint Form */}
            <div className="lg:col-span-5 bg-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6">
              <h3 className="font-chunky text-2xl text-[#3B3F63] uppercase mb-1">
                Lodge Citizen Grievance
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                Direct submission to Sarpanch and Sachivalayam Secretary.
              </p>

              {newTicketId && (
                <div className="bg-emerald-100 border-2 border-emerald-600 rounded-2xl p-4 text-center mb-4">
                  <div className="font-chunky text-base text-emerald-800">Grievance Registered!</div>
                  <div className="text-xs text-emerald-700 mt-1">
                    Your Tracking Token: <strong className="font-mono">{newTicketId}</strong>
                  </div>
                </div>
              )}

              <form onSubmit={handleLodgeGrievance} className="space-y-3">
                <div>
                  <label className="block text-xs font-black text-[#3B3F63] mb-1">Your Name / Household:</label>
                  <input
                    type="text"
                    value={grvName}
                    onChange={(e) => setGrvName(e.target.value)}
                    placeholder="e.g. K. Appalaraju (Ward 3)"
                    className="w-full bg-[#F5EFE6] border-2 border-[#1E1E24] rounded-xl px-3 py-2 text-xs font-bold text-[#3B3F63]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#3B3F63] mb-1">Category:</label>
                  <select
                    value={grvCategory}
                    onChange={(e) => setGrvCategory(e.target.value)}
                    className="w-full bg-[#F5EFE6] border-2 border-[#1E1E24] rounded-xl px-3 py-2 text-xs font-bold text-[#3B3F63]"
                  >
                    <option value="Street Lighting & Electricity">Street Lighting & Electricity</option>
                    <option value="Irrigation & Water Canal">Irrigation & Canal Bund</option>
                    <option value="Drinking Water & RO Plant">Drinking Water & RO Plant</option>
                    <option value="Road Repair & Sanitation">Road Repair & Drainage</option>
                    <option value="Ration & Civil Supplies">Ration & Civil Supplies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#3B3F63] mb-1">Issue Description:</label>
                  <textarea
                    rows={3}
                    required
                    value={grvSubject}
                    onChange={(e) => setGrvSubject(e.target.value)}
                    placeholder="Describe the problem, exact street or survey location..."
                    className="w-full bg-[#F5EFE6] border-2 border-[#1E1E24] rounded-xl px-3 py-2 text-xs font-medium text-[#3B3F63]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full text-xs font-black bg-[#3B3F63] hover:bg-black text-white border-2 border-black sticker-shadow flex items-center justify-center gap-1.5"
                >
                  <Send size={14} />
                  <span>Submit Grievance</span>
                </button>
              </form>
            </div>

            {/* Existing Grievance Status Tracker */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-chunky text-2xl text-[#3B3F63] uppercase">
                Live Grievance Status
              </h3>
              {grievances.map((g) => (
                <div
                  key={g.id}
                  className="bg-white rounded-2xl border-2 border-[#1E1E24] p-4 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-gray-500">{g.id}</span>
                    <span
                      className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border border-black ${
                        g.status === 'Action Taken'
                          ? 'bg-emerald-200 text-emerald-900'
                          : g.status === 'Approved & Scheduled'
                          ? 'bg-blue-200 text-blue-900'
                          : 'bg-amber-200 text-amber-900'
                      }`}
                    >
                      {g.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-[#3B3F63] mb-1">{g.subject}</h4>
                  <p className="text-xs text-gray-600 mb-2">Category: {g.category} · By: {g.submittedBy}</p>

                  <div className="bg-[#F5EFE6] p-2.5 rounded-xl border border-black/10 text-xs text-[#3B3F63] font-medium">
                    <strong>Panchayat Note:</strong> {g.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
