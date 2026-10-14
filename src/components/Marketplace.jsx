import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Plus, 
  TrendingUp, 
  Phone, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Check, 
  QrCode, 
  Sparkles, 
  X,
  CreditCard,
  Banknote,
  Search,
  Filter
} from 'lucide-react';
import { MANDI_BENCHMARKS } from '../data/marketplace';
import { StarburstSticker, PlusSticker, RotatedPill } from './ThemeStickers';
import confetti from 'canvas-confetti';

export function Marketplace({
  products,
  onAddToCart,
  onAddNewProduct,
  activeRole,
  activeLang,
  currentVillage,
  t
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addProductModalOpen, setAddProductModalOpen] = useState(false);

  // New Product Form State
  const [prodTitle, setProdTitle] = useState('');
  const [prodCategory, setProdCategory] = useState('Fresh Produce');
  const [prodPrice, setProdPrice] = useState('');
  const [prodUnit, setProdUnit] = useState('1 kg');
  const [prodStock, setProdStock] = useState('50');
  const [prodDesc, setProdDesc] = useState('');
  const [prodImage, setProdImage] = useState('');

  // Checkout modal
  const [quickBuyProduct, setQuickBuyProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [orderSuccess, setOrderSuccess] = useState(false);

  const categories = [
    { id: 'All', label: activeLang === 'te' ? 'అన్నీ' : 'All' },
    { id: 'Spices', label: activeLang === 'te' ? 'మసాలాలు' : 'Spices' },
    { id: 'Grains', label: activeLang === 'te' ? 'ధాన్యాలు & బియ్యం' : 'Grains' },
    { id: 'Fresh Produce', label: activeLang === 'te' ? 'తాజా కూరగాయలు' : 'Fresh Produce' },
    { id: 'Dairy', label: activeLang === 'te' ? 'పాడి ఉత్పత్తులు' : 'Dairy' },
    { id: 'Dry Fruits & Nuts', label: activeLang === 'te' ? 'జీడిపప్పు & నట్స్' : 'Dry Fruits' },
    { id: 'Handicrafts', label: activeLang === 'te' ? 'చేనేత హస్తకళలు' : 'Handicrafts' }
  ];

  const filteredProducts = products.filter(p => {
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.titleTe && p.titleTe.includes(searchQuery)) ||
      p.villageName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!prodTitle.trim() || !prodPrice) return;

    const newProd = {
      id: `prod-${Date.now()}`,
      villageId: currentVillage.id,
      villageName: `${currentVillage.name} (${currentVillage.districtName})`,
      title: prodTitle,
      titleTe: prodTitle,
      category: prodCategory,
      categoryTe: prodCategory,
      price: Number(prodPrice),
      unit: prodUnit,
      mandiComparison: activeLang === 'te' ? 'రైతు నేరుగా నిర్ణయించిన ధర' : 'Farmer Direct Listing',
      stock: Number(prodStock),
      seller: {
        name: activeRole === 'farmer' ? (activeLang === 'te' ? 'రైతు స్వంత ప్రొఫైల్' : 'Self (Farmer Profile)') : (activeLang === 'te' ? 'ధృవీకృత గ్రామ రైతు' : 'Registered Village Producer'),
        nameTe: 'రైతు ప్రొఫైల్',
        type: 'AP Rythu Bharosa Verified',
        phone: '+91 98480 99887',
        acres: 'Farmed in Village',
        rating: 5.0,
        reviewsCount: 1
      },
      image: prodImage || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
      description: prodDesc || 'Fresh harvest grown directly in the village without intermediaries.',
      organicCertified: true
    };

    onAddNewProduct(newProd);
    setAddProductModalOpen(false);
    confetti({ particleCount: 40, spread: 50 });
  };

  const handleConfirmOrder = () => {
    setOrderSuccess(true);
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      setOrderSuccess(false);
      setQuickBuyProduct(null);
    }, 2500);
  };

  const canSell = activeRole === 'farmer' || activeRole === 'villager' || activeRole === 'sarpanch' || activeRole === 'superAdmin';

  const m = t.market || {};

  return (
    <div className="w-full space-y-8 animate-in fade-in">
      {/* Header and Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-[#1E1E24] dark:border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <RotatedPill text={m.tagline || "No Middlemen · 100% Direct Farmer Payout"} rotation="-rotate-1" bg="bg-[#A3B7D8]" textColor="text-black" />
            <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
              {activeLang === 'te' ? currentVillage.nameTe : currentVillage.name} & AP State Rythu Bazaar
            </span>
          </div>
          <h2 className="font-chunky text-3xl sm:text-5xl text-[#3B3F63] dark:text-white uppercase tracking-tight">
            {m.mainTitle || "Village Marketplace"}
          </h2>
        </div>

        {canSell && (
          <button
            onClick={() => setAddProductModalOpen(true)}
            className="bg-[#363636] hover:bg-black dark:bg-[#A3B7D8] dark:hover:bg-white text-white dark:text-black text-xs sm:text-sm font-black px-5 py-2.5 rounded-full border-2 border-black sticker-shadow transition-all flex items-center gap-2 cursor-pointer"
          >
            <Plus size={16} />
            <span>{m.listHarvestBtn || "Sell Produce / List Product"}</span>
          </button>
        )}
      </div>

      {/* Live Mandi Benchmark Prices Ticker (Agmarknet AP) */}
      <div className="w-full bg-[#363636] dark:bg-[#181B26] text-white rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-5 sm:p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4 border-b border-gray-700 dark:border-gray-800 pb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-chunky text-sm sm:text-base uppercase tracking-wider text-[#A3B7D8]">
              {m.mandiTitle || "Live AP Mandi Benchmark Rates (Agmarknet Official)"}
            </span>
          </div>
          <span className="text-xs font-bold text-gray-400">
            {activeLang === 'te' ? 'తాజా మార్కెట్ యార్డు ధరలు' : 'Updated Hourly · Oct 14, 2026'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {MANDI_BENCHMARKS.map((mandi, idx) => (
            <div key={idx} className="bg-[#242424] dark:bg-[#12141D] rounded-2xl p-3.5 border border-gray-700 dark:border-gray-800 flex flex-col justify-between hover:border-[#A3B7D8] transition-colors">
              <div>
                <span className="text-[10px] font-bold text-gray-400 block line-clamp-1">{mandi.mandi}</span>
                <div className="font-extrabold text-xs sm:text-sm text-white line-clamp-1 mt-0.5">
                  {activeLang === 'te' ? mandi.cropTe : mandi.crop}
                </div>
              </div>
              <div className="mt-2.5 flex items-baseline justify-between">
                <span className="font-chunky text-base sm:text-lg text-yellow-300">{mandi.modalPrice}</span>
                <span className={`text-[10px] font-black ${mandi.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {mandi.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-black border-2 border-[#1E1E24] transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black sticker-shadow'
                  : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-200 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={activeLang === 'te' ? 'మిర్చి, మామిడి, బియ్యం, నెయ్యి శోధించండి...' : 'Search chilli, mango, rice, ghee...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-[#1E212E] border-2 border-[#1E1E24] dark:border-[#383D54] text-xs sm:text-sm font-bold text-[#3B3F63] dark:text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Products Grid - Fluid 4-Columns on XL screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-[32px] border-3 border-[#1E1E24] sticker-shadow overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all"
          >
            <div>
              {/* Product Image with Category Pill and Organic Badge */}
              <div className="relative h-48 w-full bg-gray-200 border-b-2 border-[#1E1E24] overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="bg-[#363636] text-white text-[10px] font-black px-2.5 py-1 rounded-full border border-black shadow">
                    {prod.category}
                  </span>
                  {prod.organicCertified && (
                    <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-1 rounded-full border border-black flex items-center gap-1 shadow">
                      <Sparkles size={10} />
                      <span>Natural Farm</span>
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 text-[#1E1E24] text-[10px] font-black px-2.5 py-0.5 rounded-full border border-black">
                  Stock: {prod.stock} left
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 mb-1">
                  <MapPin size={12} className="text-[#3B3F63]" />
                  <span className="line-clamp-1">{prod.villageName}</span>
                </div>

                <h3 className="font-chunky text-xl text-[#3B3F63] leading-snug line-clamp-2 mb-1">
                  {activeLang === 'te' ? prod.titleTe : prod.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                  {prod.description}
                </p>

                {/* Farmer Info */}
                <div className="bg-[#F5EFE6] rounded-2xl p-2.5 border border-[#1E1E24]/30 flex items-center justify-between text-xs mb-3">
                  <div>
                    <div className="font-extrabold text-[#3B3F63] flex items-center gap-1">
                      <span>{prod.seller.name}</span>
                      <ShieldCheck size={13} className="text-emerald-700" />
                    </div>
                    <div className="text-[10px] text-gray-600">{prod.seller.type} · {prod.seller.acres}</div>
                  </div>
                  <a
                    href={`tel:${prod.seller.phone}`}
                    className="p-1.5 rounded-full bg-white border border-black text-[#3B3F63] hover:bg-[#A3B7D8]"
                    title="Direct Call Farmer"
                  >
                    <Phone size={13} />
                  </a>
                </div>

                <div className="text-[11px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-300">
                  {prod.mandiComparison}
                </div>
              </div>
            </div>

            {/* Price and Action Buttons */}
            <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-gray-500 block uppercase">Price</span>
                <div className="font-chunky text-2xl text-[#3B3F63]">
                  ₹{prod.price}
                  <span className="text-xs font-bold text-gray-500 ml-1">/{prod.unit}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onAddToCart(prod);
                    confetti({ particleCount: 20, spread: 40 });
                  }}
                  className="bg-white text-[#1E1E24] p-2.5 rounded-full border-2 border-black sticker-shadow hover:bg-[#A3B7D8] transition-all"
                  title="Add to Basket"
                >
                  <ShoppingCart size={16} />
                </button>
                <button
                  onClick={() => setQuickBuyProduct(prod)}
                  className="bg-[#3B3F63] hover:bg-black text-white text-xs font-black px-4 py-2 rounded-full border-2 border-black sticker-shadow transition-all"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Product Modal for Farmers */}
      {addProductModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#F5EFE6] rounded-[32px] border-3 border-[#1E1E24] sticker-shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setAddProductModalOpen(false)}
              className="absolute right-4 top-4 text-black hover:bg-gray-200 p-1 rounded-full"
            >
              <X size={20} />
            </button>

            <h3 className="font-chunky text-2xl text-[#3B3F63] mb-1">
              List Your Harvest on Rythu Bazaar
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              Farmer directly sets price. No commission or middlemen fees.
            </p>

            <form onSubmit={handleCreateProduct} className="space-y-3">
              <div>
                <label className="block text-xs font-black text-[#3B3F63] mb-1">Product Title:</label>
                <input
                  type="text"
                  required
                  value={prodTitle}
                  onChange={(e) => setProdTitle(e.target.value)}
                  placeholder="e.g. Organic Banganapalle Mangoes (Naturally Ripened)"
                  className="w-full bg-white border-2 border-[#1E1E24] rounded-xl px-3 py-2 text-xs font-bold text-[#3B3F63]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black text-[#3B3F63] mb-1">Category:</label>
                  <select
                    value={prodCategory}
                    onChange={(e) => setProdCategory(e.target.value)}
                    className="w-full bg-white border-2 border-[#1E1E24] rounded-xl px-2 py-2 text-xs font-bold text-[#3B3F63]"
                  >
                    <option value="Fresh Produce">Fresh Produce</option>
                    <option value="Spices">Spices & Mirchi</option>
                    <option value="Grains">Grains & Rice</option>
                    <option value="Dairy">Dairy & Ghee</option>
                    <option value="Dry Fruits & Nuts">Dry Fruits & Nuts</option>
                    <option value="Handicrafts">Handicrafts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#3B3F63] mb-1">Price in ₹:</label>
                  <input
                    type="number"
                    required
                    value={prodPrice}
                    onChange={(e) => setProdPrice(e.target.value)}
                    placeholder="e.g. 180"
                    className="w-full bg-white border-2 border-[#1E1E24] rounded-xl px-3 py-2 text-xs font-bold text-[#3B3F63]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black text-[#3B3F63] mb-1">Unit:</label>
                  <input
                    type="text"
                    value={prodUnit}
                    onChange={(e) => setProdUnit(e.target.value)}
                    placeholder="e.g. 1 kg / 25 kg bag"
                    className="w-full bg-white border-2 border-[#1E1E24] rounded-xl px-3 py-2 text-xs font-bold text-[#3B3F63]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#3B3F63] mb-1">Stock Quantity:</label>
                  <input
                    type="number"
                    value={prodStock}
                    onChange={(e) => setProdStock(e.target.value)}
                    placeholder="50"
                    className="w-full bg-white border-2 border-[#1E1E24] rounded-xl px-3 py-2 text-xs font-bold text-[#3B3F63]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-[#3B3F63] mb-1">Description:</label>
                <textarea
                  rows={2}
                  value={prodDesc}
                  onChange={(e) => setProdDesc(e.target.value)}
                  placeholder="Farmed in our village field using cow manure and canal water..."
                  className="w-full bg-white border-2 border-[#1E1E24] rounded-xl px-3 py-2 text-xs font-medium text-[#3B3F63]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setAddProductModalOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-bold bg-gray-200 text-black"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full text-xs font-black bg-[#3B3F63] text-white border-2 border-black sticker-shadow hover:bg-black"
                >
                  Publish to Rythu Bazaar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Instant Checkout / UPI QR Modal */}
      {quickBuyProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#F5EFE6] rounded-[32px] border-3 border-[#1E1E24] sticker-shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setQuickBuyProduct(null)}
              className="absolute right-4 top-4 text-black hover:bg-gray-200 p-1 rounded-full"
            >
              <X size={20} />
            </button>

            <h3 className="font-chunky text-2xl text-[#3B3F63] mb-1">
              Direct Farmer Checkout
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              100% of the payment goes directly to <strong>{quickBuyProduct.seller.name}</strong>.
            </p>

            {orderSuccess ? (
              <div className="bg-emerald-100 border-2 border-emerald-600 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check size={28} />
                </div>
                <h4 className="font-chunky text-xl text-emerald-800">Order Confirmed!</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Payment sent to farmer DBT UPI ID. Delivery coordinated directly with {quickBuyProduct.villageName}.
                </p>
              </div>
            ) : (
              <div>
                {/* Order Summary */}
                <div className="bg-white rounded-2xl p-4 border-2 border-[#1E1E24] mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-[#3B3F63]">{quickBuyProduct.title}</span>
                    <span className="font-black text-sm text-[#3B3F63]">₹{quickBuyProduct.price}</span>
                  </div>
                  <div className="text-[11px] text-gray-500">Unit: {quickBuyProduct.unit} · Farm Direct</div>
                </div>

                {/* Payment Selection */}
                <div className="space-y-2 mb-4">
                  <label className="block text-xs font-black text-[#3B3F63] uppercase">Payment Method:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-3 rounded-xl border-2 border-[#1E1E24] text-xs font-bold flex items-center gap-2 ${
                        paymentMethod === 'upi' ? 'bg-[#3B3F63] text-white sticker-shadow' : 'bg-white text-gray-700'
                      }`}
                    >
                      <QrCode size={16} />
                      <span>Direct UPI QR</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-3 rounded-xl border-2 border-[#1E1E24] text-xs font-bold flex items-center gap-2 ${
                        paymentMethod === 'cod' ? 'bg-[#3B3F63] text-white sticker-shadow' : 'bg-white text-gray-700'
                      }`}
                    >
                      <Banknote size={16} />
                      <span>Cash on Delivery</span>
                    </button>
                  </div>
                </div>

                {/* Simulated UPI QR Code */}
                {paymentMethod === 'upi' && (
                  <div className="bg-white rounded-2xl border-2 border-[#1E1E24] p-4 text-center mb-4">
                    <div className="text-xs font-extrabold text-[#3B3F63] mb-2">
                      Scan with PhonePe / GooglePay / BHIM
                    </div>
                    {/* Retro Styled QR SVG */}
                    <div className="w-40 h-40 mx-auto bg-gray-50 border-2 border-black p-2 rounded-xl flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-[#1E1E24]">
                        <rect x="10" y="10" width="25" height="25" fill="#1E1E24" />
                        <rect x="15" y="15" width="15" height="15" fill="#fff" />
                        <rect x="18" y="18" width="9" height="9" fill="#1E1E24" />
                        
                        <rect x="65" y="10" width="25" height="25" fill="#1E1E24" />
                        <rect x="70" y="15" width="15" height="15" fill="#fff" />
                        <rect x="73" y="18" width="9" height="9" fill="#1E1E24" />
                        
                        <rect x="10" y="65" width="25" height="25" fill="#1E1E24" />
                        <rect x="15" y="70" width="15" height="15" fill="#fff" />
                        <rect x="18" y="73" width="9" height="9" fill="#1E1E24" />

                        <rect x="45" y="20" width="10" height="20" />
                        <rect x="40" y="50" width="20" height="10" />
                        <rect x="65" y="65" width="12" height="12" />
                        <rect x="80" y="75" width="10" height="15" />
                        <rect x="45" y="70" width="12" height="20" />
                      </svg>
                    </div>
                    <div className="text-[11px] font-mono text-gray-500 mt-2">
                      UPI ID: <span className="font-bold text-[#3B3F63]">farmer.rythu@sbi</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleConfirmOrder}
                  className="w-full py-3 rounded-full text-xs font-black bg-[#E5484D] hover:bg-red-700 text-white border-2 border-black sticker-shadow"
                >
                  Confirm ₹{quickBuyProduct.price} Payment
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
