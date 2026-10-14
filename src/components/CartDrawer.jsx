import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, ArrowRight, QrCode, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onRemoveItem, 
  onClearCart,
  activeLang,
  t
}) {
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'payment', 'confirmed'

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const ct = t?.cart || {};

  const handleCompleteOrder = () => {
    setCheckoutStep('confirmed');
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      onClearCart();
      setCheckoutStep('cart');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-[#F5EFE6] dark:bg-[#1A1D29] w-full max-w-md h-full border-l-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow-lg flex flex-col justify-between p-6 relative animate-in slide-in-from-right">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b-2 border-[#1E1E24] dark:border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#3B3F63] dark:text-[#A3B7D8]" />
              <h3 className="font-chunky text-2xl text-[#3B3F63] dark:text-white uppercase">
                {ct.basketTitle || 'Rythu Bazaar Basket'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white dark:bg-[#252839] text-black dark:text-white border border-black dark:border-white/20 hover:bg-gray-100 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {checkoutStep === 'confirmed' ? (
            <div className="bg-emerald-100 dark:bg-emerald-950/80 border-2 border-emerald-600 rounded-3xl p-8 text-center my-8 animate-in zoom-in-95">
              <CheckCircle2 size={48} className="text-emerald-700 dark:text-emerald-400 mx-auto mb-3" />
              <h4 className="font-chunky text-2xl text-emerald-900 dark:text-emerald-200">
                {ct.orderPlacedTitle || 'Order Placed Directly!'}
              </h4>
              <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-2">
                {ct.orderPlacedDesc || `100% of order value routed to village farmers via direct DBT.`}
              </p>
            </div>
          ) : checkoutStep === 'payment' ? (
            <div className="space-y-4 animate-in fade-in">
              <div className="bg-white dark:bg-[#1E212E] rounded-2xl border-2 border-[#1E1E24] dark:border-[#383D54] p-4 text-center">
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 block">{ct.totalDue || 'Total Due to Farmers:'}</span>
                <span className="font-chunky text-4xl text-[#3B3F63] dark:text-white">₹{total}</span>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-[#141620] rounded-xl border border-dashed border-gray-400 dark:border-gray-600">
                  <div className="text-xs font-extrabold text-[#3B3F63] dark:text-white mb-2 flex items-center justify-center gap-1">
                    <QrCode size={16} />
                    <span>{ct.directUpi || 'Direct Farmer UPI Payment'}</span>
                  </div>
                  <div className="w-40 h-40 mx-auto bg-white border-2 border-black p-2 rounded-xl flex items-center justify-center">
                    <div className="text-[10px] font-mono text-center text-gray-700">
                      [AP RYTHU BAZAAR QR]
                      <br />
                      <span className="font-bold text-black text-xs">₹{total}</span>
                      <br />
                      {ct.scanUpi || 'Scan with any UPI app'}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCompleteOrder}
                className="w-full py-3.5 rounded-full text-xs font-black bg-[#E5484D] hover:bg-red-700 text-white border-2 border-black sticker-shadow transition-all cursor-pointer"
              >
                {ct.completeOrder || 'Complete Order'} (₹{total})
              </button>
            </div>
          ) : (
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {cartItems.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400 font-bold text-xs">
                  {ct.emptyBasket || 'Your basket is empty. Browse Rythu Bazaar to buy fresh produce directly from farmers!'}
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-[#1E212E] rounded-2xl border-2 border-[#1E1E24] dark:border-[#383D54] p-3 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-xs text-[#3B3F63] dark:text-white line-clamp-1">{item.title}</h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        ₹{item.price} · {item.villageName}
                      </p>
                    </div>

                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="text-red-500 hover:text-red-700 dark:hover:text-red-400 p-1 cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer Checkout Bar */}
        {cartItems.length > 0 && checkoutStep === 'cart' && (
          <div className="border-t-2 border-[#1E1E24] dark:border-white/10 pt-4">
            <div className="flex items-center justify-between text-sm font-black text-[#3B3F63] dark:text-white mb-3">
              <span>{ct.totalDue || 'Total Payable:'}</span>
              <span className="font-chunky text-2xl">₹{total}</span>
            </div>
            <button
              onClick={() => setCheckoutStep('payment')}
              className="w-full py-3 rounded-full text-xs font-black bg-[#3B3F63] hover:bg-black dark:bg-[#A3B7D8] dark:hover:bg-white text-white dark:text-black border-2 border-black sticker-shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>{activeLang === 'te' ? 'నేరుగా చెల్లింపు చేయండి' : 'Proceed to Direct Payment'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
