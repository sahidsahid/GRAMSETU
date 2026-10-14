import React, { useState } from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Search, 
  CheckCircle, 
  HelpCircle, 
  PhoneCall, 
  Lock, 
  FileWarning, 
  ExternalLink,
  Radar,
  ArrowRight
} from 'lucide-react';
import { FRAUD_ALERTS_LIST, SCAM_RADAR_KEYWORDS } from '../data/verifyNewsAndScams';
import { StarburstSticker, PlusSticker, RingSticker, RotatedPill } from './ThemeStickers';

export function ScamRadar({ activeLang, t }) {
  const [testMessage, setTestMessage] = useState('');
  const [radarResult, setRadarResult] = useState(null);

  const handleScanMessage = (e) => {
    e.preventDefault();
    if (!testMessage.trim()) return;

    const lower = testMessage.toLowerCase();
    const detectedTriggers = [];
    let riskScore = 0;

    SCAM_RADAR_KEYWORDS.forEach((k) => {
      if (lower.includes(k.word)) {
        riskScore += k.weight;
        detectedTriggers.push(k.warning);
      }
    });

    // Determine category
    let severity = 'SAFE';
    let summary = 'No common fraud patterns detected in this message.';
    if (riskScore >= 60) {
      severity = 'CRITICAL PHISHING RISK';
      summary = 'Extremely dangerous! Contains multiple indicators of biometric/bank fraud, urgent coercive threats, or unverified APK payloads.';
    } else if (riskScore >= 25) {
      severity = 'SUSPICIOUS MESSAGE';
      summary = 'Caution advised. Contains urgency triggers or external redirects typical of rural financial scams.';
    }

    setRadarResult({
      score: Math.min(riskScore, 100),
      severity,
      summary,
      detectedTriggers
    });
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-[#1E1E24] dark:border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <RotatedPill text={t.radar?.badge || "Rural Cyber Threat Intelligence"} rotation="-rotate-1" bg="bg-[#A3B7D8]" textColor="text-black" />
            <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
              {activeLang === 'te' ? 'రైతులు, గ్రామస్థుల ఆర్థిక భద్రత కోసం' : 'Protecting AP Farmers & Villagers from Financial Exploitation'}
            </span>
          </div>
          <h2 className="font-chunky text-3xl sm:text-5xl text-[#3B3F63] dark:text-white uppercase tracking-tight">
            {t.radar?.title || "Fraud Alerts & Scam Radar"}
          </h2>
        </div>

        {/* 1930 Cyber Helpline Pill */}
        <div className="bg-[#363636] dark:bg-[#1E212E] text-white px-4 py-2 rounded-full border-2 border-black dark:border-[#383D54] sticker-shadow flex items-center gap-2.5">
          <PhoneCall size={16} className="text-[#A3B7D8]" />
          <div className="text-xs">
            <span className="text-gray-400 block text-[10px] uppercase font-bold">National Cyber Crime</span>
            <strong className="text-sm font-chunky text-white">Call 1930 (Toll Free)</strong>
          </div>
        </div>
      </div>

      {/* Interactive Tool: Scam Radar "Check This Message" */}
      <div className="w-full bg-white dark:bg-[#1E212E] rounded-[32px] border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-2">
          <Radar size={22} className="text-[#E5484D] animate-spin" />
          <h3 className="font-chunky text-2xl text-[#3B3F63] dark:text-white uppercase">
            {t.radar?.scannerTitle || "Scam Radar: Check Suspicious SMS or WhatsApp"}
          </h3>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
          {t.radar?.scannerSub || "Received a message about electricity disconnection, loan penalty, Rythu Bharosa OTP, or prize money? Paste it below to scan for danger signals."}
        </p>

        <form onSubmit={handleScanMessage} className="space-y-3">
          <textarea
            rows={3}
            value={testMessage}
            onChange={(e) => setTestMessage(e.target.value)}
            placeholder="Paste suspicious SMS here, e.g. 'Dear customer, your electricity power will be blocked tonight at 9 PM. Call officer immediately or download update APK to verify Aadhaar OTP'..."
            className="w-full bg-[#F5EFE6] border-2 border-[#1E1E24] rounded-2xl p-4 text-xs sm:text-sm font-semibold text-[#3B3F63] focus:outline-none"
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-gray-500">Quick Test:</span>
              <button
                type="button"
                onClick={() => setTestMessage('URGENT: AP Electricity power will be disconnected at 9:30 PM due to unpaid bill. Download bill APK at bit.ly/ap-power-apk')}
                className="text-[11px] bg-gray-100 hover:bg-[#A3B7D8] px-2.5 py-1 rounded-full border border-black font-bold"
              >
                Electricity Scam SMS
              </button>
              <button
                type="button"
                onClick={() => setTestMessage('Congratulations! ₹25 Lakhs won in AP Gramin Lottery. Pay ₹4,500 tax charge to receive funds via UPI.')}
                className="text-[11px] bg-gray-100 hover:bg-[#A3B7D8] px-2.5 py-1 rounded-full border border-black font-bold"
              >
                Lottery Trap
              </button>
            </div>

            <button
              type="submit"
              className="bg-[#E5484D] hover:bg-red-700 text-white font-black text-xs sm:text-sm px-6 py-2.5 rounded-full border-2 border-black sticker-shadow transition-all"
            >
              Scan for Scams
            </button>
          </div>
        </form>

        {/* Scan Results */}
        {radarResult && (
          <div className="mt-6 pt-6 border-t-2 border-gray-200">
            <div className="bg-[#363636] text-white rounded-2xl p-5 border-2 border-black sticker-shadow">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span
                  className={`text-xs font-black uppercase px-3 py-1 rounded-full border border-black ${
                    radarResult.score >= 60
                      ? 'bg-[#E5484D] text-white'
                      : radarResult.score >= 25
                      ? 'bg-amber-400 text-black'
                      : 'bg-emerald-400 text-black'
                  }`}
                >
                  {radarResult.severity}
                </span>

                <span className="text-xs font-mono font-bold text-gray-300">
                  Risk Threat Rating: <strong className="text-white">{radarResult.score}/100</strong>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-200 mb-3">
                {radarResult.summary}
              </p>

              {radarResult.detectedTriggers.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-gray-700">
                  <span className="text-[10px] font-black uppercase text-[#A3B7D8] block">
                    Specific Threat Indicators Found:
                  </span>
                  {radarResult.detectedTriggers.map((t, idx) => (
                    <div key={idx} className="text-xs text-red-300 flex items-center gap-1.5 font-medium">
                      <span>⚠️</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Grid of Trending Rural Fraud Warnings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FRAUD_ALERTS_LIST.map((fraud) => (
          <div
            key={fraud.id}
            className="bg-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#E5484D] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full border border-black uppercase">
                  {fraud.severity}
                </span>
                <span className="text-xs font-bold text-gray-500">
                  {fraud.date} · {fraud.category}
                </span>
              </div>

              <h3 className="font-chunky text-xl text-[#3B3F63] leading-snug mb-1">
                {activeLang === 'te' ? fraud.titleTe : fraud.title}
              </h3>
              <div className="text-[11px] font-bold text-gray-500 mb-3">
                Target: {fraud.targetAudience}
              </div>

              <div className="bg-[#F5EFE6] rounded-2xl p-3 border border-[#1E1E24]/30 space-y-2 text-xs mb-4">
                <div>
                  <strong className="text-[#3B3F63] block text-[11px] uppercase">How the scam works:</strong>
                  <p className="text-gray-700 mt-0.5">{fraud.modusOperandi}</p>
                </div>
                <div className="pt-1 border-t border-gray-300">
                  <strong className="text-red-700 block text-[11px] uppercase">Incident Count:</strong>
                  <p className="text-gray-600 font-medium">{fraud.apCasesReported}</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-300 text-xs text-emerald-900">
              <strong className="block text-[11px] uppercase font-black text-emerald-800">
                Prevention & Safe Action:
              </strong>
              <p className="mt-0.5 font-medium">{fraud.prevention}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
