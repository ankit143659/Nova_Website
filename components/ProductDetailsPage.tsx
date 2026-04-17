
import React, { useState } from 'react';
import { ProductData } from '../types';
import { ArrowLeft, Zap, Shield, Key, HeadphonesIcon, RefreshCw, FileText, Rocket, Infinity as InfinityIcon, Globe, MessageCircle, Sparkles } from 'lucide-react';

interface ProductDetailsPageProps {
  product: ProductData;
  onBack: () => void;
  onPurchase: (price: number) => void;
  onInternationalHelp: (country: string) => void;
  themeColor: string;
  onViewFeatures: () => void;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product, onBack, onPurchase, onInternationalHelp, themeColor, onViewFeatures }) => {
  const [showIntlForm, setShowIntlForm] = useState(false);
  const [country, setCountry] = useState('');
  const [redeemCode, setRedeemCode] = useState('');
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [redeemError, setRedeemError] = useState('');

  const handleRedeem = () => {
    if (redeemCode.toUpperCase() === 'MJXHEART') {
      setIsRedeemed(true);
      setRedeemError('');
    } else {
      setRedeemError('Invalid redeem code');
    }
  };

  const getOfferPrice = () => {
    if (product.isCustom) return product.price; // Just maintain the base price if redeemed, or apply standard discount if requested later
    if (product.platform === 'combo') return 1499;
    if (product.id === 'mj-macos') return 1299;
    if (product.platform === 'max') return 899;
    if (product.platform === 'mj') return 999;
    return 799; // NOVA
  };

  const finalPrice = isRedeemed ? getOfferPrice() : product.price;

  const handleIntlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (country.trim()) {
      onInternationalHelp(country.trim());
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 min-h-[75vh] flex flex-col items-center justify-center pb-24 font-sans px-4 sm:px-6 pt-12 md:pt-0">
      <div className="w-full max-w-[440px]">
        
        <button 
          onClick={onBack}
          className="mb-6 flex items-center text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
        >
          <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform group-hover:bg-white/[0.05]">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Change Model
        </button>

        <div className="bg-[#09090b] border border-white/[0.08] shadow-[0_0_80px_rgba(0,0,0,0.6)] rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex flex-col w-full">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.07] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: themeColor }}></div>
          
          {/* Product Header */}
          <div className="mb-8 border-b border-white/[0.06] pb-6 relative z-10">
            <div className="flex justify-between items-start mb-4">
               <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.02]">
                <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: themeColor }}>
                  {product.platform}
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-display font-extrabold text-white mb-2 tracking-tight">
              {product.title}
            </h1>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              {product.subtitle}
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-8">
            {/* Price Highlight */}
            <div className="flex flex-col">
              {isRedeemed ? (
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-widest mb-2 flex items-center gap-1.5 bg-[#10b981]/10 px-2 py-1 rounded-md w-max border border-[#10b981]/20">
                    <Sparkles className="w-3 h-3" /> Offer Unlocked
                  </span>
                  <div className="flex items-end gap-3 flex-wrap">
                    <span className="text-4xl font-display font-black text-white tracking-tight leading-none">₹{finalPrice}</span>
                    <span className="text-xl font-bold text-gray-600 line-through mb-0.5">₹{product.price}</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Lifetime License</span>
                  <span className="text-4xl font-display font-black text-white tracking-tight leading-none flex items-end gap-2">
                    ₹{finalPrice} <span className="text-sm font-bold text-gray-500 tracking-normal pb-1 uppercase">/ once</span>
                  </span>
                </div>
              )}
            </div>

            {/* Redeem Logic */}
            {!isRedeemed && (
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Have a redeem code?</label>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <input 
                      type="text" 
                      value={redeemCode}
                      onChange={(e) => setRedeemCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 min-w-0 bg-[#040404] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm font-bold text-white outline-none focus:border-opacity-100 transition-all placeholder:text-gray-600 uppercase tracking-wider"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = themeColor; e.currentTarget.style.boxShadow = `0 0 0 1px ${themeColor}`; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                    <button 
                      onClick={handleRedeem}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-black transition-all hover:opacity-90 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center uppercase tracking-widest shrink-0"
                      style={{ backgroundColor: themeColor }}
                    >
                      Apply
                    </button>
                </div>
                {redeemError && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{redeemError}</p>}
                
                <a 
                    href="https://youtu.be/uTaSAFUbS-s" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold mt-1 ml-1 hover:text-white transition-colors w-max"
                    style={{ color: themeColor }}
                  >
                    Need a code? Watch demo →
                </a>
              </div>
            )}

            {/* Action Area */}
            <div className="flex flex-col gap-4 mt-2">
              <button 
                onClick={() => onPurchase(finalPrice)}
                className="w-full py-4 md:py-5 rounded-xl font-black text-[13px] tracking-widest uppercase transition-all shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.02] text-black flex items-center justify-center gap-3 overflow-hidden group relative"
                style={{ backgroundColor: themeColor }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Zap className="w-4 h-4" /> 
                Buy Now
              </button>

              <div className="flex justify-between items-center text-gray-500 mt-2 px-1">
                <span className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5"><Shield className="w-3 h-3" /> 256-Bit</span>
                <span className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5"><Zap className="w-3 h-3" /> Instant</span>
              </div>
            </div>

          </div>
        </div>

        {/* International Wrapper */}
        <div className="mt-8">
           {!showIntlForm ? (
            <button 
              onClick={() => setShowIntlForm(true)}
              className="w-full py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-all flex items-center justify-center gap-2 border border-transparent hover:bg-white/[0.02]"
            >
              <Globe className="w-3 h-3" />
              Intl. User? Get custom link
            </button>
          ) : (
            <form onSubmit={handleIntlSubmit} className="space-y-3 animate-in slide-in-from-bottom-2 fade-in duration-300 bg-[#09090b] border border-white/[0.08] p-5 rounded-2xl w-full shadow-2xl">
              <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-2">Global Assistance</p>
              <input 
                type="text" 
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter your country"
                className="w-full bg-[#040404] border border-white/[0.08] rounded-xl px-4 py-3 text-sm font-bold text-white outline-none focus:border-opacity-100 transition-all placeholder:text-gray-600 uppercase tracking-wider"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = themeColor; e.currentTarget.style.boxShadow = `0 0 0 1px ${themeColor}`; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
              />
              <button 
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest text-black flex items-center justify-center gap-2 transition-all hover:bg-[#20bd5c] shadow-lg"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle className="w-4 h-4" />
                Get Link via WhatsApp
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;
