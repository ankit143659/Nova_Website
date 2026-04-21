
import React, { useState } from 'react';
import { ProductData } from '../types';
import { ArrowLeft, Zap, Shield, Key, HeadphonesIcon, RefreshCw, FileText, Rocket, Infinity as InfinityIcon, Globe, MessageCircle, Sparkles, CheckCircle2, Users } from 'lucide-react';

interface ProductDetailsPageProps {
  product: ProductData;
  onBack: () => void;
  onPurchase: (price: number, currency: string) => void;
  onInternationalHelp: (country: string) => void;
  themeColor: string;
  onViewFeatures: () => void;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product, onBack, onPurchase, onInternationalHelp, themeColor, onViewFeatures }) => {
  const [showIntlForm, setShowIntlForm] = useState(false);
  const [country, setCountry] = useState('India');
  const [currency, setCurrency] = useState('INR');
  const [redeemCode, setRedeemCode] = useState('');
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [redeemError, setRedeemError] = useState('');

  const currencies = [
    { code: 'INR', label: 'India (INR)', rate: 1 },
    { code: 'USD', label: 'United States (USD)', rate: 0.012 },
    { code: 'EUR', label: 'Eurozone (EUR)', rate: 0.011 },
    { code: 'GBP', label: 'United Kingdom (GBP)', rate: 0.0094 },
    { code: 'AED', label: 'United Arab Emirates (AED)', rate: 0.044 },
    { code: 'AFN', label: 'Afghanistan (AFN)', rate: 0.86 },
    { code: 'ALL', label: 'Albania (ALL)', rate: 1.14 },
    { code: 'AMD', label: 'Armenia (AMD)', rate: 4.8 },
    { code: 'ARS', label: 'Argentina (ARS)', rate: 10.3 },
    { code: 'AUD', label: 'Australia (AUD)', rate: 0.018 },
    { code: 'AZN', label: 'Azerbaijan (AZN)', rate: 0.02 },
    { code: 'BAM', label: 'Bosnia-Herzegovina (BAM)', rate: 0.021 },
    { code: 'BDT', label: 'Bangladesh (BDT)', rate: 1.31 },
    { code: 'BGN', label: 'Bulgaria (BGN)', rate: 0.021 },
    { code: 'BHD', label: 'Bahrain (BHD)', rate: 0.0045 },
    { code: 'BRL', label: 'Brazil (BRL)', rate: 0.06 },
    { code: 'CAD', label: 'Canada (CAD)', rate: 0.016 },
    { code: 'CHF', label: 'Switzerland (CHF)', rate: 0.011 },
    { code: 'CLP', label: 'Chile (CLP)', rate: 11.5 },
    { code: 'CNY', label: 'China (CNY)', rate: 0.086 },
    { code: 'COP', label: 'Colombia (COP)', rate: 47.0 },
    { code: 'CRC', label: 'Costa Rica (CRC)', rate: 6.1 },
    { code: 'CZK', label: 'Czech Republic (CZK)', rate: 0.28 },
    { code: 'DKK', label: 'Denmark (DKK)', rate: 0.082 },
    { code: 'DOP', label: 'Dominican Republic (DOP)', rate: 0.7 },
    { code: 'EGP', label: 'Egypt (EGP)', rate: 0.57 },
    { code: 'FJD', label: 'Fiji (FJD)', rate: 0.027 },
    { code: 'GHS', label: 'Ghana (GHS)', rate: 0.16 },
    { code: 'GTQ', label: 'Guatemala (GTQ)', rate: 0.093 },
    { code: 'HKD', label: 'Hong Kong (HKD)', rate: 0.094 },
    { code: 'HNL', label: 'Honduras (HNL)', rate: 0.29 },
    { code: 'HUF', label: 'Hungary (HUF)', rate: 4.35 },
    { code: 'IDR', label: 'Indonesia (IDR)', rate: 189.0 },
    { code: 'ILS', label: 'Israel (ILS)', rate: 0.044 },
    { code: 'ISK', label: 'Iceland (ISK)', rate: 1.66 },
    { code: 'JMD', label: 'Jamaica (JMD)', rate: 1.86 },
    { code: 'JPY', label: 'Japan (JPY)', rate: 1.81 },
    { code: 'KES', label: 'Kenya (KES)', rate: 1.58 },
    { code: 'KHR', label: 'Cambodia (KHR)', rate: 48.6 },
    { code: 'KRW', label: 'South Korea (KRW)', rate: 16.2 },
    { code: 'KWD', label: 'Kuwait (KWD)', rate: 0.0037 },
    { code: 'KZT', label: 'Kazakhstan (KZT)', rate: 5.4 },
    { code: 'LBP', label: 'Lebanon (LBP)', rate: 1070.0 },
    { code: 'LKR', label: 'Sri Lanka (LKR)', rate: 3.6 },
    { code: 'MAD', label: 'Morocco (MAD)', rate: 0.12 },
    { code: 'MDL', label: 'Moldova (MDL)', rate: 0.21 },
    { code: 'MKD', label: 'North Macedonia (MKD)', rate: 0.68 },
    { code: 'MUR', label: 'Mauritius (MUR)', rate: 0.55 },
    { code: 'MVR', label: 'Maldives (MVR)', rate: 0.18 },
    { code: 'MXN', label: 'Mexico (MXN)', rate: 0.20 },
    { code: 'MYR', label: 'Malaysia (MYR)', rate: 0.057 },
    { code: 'NAD', label: 'Namibia (NAD)', rate: 0.23 },
    { code: 'NGN', label: 'Nigeria (NGN)', rate: 15.0 },
    { code: 'NOK', label: 'Norway (NOK)', rate: 0.13 },
    { code: 'NPR', label: 'Nepal (NPR)', rate: 1.6 },
    { code: 'NZD', label: 'New Zealand (NZD)', rate: 0.02 },
    { code: 'OMR', label: 'Oman (OMR)', rate: 0.0046 },
    { code: 'PAB', label: 'Panama (PAB)', rate: 0.012 },
    { code: 'PEN', label: 'Peru (PEN)', rate: 0.045 },
    { code: 'PHP', label: 'Philippines (PHP)', rate: 0.68 },
    { code: 'PKR', label: 'Pakistan (PKR)', rate: 3.33 },
    { code: 'PLN', label: 'Poland (PLN)', rate: 0.048 },
    { code: 'PYG', label: 'Paraguay (PYG)', rate: 88.0 },
    { code: 'QAR', label: 'Qatar (QAR)', rate: 0.044 },
    { code: 'RON', label: 'Romania (RON)', rate: 0.055 },
    { code: 'RSD', label: 'Serbia (RSD)', rate: 1.29 },
    { code: 'RUB', label: 'Russia (RUB)', rate: 1.1 },
    { code: 'SAR', label: 'Saudi Arabia (SAR)', rate: 0.045 },
    { code: 'SEK', label: 'Sweden (SEK)', rate: 0.13 },
    { code: 'SGD', label: 'Singapore (SGD)', rate: 0.016 },
    { code: 'THB', label: 'Thailand (THB)', rate: 0.43 },
    { code: 'TRY', label: 'Turkey (TRY)', rate: 0.38 },
    { code: 'TTD', label: 'Trinidad and Tobago (TTD)', rate: 0.081 },
    { code: 'TWD', label: 'Taiwan (TWD)', rate: 0.38 },
    { code: 'TZS', label: 'Tanzania (TZS)', rate: 30.6 },
    { code: 'UAH', label: 'Ukraine (UAH)', rate: 0.47 },
    { code: 'UYU', label: 'Uruguay (UYU)', rate: 0.46 },
    { code: 'UZS', label: 'Uzbekistan (UZS)', rate: 151.0 },
    { code: 'VND', label: 'Vietnam (VND)', rate: 300.0 },
    { code: 'XAF', label: 'Central African Franc (XAF)', rate: 7.2 },
    { code: 'XOF', label: 'West African Franc (XOF)', rate: 7.2 },
    { code: 'ZAR', label: 'South Africa (ZAR)', rate: 0.23 }
  ];

  const handleRedeem = () => {
    if (redeemCode.toUpperCase() === 'MJXHEART') {
      setIsRedeemed(true);
      setRedeemError('');
    } else {
      setRedeemError('Invalid redeem code');
    }
  };

  const getOfferPrice = () => {
    if (product.isCustom) return product.price;
    if (product.platform === 'combo') return 1499;
    if (product.platform === 'max') return 899;
    if (product.platform === 'mj') return 999;
    return 899; // NOVA
  };

  const baseFinalPrice = isRedeemed ? getOfferPrice() : product.price;
  
  const currentRate = currencies.find(c => c.code === currency)?.rate || 1;
  const displayFinalPrice = Math.round(baseFinalPrice * currentRate);
  const displayOriginalPrice = Math.round(product.price * currentRate);

  const formatCurrency = (amount: number) => {
    try {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumFractionDigits: 0 }).format(amount);
    } catch (e) {
      return `${currency} ${amount}`;
    }
  };

  const handleIntlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (country.trim()) {
      onInternationalHelp(country.trim());
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 min-h-[75vh] flex flex-col items-center justify-center pb-24 font-sans px-4 sm:px-6 pt-12 md:pt-0">
      <div className="w-full max-w-[500px]">
        
        <button 
          onClick={onBack}
          className="mb-4 flex items-center text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
        >
          <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform group-hover:bg-white/[0.05]">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Change Model
        </button>

        <div className="bg-[#09090b] border border-white/[0.08] shadow-[0_0_80px_rgba(0,0,0,0.6)] rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex flex-col w-full">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.07] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: themeColor }}></div>
          
          {/* Product Header */}
          <div className="mb-6 border-b border-white/[0.06] pb-6 relative z-10">
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

          <div className="relative z-10 flex flex-col gap-6">
            
            {/* Currency Selector */}
            <div className="flex flex-col gap-2 bg-[#040404] p-4 rounded-xl border border-white/[0.05]">
               <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Select Your Country / Currency</label>
               <select 
                 value={currency} 
                 onChange={(e) => setCurrency(e.target.value)}
                 className="w-full bg-[#09090b] border border-white/[0.08] rounded-lg px-4 py-3 text-sm font-bold text-white outline-none focus:border-opacity-100 transition-all uppercase tracking-wider appearance-none"
                 style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
               >
                 {currencies.map(c => (
                   <option key={c.code} value={c.code}>{c.label}</option>
                 ))}
               </select>
            </div>

            {/* Premium Inclusions List */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                <span className="text-sm font-bold text-gray-300">Lifetime Usage & Updates</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-[#10b981]" />
                <span className="text-sm font-bold text-gray-300">Exclusive VIP WhatsApp Group</span>
              </div>
              <div className="flex items-center gap-3">
                <HeadphonesIcon className="w-4 h-4 text-[#10b981]" />
                <span className="text-sm font-bold text-gray-300">Direct Admin Support</span>
              </div>
            </div>

            {/* Price Highlight */}
            <div className="flex flex-col pt-4 border-t border-white/[0.05]">
              {isRedeemed ? (
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-widest mb-2 flex items-center gap-1.5 bg-[#10b981]/10 px-2 py-1 rounded-md w-max border border-[#10b981]/20">
                    <Sparkles className="w-3 h-3" /> Offer Unlocked
                  </span>
                  <div className="flex items-end gap-3 flex-wrap">
                    <span className="text-4xl font-display font-black text-white tracking-tight leading-none">{formatCurrency(displayFinalPrice)}</span>
                    <span className="text-xl font-bold text-gray-600 line-through mb-0.5">{formatCurrency(displayOriginalPrice)}</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Lifetime License</span>
                  <span className="text-4xl font-display font-black text-white tracking-tight leading-none flex items-end gap-2">
                    {formatCurrency(displayFinalPrice)} <span className="text-sm font-bold text-gray-500 tracking-normal pb-1 uppercase">/ once</span>
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
                onClick={() => onPurchase(displayFinalPrice, currency)}
                className="w-full py-4 md:py-5 rounded-xl font-black text-[14px] tracking-[0.2em] uppercase transition-all shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.02] text-black flex items-center justify-center gap-3 overflow-hidden group relative"
                style={{ backgroundColor: themeColor }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Zap className="w-5 h-5" /> 
                Buy Now
              </button>

              <div className="flex justify-between items-center text-gray-500 mt-2 px-1">
                <span className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5"><Shield className="w-3 h-3" /> Secure Payment</span>
                <span className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5"><Zap className="w-3 h-3" /> Instant Delivery</span>
              </div>
              
              <button 
                onClick={() => onInternationalHelp(currencies.find(c => c.code === currency)?.label || 'Worldwide')}
                className="mt-3 w-full py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] text-gray-400 hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                No Card? Ask for Alternative Options
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;
