import React, { useEffect, useState } from 'react';
import { OSType } from '../types';
import { Monitor, Smartphone, Laptop, Lock, Layers, Cpu, Server, Network } from 'lucide-react';

interface OSSelectionScreenProps {
  onSelectOS: (os: OSType) => void;
}

const OSSelectionScreen: React.FC<OSSelectionScreenProps> = ({ onSelectOS }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen font-sans overflow-hidden flex flex-col items-center justify-center pb-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxbC00MCAuNTotaloiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPHBhdGggZD0iTTAgMGgxdjQwbC0uNS00MHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPC9zdmc+')] opacity-30 pointer-events-none"></div>
      </div>

      {/* Floating Elements */}
      <div className={`hidden lg:flex absolute top-32 right-12 border border-white/10 glass-card rounded-2xl p-4 items-center gap-4 transition-all duration-1000 delay-700 shadow-[0_0_30px_rgba(59,130,246,0.15)] animate-pulse ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
         <Cpu className="w-5 h-5 text-blue-400" />
         <div>
           <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Hardware Sync</p>
           <p className="text-white text-xs font-bold">Optimizing Logic</p>
         </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-24 flex flex-col items-center justify-center w-full">
        
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
             <Layers className="w-4 h-4 text-blue-400 animate-pulse" />
             <span className="text-[10px] md:text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">Ecosystem Architecture</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Environment</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light mx-auto leading-relaxed">
            Our cognitive engines are tailored for specific hardware ecosystems. Choose your primary operating platform to deploy the core intelligence layer.
          </p>
        </div>

        <div className={`flex flex-col gap-8 w-full max-w-4xl mx-auto px-4 transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          {/* Windows */}
          <div 
            onClick={() => onSelectOS('windows')}
            className="group relative flex flex-col md:flex-row items-center text-left glass-card border border-white/10 hover:border-blue-500/50 rounded-[2rem] p-8 md:p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] bg-gradient-to-r from-white/[0.02] to-transparent"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="flex-shrink-0 w-24 h-24 rounded-[1.5rem] bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 mb-6 md:mb-0 md:mr-10 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <Monitor className="w-12 h-12 text-gray-300 group-hover:text-blue-400 transition-colors duration-500" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-500">Windows OS</h3>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed group-hover:text-gray-300 transition-colors mb-4">
                Access all our tools like MJ, NOVA, and Custom bots, built directly for your Windows computer.
              </p>
              <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                Explore Products <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </div>

          {/* Android */}
          <div 
            onClick={() => onSelectOS('android')}
            className="group relative flex flex-col md:flex-row items-center text-left glass-card border border-emerald-500/20 hover:border-emerald-500/50 rounded-[2rem] p-8 md:p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] bg-gradient-to-r from-emerald-500/[0.02] to-transparent"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="flex-shrink-0 w-24 h-24 rounded-[1.5rem] bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 mb-6 md:mb-0 md:mr-10 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <Smartphone className="w-12 h-12 text-emerald-500/80 group-hover:text-emerald-400 transition-colors duration-500" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">Android Mobile</h3>
              <p className="text-emerald-500/70 text-base md:text-lg font-light leading-relaxed group-hover:text-emerald-400 transition-colors mb-4">
                Get the powerful MAX 2.0 assistant right on your Android phone. Portable and fast.
              </p>
              <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                Explore Products <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </div>

          {/* Combo Win + Android */}
          <div 
            onClick={() => onSelectOS('combo-win-and')}
            className="group relative flex flex-col md:flex-row items-center text-left glass-card border border-amber-500/20 hover:border-amber-500/50 rounded-[2rem] p-8 md:p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] bg-gradient-to-r from-amber-500/[0.02] to-transparent"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="flex-shrink-0 w-24 h-24 rounded-[1.5rem] bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 mb-6 md:mb-0 md:mr-10 shadow-[0_0_20px_rgba(245,158,11,0.1)] relative">
              <div className="absolute top-2 left-3 group-hover:-translate-x-1 transition-transform">
                <Monitor className="w-8 h-8 text-blue-400/80 group-hover:text-blue-400 transition-colors duration-500" />
              </div>
              <div className="absolute bottom-2 right-3 group-hover:translate-x-1 transition-transform">
                <Smartphone className="w-8 h-8 text-emerald-400/80 group-hover:text-emerald-400 transition-colors duration-500" />
              </div>
              <div className="text-amber-500 font-bold text-2xl drop-shadow-md z-10">+</div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">Combo (Windows + Android)</h3>
              <p className="text-amber-500/70 text-base md:text-lg font-light leading-relaxed group-hover:text-amber-500 transition-colors mb-4">
                Get everything in one package. Access all our Windows bots plus the MAX 2.0 Android app at a great price.
              </p>
              <div className="inline-flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                Explore Products <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </div>

          {/* Mac OS */}
          <div 
            className="group relative flex flex-col md:flex-row items-center text-left bg-black/40 border border-white/5 rounded-[2rem] p-8 md:p-10 cursor-not-allowed overflow-hidden transition-all duration-700 opacity-60 grayscale-[0.5]"
          >
            <div className="absolute top-6 right-6 bg-white/5 border border-white/10 p-2 rounded-full backdrop-blur-sm">
              <Lock className="w-5 h-5 text-gray-500" />
            </div>
            
            <div className="flex-shrink-0 w-24 h-24 rounded-[1.5rem] bg-white/5 border border-white/5 flex items-center justify-center shadow-inner mb-6 md:mb-0 md:mr-10">
              <Laptop className="w-10 h-10 text-gray-600" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-display font-bold text-gray-500 mb-2 tracking-tight">macOS</h3>
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400/80">Coming Soon</span>
              </div>
              <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed italic">
                We are currently working on optimizing our tools for Mac. Stay tuned!
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OSSelectionScreen;
