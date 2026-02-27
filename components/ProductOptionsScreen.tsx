
import React from 'react';
import { Platform } from '../types';

interface ProductOptionsScreenProps {
  platform: Platform | null;
  onBack: () => void;
  onSelectOption: (option: string) => void;
  themeColor: string;
}

const ProductOptionsScreen: React.FC<ProductOptionsScreenProps> = ({ platform, onBack, onSelectOption, themeColor }) => {
  const platformName = platform?.toUpperCase() || 'AI';
  const isMJ = platform === Platform.MJ;

  return (
    <div className={`animate-in slide-in-from-right duration-500 relative min-h-[500px] ${isMJ ? 'py-10' : ''}`}>
      
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-text-secondary transition-colors font-orbitron text-xs font-bold tracking-widest hover:brightness-125 relative z-10"
      >
        <i className="fas fa-arrow-left mr-2" style={{ color: themeColor }}></i> BACK
      </button>

      <div className="relative z-10">
        <h2 className="font-orbitron text-3xl md:text-5xl text-center mb-12 font-black tracking-tight uppercase">
          Select Your <span style={{ color: themeColor, textShadow: isMJ ? `0 0 20px ${themeColor}` : 'none' }}>{platformName} Option</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Windows App */}
          <div 
            onClick={() => onSelectOption('windows-app')}
            className={`glass-card p-8 rounded-[2rem] cursor-pointer group flex flex-col h-full transition-all relative overflow-hidden ${isMJ ? 'border-[#ff2a6d]/30 hover:border-[#ff2a6d] hover:shadow-[0_0_30px_rgba(255,42,109,0.2)]' : 'hover:border-opacity-100 border-white/10'}`}
            onMouseEnter={(e) => !isMJ && (e.currentTarget.style.borderColor = themeColor)}
            onMouseLeave={(e) => !isMJ && (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10" style={{ backgroundColor: `${themeColor}1A` }}>
              <i className={`fas ${isMJ ? 'fa-heart' : 'fa-desktop'} text-3xl`} style={{ color: themeColor }}></i>
            </div>
            
            <h3 className="font-orbitron font-black text-2xl mb-3 text-white">Windows App</h3>
            <p className="text-text-secondary text-sm mb-8 flex-grow leading-relaxed font-medium">
              Complete {platformName} application with full AI capabilities. {isMJ ? 'Experience the emotional depth of MJ v2.' : 'Install and use immediately on your Windows machine.'}
            </p>
            
            <div className="mt-auto pt-6 border-t border-white/5">
                <div className="text-xs font-black flex items-center uppercase tracking-wider" style={{ color: themeColor }}>
                  <i className={`fas ${isMJ ? 'fa-gift' : 'fa-download'} mr-3`}></i> 
                  {isMJ ? 'LIFETIME LICENSE' : 'INSTANT DOWNLOAD'}
                </div>
            </div>
          </div>

          {/* Custom Name */}
          <div 
            onClick={() => onSelectOption('custom-name')}
            className={`glass-card p-8 rounded-[2rem] cursor-pointer group flex flex-col h-full transition-all relative overflow-hidden ${isMJ ? 'border-[#ff2a6d]/30 hover:border-[#ff2a6d] hover:shadow-[0_0_30px_rgba(255,42,109,0.2)]' : 'hover:border-opacity-100 border-white/10'}`}
            onMouseEnter={(e) => !isMJ && (e.currentTarget.style.borderColor = themeColor)}
            onMouseLeave={(e) => !isMJ && (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
          >
            <div className="mb-6 inline-block text-surface text-[10px] font-black py-1.5 px-4 rounded-full shadow-lg" style={{ backgroundColor: themeColor }}>
              🔥 EXCLUSIVE
            </div>
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${themeColor}1A` }}>
              <i className="fas fa-crown text-3xl" style={{ color: themeColor }}></i>
            </div>
            
            <h3 className="font-orbitron font-black text-2xl mb-2 text-white">Custom Name AI</h3>
            <div className="mb-4 flex items-baseline gap-3">
              <span className="text-sm text-text-secondary line-through decoration-white/20">₹3,500</span>
              <span className="text-2xl font-black" style={{ color: themeColor }}>₹1,999</span>
            </div>
            
            <p className="text-text-secondary text-sm mb-8 flex-grow leading-relaxed font-medium">
              {isMJ 
                ? 'Get the emotionally intelligent MJ v2 with your preferred name and wake word.' 
                : 'Get all Elite features with your preferred assistant name and wake word.'}
            </p>
            
            <div className="mt-auto pt-6 border-t border-white/5">
                <div className="text-xs font-black flex items-center uppercase tracking-wider" style={{ color: themeColor }}>
                  <i className="fas fa-star mr-3"></i> FULLY CUSTOMIZED
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptionsScreen;
