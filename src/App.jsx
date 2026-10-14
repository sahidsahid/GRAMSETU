import React, { useState, useEffect } from 'react';
import { HeaderNavbar } from './components/HeaderNavbar';
import { EmergencyBanner } from './components/EmergencyBanner';
import { SOSModal } from './components/SOSModal';
import { VillageOverview } from './components/VillageOverview';
import { LiveNewsAndWorks } from './components/LiveNewsAndWorks';
import { Marketplace } from './components/Marketplace';
import { VerifyNewsAI } from './components/VerifyNewsAI';
import { ScamRadar } from './components/ScamRadar';
import { VillageDirectory } from './components/VillageDirectory';
import { ExtrasHub } from './components/ExtrasHub';
import { SarpanchAdmin } from './components/SarpanchAdmin';
import { CartDrawer } from './components/CartDrawer';
import { LoginPage } from './components/LoginPage';
import { Footer } from './components/Footer';

import { INITIAL_VILLAGES } from './data/villages';
import { INITIAL_PRODUCTS } from './data/marketplace';
import { TRANSLATIONS } from './data/translations';

export default function App() {
  const [villages, setVillages] = useState(INITIAL_VILLAGES);
  const [selectedVillageId, setSelectedVillageId] = useState(INITIAL_VILLAGES[0].id);
  const [activeRole, setActiveRole] = useState('visitor'); // 'visitor', 'villager', 'farmer', 'sarpanch', 'officer', 'superAdmin'
  const [activeLang, setActiveLang] = useState('te'); // default to Telugu, or 'en', 'hi'
  const [activeTab, setActiveTab] = useState('overview');
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Dark Theme Mode State with persistence
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('gramsetu_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('gramsetu_theme', 'dark');
      } catch (e) {}
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('gramsetu_theme', 'light');
      } catch (e) {}
    }
  }, [isDark]);

  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('gramsetu_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const currentVillage = villages.find(v => v.id === selectedVillageId) || villages[0];
  const t = TRANSLATIONS[activeLang] || TRANSLATIONS.en;

  // Handle successful login
  const handleLoginSuccess = (userProfile) => {
    setCurrentUser(userProfile);
    try {
      localStorage.setItem('gramsetu_user', JSON.stringify(userProfile));
    } catch (e) {
      console.error(e);
    }
    setActiveRole(userProfile.role);
    if (userProfile.villageId) {
      setSelectedVillageId(userProfile.villageId);
    }
    setLoginModalOpen(false);
    if (activeTab === 'login') {
      setActiveTab('overview');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('gramsetu_user');
    } catch (e) {
      console.error(e);
    }
    setActiveRole('visitor');
  };

  // Handler for Sarpanch emergency broadcast
  const handleBroadcastAlert = (alertData) => {
    setVillages(prev => prev.map(v => {
      if (v.id === currentVillage.id) {
        return {
          ...v,
          activeAlert: alertData
        };
      }
      return v;
    }));
  };

  // Handler for publishing new notice
  const handleAddNewNotice = (newNotice) => {
    setVillages(prev => prev.map(v => {
      if (v.id === currentVillage.id) {
        return {
          ...v,
          newsFeed: [newNotice, ...v.newsFeed]
        };
      }
      return v;
    }));
  };

  // Handler for adding new product
  const handleAddNewProduct = (newProd) => {
    setProducts(prev => [newProd, ...prev]);
  };

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const handleRemoveCartItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Audio Read-Aloud for low-literacy users
  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    let speechText = '';
    if (activeLang === 'te') {
      speechText = `గ్రామసేతు ఆంధ్రప్రదేశ్. మీరు ప్రస్తుతం ${currentVillage.nameTe} గ్రామంలో ఉన్నారు. సర్పంచ్ ${currentVillage.sarpanch.nameTe}. గ్రామంలో ${currentVillage.stats.population} మంది జనాభా ఉన్నారు. రైతు బజార్ మరియు తాజా వార్తల కోసం దిగువ విభాగాలను చూడండి.`;
    } else {
      speechText = `Welcome to GramSetu Andhra Pradesh. You are viewing ${currentVillage.name} village in ${currentVillage.mandalName} mandal. Sarpanch is ${currentVillage.sarpanch.name}. Village population is ${currentVillage.stats.population}. Check live works, schemes, and direct farm marketplace.`;
    }

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = activeLang === 'te' ? 'te-IN' : activeLang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <div className="min-h-screen pdf-grid-bg flex flex-col justify-between selection:bg-[#A3B7D8] selection:text-black">
      <div>
        {/* Navigation & Header matching PDF */}
        <HeaderNavbar
          currentVillage={currentVillage}
          villages={villages}
          onSelectVillage={setSelectedVillageId}
          activeRole={activeRole}
          onRoleChange={setActiveRole}
          activeLang={activeLang}
          onLangChange={setActiveLang}
          t={t}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onOpenSOS={() => setSosModalOpen(true)}
          cartCount={cartItems.length}
          onOpenCart={() => setCartDrawerOpen(true)}
          isSpeaking={isSpeaking}
          onToggleSpeech={handleToggleSpeech}
          currentUser={currentUser}
          onOpenLogin={() => setLoginModalOpen(true)}
          onLogout={handleLogout}
          isDark={isDark}
          onToggleDark={() => setIsDark(prev => !prev)}
        />

        {/* Emergency Alert Banner */}
        <EmergencyBanner
          currentVillage={currentVillage}
          onOpenSOS={() => setSosModalOpen(true)}
          activeRole={activeRole}
          onBroadcastAlert={handleBroadcastAlert}
          activeLang={activeLang}
          t={t}
        />

        {/* Main Content Area - Fluid Edge-to-Edge Widescreen */}
        <main className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6 sm:py-8">
          {activeTab === 'login' ? (
            <LoginPage
              villages={villages}
              currentVillage={currentVillage}
              onLoginSuccess={handleLoginSuccess}
              activeLang={activeLang}
              t={t}
              onCancel={() => setActiveTab('overview')}
            />
          ) : (
            <>
              {activeTab === 'overview' && (
                <VillageOverview
                  currentVillage={currentVillage}
                  villages={villages}
                  onSelectVillage={setSelectedVillageId}
                  onTabChange={setActiveTab}
                  activeLang={activeLang}
                  t={t}
                />
              )}

              {activeTab === 'newsWorks' && (
                <LiveNewsAndWorks
                  currentVillage={currentVillage}
                  activeRole={activeRole}
                  activeLang={activeLang}
                  t={t}
                  onAddNewNotice={handleAddNewNotice}
                />
              )}

              {activeTab === 'marketplace' && (
                <Marketplace
                  products={products}
                  onAddToCart={handleAddToCart}
                  onAddNewProduct={handleAddNewProduct}
                  activeRole={activeRole}
                  activeLang={activeLang}
                  currentVillage={currentVillage}
                  t={t}
                />
              )}

              {activeTab === 'verifyNews' && (
                <VerifyNewsAI
                  activeLang={activeLang}
                  t={t}
                />
              )}

              {activeTab === 'fraudRadar' && (
                <ScamRadar
                  activeLang={activeLang}
                  t={t}
                />
              )}

              {activeTab === 'directory' && (
                <VillageDirectory
                  currentVillage={currentVillage}
                  activeRole={activeRole}
                  activeLang={activeLang}
                  t={t}
                />
              )}

              {activeTab === 'extras' && (
                <ExtrasHub
                  currentVillage={currentVillage}
                  activeLang={activeLang}
                  t={t}
                />
              )}

              {activeTab === 'grievance' && (
                <ExtrasHub
                  currentVillage={currentVillage}
                  activeLang={activeLang}
                  t={t}
                />
              )}

              {activeTab === 'adminPanel' && (
                <SarpanchAdmin
                  currentVillage={currentVillage}
                  onBroadcastAlert={handleBroadcastAlert}
                  onAddNewNotice={handleAddNewNotice}
                  activeLang={activeLang}
                  t={t}
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* Presentation Style Footer */}
      <Footer activeLang={activeLang} t={t} />

      {/* Reactive Floating Action Bar for Fast Access */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
        {cartItems.length > 0 && (
          <button
            onClick={() => setCartDrawerOpen(true)}
            className="bg-[#3B3F63] hover:bg-black dark:bg-[#A3B7D8] dark:hover:bg-white text-white dark:text-black font-black text-xs px-4 py-3 rounded-full border-2 border-black sticker-shadow-lg flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
          >
            <span>🧺</span>
            <span className="font-bold">{cartItems.length} {activeLang === 'te' ? 'వస్తువులు' : 'items'}</span>
          </button>
        )}

        <button
          onClick={() => setSosModalOpen(true)}
          className="bg-[#E5484D] hover:bg-red-700 text-white font-black text-xs sm:text-sm px-5 py-3 rounded-full border-2 border-black sticker-shadow-lg flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer animate-bounce"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-300 animate-ping"></span>
          <span>{t.sosButton}</span>
        </button>
      </div>

      {/* Login Modal (if opened via header button while browsing) */}
      {loginModalOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 overflow-y-auto p-4 flex items-center justify-center">
          <div className="w-full max-w-xl relative">
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute right-6 top-6 bg-white text-black p-2 rounded-full border-2 border-black hover:bg-gray-100 z-20 cursor-pointer sticker-shadow"
            >
              ✕
            </button>
            <LoginPage
              villages={villages}
              currentVillage={currentVillage}
              onLoginSuccess={handleLoginSuccess}
              activeLang={activeLang}
              t={t}
              onCancel={() => setLoginModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* SOS Distress Modal */}
      <SOSModal
        isOpen={sosModalOpen}
        onClose={() => setSosModalOpen(false)}
        currentVillage={currentVillage}
        activeLang={activeLang}
        t={t}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        activeLang={activeLang}
        t={t}
      />
    </div>
  );
}
