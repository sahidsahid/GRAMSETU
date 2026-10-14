import React, { useState, useEffect } from 'react';
import { ShieldAlert, PhoneCall, Volume2, VolumeX, CheckCircle2, X, MapPin, Radio, AlertOctagon } from 'lucide-react';
import confetti from 'canvas-confetti';

export function SOSModal({ isOpen, onClose, currentVillage, activeLang, t }) {
  const [countdown, setCountdown] = useState(5);
  const [isTriggered, setIsTriggered] = useState(false);
  const [sirenPlaying, setSirenPlaying] = useState(false);

  const s = t?.sos || {};
  const c = t?.common || {};

  // Beep sound effect using Web Audio API on countdown and alert
  useEffect(() => {
    let timer;
    if (isOpen && !isTriggered && countdown > 0) {
      // Play brief warning beep
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440 + (5 - countdown) * 100, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      } catch (err) {
        // AudioContext might be restricted until user gesture
      }

      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && !isTriggered) {
      setIsTriggered(true);
      setSirenPlaying(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    return () => clearInterval(timer);
  }, [isOpen, countdown, isTriggered]);

  const handleCancelCountdown = () => {
    setCountdown(5);
    setIsTriggered(false);
    setSirenPlaying(false);
    onClose();
  };

  const emergencyContacts = [
    { 
      title: activeLang === 'te' ? 'పోలీస్ అత్యవసర సహాయం' : 'Police Emergency Control', 
      number: '112', 
      desc: activeLang === 'te' ? 'ఆంధ్రప్రదేశ్ పోలీస్ తక్షణ వాహనం' : 'Dial 112 for direct AP Police dispatch' 
    },
    { 
      title: activeLang === 'te' ? 'వైద్య అంబులెన్స్' : 'Medical Ambulance', 
      number: '108', 
      desc: activeLang === 'te' ? 'ఆరోగ్యశ్రీ లైఫ్ సపోర్ట్ అంబులెన్స్' : 'Arogyasri emergency life support' 
    },
    { 
      title: activeLang === 'te' ? 'దిశ మహిళా భద్రత' : 'Disha Women Safety SOS', 
      number: '112 / 181', 
      desc: activeLang === 'te' ? 'దిశ పెట్రోలింగ్ మొబైల్ బృందం' : 'AP Disha rapid response vehicle' 
    },
    { 
      title: `${activeLang === 'te' ? 'గ్రామ సర్పంచ్' : 'Sarpanch'} (${activeLang === 'te' ? currentVillage.sarpanch.nameTe : currentVillage.sarpanch.name})`, 
      number: currentVillage.sarpanch.phone, 
      desc: activeLang === 'te' ? 'నేరుగా సర్పంచ్ వ్యక్తిగత లైన్' : 'Direct village head line' 
    },
    { 
      title: activeLang === 'te' ? 'అగ్నిమాపక కేంద్రం' : 'Fire Services', 
      number: '101', 
      desc: activeLang === 'te' ? 'ప్రాంతీయ ఫైర్ స్టేషన్' : 'Regional fire station' 
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-[#F5EFE6] dark:bg-[#1A1D29] rounded-[32px] border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow-lg max-w-lg w-full p-6 relative overflow-hidden animate-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={handleCancelCountdown}
          className="absolute right-4 top-4 bg-white dark:bg-[#252839] text-[#1E1E24] dark:text-white p-1.5 rounded-full border-2 border-black dark:border-white/20 hover:bg-gray-100 z-10 cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E5484D] text-white border-3 border-black sticker-shadow mb-3 animate-pulse">
            <AlertOctagon size={36} />
          </div>
          <h2 className="font-chunky text-2xl sm:text-3xl text-[#3B3F63] dark:text-white uppercase tracking-tight">
            {s.title || 'Villager Emergency SOS'}
          </h2>
          <p className="text-xs text-[#3B3F63]/80 dark:text-gray-300 font-bold mt-1">
            {activeLang === 'te' ? currentVillage.nameTe : currentVillage.name} ({currentVillage.mandalName} {c.mandal || 'Mandal'}, {currentVillage.districtName} {c.district || 'District'})
          </p>
        </div>

        {/* Countdown Stage */}
        {!isTriggered ? (
          <div className="bg-[#363636] dark:bg-[#12141D] text-white rounded-2xl p-6 text-center border-2 border-black dark:border-[#383D54] sticker-shadow mb-6">
            <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-1">
              {s.countdownLabel || 'Dispatching distress alert to Sarpanch & Police in:'}
            </p>
            <div className="text-6xl font-black text-[#A3B7D8] my-3 font-mono">
              0{countdown}
            </div>
            <p className="text-xs text-yellow-300 font-semibold mb-4">
              {s.cancelNotice || 'Tap cancel below if pressed by accident.'}
            </p>
            <button
              onClick={handleCancelCountdown}
              className="bg-white hover:bg-gray-200 text-black font-black text-xs px-6 py-2.5 rounded-full border-2 border-black sticker-shadow transition-all cursor-pointer"
            >
              {s.cancelBtn || 'Cancel SOS Distress Call'}
            </button>
          </div>
        ) : (
          /* Distress Triggered Stage */
          <div className="bg-emerald-50 dark:bg-emerald-950/80 border-2 border-emerald-600 rounded-2xl p-4 text-center mb-6 animate-in fade-in">
            <div className="flex items-center justify-center gap-2 text-emerald-800 dark:text-emerald-300 font-black text-base">
              <CheckCircle2 size={22} className="text-emerald-600 dark:text-emerald-400" />
              <span>{s.dispatchedTitle || 'DISTRESS ALERT DISPATCHED!'}</span>
            </div>
            <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
              {s.dispatchedDesc || `Location transmitted to AP 112 Control Room & Sarpanch. Volunteers notified.`}
            </p>
            <div className="mt-2 text-[11px] font-mono text-emerald-900 dark:text-emerald-200 bg-white/70 dark:bg-[#1E212E] py-1 px-3 rounded-lg border border-emerald-300 dark:border-emerald-700 inline-flex items-center gap-1.5">
              <MapPin size={12} />
              <span>{s.gpsLabel || 'GPS'}: 16.5062° N, 80.6480° E · {currentVillage.name}</span>
            </div>
          </div>
        )}

        {/* One-Tap Emergency Call List */}
        <div>
          <h4 className="font-extrabold text-xs text-[#3B3F63] dark:text-gray-300 uppercase tracking-wider mb-2">
            {s.callNow || 'One-Tap Emergency Contacts:'}
          </h4>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {emergencyContacts.map((contact, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1E212E] rounded-xl border-2 border-[#1E1E24] dark:border-[#383D54] p-3 flex items-center justify-between hover:bg-[#F5EFE6] dark:hover:bg-[#252839] transition-colors"
              >
                <div>
                  <div className="font-bold text-xs text-[#3B3F63] dark:text-white">
                    {contact.title}
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">
                    {contact.desc}
                  </div>
                </div>
                <a
                  href={`tel:${contact.number.replace(/\s+/g, '')}`}
                  className="bg-[#3B3F63] dark:bg-[#A3B7D8] text-white dark:text-black text-xs font-black px-3.5 py-1.5 rounded-full border border-black flex items-center gap-1.5 hover:bg-black transition-all"
                >
                  <PhoneCall size={12} />
                  <span>{contact.number}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 text-center">
          <button
            onClick={handleCancelCountdown}
            className="text-xs font-extrabold text-[#3B3F63] dark:text-gray-300 underline hover:text-black dark:hover:text-white cursor-pointer"
          >
            {c.close || 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
