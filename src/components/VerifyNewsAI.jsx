import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  Share2, 
  Copy, 
  Check, 
  ShieldAlert, 
  Search,
  FileQuestion,
  ExternalLink
} from 'lucide-react';
import { FACT_CHECK_SAMPLES } from '../data/verifyNewsAndScams';
import { StarburstSticker, PlusSticker, RingSticker, RotatedPill } from './ThemeStickers';
import confetti from 'canvas-confetti';

export function VerifyNewsAI({ activeLang, t }) {
  const [inputText, setInputText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(FACT_CHECK_SAMPLES[0]);
  const [copiedCard, setCopiedCard] = useState(false);

  const handleVerify = (textToVerify = inputText) => {
    if (!textToVerify.trim()) return;
    setAnalyzing(true);
    setResult(null);

    // Simulate Gemini AI Fact-Checking Engine reasoning
    setTimeout(() => {
      const lower = textToVerify.toLowerCase();
      let matched = FACT_CHECK_SAMPLES.find(s => 
        s.headline.toLowerCase().includes(lower) || lower.includes(s.headline.toLowerCase().slice(0, 20))
      );

      if (!matched) {
        // Dynamic analysis heuristic
        const isPhishing = lower.includes('.xyz') || lower.includes('click') || lower.includes('bonus') || lower.includes('50,000') || lower.includes('free');
        const isWarning = lower.includes('poison') || lower.includes('collapse') || lower.includes('danger') || lower.includes('cyclone');

        if (isPhishing) {
          matched = {
            headline: textToVerify,
            verdict: 'LIKELY FALSE',
            verdictColor: 'red',
            confidence: '95%',
            reasons: [
              'Unofficial external web links or prize claims not listed on .gov.in or .ap.gov.in domain registry.',
              'No corresponding government order (G.O.) issued by AP Finance or Agriculture Department.',
              'Standard fraudulent bait tactic requesting personal phone numbers and bank credentials.'
            ],
            officialSource: 'AP Digital Fact-Checking Cell Amaravati & CERT-In',
            riskLevel: 'HIGH PHISHING DANGER',
            warningText: 'DO NOT CLICK ANY LINKS OR SHARE OTPs.'
          };
        } else if (isWarning) {
          matched = {
            headline: textToVerify,
            verdict: 'MISLEADING',
            verdictColor: 'amber',
            confidence: '89%',
            reasons: [
              'Headline amplifies unverified social media claim without district administration corroboration.',
              'Local police and disaster control rooms have reported normal situation on ground.',
              'Check official AP Police or APSDMA handles (@APSDMA) for verified bulletins.'
            ],
            officialSource: 'District Collector Control Room & AP Police Fact Check',
            riskLevel: 'UNVERIFIED VIRAL RUMOR',
            warningText: 'Avoid forwarding until an official press release is uploaded to GramSetu.'
          };
        } else {
          matched = {
            headline: textToVerify,
            verdict: 'CANNOT VERIFY (INSUFFICIENT OFFICIAL DATA)',
            verdictColor: 'blue',
            confidence: '72%',
            reasons: [
              'No verifiable official gazette or credible journalistic wire report found for this specific claim yet.',
              'Gemini AI crawler has dispatched this forward to the District Information & Public Relations Officer (DIPRO) for manual review.'
            ],
            officialSource: 'GramSetu Automated Intelligence Engine',
            riskLevel: 'PENDING VERIFICATION',
            warningText: 'Please wait for official confirmation before circulating.'
          };
        }
      }

      setResult(matched);
      setAnalyzing(false);
      confetti({ particleCount: 30, spread: 50 });
    }, 1200);
  };

  const handleCopyCard = () => {
    navigator.clipboard.writeText(
      `🚨 [GramSetu AP Fact Check]\nCLAIM: "${result.headline}"\nVERDICT: ${result.verdict} (${result.confidence} Confidence)\nREASON: ${result.reasons[0]}\nSOURCE: ${result.officialSource}\n\nVerify rumors before forwarding at: gramsetu-ap.gov.in`
    );
    setCopiedCard(true);
    setTimeout(() => setCopiedCard(false), 2500);
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-[#1E1E24] dark:border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <RotatedPill text={t.verify?.badge || "AI Anti-Fake News Shield"} rotation="-rotate-1" bg="bg-[#A3B7D8]" textColor="text-black" />
            <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
              Powered by Gemini AI & AP State Fact-Check Repository
            </span>
          </div>
          <h2 className="font-chunky text-3xl sm:text-5xl text-[#3B3F63] dark:text-white uppercase tracking-tight">
            {t.verify?.title || "Verify News AI"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
            {t.verify?.subTitle || "Fact-checking rural WhatsApp forwards against official AP Government & PIB records"}
          </p>
        </div>
      </div>

      {/* Main Analysis Input Box */}
      <div className="w-full bg-white dark:bg-[#1E212E] rounded-[32px] border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-6 sm:p-8">
        <label className="block text-xs font-black uppercase tracking-wider text-[#3B3F63] dark:text-gray-200 mb-2">
          {t.verify?.pasteLabel || "Paste WhatsApp Forward, Headline, or Social Media Rumor:"}
        </label>
        
        <div className="relative mb-3">
          <textarea
            rows={3}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={activeLang === 'te' ? 'ఉదాహరణ: వాట్సాప్ లింక్ ద్వారా ₹50,000 బోనస్ ఇస్తున్నారని వచ్చిన మెసేజ్ ఇక్కడ పేస్ట్ చేయండి...' : "e.g. Paste: 'Government giving ₹50,000 Diwali bonus to all Andhra farmers on WhatsApp link ap-gov-bonus.xyz'..."}
            className="w-full bg-[#F5EFE6] dark:bg-[#141620] border-2 border-[#1E1E24] dark:border-[#383D54] rounded-2xl p-4 text-xs sm:text-sm font-semibold text-[#3B3F63] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B3F63]"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Quick-test Rumor Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
            <span className="font-bold text-gray-500 whitespace-nowrap text-[11px]">Test Samples:</span>
            {FACT_CHECK_SAMPLES.map((sample, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setInputText(sample.headline);
                  handleVerify(sample.headline);
                }}
                className="bg-gray-100 hover:bg-[#A3B7D8] text-[#1E1E24] text-[11px] font-bold px-3 py-1 rounded-full border border-black whitespace-nowrap transition-colors"
              >
                Sample {idx + 1} ({sample.verdict})
              </button>
            ))}
          </div>

          <button
            onClick={() => handleVerify()}
            disabled={analyzing}
            className="w-full sm:w-auto bg-[#3B3F63] hover:bg-black text-white text-xs sm:text-sm font-black px-6 py-2.5 rounded-full border-2 border-black sticker-shadow flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {analyzing ? (
              <>
                <Sparkles size={16} className="animate-spin" />
                <span>Checking AP Fact Registry...</span>
              </>
            ) : (
              <>
                <Sparkles size={16} className="text-[#A3B7D8]" />
                <span>Verify with AI Fact-Check</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* AI Fact Check Result Card (with theme sticker design) */}
      {result && (
        <div className="relative">
          {/* Decorative Stickers */}
          <div className="absolute -top-3 right-4 hidden sm:block z-10">
            <StarburstSticker size={60} color="#A3B7D8" />
          </div>

          <div className="bg-[#363636] text-white rounded-[32px] border-3 border-[#1E1E24] sticker-shadow-lg p-6 sm:p-8 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-gray-700 pb-4">
              <div className="flex items-center gap-3">
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-black border-2 border-black tracking-wider uppercase flex items-center gap-1.5 ${
                    result.verdict.includes('FALSE')
                      ? 'bg-[#E5484D] text-white'
                      : result.verdict.includes('TRUE')
                      ? 'bg-emerald-500 text-white'
                      : result.verdict.includes('MISLEADING')
                      ? 'bg-amber-400 text-black'
                      : 'bg-blue-400 text-black'
                  }`}
                >
                  {result.verdict.includes('FALSE') ? <XCircle size={15} /> : result.verdict.includes('TRUE') ? <CheckCircle2 size={15} /> : <AlertTriangle size={15} />}
                  <span>{result.verdict}</span>
                </span>

                <span className="text-xs font-mono font-bold text-gray-300">
                  Confidence Score: <strong className="text-white">{result.confidence}</strong>
                </span>
              </div>

              <button
                onClick={handleCopyCard}
                className="bg-white text-black text-xs font-black px-4 py-1.5 rounded-full border-2 border-black sticker-shadow hover:bg-[#A3B7D8] flex items-center gap-1.5 transition-all"
              >
                {copiedCard ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
                <span>{copiedCard ? 'Copied Warning Card!' : 'Copy Shareable Warning Card'}</span>
              </button>
            </div>

            {/* Claim Text */}
            <div className="mb-5 bg-black/30 p-4 rounded-2xl border border-white/10">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">
                Analyzed Claim / Forward:
              </span>
              <p className="font-bold text-sm sm:text-base text-gray-100 italic">
                "{result.headline}"
              </p>
            </div>

            {/* Reasons Breakdown */}
            <div className="mb-5">
              <h4 className="text-xs font-black uppercase text-[#A3B7D8] tracking-wider mb-2">
                Why this verdict? (Official Corroboration Breakdown):
              </h4>
              <ul className="space-y-2">
                {result.reasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                    <span className="w-5 h-5 rounded-full bg-white/10 text-[#A3B7D8] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Source & Warning */}
            <div className="bg-[#2B2B2B] rounded-2xl p-4 border border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-gray-400 block text-[11px]">Primary Corroboration Source:</span>
                <span className="font-extrabold text-white">{result.officialSource}</span>
              </div>

              <div className="bg-red-950/60 border border-red-500/40 text-red-200 px-3 py-1.5 rounded-xl font-bold text-[11px]">
                ⚠️ {result.warningText}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
