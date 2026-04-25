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

      <div className="grid grid-cols-1 select-none md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4">
        {/* Windows */}
        <div 
          onClick={() => onSelectOS('windows')}
          className="group relative flex flex-col items-center text-center bg-[#09090b] border border-white/[0.08] hover:border-[#00f2ff]/30 rounded-[2rem] p-8 cursor-pointer overflow-hidden transition-all duration-700 shadow-2xl hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,242,255,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="w-20 h-20 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 mb-6 mt-2 group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/20">
            <Monitor className="w-10 h-10 text-gray-400 group-hover:text-[#00f2ff] transition-colors duration-500" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-500">Windows</h3>
          <p className="text-gray-400 text-xs font-medium px-2 leading-relaxed group-hover:text-gray-300 transition-colors">Access MJ, NOVA, Combo, and Custom engines.</p>
        </div>

        {/* Android */}
        <div 
          onClick={() => onSelectOS('android')}
          className="group relative flex flex-col items-center text-center bg-[#09090b] border border-[#10b981]/20 hover:border-[#10b981]/50 rounded-[2rem] p-8 cursor-pointer overflow-hidden transition-all duration-700 shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(16,185,129,0.2)] ring-1 ring-[#10b981]/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="w-20 h-20 rounded-3xl bg-[#10b981]/[0.02] border border-[#10b981]/20 flex items-center justify-center shadow-[inset_0_0_20px_rgba(16,185,129,0.1)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 mb-6 mt-2 group-hover:bg-[#10b981]/10">
            <Smartphone className="w-10 h-10 text-[#10b981]/80 group-hover:text-[#10b981] transition-colors duration-500" />
          </div>
          <h3 className="text-2xl font-display font-black text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">Android</h3>
          <p className="text-[#10b981]/70 text-xs font-medium px-2 leading-relaxed group-hover:text-[#10b981]/90 transition-colors">Exclusive access to MAX - the portable intelligence.</p>
        </div>

        {/* Mac OS */}
        <div 
          onClick={() => onSelectOS('mac')}
          className="group relative flex flex-col items-center text-center bg-[#09090b] border border-white/[0.08] hover:border-[#ff2a6d]/30 rounded-[2rem] p-8 cursor-pointer overflow-hidden transition-all duration-700 shadow-2xl hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,42,109,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a6d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="w-20 h-20 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 mb-6 mt-2 group-hover:bg-[#ff2a6d]/10 group-hover:border-[#ff2a6d]/20">
            <Laptop className="w-10 h-10 text-gray-400 group-hover:text-[#ff2a6d] transition-colors duration-500" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-500">macOS</h3>
          <p className="text-gray-400 text-xs font-medium px-2 leading-relaxed group-hover:text-gray-300 transition-colors">MJ Engine natively compiled for Apple Silicon.</p>
        </div>

        {/* Combo Win + Android */}
        <div 
          onClick={() => onSelectOS('combo-win-and')}
          className="group relative flex flex-col items-center text-center bg-[#09090b] border border-[#eab308]/20 hover:border-[#eab308]/50 rounded-[2rem] p-8 cursor-pointer overflow-hidden transition-all duration-700 shadow-[0_0_30px_rgba(234,179,8,0.05)] hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(234,179,8,0.2)] ring-1 ring-[#eab308]/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#eab308]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="w-20 h-20 rounded-3xl bg-[#eab308]/[0.02] border border-[#eab308]/20 flex items-center justify-center shadow-[inset_0_0_20px_rgba(234,179,8,0.1)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 mb-6 mt-2 group-hover:bg-[#eab308]/10 relative">
            <div className="absolute -top-1 -left-1">
              <Monitor className="w-7 h-7 text-[#00f2ff]/80 group-hover:text-[#00f2ff] transition-colors duration-500" />
            </div>
            <div className="absolute -bottom-1 -right-1">
              <Smartphone className="w-7 h-7 text-[#10b981]/80 group-hover:text-[#10b981] transition-colors duration-500" />
            </div>
            <div className="text-[#eab308] font-bold text-xl">+</div>
          </div>
          <h3 className="text-2xl font-display font-black text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]">Win + Android</h3>
          <p className="text-[#eab308]/70 text-xs font-medium px-2 leading-relaxed group-hover:text-[#eab308]/90 transition-colors">Access MAX alongside Windows MJ or NOVA.</p>
        </div>
      </div>
    </div>
  );
};

export default OSSelectionScreen;
