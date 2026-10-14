import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldAlert, 
  Volume2, 
  VolumeX, 
  UserCheck, 
  ShoppingCart, 
  ChevronDown,
  Sun,
  Moon,
  Globe,
  Radio,
  ExternalLink
} from 'lucide-react';
import { PagePill } from './ThemeStickers';

export function HeaderNavbar({
  currentVillage,
  villages,
  onSelectVillage,
  activeRole,
  onRoleChange,
  activeLang,
  onLangChange,
  t,
  activeTab,
  onTabChange,
  onOpenSOS,
  cartCount,
  onOpenCart,
  isSpeaking,
  onToggleSpeech,
  currentUser,
  onOpenLogin,
  onLogout,
  isDark,
  onToggleDark
}) {
  const [villageDropdownOpen, setVillageDropdownOpen] = useState(false);

  const rolesList = [
    { id: 'visitor', label: t.roles.visitor, icon: '👀' },
    { id: 'villager', label: t.roles.villager, icon: '🏡' },
    { id: 'farmer', label: t.roles.farmer, icon: '🌾' },
    { id: 'sarpanch', label: t.roles.sarpanch, icon: '🎖️' },
    { id: 'officer', label: t.roles.officer, icon: '🏛️' },
    { id: 'superAdmin', label: t.roles.superAdmin, icon: '⚡' },
  ];

  const navItems = [
    { id: 'overview', label: t.nav.overview, pill: '01' },
    { id: 'newsWorks', label: t.nav.newsWorks, pill: '02' },
    { id: 'marketplace', label: t.nav.marketplace, pill: '03' },
    { id: 'verifyNews', label: t.nav.verifyNews, pill: '04' },
    { id: 'fraudRadar', label: t.nav.fraudRadar, pill: '05' },
    { id: 'directory', label: t.nav.directory, pill: '06' },
    { id: 'extras', label: t.nav.schemes, pill: '07' },
    { id: 'grievance', label: t.nav.grievance, pill: '08' },
  ];

  const canAdmin = activeRole === 'sarpanch' || activeRole === 'superAdmin' || activeRole === 'officer';

  return (
    <header className="border-b-2 border-[#1E1E24] bg-[#F5EFE6]/98 dark:bg-[#141620]/98 backdrop-blur-md sticky top-0 z-40 transition-colors">
      {/* TIER 1: BRANDING & GLOBAL CONTROLS */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 mx-auto py-2.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#3B3F63]/15 dark:border-white/10">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onTabChange('overview')}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-2xl bg-[#3B3F63] dark:bg-[#A3B7D8] flex items-center justify-center text-white dark:text-black font-black text-sm border-2 border-[#1E1E24] sticker-shadow transition-transform group-hover:scale-105">
              గ్రా
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-2xl tracking-tight text-[#3B3F63] dark:text-white flex items-center gap-2">
                <span>{t.appName}</span>
                <span className="text-[11px] font-black bg-[#A3B7D8] text-black px-2.5 py-0.5 rounded-full border border-black shadow-sm">
                  {t.stateBadge}
                </span>
              </div>
              <p className="text-[11px] font-bold text-[#3B3F63]/70 dark:text-gray-400 hidden sm:block">
                {t.subTitle}
              </p>
            </div>
          </button>
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          {/* Prominent High-Visibility Language Switcher */}
          <div className="flex items-center bg-white dark:bg-[#1E212E] rounded-full border-2 border-[#1E1E24] dark:border-[#383D54] p-1 sticker-shadow">
            <button
              onClick={() => onLangChange('te')}
              className={`px-3 py-1 text-xs font-black rounded-full transition-all cursor-pointer ${
                activeLang === 'te'
                  ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black shadow'
                  : 'text-[#3B3F63] dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              తెలుగు
            </button>
            <button
              onClick={() => onLangChange('en')}
              className={`px-3 py-1 text-xs font-black rounded-full transition-all cursor-pointer ${
                activeLang === 'en'
                  ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black shadow'
                  : 'text-[#3B3F63] dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              English
            </button>
            <button
              onClick={() => onLangChange('hi')}
              className={`px-3 py-1 text-xs font-black rounded-full transition-all cursor-pointer ${
                activeLang === 'hi'
                  ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black shadow'
                  : 'text-[#3B3F63] dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              हिंदी
            </button>
          </div>

          {/* Theme Mode Toggle (Light / Dark) */}
          <button
            onClick={onToggleDark}
            title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            className="px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow flex items-center gap-1.5 bg-white dark:bg-[#1E212E] text-[#1E1E24] dark:text-white hover:bg-[#A3B7D8] dark:hover:bg-[#2D3349] transition-all cursor-pointer"
          >
            {isDark ? (
              <>
                <Sun size={15} className="text-amber-400 fill-amber-400" />
                <span className="hidden sm:inline font-bold">{t.themeLight}</span>
              </>
            ) : (
              <>
                <Moon size={15} className="text-[#3B3F63]" />
                <span className="hidden sm:inline font-bold">{t.themeDark}</span>
              </>
            )}
          </button>

          {/* Audio Read-Aloud Button */}
          <button
            onClick={onToggleSpeech}
            title={isSpeaking ? t.stopAudio : t.readAloud}
            className={`px-3 py-1.5 rounded-full text-xs font-black border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow flex items-center gap-1.5 transition-all cursor-pointer ${
              isSpeaking
                ? 'bg-[#E5484D] text-white animate-pulse'
                : 'bg-white dark:bg-[#1E212E] text-[#1E1E24] dark:text-white hover:bg-[#A3B7D8]'
            }`}
          >
            {isSpeaking ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span className="hidden md:inline">{isSpeaking ? t.stopAudio : t.readAloud}</span>
          </button>

          {/* User Sign-In / Account Dropdown */}
          {currentUser ? (
            <div className="relative group">
              <button
                className="bg-white dark:bg-[#1E212E] text-[#1E1E24] dark:text-white pl-1.5 pr-3 py-1 rounded-full border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow flex items-center gap-2 cursor-pointer hover:bg-[#A3B7D8]/30 transition-all"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-6 h-6 rounded-full object-cover border border-black"
                />
                <span className="text-xs font-black text-[#3B3F63] dark:text-white max-w-[110px] truncate">
                  {currentUser.name}
                </span>
                <span className="text-[10px] bg-[#3B3F63] dark:bg-[#A3B7D8] text-white dark:text-black font-extrabold px-2 py-0.5 rounded-full uppercase">
                  {currentUser.role}
                </span>
              </button>

              <div className="absolute right-0 mt-1.5 w-60 bg-white dark:bg-[#1E212E] rounded-2xl border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow-lg p-3 hidden group-hover:block hover:block z-50 animate-in fade-in">
                <div className="px-2 py-2 border-b border-gray-200 dark:border-gray-700 mb-2">
                  <div className="font-extrabold text-xs text-[#3B3F63] dark:text-white">{currentUser.name}</div>
                  <div className="text-[10px] text-gray-500 font-mono truncate">{currentUser.mobile || currentUser.email}</div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">✓ {t.verifiedCitizen}</div>
                </div>

                <button
                  onClick={onOpenLogin}
                  className="w-full text-left px-2 py-1.5 rounded-xl text-xs font-bold text-[#3B3F63] dark:text-gray-200 hover:bg-[#F5EFE6] dark:hover:bg-white/10 transition-colors"
                >
                  🔄 {t.switchAccount}
                </button>

                <button
                  onClick={onLogout}
                  className="w-full text-left px-2 py-1.5 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                >
                  🚪 {t.signOut}
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              className="bg-[#363636] hover:bg-black text-white text-xs font-black px-4 py-1.5 rounded-full border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer"
            >
              <UserCheck size={15} className="text-[#A3B7D8]" />
              <span>{t.signIn}</span>
            </button>
          )}

          {/* Cart Basket */}
          <button
            onClick={onOpenCart}
            className="relative bg-white dark:bg-[#1E212E] text-[#1E1E24] dark:text-white p-2 rounded-full border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow hover:bg-[#A3B7D8] transition-all cursor-pointer"
            title="Rythu Bazaar Basket"
          >
            <ShoppingCart size={16} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E5484D] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Punchy Red Emergency SOS Button */}
          <button
            onClick={onOpenSOS}
            className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-black px-4 py-1.5 rounded-full border-2 border-[#1E1E24] sticker-shadow flex items-center gap-1.5 animate-bounce tracking-wider transition-all cursor-pointer"
          >
            <ShieldAlert size={15} className="text-yellow-300" />
            <span>{t.sosButton}</span>
          </button>
        </div>
      </div>

      {/* TIER 2: VILLAGE CONTEXT & NAVIGATION TABS */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 mx-auto py-2 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Village Selector & Active Role Switcher */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-start">
          {/* Village Dropdown */}
          <div className="relative">
            <button
              onClick={() => setVillageDropdownOpen(!villageDropdownOpen)}
              className="bg-[#A3B7D8] text-black text-xs font-black px-3.5 py-1.5 rounded-full border-2 border-[#1E1E24] sticker-shadow flex items-center gap-2 hover:bg-[#8EA6CE] transition-all cursor-pointer"
            >
              <MapPin size={14} className="text-[#3B3F63]" />
              <span>{activeLang === 'te' ? currentVillage.nameTe : currentVillage.name}</span>
              <span className="text-[10px] bg-black/10 px-1.5 py-0.2 rounded font-mono">
                {currentVillage.code}
              </span>
              <ChevronDown size={14} />
            </button>

            {villageDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-[#1E212E] rounded-2xl border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow-lg p-2.5 z-50 animate-in fade-in">
                <div className="text-[11px] font-black uppercase text-[#3B3F63]/70 dark:text-gray-400 px-3 py-1 border-b border-gray-200 dark:border-gray-700">
                  {t.switchVillage} (Andhra Pradesh)
                </div>
                <div className="max-h-64 overflow-y-auto py-1">
                  {villages.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => {
                        onSelectVillage(v.id);
                        setVillageDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                        v.id === currentVillage.id
                          ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black'
                          : 'text-[#3B3F63] dark:text-gray-200 hover:bg-[#F5EFE6] dark:hover:bg-white/10'
                      }`}
                    >
                      <div>
                        <div className="font-extrabold">{activeLang === 'te' ? v.nameTe : v.name}</div>
                        <div className="text-[10px] opacity-70">
                          {activeLang === 'te' ? v.mandalNameTe : v.mandalName}, {activeLang === 'te' ? v.districtNameTe : v.districtName}
                        </div>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/10 font-mono">
                        {v.code}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Role Dropdown */}
          <div className="relative">
            <select
              value={activeRole}
              onChange={(e) => onRoleChange(e.target.value)}
              className="appearance-none bg-[#363636] text-white text-xs font-bold pl-3 pr-8 py-1.5 rounded-full border-2 border-[#1E1E24] dark:border-[#383D54] sticker-shadow cursor-pointer hover:bg-black transition-all focus:outline-none"
              title="Switch user role"
            >
              {rolesList.map((r) => (
                <option key={r.id} value={r.id} className="bg-[#2B2B2B] text-white py-1">
                  {r.icon} {r.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
          </div>
        </div>

        {/* Right: Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-1 md:pb-0">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black transition-all border-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#363636] text-white border-[#1E1E24] dark:border-white/20 sticker-shadow'
                    : 'bg-white/80 dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-300 border-transparent hover:border-[#1E1E24] hover:bg-white dark:hover:bg-[#282C3D]'
                }`}
              >
                <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-[#A3B7D8] text-black' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}>
                  {item.pill}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Admin Button */}
          {canAdmin && (
            <button
              onClick={() => onTabChange('adminPanel')}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black transition-all border-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'adminPanel'
                  ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black border-[#1E1E24] sticker-shadow'
                  : 'bg-[#A3B7D8] text-black border-[#1E1E24] hover:bg-[#8EA6CE]'
              }`}
            >
              <span className="text-[10px] font-black bg-black text-white px-1.5 py-0.2 rounded-full">
                ★
              </span>
              <span>{t.nav.adminPanel}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
