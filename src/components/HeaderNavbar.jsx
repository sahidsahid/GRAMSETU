import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldAlert, 
  Volume2, 
  VolumeX, 
  ShoppingCart, 
  ChevronDown,
  User,
  LogOut,
  Radio
} from 'lucide-react';

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
  onLogout
}) {
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  return (
    <header className="border-b border-[#262B3D] bg-[#121526]/95 backdrop-blur-md sticky top-0 z-40">
      <div className="w-full px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Logo & Nav items matching screenshot */}
        <div className="flex items-center gap-5 sm:gap-7">
          <button
            onClick={() => onTabChange('overview')}
            className="flex items-center gap-2 cursor-pointer text-left"
          >
            <span className="font-chunky text-xl sm:text-2xl text-white font-black tracking-tight">
              GramSetu
            </span>
          </button>

          {/* Nav Links */}
          <nav className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none">
            <button
              onClick={() => onTabChange('overview')}
              className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#181B26] text-white border border-white/20 shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {activeLang === 'te' ? 'గ్రామాలు' : activeLang === 'hi' ? 'गांव' : 'Villages'}
            </button>

            <button
              onClick={() => onTabChange('marketplace')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'marketplace'
                  ? 'bg-[#181B26] text-white border border-white/20 shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {activeLang === 'te' ? 'రైతు బజార్' : activeLang === 'hi' ? 'रायथु बाजार' : 'Marketplace'}
            </button>

            <button
              onClick={() => onTabChange('verifyNews')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'verifyNews'
                  ? 'bg-[#181B26] text-white border border-white/20 shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {activeLang === 'te' ? 'వార్తల నిజనిరూపణ' : activeLang === 'hi' ? 'सत्यता जांच' : 'Verify'}
            </button>

            <button
              onClick={() => onTabChange('adminPanel')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'adminPanel'
                  ? 'bg-[#181B26] text-white border border-white/20 shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {activeLang === 'te' ? 'సర్పంచ్ ప్యానెల్' : activeLang === 'hi' ? 'ग्राम प्रधान' : 'Village head'}
            </button>
          </nav>
        </div>

        {/* Right: Languages, Login, Cart matching screenshot */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Circular Language Toggles: (EN), (తె), (హి) */}
          <div className="flex items-center gap-1 bg-[#1A1D2E] p-1 rounded-full border border-[#2D3349]">
            <button
              onClick={() => onLangChange('en')}
              className={`w-7 h-7 rounded-full text-[11px] font-black flex items-center justify-center transition-all cursor-pointer ${
                activeLang === 'en'
                  ? 'bg-[#DCE6F8] text-black shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLangChange('te')}
              className={`w-7 h-7 rounded-full text-[11px] font-black flex items-center justify-center transition-all cursor-pointer ${
                activeLang === 'te'
                  ? 'bg-[#DCE6F8] text-black shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              తె
            </button>
            <button
              onClick={() => onLangChange('hi')}
              className={`w-7 h-7 rounded-full text-[11px] font-black flex items-center justify-center transition-all cursor-pointer ${
                activeLang === 'hi'
                  ? 'bg-[#DCE6F8] text-black shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              हि
            </button>
          </div>

          {/* Login Button matching screenshot */}
          {currentUser ? (
            <div className="flex items-center gap-1.5 bg-[#181B26] px-3 py-1 rounded-full border border-[#2D3349]">
              <span className="text-xs font-bold text-white max-w-[80px] sm:max-w-[120px] truncate">
                {currentUser.name}
              </span>
              <button
                onClick={onLogout}
                title="Logout"
                className="text-gray-400 hover:text-red-400 p-0.5 cursor-pointer"
              >
                <LogOut size={13} />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              className="bg-[#DCE6F8] hover:bg-white text-black text-xs font-black px-4 py-1.5 rounded-full transition-all cursor-pointer shadow-sm"
            >
              {t.signIn || 'Login'}
            </button>
          )}

          {/* Cart Button matching screenshot */}
          <button
            onClick={onOpenCart}
            className="text-xs font-bold text-gray-300 hover:text-white px-2 py-1 flex items-center gap-1 cursor-pointer"
          >
            <span>Cart ({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}
