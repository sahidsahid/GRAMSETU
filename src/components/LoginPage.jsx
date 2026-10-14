import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  KeyRound, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  User, 
  MapPin, 
  Smartphone, 
  Building2, 
  RefreshCw, 
  Lock, 
  MessageSquare,
  AlertTriangle,
  Mail,
  ChevronRight
} from 'lucide-react';
import { StarburstSticker, PlusSticker, RingSticker, RotatedPill, PagePill } from './ThemeStickers';
import confetti from 'canvas-confetti';

export function LoginPage({
  villages,
  currentVillage,
  onLoginSuccess,
  activeLang,
  t,
  onCancel
}) {
  const [authMethod, setAuthMethod] = useState('mobile'); // 'mobile', 'google', 'officer'
  
  // Mobile OTP States
  const [mobileNumber, setMobileNumber] = useState('9848034120');
  const [userName, setUserName] = useState('');
  const [selectedVillageId, setSelectedVillageId] = useState(currentVillage.id);
  const [selectedRole, setSelectedRole] = useState('villager');
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('8492');
  const [enteredOtp, setEnteredOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [smsNotificationVisible, setSmsNotificationVisible] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  // Google OAuth States
  const [googleModalOpen, setGoogleModalOpen] = useState(false);
  const [googleCustomEmail, setGoogleCustomEmail] = useState('');

  // Officer States
  const [officerId, setOfficerId] = useState('AP-GS-2026-904');
  const [officerPass, setOfficerPass] = useState('');

  // Countdown timer for resend OTP
  useEffect(() => {
    let interval;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  // Handle Send OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!mobileNumber || mobileNumber.length < 10) {
      setLoginError(activeLang === 'te' ? 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి' : 'Please enter a valid 10-digit mobile number');
      return;
    }

    setLoginError('');
    // Generate simulated 4-digit OTP
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    setOtpSent(true);
    setTimer(30);
    setSmsNotificationVisible(true);
  };

  // Quick auto-fill simulated OTP
  const handleAutoFillOtp = () => {
    const digits = generatedOtp.split('');
    setEnteredOtp(digits);
    setLoginError('');
  };

  // Handle OTP digit change
  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newArr = [...enteredOtp];
    newArr[index] = value;
    setEnteredOtp(newArr);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-box-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Handle Verify Mobile OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const finalOtp = enteredOtp.join('');
    if (finalOtp !== generatedOtp) {
      setLoginError(activeLang === 'te' ? 'తప్పు OTP! దయచేసి SMS లో వచ్చిన సరైన కోడ్ నమోదు చేయండి' : 'Invalid OTP! Please enter the code received via SMS');
      return;
    }

    setIsVerifying(true);
    setLoginError('');

    setTimeout(() => {
      setIsVerifying(false);
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });

      const targetVillage = villages.find(v => v.id === selectedVillageId) || currentVillage;
      
      const userProfile = {
        name: userName.trim() || (selectedRole === 'sarpanch' ? targetVillage.sarpanch.name : selectedRole === 'farmer' ? 'Rythu Sahid' : 'Panchayat Citizen'),
        mobile: `+91 ${mobileNumber}`,
        email: `${mobileNumber}@gramsetu.ap.gov.in`,
        role: selectedRole,
        villageId: targetVillage.id,
        villageName: targetVillage.name,
        authMethod: 'mobile_otp',
        verifiedDate: 'Oct 14, 2026',
        avatar: selectedRole === 'sarpanch' ? targetVillage.sarpanch.photo : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
      };

      onLoginSuccess(userProfile);
    }, 1000);
  };

  // Handle Google Sign-in Selection
  const handleSelectGoogleAccount = (acc) => {
    setGoogleModalOpen(false);
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });

    const userProfile = {
      name: acc.name,
      email: acc.email,
      mobile: '+91 98480 34120',
      role: acc.defaultRole || 'villager',
      villageId: currentVillage.id,
      villageName: currentVillage.name,
      authMethod: 'google_oauth',
      verifiedDate: 'Oct 14, 2026',
      avatar: acc.avatar
    };

    onLoginSuccess(userProfile);
  };

  // Handle Sachivalayam Officer Login
  const handleOfficerLogin = (e) => {
    e.preventDefault();
    confetti({ particleCount: 60, spread: 60 });
    const userProfile = {
      name: 'M. Prasad (Panchayat Secretary)',
      email: 'm.prasad.gs@ap.gov.in',
      mobile: '+91 94401 22910',
      role: 'officer',
      villageId: currentVillage.id,
      villageName: currentVillage.name,
      authMethod: 'gs_cadre',
      verifiedDate: 'Oct 14, 2026',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    };
    onLoginSuccess(userProfile);
  };

  return (
    <div className="min-h-[85vh] py-8 sm:py-12 flex flex-col justify-center relative overflow-hidden">
      {/* Decorative Stickers matching reference PDF */}
      <div className="absolute top-4 left-6 hidden lg:block opacity-75">
        <RingSticker size={64} />
      </div>
      <div className="absolute top-10 right-10 hidden sm:block">
        <StarburstSticker size={84} color="#A3B7D8" />
      </div>
      <div className="absolute bottom-6 left-1/4 hidden md:block">
        <PlusSticker size={52} color="#A3B7D8" />
      </div>

      <div className="max-w-xl w-full mx-auto px-4 relative z-10">
        {/* Top Header Card Pill */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <PagePill label="Auth" number="01" />
            <span className="text-xs font-black uppercase text-[#3B3F63] bg-white px-3.5 py-1 rounded-full border border-black sticker-shadow">
              Govt. of Andhra Pradesh
            </span>
          </div>

          <h1 className="font-chunky text-3xl sm:text-5xl text-[#3B3F63] uppercase tracking-tight leading-tight">
            {activeLang === 'te' ? 'గ్రామసేతు లాగిన్' : 'GramSetu Sign-In'}
          </h1>

          <div className="mt-2">
            <RotatedPill
              text={activeLang === 'te' ? 'మొబైల్ OTP & గూగుల్ సైన్ ఇన్' : 'Mobile OTP & Google Sign-In'}
              rotation="-rotate-1"
              bg="bg-[#363636]"
              textColor="text-white"
            />
          </div>
        </div>

        {/* SMS Push Notification Banner Simulation */}
        {smsNotificationVisible && (
          <div className="mb-4 bg-white rounded-2xl border-2 border-black sticker-shadow p-3.5 animate-in slide-in-from-top-4 flex items-start justify-between gap-3 bg-amber-50/80">
            <div className="flex items-start gap-2.5">
              <div className="p-2 bg-[#3B3F63] text-white rounded-xl flex-shrink-0 mt-0.5">
                <MessageSquare size={16} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xs text-[#3B3F63]">SMS from VK-APGOVT:</span>
                  <span className="text-[10px] bg-red-100 text-red-800 font-bold px-1.5 rounded">Just now</span>
                </div>
                <p className="text-xs text-gray-800 font-mono mt-0.5">
                  Your GramSetu login OTP is <strong className="text-black bg-yellow-200 px-1 rounded font-black text-sm">{generatedOtp}</strong>. Valid for 10 minutes. Do not share with anyone.
                </p>
              </div>
            </div>

            <button
              onClick={handleAutoFillOtp}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-black px-3 py-1.5 rounded-full border border-black sticker-shadow whitespace-nowrap transition-transform hover:scale-105 flex-shrink-0"
            >
              Auto-Fill {generatedOtp}
            </button>
          </div>
        )}

        {/* Main Authentication Card */}
        <div className="bg-white rounded-[32px] border-3 border-[#1E1E24] sticker-shadow-lg p-6 sm:p-8">
          {/* Method Selection Tabs */}
          <div className="grid grid-cols-3 gap-2 p-1 bg-[#F5EFE6] rounded-2xl border-2 border-[#1E1E24] mb-6">
            <button
              onClick={() => { setAuthMethod('mobile'); setLoginError(''); }}
              className={`py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
                authMethod === 'mobile'
                  ? 'bg-[#363636] text-white sticker-shadow'
                  : 'text-[#3B3F63] hover:bg-black/5'
              }`}
            >
              <Smartphone size={14} />
              <span>Mobile OTP</span>
            </button>

            <button
              onClick={() => { setAuthMethod('google'); setLoginError(''); setGoogleModalOpen(true); }}
              className={`py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
                authMethod === 'google'
                  ? 'bg-[#363636] text-white sticker-shadow'
                  : 'text-[#3B3F63] hover:bg-black/5'
              }`}
            >
              <span className="font-bold text-sm">G</span>
              <span>Google</span>
            </button>

            <button
              onClick={() => { setAuthMethod('officer'); setLoginError(''); }}
              className={`py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
                authMethod === 'officer'
                  ? 'bg-[#363636] text-white sticker-shadow'
                  : 'text-[#3B3F63] hover:bg-black/5'
              }`}
            >
              <Building2 size={14} />
              <span>Sachivalayam</span>
            </button>
          </div>

          {/* Error Message */}
          {loginError && (
            <div className="mb-4 bg-red-100 border-2 border-red-500 text-red-800 text-xs font-bold p-3 rounded-xl flex items-center gap-2">
              <AlertTriangle size={15} />
              <span>{loginError}</span>
            </div>
          )}

          {/* TAB 1: MOBILE + OTP AUTH */}
          {authMethod === 'mobile' && (
            <div>
              {!otpSent ? (
                /* Step 1: Mobile & Details Form */
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-[#3B3F63] mb-1">
                      Mobile Number (మొబైల్ సంఖ్య):
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-black text-gray-600 border-r border-gray-400 pr-2">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                        placeholder="98480 34120"
                        className="w-full bg-[#F5EFE6] border-2 border-[#1E1E24] rounded-2xl pl-16 pr-4 py-3 text-sm font-bold text-[#3B3F63] focus:outline-none focus:ring-2 focus:ring-[#3B3F63]"
                      />
                    </div>
                    <span className="text-[10px] text-gray-500 mt-1 block">
                      Direct OTP verification via AP State SMS Gateway
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-[#3B3F63] mb-1">
                      Your Full Name (పేరు - ఐచ్ఛికం):
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Sahid / Venkatalakshmi / Srinivasa Rao"
                      className="w-full bg-[#F5EFE6] border-2 border-[#1E1E24] rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold text-[#3B3F63] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-black uppercase text-[#3B3F63] mb-1">
                        Select Village (గ్రామం):
                      </label>
                      <select
                        value={selectedVillageId}
                        onChange={(e) => setSelectedVillageId(e.target.value)}
                        className="w-full bg-[#F5EFE6] border-2 border-[#1E1E24] rounded-2xl px-3 py-2.5 text-xs font-bold text-[#3B3F63] focus:outline-none"
                      >
                        {villages.map((v) => (
                          <option key={v.id} value={v.id}>
                            {activeLang === 'te' ? v.nameTe : v.name} ({v.mandalName})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase text-[#3B3F63] mb-1">
                        Login Role (హోదా):
                      </label>
                      <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="w-full bg-[#F5EFE6] border-2 border-[#1E1E24] rounded-2xl px-3 py-2.5 text-xs font-bold text-[#3B3F63] focus:outline-none"
                      >
                        <option value="villager">🏡 {t.roles.villager}</option>
                        <option value="farmer">🌾 {t.roles.farmer}</option>
                        <option value="sarpanch">🎖️ {t.roles.sarpanch}</option>
                        <option value="officer">🏛️ {t.roles.officer}</option>
                        <option value="visitor">👀 {t.roles.visitor}</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-full text-xs sm:text-sm font-black bg-[#3B3F63] hover:bg-black text-white border-2 border-black sticker-shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Send Login OTP</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                /* Step 2: 4-Digit OTP Entry Form */
                <form onSubmit={handleVerifyOtp} className="space-y-5 animate-in fade-in">
                  <div className="bg-[#F5EFE6] rounded-2xl p-3 border border-black/20 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-gray-500">OTP dispatched to:</span>
                      <strong className="block font-mono text-[#3B3F63]">+91 {mobileNumber}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => { setOtpSent(false); setEnteredOtp(['', '', '', '']); }}
                      className="text-xs font-extrabold text-[#3B3F63] underline hover:text-black"
                    >
                      Change Number
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-center text-[#3B3F63] mb-3">
                      Enter 4-Digit Verification Code:
                    </label>

                    {/* 4 Pin Boxes */}
                    <div className="flex justify-center gap-3">
                      {[0, 1, 2, 3].map((idx) => (
                        <input
                          key={idx}
                          id={`otp-box-${idx}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={enteredOtp[idx]}
                          onChange={(e) => handleOtpChange(idx, e.target.value)}
                          className="w-14 h-14 text-center font-chunky text-2xl text-[#3B3F63] bg-[#F5EFE6] border-3 border-[#1E1E24] rounded-2xl focus:outline-none focus:bg-white focus:ring-3 focus:ring-[#3B3F63] sticker-shadow"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 font-bold px-1">
                    <span>
                      {timer > 0 ? (
                        <span>Resend code in <strong className="text-black font-mono">{timer}s</strong></span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
                            setGeneratedOtp(newOtp);
                            setTimer(30);
                            setSmsNotificationVisible(true);
                          }}
                          className="text-[#3B3F63] font-black underline hover:text-black flex items-center gap-1"
                        >
                          <RefreshCw size={12} />
                          <span>Resend OTP Now</span>
                        </button>
                      )}
                    </span>

                    <button
                      type="button"
                      onClick={handleAutoFillOtp}
                      className="text-emerald-700 underline font-extrabold"
                    >
                      Auto-fill ({generatedOtp})
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full py-3 rounded-full text-xs sm:text-sm font-black bg-[#E5484D] hover:bg-red-700 text-white border-2 border-black sticker-shadow flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isVerifying ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        <span>Verifying with AP Sachivalayam Gateway...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={16} />
                        <span>Verify & Enter GramSetu</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: GOOGLE SIGN-IN */}
          {authMethod === 'google' && (
            <div className="space-y-4 text-center py-4">
              <div className="w-16 h-16 bg-white rounded-full border-3 border-[#1E1E24] sticker-shadow mx-auto flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-chunky text-xl text-[#3B3F63]">
                  Single Sign-On with Google
                </h3>
                <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                  Sign in instantly with your verified Google account. Fast, secure, and authenticated.
                </p>
              </div>

              <button
                onClick={() => setGoogleModalOpen(true)}
                className="w-full py-3 rounded-full text-xs sm:text-sm font-black bg-white hover:bg-gray-50 text-[#1E1E24] border-2 border-black sticker-shadow flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          )}

          {/* TAB 3: SACHIVALAYAM OFFICER AUTH */}
          {authMethod === 'officer' && (
            <form onSubmit={handleOfficerLogin} className="space-y-4">
              <div className="bg-[#F5EFE6] p-3 rounded-2xl border border-black/20 text-xs text-[#3B3F63]">
                <strong>Grama Sachivalayam Cadre Access:</strong> For Village Secretaries, Mandal Revenue Officers (MRO), and Agricultural Extension Officers (AEO).
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-[#3B3F63] mb-1">
                  Employee ID / Sachivalayam Code:
                </label>
                <input
                  type="text"
                  required
                  value={officerId}
                  onChange={(e) => setOfficerId(e.target.value)}
                  className="w-full bg-[#F5EFE6] border-2 border-[#1E1E24] rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold text-[#3B3F63]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-[#3B3F63] mb-1">
                  Digital Signature PIN / Password:
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  defaultValue="apgov2026"
                  className="w-full bg-[#F5EFE6] border-2 border-[#1E1E24] rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold text-[#3B3F63]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full text-xs sm:text-sm font-black bg-[#363636] hover:bg-black text-white border-2 border-black sticker-shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ShieldCheck size={16} className="text-[#A3B7D8]" />
                <span>Sign In as Authorized Officer</span>
              </button>
            </form>
          )}

          {/* Cancel & Browse as Visitor Button */}
          {onCancel && (
            <div className="mt-5 pt-4 border-t border-gray-200 text-center">
              <button
                type="button"
                onClick={onCancel}
                className="text-xs font-extrabold text-[#3B3F63] hover:text-black underline cursor-pointer"
              >
                ← Back to Village Hub (Continue as Visitor)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Google OAuth Account Picker Modal */}
      {googleModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-3 border-[#1E1E24] sticker-shadow-lg max-w-md w-full p-6 relative animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="font-bold text-xs text-gray-700">Sign in with Google</span>
              </div>
              <button
                onClick={() => setGoogleModalOpen(false)}
                className="text-xs font-bold text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            <h3 className="font-chunky text-lg text-[#3B3F63] mb-1">
              Choose an account
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              to continue to <strong>GramSetu Andhra Pradesh</strong>
            </p>

            <div className="space-y-2 mb-4">
              {/* Account 1 */}
              <button
                onClick={() => handleSelectGoogleAccount({
                  name: 'Sahid',
                  email: 'sahid.ap.dev@gmail.com',
                  defaultRole: 'villager',
                  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
                })}
                className="w-full text-left p-3 rounded-2xl border-2 border-gray-200 hover:border-[#1E1E24] hover:bg-[#F5EFE6] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#3B3F63] text-white flex items-center justify-center font-bold text-sm">
                    S
                  </div>
                  <div>
                    <div className="font-extrabold text-xs text-[#3B3F63]">Sahid</div>
                    <div className="text-[11px] text-gray-500">sahid.ap.dev@gmail.com</div>
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-black" />
              </button>

              {/* Account 2: Sarpanch */}
              <button
                onClick={() => handleSelectGoogleAccount({
                  name: currentVillage.sarpanch.name,
                  email: 'venkatalakshmi.sarpanch@gmail.com',
                  defaultRole: 'sarpanch',
                  avatar: currentVillage.sarpanch.photo
                })}
                className="w-full text-left p-3 rounded-2xl border-2 border-gray-200 hover:border-[#1E1E24] hover:bg-[#F5EFE6] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={currentVillage.sarpanch.photo}
                    alt={currentVillage.sarpanch.name}
                    className="w-10 h-10 rounded-full object-cover border border-black"
                  />
                  <div>
                    <div className="font-extrabold text-xs text-[#3B3F63]">
                      {currentVillage.sarpanch.name}
                    </div>
                    <div className="text-[11px] text-gray-500">
                      venkatalakshmi.sarpanch@gmail.com
                    </div>
                  </div>
                </div>
                <span className="text-[10px] bg-[#A3B7D8] text-black font-black px-2 py-0.5 rounded-full border border-black">
                  Sarpanch
                </span>
              </button>

              {/* Account 3: Farmer */}
              <button
                onClick={() => handleSelectGoogleAccount({
                  name: 'Nallamothu Srinivasa Rao',
                  email: 'farmer.guntur@gmail.com',
                  defaultRole: 'farmer',
                  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
                })}
                className="w-full text-left p-3 rounded-2xl border-2 border-gray-200 hover:border-[#1E1E24] hover:bg-[#F5EFE6] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                    N
                  </div>
                  <div>
                    <div className="font-extrabold text-xs text-[#3B3F63]">Nallamothu Srinivasa Rao</div>
                    <div className="text-[11px] text-gray-500">farmer.guntur@gmail.com</div>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-200 text-emerald-900 font-black px-2 py-0.5 rounded-full border border-black">
                  Farmer
                </span>
              </button>
            </div>

            <div className="text-[11px] text-gray-400 text-center">
              Secured by Google Identity Services & AP Citizen SSO
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
