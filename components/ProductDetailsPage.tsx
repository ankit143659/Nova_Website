
import React, { useState } from 'react';
import { ProductData } from '../types';
import { ArrowLeft, Zap, Shield, Key, HeadphonesIcon, RefreshCw, FileText, Rocket, Infinity as InfinityIcon, Globe, MessageCircle, Sparkles, CheckCircle2, Users } from 'lucide-react';
import ContactContent from './ContactContent';

interface ProductDetailsPageProps {
  product: ProductData;
  onBack: () => void;
  onPurchase: (price: number, currency: string) => void;
  onInternationalHelp: (country: string) => void;
  themeColor: string;
  onViewFeatures: () => void;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product, onBack, onPurchase, themeColor, onViewFeatures }) => {
  const [redeemCode, setRedeemCode] = useState('');
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [redeemError, setRedeemError] = useState('');

  const isOfferDay = (() => {
    const now = Date.now();
    // May 17 00:00 IST to May 18 00:00 IST (UTC: May 16 18:30 to May 17 18:30)
    const offerStart = new Date(Date.UTC(2026, 4, 16, 18, 30, 0)).getTime();
    const offerEnd = new Date(Date.UTC(2026, 4, 17, 18, 30, 0)).getTime();
    return now >= offerStart && now < offerEnd;
  })();

  const handleRedeem = () => {
    if (redeemCode.toUpperCase() === 'MJMAXNOVA') {
      setIsRedeemed(true);
      setRedeemError('');
    } else {
      setRedeemError('Invalid redeem code');
    }
  };

  const getOfferPrice = () => {
    // 100k Celebration Theme logic (17th May 2026 00:00 to 18th May 2026 00:00 IST)
    if (isOfferDay) {
      if (product.isCustom) return 1699;
      if (product.platform === 'combo') return 1499;
      if (product.platform === 'max') return 899; // keeping standard max offer
      if (product.platform === 'mj') return 999;
      if (product.id === 'nova-windows') return 899;
      return 899;
    }

    // Normal Offer Prices
    if (product.id === 'combo-max-nova' || product.id === 'combo-max-mj') return 1899;
    if (product.isCustom) return product.price - 500;
    if (product.platform === 'combo') return 1499;
    if (product.platform === 'max') return 899;
    if (product.platform === 'mj') return 1199;
    return 899; // NOVA
  };

  const baseFinalPrice = isRedeemed ? getOfferPrice() : product.price;
  
  const displayFinalPrice = baseFinalPrice;
  const displayOriginalPrice = product.price;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  const currentCurrency = 'INR';

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex-1">
      <div className="animate-in fade-in zoom-in-95 duration-700 min-h-[75vh] flex flex-col items-center justify-center pb-12 font-sans px-4 sm:px-6 pt-12 md:pt-0">
        <div className="w-full max-w-[500px]">
          
          <button 
            onClick={onBack}
            className="mb-4 flex items-center text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform group-hover:bg-white/10">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Selection
          </button>

          <div className="glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col w-full border border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: themeColor }}></div>
            
            {/* Product Header */}
            <div className="mb-6 border-b border-white/10 pb-6 relative z-10">
              <div className="flex justify-between items-start mb-4">
                 <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">
                    {product.platform}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">
                {product.title}
              </h1>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                {product.subtitle}
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              
              {/* International Customer Helper */}
              <div className="flex flex-col gap-2 p-5 rounded-2xl border border-white/5">
                 <button 
                  onClick={scrollToContact}
                  className="w-full bg-[#111] hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 hover:text-blue-400 transition-all text-left flex items-center justify-between group"
                 >
                   <span>Not from India?</span>
                   <span className="text-xs font-bold text-gray-500 group-hover:text-blue-400 uppercase tracking-widest rounded bg-white/5 px-2 py-0.5">Contact Us</span>
                 </button>
                 <p className="text-[10px] text-gray-500 font-medium px-1">Special payment gateways available for international customers.</p>
              </div>

              {/* Premium Inclusions List */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-300">Lifetime Enterprise License</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-300">Priority Business Support SLA</span>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-300">Free Ongoing Architecture Updates</span>
                </div>
              </div>

              {/* Price Highlight */}
              <div className="flex flex-col pt-5 border-t border-white/10">
                {isOfferDay && isRedeemed && (
                  <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 p-3 rounded-xl text-xs font-semibold text-center mb-4 uppercase tracking-widest animate-pulse">
                    🎉 Enterprise Discount Applied! 🎉
                  </div>
                )}
                {isRedeemed ? (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5 bg-blue-500/10 px-2 py-1 rounded-md w-max border border-blue-500/20">
                      <Sparkles className="w-3 h-3" /> Offer Unlocked
                    </span>
                    <div className="flex items-end gap-3 flex-wrap">
                      <span className="text-4xl font-display font-bold text-white tracking-tight leading-none">{formatCurrency(displayFinalPrice)}</span>
                      <span className="text-xl font-medium text-gray-600 line-through mb-0.5">{formatCurrency(displayOriginalPrice)}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-2">Perpetual Enterprise License</span>
                    <span className="text-4xl font-display font-bold text-white tracking-tight leading-none flex items-end gap-2">
                      {formatCurrency(displayFinalPrice)} <span className="text-sm font-medium text-gray-500 tracking-normal pb-1 uppercase">/ once</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Action Area */}
              <div className="flex flex-col gap-4 mt-2 border-t border-white/10 pt-6">
                <button 
                  onClick={() => onPurchase(displayFinalPrice, currentCurrency)}
                  className="w-full py-4 md:py-4 rounded-xl font-medium text-[15px] transition-all bg-blue-600 hover:bg-blue-500 hover:shadow-lg text-white flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  Proceed to Secure Checkout
                </button>

                <div className="flex justify-between items-center text-gray-500 mt-1 px-1">
                  <span className="text-[11px] font-medium flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> AES-256 Encryption</span>
                  <span className="text-[11px] font-medium flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> Instant Key Delivery</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div id="contact-section" className="max-w-4xl mx-auto px-4 pb-24 mt-8">
         <div className="mb-6 flex justify-center">
             <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
         </div>
         <ContactContent />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
