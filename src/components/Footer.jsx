import React from 'react';
import { StarburstSticker, PlusSticker, RingSticker } from './ThemeStickers';

export function Footer({ activeLang, t }) {
  const f = t?.footer || {};

  return (
    <footer className="mt-16 border-t border-[#262B3D] bg-[#0E101B] text-[#DCE6F8] pt-10 pb-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 relative overflow-hidden">
      {/* Subtle stickers in background */}
      <div className="absolute right-8 top-4 opacity-25 pointer-events-none hidden md:block">
        <StarburstSticker size={72} color="#A3B7D8" />
      </div>
      <div className="absolute left-12 top-6 opacity-20 pointer-events-none hidden md:block">
        <RingSticker size={50} />
      </div>

      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-[#3B3F63]/20 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-[#3B3F63] dark:bg-[#A3B7D8] text-white dark:text-black flex items-center justify-center font-black text-xs border border-black">
                గ్రా
              </span>
              <span className="font-chunky text-lg font-black text-[#3B3F63] dark:text-white">
                {activeLang === 'te' ? 'గ్రామసేతు · ఆంధ్రప్రదేశ్' : activeLang === 'hi' ? 'ग्रामसेतु · आंध्र प्रदेश' : 'GramSetu · Andhra Pradesh'}
              </span>
            </div>
            <p className="text-xs text-[#3B3F63]/80 dark:text-gray-400 leading-relaxed">
              {f.govText || 'Empowering every Gram Panchayat with real-time news, verified alerts, direct Rythu Bazaar, DPDP 2023 compliance, and news fact-checking.'}
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#3B3F63] dark:text-white mb-2">
              {f.emergencyTollFree || 'Emergency Toll-Free'}
            </h4>
            <div className="space-y-1 text-xs text-[#3B3F63]/80 dark:text-gray-300 font-medium">
              <p>🚨 {f.police || 'Police Emergency'}: <strong className="text-black dark:text-white">112</strong></p>
              <p>🚑 {f.ambulance || 'Medical Ambulance'}: <strong className="text-black dark:text-white">108</strong></p>
              <p>🚒 {f.womenSafety || 'Disha Women Safety'}: <strong className="text-black dark:text-white">112 / 181</strong></p>
              <p>🛡️ {f.cyber || 'Cyber Helpline'}: <strong className="text-black dark:text-white">1930</strong></p>
              <p>🌾 Rythu Bharosa: <strong className="text-black dark:text-white">155251</strong></p>
            </div>
          </div>

          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#3B3F63] dark:text-white mb-2">
              {f.dataSources || 'Govt. Data Integrations'}
            </h4>
            <div className="space-y-1 text-xs text-[#3B3F63]/80 dark:text-gray-300">
              <p>• Local Government Directory (LGD)</p>
              <p>• {f.agmark || 'Agmarknet AP Mandi Price Feed'}</p>
              <p>• IMD Amaravati Weather Doppler</p>
              <p>• {f.apsdma || 'AP Disaster Management Authority (APSDMA)'}</p>
              <p>• SERP DWCRA Self-Help Portal</p>
            </div>
          </div>

          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#3B3F63] dark:text-white mb-2">
              {f.privacySafety || 'Compliance & Safety'}
            </h4>
            <div className="space-y-1 text-xs text-[#3B3F63]/80 dark:text-gray-300">
              <p>• India DPDP Act 2023 Compliant</p>
              <p>• Consent-Based PII Masking</p>
              <p>• Gemini AI News Verification Engine</p>
              <p>• Direct DBT No-Middleman Marketplace</p>
            </div>
          </div>
        </div>

        {/* Presentation Footer Bar matching PDF */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-extrabold text-[#3B3F63] dark:text-gray-300 gap-3">
          <div className="tracking-tight hover:underline cursor-pointer flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#1E1E24] dark:bg-[#A3B7D8]"></span>
            <span>www.gramsetu-ap.gov.in · RTGS Amaravati</span>
          </div>
          <div className="bg-[#363636] dark:bg-[#1E212E] text-white px-4 py-1.5 rounded-full text-xs font-bold border border-black dark:border-white/20 sticker-shadow">
            GramSetu AP · Real Time Governance · Oct 14, 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
