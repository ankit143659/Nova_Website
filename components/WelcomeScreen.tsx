
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Network, Fingerprint, Lock } from 'lucide-react';

interface WelcomeScreenProps {
  onContinue: () => void;
  onExploreFeatures: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue, onExploreFeatures }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen animate-pulse duration-7000 delay-1000"></div>
      </div>

      {/* Starry Grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        
        <div className={`transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">
              Nova AI Engine Initiated
            </span>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-500 transform ${mounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Experience the Future <br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                of Intelligence
              </span>
              <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-[2px]"></div>
            </span>
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} max-w-2xl mx-auto`}>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
            Welcome to <strong className="text-white font-medium">Nova Ai Technologies Pvt Ltd</strong>. We build secure, modular, and highly scalable AI systems pushing the boundaries of enterprise automation.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} flex flex-col sm:flex-row items-center justify-center gap-6 w-full`}>
          <button 
            onClick={onContinue}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-[15px] transition-all hover:scale-105 w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 flex items-center gap-2">
              Enter Platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={onExploreFeatures}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full font-bold text-[15px] transition-all w-full sm:w-auto backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            Discover Capabilities
          </button>
        </div>

        {/* Floating Icons */}
        <div className={`absolute left-10 md:left-24 top-1/3 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'} hidden lg:block animate-pulse duration-[4000ms]`}>
           <div className="w-16 h-16 rounded-full glass-card border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)]">
             <Network className="w-6 h-6 text-blue-400" />
           </div>
        </div>

        <div className={`absolute right-10 md:right-24 bottom-1/3 transition-all duration-1000 delay-1200 ${mounted ? 'opacity-100' : 'opacity-0'} hidden lg:block animate-pulse duration-[5000ms]`}>
           <div className="w-16 h-16 rounded-full glass-card border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.15)]">
             <Fingerprint className="w-6 h-6 text-indigo-400" />
           </div>
        </div>

        <div className={`absolute right-32 top-1/4 transition-all duration-1000 delay-1100 ${mounted ? 'opacity-100' : 'opacity-0'} hidden lg:block animate-pulse duration-[3000ms]`}>
           <div className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
             <Lock className="w-4 h-4 text-gray-400" />
           </div>
        </div>

      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-20"></div>
    </div>
  );
};

export default WelcomeScreen;
