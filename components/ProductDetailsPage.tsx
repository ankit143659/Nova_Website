
import React, { useState } from 'react';
import { ProductData } from '../types';
import { ArrowLeft, Zap, Shield, Key, HeadphonesIcon, RefreshCw, FileText, Rocket, Infinity as InfinityIcon, Globe, MessageCircle } from 'lucide-react';

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
    if (product.isCustom) return 1699;
    if (product.platform === 'combo') return 1499;
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
    <div className="animate-in fade-in duration-700 pb-24">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-text-secondary hover:text-white transition-colors text-sm font-medium group"
      >
        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4" />
        </div>
        Back to Options
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Info & Features */}
        <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: themeColor }}>
                {product.platform}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {product.title}
            </h1>
            <p className="text-text-secondary text-base leading-relaxed font-light">
              {product.subtitle}
            </p>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 mb-8 relative overflow-hidden flex-1 flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: themeColor }}></div>
            
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10 relative z-10">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">
                {product.variantName || 'Elite'} Features
              </h3>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-white/70">
                {product.features.length} Modules
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar relative z-10 space-y-4 max-h-[400px]">
              {product.features.slice(0, 10).map((f, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/5 border border-white/10">
                    <span className="text-lg" style={{ color: themeColor }}>{f.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{f.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
              <button 
                onClick={onViewFeatures}
                className="w-full py-3 mt-2 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
              >
                View All {product.features.length} Features
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex items-end gap-4 mb-2">
              <span className="text-5xl font-bold text-white tracking-tight">₹{finalPrice}</span>
              {isRedeemed && <span className="text-2xl font-medium text-text-secondary line-through mb-1">₹{product.price}</span>}
              <span className="text-sm font-medium text-text-secondary mb-2">/ lifetime</span>
            </div>

            {/* Redeem Code Section */}
            {!isRedeemed && (
              <div className="mb-4">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={redeemCode}
                    onChange={(e) => setRedeemCode(e.target.value)}
                    placeholder="Enter Redeem Code"
                    className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-opacity-100 focus:ring-1 transition-all placeholder:text-white/20 uppercase"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  />
                  <button 
                    onClick={handleRedeem}
                    className="px-4 py-3 rounded-xl font-bold text-sm text-black transition-all hover:opacity-90 whitespace-nowrap"
                    style={{ backgroundColor: themeColor }}
                  >
                    Apply
                  </button>
                </div>
                {redeemError && <p className="text-red-500 text-xs mt-2">{redeemError}</p>}
                <p className="text-xs text-text-secondary mt-2">Get redeem code and unlock offer</p>
              </div>
            )}
            {isRedeemed && (
              <div className="mb-4 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium flex items-center gap-2">
                <Zap className="w-4 h-4" /> Offer applied successfully!
              </div>
            )}

            <button 
              onClick={() => onPurchase(finalPrice)}
              className="w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-black flex items-center justify-center gap-3"
              style={{ backgroundColor: themeColor }}
            >
              <Zap className="w-5 h-5" /> 
              Get {product.variantName || 'Now'}
            </button>
            <div className="flex items-center justify-center gap-6 mt-2">
              <p className="text-xs text-text-secondary font-medium flex items-center gap-2">
                <Shield className="w-4 h-4" style={{ color: themeColor }} /> 256-Bit Secure
              </p>
              <p className="text-xs text-text-secondary font-medium flex items-center gap-2">
                <Zap className="w-4 h-4" style={{ color: themeColor }} /> Instant Delivery
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              {!showIntlForm ? (
                <button 
                  onClick={() => setShowIntlForm(true)}
                  className="w-full py-3 rounded-xl font-medium text-sm text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Not from India? Click here
                </button>
              ) : (
                <form onSubmit={handleIntlSubmit} className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-xs text-text-secondary text-center">International Payment Assistance</p>
                  <input 
                    type="text" 
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter your country name"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-opacity-100 focus:ring-1 transition-all placeholder:text-white/20"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = themeColor; e.currentTarget.style.boxShadow = `0 0 0 1px ${themeColor}`; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                  <button 
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-sm text-black flex items-center justify-center gap-2 transition-all hover:opacity-90"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Get Help on WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Video & Inclusions */}
        <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
            <iframe 
              src={product.videoUrl}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              title="Product Demo"
            ></iframe>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8">
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Premium Inclusions</h4>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                {icon: Key, text: 'Activation Key'},
                {icon: HeadphonesIcon, text: 'VIP Support'},
                {icon: RefreshCw, text: 'Lifetime Updates'},
                {icon: FileText, text: 'GST Invoice'},
                {icon: Rocket, text: 'Zero Latency API'},
                {icon: InfinityIcon, text: 'No Subscriptions'}
               ].map((item, idx) => {
                 const Icon = item.icon;
                 return (
                 <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                   <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/5 border border-white/10">
                      <Icon className="w-5 h-5" style={{ color: themeColor }} />
                   </div>
                   <span className="text-xs font-bold text-white leading-tight">{item.text}</span>
                 </div>
               )})}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}</style>
    </div>
  );
};

export default ProductDetailsPage;
