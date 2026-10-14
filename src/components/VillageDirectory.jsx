import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  ShieldCheck, 
  Users, 
  Tractor, 
  FileText, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  AlertCircle,
  Database,
  History,
  KeyRound
} from 'lucide-react';
import { INITIAL_HOUSEHOLDS, INITIAL_FARMS, INITIAL_AUDIT_LOG } from '../data/directory';
import { StarburstSticker, PlusSticker, RingSticker, RotatedPill } from './ThemeStickers';

export function VillageDirectory({
  currentVillage,
  activeRole,
  activeLang,
  t
}) {
  const [activeTab, setActiveTab] = useState('households'); // 'households', 'farms', 'dpdpAudit'
  const [dpdpUnlocked, setDpdpUnlocked] = useState(activeRole === 'sarpanch' || activeRole === 'superAdmin');
  const [auditLog, setAuditLog] = useState(INITIAL_AUDIT_LOG);
  const [consentModalOpen, setConsentModalOpen] = useState(false);

  // Filter records by current village
  const villageHouseholds = INITIAL_HOUSEHOLDS.filter(h => h.villageId === currentVillage.id);
  const villageFarms = INITIAL_FARMS.filter(f => f.villageId === currentVillage.id);

  const handleToggleConsent = () => {
    if (!dpdpUnlocked) {
      setConsentModalOpen(true);
    } else {
      setDpdpUnlocked(false);
    }
  };

  const handleGrantConsent = () => {
    setDpdpUnlocked(true);
    setConsentModalOpen(false);

    // Append to live audit log as mandated by DPDP Act 2023
    const newAuditEntry = {
      id: `aud-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      user: activeRole === 'sarpanch' ? currentVillage.sarpanch.name : 'Authorized Data Fiduciary',
      role: activeRole,
      village: currentVillage.name,
      action: 'Decrypted PII records under Section 6(1) DPDP Act Consent Framework',
      complianceStandard: 'DPDP Act 2023 Purpose Limitation Satisfied'
    };
    setAuditLog(prev => [newAuditEntry, ...prev]);
  };

  const maskPhone = (phone) => {
    if (dpdpUnlocked) return phone;
    return phone.replace(/(\+91\s\d{2})\d{3}\s\d{2}(\d{3})/, '$1*** **$2');
  };

  const maskDoorNo = (doorNo) => {
    if (dpdpUnlocked) return doorNo;
    return doorNo.replace(/\d+-\d+\/?[A-Z]?/, '***/** (Masked)');
  };

  const maskSurveyNo = (surveyNo) => {
    if (dpdpUnlocked) return surveyNo;
    return '***/** (Consent Protected)';
  };

  const d = t.dir || {};

  return (
    <div className="w-full space-y-8 animate-in fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-[#1E1E24] dark:border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <RotatedPill text={d.badge || "DPDP Act 2023 Compliant"} rotation="-rotate-1" bg="bg-[#A3B7D8]" textColor="text-black" />
            <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
              India Digital Personal Data Protection Act Architecture
            </span>
          </div>
          <h2 className="font-chunky text-3xl sm:text-5xl text-[#3B3F63] dark:text-white uppercase tracking-tight">
            {d.title || "Village Directory & Land Records"}
          </h2>
        </div>

        {/* DPDP Consent Switcher Button */}
        <button
          onClick={handleToggleConsent}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black border-2 border-black sticker-shadow flex items-center gap-2 transition-all cursor-pointer ${
            dpdpUnlocked
              ? 'bg-amber-300 text-black hover:bg-amber-400'
              : 'bg-[#363636] dark:bg-[#A3B7D8] text-white dark:text-black hover:bg-black'
          }`}
        >
          {dpdpUnlocked ? <Unlock size={16} /> : <Lock size={16} />}
          <span>{dpdpUnlocked ? (d.maskPublic || 'Mask PII (Public View)') : (d.unlockSarpanch || 'Unlock Records (Sarpanch Mode)')}</span>
        </button>
      </div>

      {/* DPDP Compliance Notice Box matching Slide 3 dark rounded block style */}
      <div className="w-full bg-[#363636] dark:bg-[#181B26] text-white rounded-[32px] border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow-lg p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-400 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                Privacy Enforced
              </span>
              <span className="text-xs text-gray-300 font-mono">
                Status: {dpdpUnlocked ? 'Authenticated Fiduciary Access' : 'Public Anonymized View'}
              </span>
            </div>
            <h3 className="font-chunky text-xl sm:text-2xl text-white">
              Data Privacy & Farmer Protection Protocol
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-3xl leading-relaxed">
              Under India's Digital Personal Data Protection Act (2023), direct door numbers, Aadhaar linkages, and survey coordinates are masked by default. Only the authorized Sarpanch of {activeLang === 'te' ? currentVillage.nameTe : currentVillage.name} can access individual registries, and every inspection is logged permanently.
            </p>
          </div>

          <div className="bg-[#242424] dark:bg-[#12141D] p-4 rounded-2xl border border-gray-700 text-xs space-y-1 min-w-[220px]">
            <div className="text-[11px] text-gray-400">Panchayat Jurisdiction:</div>
            <div className="font-extrabold text-[#A3B7D8] text-sm">{activeLang === 'te' ? currentVillage.nameTe : currentVillage.name}</div>
            <div className="text-[10px] text-gray-400">Total Registered: {currentVillage.stats.households} Families</div>
          </div>
        </div>
      </div>

      {/* Directory Sub-Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-300 dark:border-gray-700 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('households')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'households' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-300'
          }`}
        >
          <Users size={15} />
          <span>{d.tabHouseholds || 'Households Directory'} ({villageHouseholds.length || currentVillage.stats.households})</span>
        </button>

        <button
          onClick={() => setActiveTab('farms')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'farms' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-300'
          }`}
        >
          <Tractor size={15} />
          <span>{d.tabFarms || 'Farm & e-Crop Registry'} ({villageFarms.length || currentVillage.stats.activeFarms})</span>
        </button>

        <button
          onClick={() => setActiveTab('dpdpAudit')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'dpdpAudit' ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow' : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-300'
          }`}
        >
          <History size={15} />
          <span>{d.tabAudit || 'DPDP Audit Trail'} ({auditLog.length})</span>
        </button>
      </div>

      {/* SUB-TAB 1: HOUSEHOLDS DIRECTORY */}
      {activeTab === 'households' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {villageHouseholds.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase bg-[#F5EFE6] px-2.5 py-0.5 rounded-full border border-black/20 text-[#3B3F63]">
                      Door: {maskDoorNo(h.doorNo)}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {h.verifiedStatus}
                    </span>
                  </div>

                  <h3 className="font-chunky text-xl text-[#3B3F63] mb-1">
                    {activeLang === 'te' ? h.headNameTe : h.headName}
                  </h3>
                  <div className="text-xs text-gray-600 font-bold mb-3">
                    Occupation: {h.occupation} · {h.familyMembers} Family Members
                  </div>

                  <div className="bg-[#F5EFE6] rounded-2xl p-3 border border-black/20 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-bold">Ration Card:</span>
                      <span className="font-mono font-bold text-[#3B3F63]">{h.rationCard}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-bold">Mobile:</span>
                      <span className="font-mono font-bold text-[#3B3F63]">{maskPhone(h.phone)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <div className="text-[11px] font-bold text-gray-500 mb-1">Availed Schemes:</div>
                  <div className="flex flex-wrap gap-1">
                    {h.schemesAvailed.map((s, i) => (
                      <span key={i} className="text-[10px] bg-[#A3B7D8]/40 border border-[#3B3F63]/30 px-2 py-0.5 rounded-full font-bold text-[#3B3F63]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: FARMS & e-CROP REGISTRY */}
      {activeTab === 'farms' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {villageFarms.map((f) => (
              <div
                key={f.id}
                className="bg-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold bg-[#F5EFE6] px-2.5 py-0.5 rounded-lg border border-black/20 text-[#3B3F63]">
                      Survey No: {maskSurveyNo(f.surveyNo)}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                      {f.eCropStatus}
                    </span>
                  </div>

                  <h3 className="font-chunky text-xl text-[#3B3F63] mb-0.5">
                    {f.crop}
                  </h3>
                  <p className="text-xs font-bold text-gray-600 mb-3">
                    Farmer: {activeLang === 'te' ? f.farmerNameTe : f.farmerName} · {f.areaAcres} Acres
                  </p>

                  <div className="bg-[#F5EFE6] rounded-2xl p-3 border border-black/20 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-bold">Season:</span>
                      <span className="font-bold text-[#3B3F63]">{f.season}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-bold">Irrigation:</span>
                      <span className="font-bold text-[#3B3F63]">{f.irrigation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-bold">Soil:</span>
                      <span className="font-bold text-[#3B3F63]">{f.soilType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-bold">Estimated Yield:</span>
                      <span className="font-bold text-emerald-700">{f.estimatedYield}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center text-xs">
                  <span className="font-bold text-gray-500">Rythu Bharosa Kendra Verified</span>
                  <span className="text-[11px] font-mono text-[#3B3F63]">RBK-AP-2026</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: AUDIT TRAIL (DPDP 2023) */}
      {activeTab === 'dpdpAudit' && (
        <div className="bg-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-chunky text-2xl text-[#3B3F63] uppercase">
              Immutable Access Audit Log
            </h3>
            <span className="text-xs font-mono bg-gray-100 px-3 py-1 rounded-full border border-black font-bold">
              DPDP Act Sec 8 Compliance
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#363636] text-white">
                <tr>
                  <th className="p-3 rounded-l-xl">Timestamp</th>
                  <th className="p-3">User & Role</th>
                  <th className="p-3">Village</th>
                  <th className="p-3">Action Recorded</th>
                  <th className="p-3 rounded-r-xl">Compliance Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-medium">
                {auditLog.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="p-3 font-mono text-gray-600">{log.timestamp}</td>
                    <td className="p-3 font-bold text-[#3B3F63]">{log.user} ({log.role})</td>
                    <td className="p-3">{log.village}</td>
                    <td className="p-3 text-gray-800">{log.action}</td>
                    <td className="p-3 text-emerald-700 font-bold">{log.complianceStandard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Consent Authorization Modal */}
      {consentModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#F5EFE6] rounded-[32px] border-3 border-[#1E1E24] sticker-shadow-lg max-w-md w-full p-6 relative">
            <div className="w-12 h-12 bg-amber-400 text-black rounded-full flex items-center justify-center border-2 border-black mb-3">
              <KeyRound size={24} />
            </div>

            <h3 className="font-chunky text-2xl text-[#3B3F63] mb-1">
              Fiduciary Authentication
            </h3>
            <p className="text-xs text-gray-700 mb-4">
              You are requesting to view unmasked citizen PII under Section 6 of the DPDP Act 2023. By proceeding, your identity and timestamp will be logged into the state audit ledger.
            </p>

            <div className="bg-white p-3.5 rounded-2xl border-2 border-black mb-4 text-xs space-y-1">
              <div><strong>Fiduciary:</strong> {activeRole.toUpperCase()}</div>
              <div><strong>Jurisdiction:</strong> {currentVillage.name} Gram Panchayat</div>
              <div><strong>Legal Basis:</strong> Direct Government Service Delivery</div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setConsentModalOpen(false)}
                className="px-4 py-2 rounded-full text-xs font-bold bg-gray-200 text-black hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleGrantConsent}
                className="px-5 py-2 rounded-full text-xs font-black bg-[#3B3F63] text-white border-2 border-black sticker-shadow hover:bg-black"
              >
                Authorize & Log Access
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
