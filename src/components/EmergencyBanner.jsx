import React, { useState } from 'react';
import { AlertTriangle, BellRing, PhoneCall, Radio, Send, X, ShieldAlert } from 'lucide-react';
import { StarburstSticker } from './ThemeStickers';

export function EmergencyBanner({ currentVillage, onOpenSOS, activeRole, onBroadcastAlert, activeLang, t }) {
  const alert = currentVillage.activeAlert;
  const [broadcastModalOpen, setBroadcastModalOpen] = useState(false);
  const [broadcastText, setBroadcastText] = useState('');
  const [broadcastSent, setBroadcastSent] = useState(false);

  if (!alert) return null;

  const isDanger = alert.level === 'danger' || alert.isEmergency;

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    if (!broadcastText.trim()) return;
    onBroadcastAlert({
      level: 'danger',
      title: broadcastText,
      description: `Sent by Sarpanch office to all ${currentVillage.stats.population} registered mobile numbers via SMS and WhatsApp Push.`,
      time: 'Just now',
      isEmergency: true
    });
    setBroadcastSent(true);
    setTimeout(() => {
      setBroadcastSent(false);
      setBroadcastModalOpen(false);
      setBroadcastText('');
    }, 2000);
  };

  return (
    <>
      <div className={`border-b-2 border-[#1E1E24] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-2.5 transition-all ${
        isDanger 
          ? 'bg-[#E5484D] text-white' 
          : 'bg-[#FBE8A6] text-[#1E1E24]'
      }`}>
        <div className="w-full mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`p-1.5 rounded-full border border-black ${
              isDanger ? 'bg-white text-[#E5484D] animate-pulse' : 'bg-black text-white'
            }`}>
              <AlertTriangle size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs sm:text-sm tracking-wide uppercase">
                  {activeLang === 'te' && alert.titleTe ? alert.titleTe : alert.title}
                </span>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border border-black uppercase ${
                  isDanger ? 'bg-yellow-300 text-black' : 'bg-[#3B3F63] text-white'
                }`}>
                  {activeLang === 'te' ? 'తాజా సమాచారం' : alert.time}
                </span>
              </div>
              <p className={`text-xs mt-0.5 max-w-4xl line-clamp-1 sm:line-clamp-none ${
                isDanger ? 'text-red-100' : 'text-[#3B3F63]'
              }`}>
                {alert.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSOS}
              className={`px-3.5 py-1 rounded-full text-xs font-black border-2 border-[#1E1E24] sticker-shadow flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer ${
                isDanger
                  ? 'bg-yellow-300 text-black'
                  : 'bg-[#D32F2F] text-white'
              }`}
            >
              <ShieldAlert size={14} />
              <span>{t ? t.sosButton : 'Villager SOS'}</span>
            </button>

            {(activeRole === 'sarpanch' || activeRole === 'superAdmin' || activeRole === 'officer') && (
              <button
                onClick={() => setBroadcastModalOpen(true)}
                className="px-3 py-1 rounded-full text-xs font-black bg-[#363636] text-white border-2 border-[#1E1E24] sticker-shadow flex items-center gap-1.5 hover:bg-black transition-all"
                title="Sarpanch: Send SMS / WhatsApp Emergency Alert to all villagers"
              >
                <Radio size={13} className="text-[#A3B7D8]" />
                <span className="hidden sm:inline">Broadcast Alert</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sarpanch Emergency Broadcast Simulation Modal */}
      {broadcastModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#F5EFE6] rounded-3xl border-3 border-[#1E1E24] sticker-shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setBroadcastModalOpen(false)}
              className="absolute right-4 top-4 text-[#1E1E24] hover:bg-gray-200 p-1 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#E5484D] text-white flex items-center justify-center border-2 border-black">
                <Radio size={18} />
              </div>
              <div>
                <h3 className="font-chunky text-xl text-[#3B3F63]">
                  Emergency Broadcast Console
                </h3>
                <p className="text-xs text-[#3B3F63]/70 font-medium">
                  {currentVillage.name} ({currentVillage.mandalName} Mandal) · Sarpanch Control
                </p>
              </div>
            </div>

            <p className="text-xs text-[#3B3F63] mb-4 bg-white/70 p-3 rounded-2xl border border-[#3B3F63]/20">
              🚨 This will immediately flash a red banner on every villager's screen and dispatch bulk SMS / WhatsApp push notifications to all <strong>{currentVillage.stats.households} households</strong>.
            </p>

            {broadcastSent ? (
              <div className="bg-emerald-100 border-2 border-emerald-600 rounded-2xl p-4 text-center">
                <div className="text-emerald-700 font-extrabold text-sm">
                  ✓ Broadcast Sent Successfully!
                </div>
                <div className="text-emerald-600 text-xs mt-1">
                  Alert pushed to {currentVillage.stats.population} registered phones via SMS gateway & GramSetu web app.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendBroadcast} className="space-y-4">
                <div>
                  <label className="block text-xs font-extrabold text-[#3B3F63] mb-1">
                    Emergency Alert Headline:
                  </label>
                  <input
                    type="text"
                    required
                    value={broadcastText}
                    onChange={(e) => setBroadcastText(e.target.value)}
                    placeholder="e.g. Cyclone Michaung Gale Alert - Evacuate Low-Lying Canal Area"
                    className="w-full bg-white border-2 border-[#1E1E24] rounded-xl px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#3B3F63]"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setBroadcastText('Flash Flood Warning: Release from upstream reservoir scheduled in 2 hours.')}
                    className="text-[11px] bg-white border border-[#1E1E24] px-2 py-1 rounded-lg font-bold text-[#3B3F63] hover:bg-gray-100"
                  >
                    Quick Flood Alert
                  </button>
                  <button
                    type="button"
                    onClick={() => setBroadcastText('Severe Heatwave Warning (44°C): Avoid outdoor field work between 11 AM - 4 PM.')}
                    className="text-[11px] bg-white border border-[#1E1E24] px-2 py-1 rounded-lg font-bold text-[#3B3F63] hover:bg-gray-100"
                  >
                    Heatwave Alert
                  </button>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setBroadcastModalOpen(false)}
                    className="px-4 py-2 rounded-full text-xs font-bold bg-gray-200 text-[#1E1E24] hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full text-xs font-black bg-[#E5484D] text-white border-2 border-black sticker-shadow hover:bg-red-700 flex items-center gap-1.5"
                  >
                    <Send size={14} />
                    <span>Send Emergency Blast</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
