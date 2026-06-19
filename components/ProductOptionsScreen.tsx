
import React, { useState } from 'react';
import { Platform } from '../types';
import { ArrowLeft, Monitor, Apple, Lock, Crown, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ProductOptionsScreenProps {
  platform: Platform | null;
  onBack: () => void;
  onSelectOption: (option: string, price: number) => void;
  themeColor: string;
}

const ProductOptionsScreen: React.FC<ProductOptionsScreenProps> = ({ platform, onBack, onSelectOption, themeColor }) => {
  const [code, setCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [error, setError] = useState('');

  const handleApplyCode = () => {
    if (code.trim().toUpperCase() === 'VASHAI26') {
      setDiscountApplied(true);
      setError('');
    } else {
      setDiscountApplied(false);
      setError('Invalid redeem code.');
    }
  };

  const platformName = platform?.toUpperCase() || 'AI';
  const isMJ = platform === Platform.MJ;

  const baseWindowsPrice = isMJ ? 1399 : 999;
  const offerWindowsPrice = isMJ ? 999 : 799;
  
  const baseCustomPrice = 2499;
  const offerCustomPrice = 1999;

  const currentWindowsPrice = discountApplied ? offerWindowsPrice : baseWindowsPrice;
  const currentCustomPrice = discountApplied ? offerCustomPrice : baseCustomPrice;

  return (
    <div className="animate-in fade-in duration-700 pb-24 max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
      
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide group"
      >
        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform group-hover:bg-white/10">
          <ArrowLeft className="w-4 h-4" />
        </div>
        Back to Engine Selection
      </button>

      <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">
              Deployment Options
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
            Choose Your Deployment Architecture
          </h2>
          <p className="text-gray-400 text-base md:text-xl font-medium max-w-2xl leading-relaxed">
            Select the enterprise version of {platformName} you want to deploy. All options include lifetime commercial access, standard support SLA, and continuous security updates.
          </p>
        </div>
        
        {/* Redeem Code Section */}
        <div className="w-full lg:w-96 bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col gap-3 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Have a Redeem Code?</span>
            <a 
              href="https://www.youtube.com/embed/Sq7a991gC2c?si=dsMpKEvxEvreKRnw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[9px] font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              How to get code?
            </a>
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="ENTER CODE" 
              className="flex-grow bg-[#050505] border border-white/10 rounded-xl px-4 py-2 text-sm font-bold text-white focus:border-blue-500 outline-none transition-colors uppercase"
            />
            <button 
              onClick={handleApplyCode}
              disabled={discountApplied}
              className={`px-5 py-2 rounded-xl font-bold text-xs tracking-widest transition-all ${
                discountApplied 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {discountApplied ? 'APPLIED' : 'APPLY'}
            </button>
          </div>
          {error && <p className="text-red-400 text-[10px] font-bold uppercase">{error}</p>}
          {discountApplied && <p className="text-emerald-400 text-[10px] font-bold uppercase">Code verified! Discounts active below.</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Windows App */}
        <div 
          onClick={() => onSelectOption('windows', currentWindowsPrice)}
          className="group relative flex flex-col glass-card border border-white/10 rounded-3xl p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Monitor className="w-6 h-6 text-blue-400" />
            </div>
            <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-gray-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-blue-400" />
              Verified Build
            </div>
          </div>

          <div className="relative z-10 flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
              Windows Workstation Engine
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
              Enterprise-grade executable (.exe) designed for robust performance on Windows OS environments. Fully optimized.
            </p>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/10 pt-6 flex items-center justify-between">
            <div className="flex flex-col">
              {discountApplied ? (
                <>
                  <span className="text-xs text-gray-500 line-through mb-1 font-semibold uppercase tracking-wider">MSRP ₹{baseWindowsPrice}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-display font-bold text-white tracking-tight">₹{offerWindowsPrice}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30 uppercase tracking-wider">Discount Applied</span>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-xs text-transparent mb-1 font-semibold uppercase tracking-wider">&nbsp;</span>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-display font-bold text-white tracking-tight">₹{baseWindowsPrice}</span>
                  </div>
                </>
              )}
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-600 border border-blue-500 flex items-center justify-center text-white group-hover:bg-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* MacOS App (Locked) */}
        <div 
          className="group relative flex flex-col bg-black/40 border border-white/5 rounded-3xl p-6 md:p-8 overflow-hidden opacity-50 cursor-not-allowed"
        >
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
              <Apple className="w-6 h-6 text-gray-500" />
            </div>
            <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-gray-500 flex items-center gap-1.5">
              <Lock className="w-3 h-3" /> Coming Soon
            </div>
          </div>

          <div className="relative z-10 flex-1">
            <h3 className="text-2xl font-bold text-gray-500 mb-3 tracking-tight">
              MacOS Unix Build
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium">
              Native M-Series optimized application. Currently undergoing deep architectural compliance testing.
            </p>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/5 pt-6 flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-600">TBA</span>
          </div>
        </div>

        {/* Custom Identity */}
        <div 
          onClick={() => onSelectOption('custom', currentCustomPrice)}
          className="group relative flex flex-col glass-card border border-white/10 rounded-3xl p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:-translate-y-1 lg:col-span-1 md:col-span-2 lg:mt-0 mt-2"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 relative">
              <Crown className="w-6 h-6 text-indigo-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping bg-indigo-500"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-indigo-400 border border-black"></div>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold tracking-widest uppercase text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              White-label Solution
            </div>
          </div>

          <div className="relative z-10 flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
              Bespoke Identity Licensing
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
              Deep source-level customization. Inject your corporate identity, custom wake words, and proprietary naming directly into the compiled binaries.
            </p>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/10 pt-6 flex items-center justify-between">
            <div className="flex flex-col">
              {discountApplied ? (
                <>
                  <span className="text-xs text-gray-500 line-through mb-1 font-semibold uppercase tracking-wider">MSRP ₹{baseCustomPrice}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-display font-bold text-white tracking-tight">₹{offerCustomPrice}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30 uppercase tracking-wider">Discount Applied</span>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-xs text-transparent mb-1 font-semibold uppercase tracking-wider">&nbsp;</span>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-display font-bold text-white tracking-tight">₹{baseCustomPrice}</span>
                  </div>
                </>
              )}
            </div>
            <div className="w-12 h-12 rounded-xl bg-indigo-600 border border-indigo-500 flex items-center justify-center text-white group-hover:bg-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptionsScreen;
