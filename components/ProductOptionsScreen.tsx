
import React from 'react';
import { Platform } from '../types';
import { ArrowLeft, Monitor, Apple, Lock, Crown, ArrowRight } from 'lucide-react';

interface ProductOptionsScreenProps {
  platform: Platform | null;
  onBack: () => void;
  onSelectOption: (option: string, price: number) => void;
  themeColor: string;
}

const ProductOptionsScreen: React.FC<ProductOptionsScreenProps> = ({ platform, onBack, onSelectOption, themeColor }) => {
  const platformName = platform?.toUpperCase() || 'AI';
  const isMJ = platform === Platform.MJ;

  const windowsPrice = isMJ ? 1399 : 999;
  const offerWindowsPrice = isMJ ? 999 : 799;
  
  const customPrice = 2199;
  const offerCustomPrice = 1699;

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-text-secondary hover:text-white transition-colors text-sm font-medium group"
      >
        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4" />
        </div>
        Back to Products
      </button>

      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Choose Your Version
        </h2>
        <p className="text-text-secondary text-base md:text-lg max-w-2xl font-light">
          Select the version of {platformName} you want to get. Both options include lifetime access and free updates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Windows App */}
        <div 
          onClick={() => onSelectOption('windows', windowsPrice)}
          className="group relative flex flex-col bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: `linear-gradient(to bottom right, ${themeColor}1A, transparent)` }}></div>
          
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Monitor className="w-6 h-6" style={{ color: themeColor }} />
            </div>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/50">
              Instant Download
            </div>
          </div>

          <div className="relative z-10 flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
              Windows App
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 font-light">
              Ready to use Windows application (.exe) with all features optimized for PC.
            </p>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/10 pt-6 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-text-secondary line-through mb-1">₹{windowsPrice}</span>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">₹{offerWindowsPrice}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/20 text-green-400 font-bold border border-green-500/30">With Code</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* MacOS App (Locked) */}
        <div 
          className="group relative flex flex-col bg-[#050505] border border-white/5 rounded-3xl p-6 md:p-8 overflow-hidden opacity-60 cursor-not-allowed"
        >
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
              <Apple className="w-6 h-6 text-white/30" />
            </div>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/50 flex items-center gap-2">
              <Lock className="w-3 h-3" /> Coming Soon
            </div>
          </div>

          <div className="relative z-10 flex-1">
            <h3 className="text-2xl font-bold text-white/50 mb-3 tracking-tight">
              MacOS App
            </h3>
            <p className="text-text-secondary/50 text-sm leading-relaxed mb-8 font-light">
              Native MacOS application. Currently in development and will be available soon.
            </p>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/5 pt-6 flex items-center justify-between">
            <span className="text-2xl font-bold text-white/30">TBA</span>
          </div>
        </div>

        {/* Custom Identity */}
        <div 
          onClick={() => onSelectOption('custom', customPrice)}
          className="group relative flex flex-col bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: `linear-gradient(to bottom right, ${themeColor}1A, transparent)` }}></div>
          
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 relative">
              <Crown className="w-6 h-6" style={{ color: themeColor }} />
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full animate-ping" style={{ backgroundColor: themeColor }}></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full" style={{ backgroundColor: themeColor }}></div>
            </div>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/50">
              Fully Customized
            </div>
          </div>

          <div className="relative z-10 flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
              Custom Name AI
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 font-light">
              Get the AI with your own custom name and wake word (e.g., JARVIS, FRIDAY). Includes Windows App.
            </p>
          </div>

          <div className="relative z-10 mt-auto border-t border-white/10 pt-6 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-text-secondary line-through mb-1">₹{customPrice}</span>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">₹{offerCustomPrice}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/20 text-green-400 font-bold border border-green-500/30">With Code</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptionsScreen;
