import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Radio, 
  Users, 
  Home, 
  Plus, 
  Check, 
  X, 
  Download, 
  FileSpreadsheet, 
  FileText, 
  AlertTriangle, 
  ShoppingBag, 
  Send,
  Eye,
  History,
  CheckCircle2
} from 'lucide-react';
import { StarburstSticker, PlusSticker, RingSticker, RotatedPill } from './ThemeStickers';
import confetti from 'canvas-confetti';

export function SarpanchAdmin({
  currentVillage,
  onBroadcastAlert,
  onAddNewNotice,
  activeLang,
  t
}) {
  const [activeAdminTab, setActiveAdminTab] = useState('overview'); // 'overview', 'residents', 'products', 'broadcast'
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const ad = t.admin || {};

  // New resident form
  const [pendingResidents, setPendingResidents] = useState([
    { id: 'pres-1', name: 'G. Venkatesh', doorNo: '3-19/B', occupation: activeLang === 'te' ? 'పాడి రైతు' : 'Dairy Farmer', status: 'Pending' },
    { id: 'pres-2', name: 'M. Padmavathi', doorNo: '5-44', occupation: activeLang === 'te' ? 'చేనేత కార్మికురాలు / డ్వాక్రా' : 'Weaver / SHG', status: 'Pending' }
  ]);

  // Moderation products
  const [pendingProducts, setPendingProducts] = useState([
    { id: 'pp-1', title: activeLang === 'te' ? 'తాజా బీరకాయలు (Ridge Gourd)' : 'Farm Fresh Ridge Gourd (బీరకాయ)', seller: 'V. Sambasiva Rao', price: '₹40/kg', status: 'Pending' },
    { id: 'pp-2', title: activeLang === 'te' ? 'గానుగ వేరుశనగ నూనె' : 'Cold-Pressed Groundnut Oil (గానుగ నూనె)', seller: 'K. Lakshmi', price: '₹220/L', status: 'Pending' }
  ]);

  // Emergency broadcast input
  const [alertHeadline, setAlertHeadline] = useState('');
  const [alertSent, setAlertSent] = useState(false);

  const handleApproveResident = (id) => {
    setPendingResidents(prev => prev.filter(r => r.id !== id));
    confetti({ particleCount: 30, spread: 50 });
  };

  const handleApproveProduct = (id) => {
    setPendingProducts(prev => prev.filter(p => p.id !== id));
    confetti({ particleCount: 30, spread: 50 });
  };

  const handleBroadcast = (e) => {
    e.preventDefault();
    if (!alertHeadline.trim()) return;

    onBroadcastAlert({
      level: 'danger',
      title: alertHeadline,
      description: `Emergency priority broadcast issued by Sarpanch ${currentVillage.sarpanch.name}.`,
      time: 'Just now',
      isEmergency: true
    });

    setAlertSent(true);
    confetti({ particleCount: 60, spread: 70 });
    setTimeout(() => {
      setAlertSent(false);
      setAlertHeadline('');
    }, 2500);
  };

  const handleExportData = (type) => {
    setDownloadSuccess(true);
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Village,Mandal,District,Population,Households,Sarpanch\n" +
      `${currentVillage.name},${currentVillage.mandalName},${currentVillage.districtName},${currentVillage.stats.population},${currentVillage.stats.households},${currentVillage.sarpanch.name}`;
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${currentVillage.name}_Panchayat_Report_2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloadSuccess(false), 2000);
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in">
      {/* Admin Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-[#1E1E24] dark:border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <RotatedPill text={ad.badge || "Sarpanch Command Console"} rotation="-rotate-1" bg="bg-[#363636] dark:bg-[#A3B7D8]" textColor="text-white dark:text-black" />
            <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
              {ad.jurisdiction || 'Authorized Jurisdiction'}: {activeLang === 'te' ? currentVillage.nameTe : currentVillage.name}
            </span>
          </div>
          <h2 className="font-chunky text-3xl sm:text-5xl text-[#3B3F63] dark:text-white uppercase">
            {ad.title || "Village Head Control Room"}
          </h2>
        </div>

        {/* Quick export buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleExportData('csv')}
            className="bg-white dark:bg-[#1E212E] text-[#1E1E24] dark:text-white text-xs font-black px-4 py-2.5 rounded-full border-2 border-black dark:border-[#383D54] sticker-shadow hover:bg-[#A3B7D8] flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Download size={14} />
            <span>{ad.exportCsv || "Export CSV"}</span>
          </button>
          <button
            onClick={() => handleExportData('pdf')}
            className="bg-[#3B3F63] text-white text-xs font-black px-4 py-2.5 rounded-full border-2 border-black sticker-shadow hover:bg-black flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <FileText size={14} />
            <span>{ad.exportPdf || "Export Official PDF"}</span>
          </button>
        </div>
      </div>

      {downloadSuccess && (
        <div className="bg-emerald-100 dark:bg-emerald-950 border-2 border-emerald-600 rounded-2xl p-3 text-xs font-bold text-emerald-800 dark:text-emerald-300 text-center animate-in fade-in">
          ✓ {ad.exportedSuccess || "Official Village Administration Report Exported Successfully!"}
        </div>
      )}

      {/* Admin Navigation Pills */}
      <div className="flex items-center gap-2 border-b border-gray-300 dark:border-gray-700 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveAdminTab('overview')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all cursor-pointer ${
            activeAdminTab === 'overview' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-200'
          }`}
        >
          {ad.tabDashboard || "Dashboard & Vitals"}
        </button>

        <button
          onClick={() => setActiveAdminTab('residents')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all flex items-center gap-1.5 cursor-pointer ${
            activeAdminTab === 'residents' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-200'
          }`}
        >
          <span>{ad.tabVerifyRes || "Verify Residents"}</span>
          {pendingResidents.length > 0 && (
            <span className="bg-[#E5484D] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {pendingResidents.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveAdminTab('products')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all flex items-center gap-1.5 cursor-pointer ${
            activeAdminTab === 'products' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-200'
          }`}
        >
          <span>{ad.tabModerateProd || "Moderate Rythu Bazaar"}</span>
          {pendingProducts.length > 0 && (
            <span className="bg-[#E5484D] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {pendingProducts.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveAdminTab('broadcast')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all cursor-pointer ${
            activeAdminTab === 'broadcast' ? 'bg-[#E5484D] text-white sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-200'
          }`}
        >
          {ad.tabBlast || "Emergency Broadcast Blast"}
        </button>
      </div>

      {/* 1. ADMIN DASHBOARD OVERVIEW */}
      {activeAdminTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5">
              <span className="text-xs font-black uppercase text-gray-500 dark:text-gray-400">{ad.popTitle || "Village Population"}</span>
              <div className="font-chunky text-3xl sm:text-4xl text-[#3B3F63] dark:text-white mt-1">
                {currentVillage.stats.population.toLocaleString()}
              </div>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold block mt-1">{ad.aadhaarStat || "100% Aadhaar Linked"}</span>
            </div>

            <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5">
              <span className="text-xs font-black uppercase text-gray-500 dark:text-gray-400">{ad.householdsTitle || "Enrolled Households"}</span>
              <div className="font-chunky text-3xl sm:text-4xl text-[#3B3F63] dark:text-white mt-1">
                {currentVillage.stats.households.toLocaleString()}
              </div>
              <span className="text-[11px] text-blue-700 dark:text-blue-400 font-bold block mt-1">{ad.dpdpStat || "DPDP Consent Active"}</span>
            </div>

            <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5">
              <span className="text-xs font-black uppercase text-gray-500 dark:text-gray-400">{ad.grievancesTitle || "Open Grievances"}</span>
              <div className="font-chunky text-3xl sm:text-4xl text-amber-600 mt-1">
                3
              </div>
              <span className="text-[11px] text-gray-600 dark:text-gray-400 font-bold block mt-1">{ad.grievanceAvg || "Avg Resolution: 24h"}</span>
            </div>

            <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5">
              <span className="text-xs font-black uppercase text-gray-500 dark:text-gray-400">{ad.listingsTitle || "Rythu Bazaar Listings"}</span>
              <div className="font-chunky text-3xl sm:text-4xl text-emerald-700 dark:text-emerald-400 mt-1">
                6 Active
              </div>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold block mt-1">Zero Middlemen</span>
            </div>
          </div>

          {/* Quick Notice to Sarpanch */}
          <div className="bg-[#363636] dark:bg-[#181B26] text-white rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-6">
            <h3 className="font-chunky text-2xl text-white mb-2 uppercase">
              {ad.authorityNoteTitle || "Sarpanch Executive Authority Note"}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {ad.authorityNoteDesc || `As the constitutionally elected head of this Gram Panchayat, your administrative actions are protected and audited under the AP Panchayat Raj Act (1994) and Digital Personal Data Protection Act (2023).`}
            </p>
          </div>
        </div>
      )}

      {/* 2. RESIDENT VERIFICATION */}
      {activeAdminTab === 'residents' && (
        <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-6 space-y-4">
          <h3 className="font-chunky text-2xl text-[#3B3F63] dark:text-white uppercase">
            {ad.pendingResidents || "Pending Resident Applications"} ({pendingResidents.length})
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {ad.pendingResidentsSub || "Verify new villagers requesting access to Rythu Bharosa subsidies and e-Crop entries."}
          </p>

          {pendingResidents.length === 0 ? (
            <div className="bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-400 p-6 rounded-2xl text-center text-xs font-bold text-emerald-800 dark:text-emerald-300">
              {ad.allResidentsVerified || `All resident applications have been verified!`}
            </div>
          ) : (
            <div className="space-y-3">
              {pendingResidents.map((r) => (
                <div
                  key={r.id}
                  className="bg-[#F5EFE6] dark:bg-[#141620] rounded-2xl border-2 border-[#1E1E24] dark:border-[#383D54] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <h4 className="font-bold text-sm text-[#3B3F63] dark:text-white">{r.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {ad.doorNo || "Door No"}: {r.doorNo} · {ad.occupation || "Occupation"}: {r.occupation}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleApproveResident(r.id)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-1.5 rounded-full border border-black flex items-center gap-1 cursor-pointer"
                    >
                      <Check size={14} />
                      <span>{ad.approveResBtn || "Approve Resident"}</span>
                    </button>
                    <button
                      onClick={() => setPendingResidents(prev => prev.filter(item => item.id !== r.id))}
                      className="bg-red-200 hover:bg-red-300 text-red-900 text-xs font-bold px-3 py-1.5 rounded-full border border-black flex items-center gap-1 cursor-pointer"
                    >
                      <X size={14} />
                      <span>{ad.rejectBtn || "Reject"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 3. MODERATE MARKETPLACE PRODUCTS */}
      {activeAdminTab === 'products' && (
        <div className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-6 space-y-4">
          <h3 className="font-chunky text-2xl text-[#3B3F63] dark:text-white uppercase">
            {ad.pendingProduce || "Pending Marketplace Listings"} ({pendingProducts.length})
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {ad.pendingProduceSub || "Moderate produce submitted by village farmers before showing on public Rythu Bazaar."}
          </p>

          {pendingProducts.length === 0 ? (
            <div className="bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-400 p-6 rounded-2xl text-center text-xs font-bold text-emerald-800 dark:text-emerald-300">
              {ad.noPendingProduce || "No pending products awaiting approval."}
            </div>
          ) : (
            <div className="space-y-3">
              {pendingProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#F5EFE6] dark:bg-[#141620] rounded-2xl border-2 border-[#1E1E24] dark:border-[#383D54] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <h4 className="font-bold text-sm text-[#3B3F63] dark:text-white">{p.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {ad.seller || "Seller"}: {p.seller} · {ad.directPrice || "Direct Price"}: <strong className="text-black dark:text-white">{p.price}</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleApproveProduct(p.id)}
                      className="bg-[#3B3F63] hover:bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full border border-black flex items-center gap-1 cursor-pointer"
                    >
                      <Check size={14} />
                      <span>{ad.approveProdBtn || "Approve Listing"}</span>
                    </button>
                    <button
                      onClick={() => setPendingProducts(prev => prev.filter(item => item.id !== p.id))}
                      className="bg-red-200 text-red-900 text-xs font-bold px-3 py-1.5 rounded-full border border-black cursor-pointer"
                    >
                      {ad.rejectBtn || "Reject"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 4. EMERGENCY BROADCAST */}
      {activeAdminTab === 'broadcast' && (
        <div className="bg-[#E5484D] text-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <Radio size={24} className="animate-pulse" />
            <h3 className="font-chunky text-3xl uppercase">
              {ad.blastTitle || "Immediate Village Broadcast Blast"}
            </h3>
          </div>
          <p className="text-xs text-red-100 mb-6">
            {ad.blastDesc || `Pushes red banner alert to all logged-in devices and dispatches SMS gateway alert to all households in this village.`}
          </p>

          {alertSent ? (
            <div className="bg-white text-emerald-800 p-6 rounded-2xl border-2 border-black text-center">
              <div className="font-chunky text-xl">{ad.blastSuccess || "Broadcast Dispatched Successfully! Alert sent to entire village."}</div>
            </div>
          ) : (
            <form onSubmit={handleBroadcast} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider mb-1">
                  {ad.alertMsgLabel || "Alert Message:"}
                </label>
                <input
                  type="text"
                  required
                  value={alertHeadline}
                  onChange={(e) => setAlertHeadline(e.target.value)}
                  placeholder={ad.alertPlaceholder || "e.g. Canal breach alert: Western channel sluice closed. Move livestock to high ground."}
                  className="w-full bg-white text-black border-2 border-black rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-300 hover:bg-yellow-400 text-black text-xs sm:text-sm font-black px-6 py-2.5 rounded-full border-2 border-black sticker-shadow flex items-center gap-1.5 cursor-pointer"
              >
                <Send size={15} />
                <span>{ad.blastBtn || "Blast Emergency Alert"}</span>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
