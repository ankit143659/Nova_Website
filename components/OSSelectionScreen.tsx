import React from 'react';
import { OSType } from '../types';
import { Monitor, Smartphone, Laptop } from 'lucide-react';

interface OSSelectionScreenProps {
  onSelectOS: (os: OSType) => void;
}

const OSSelectionScreen: React.FC<OSSelectionScreenProps> = ({ onSelectOS }) => {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 pb-24 font-sans max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-24 flex flex-col items-center justify-center min-h-[70vh]">
      
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8 backdrop-blur-md">
           <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
           <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">Ecosystem</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-6">
          Architectures
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium tracking-tight mx-auto leading-relaxed">
          Our cognitive engines are optimized for specific hardware ecosystems. Select your primary platform to continue.
        </p>
      </div>

      <div className="grid grid-cols-1 select-none md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Windows */}
        <div 
          onClick={() => onSelectOS('windows')}
          className="group relative flex flex-col items-center text-center bg-[#09090b] border border-white/[0.08] hover:border-[#00f2ff]/30 rounded-[2rem] p-10 cursor-pointer overflow-hidden transition-all duration-700 shadow-2xl hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,242,255,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="w-24 h-24 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 mb-8 mt-4 group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/20">
            <Monitor className="w-10 h-10 text-gray-400 group-hover:text-[#00f2ff] transition-colors duration-500" />
          </div>
          <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">Windows</h3>
          <p className="text-gray-400 text-sm font-medium px-4 leading-relaxed group-hover:text-gray-300 transition-colors">Full access to MJ, NOVA, Unified Combo, and Custom engines.</p>
        </div>

        {/* Android */}
        <div 
          onClick={() => { /* Disabled until May 1 */ }}
          className="group relative flex flex-col items-center text-center bg-[#09090b] border border-white/[0.08] rounded-[2rem] p-10 cursor-default overflow-hidden transition-all duration-700 shadow-2xl opacity-80"
        >
          <div className="absolute inset-0 z-30 bg-[#09090b]/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6 rounded-[2rem]">
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold tracking-widest uppercase text-white mb-3 backdrop-blur-md shadow-lg">
              Coming Soon
            </span>
            <p className="font-display font-extrabold text-[#10b981] text-2xl tracking-tight mb-2">Launching May 1</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="w-24 h-24 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shadow-inner mb-8 mt-4">
            <Smartphone className="w-10 h-10 text-gray-500" />
          </div>
          <h3 className="text-3xl font-display font-bold text-gray-500 mb-4 tracking-tight">Android</h3>
          <p className="text-gray-600 text-sm font-medium px-4 leading-relaxed">Exclusive access to MAX - the portable intelligence.</p>
        </div>

        {/* Mac OS */}
        <div 
          onClick={() => onSelectOS('mac')}
          className="group relative flex flex-col items-center text-center bg-[#09090b] border border-white/[0.08] hover:border-[#ff2a6d]/30 rounded-[2rem] p-10 cursor-pointer overflow-hidden transition-all duration-700 shadow-2xl hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,42,109,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a6d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="w-24 h-24 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 mb-8 mt-4 group-hover:bg-[#ff2a6d]/10 group-hover:border-[#ff2a6d]/20">
            <Laptop className="w-10 h-10 text-gray-400 group-hover:text-[#ff2a6d] transition-colors duration-500" />
          </div>
          <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">macOS</h3>
          <p className="text-gray-400 text-sm font-medium px-4 leading-relaxed group-hover:text-gray-300 transition-colors">Streamlined access to MJ v4 Core systems.</p>
        </div>
      </div>
    </div>
  );
};

export default OSSelectionScreen;
