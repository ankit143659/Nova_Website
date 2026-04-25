
import React from 'react';
import { Cpu, Users, Shield, ArrowRight, Sparkles, Terminal, Rocket, Bell, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react';

interface WelcomeScreenProps {
  onContinue: () => void;
  onExploreFeatures: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue, onExploreFeatures }) => {
  return (
    <div className="animate-in fade-in duration-1000 pb-24 font-sans selection:bg-[#10b981] selection:text-white">
      {/* Background Ambient Glow for MAX Launch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-[#10b981]/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-24 pb-20">
        
        {/* Launch Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-32">
          
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#10b981]/40 bg-[#10b981]/10 mb-8 md:mb-12 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.2)] animate-in slide-in-from-bottom-8 duration-700">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]"></span>
            </span>
            <span className="text-xs md:text-sm font-extrabold text-[#10b981] tracking-[0.2em] uppercase">
              OFFICIAL LAUNCH · NOW LIVE
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-display font-black tracking-tighter text-white mb-6 md:mb-8 leading-[1.05] drop-shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#10b981] via-[#34d399] to-white">MAX.</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-3xl max-w-4xl mx-auto font-medium leading-relaxed tracking-tight px-2 md:px-4 mb-4">
            The Ultimate Autonomous Intelligence is here.
          </p>
          <p className="text-[#10b981]/80 text-base md:text-xl max-w-3xl mx-auto font-bold tracking-widest uppercase mb-12 md:mb-16">
            Experience the absolute power of MAX right now.
          </p>

          <button 
            onClick={onContinue}
            className="inline-flex items-center justify-center gap-3 px-8 py-5 md:px-10 md:py-6 bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-full font-black text-lg md:text-xl tracking-wide hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] transition-all duration-300 group w-full sm:w-auto border border-[#34d399]/50"
          >
            <Rocket className="w-6 h-6 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <span>Access Systems Now</span>
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-16 pt-10 border-t border-white/5 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="text-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">🇮🇳</span>
              <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">India's 1st<br/><span className="text-white">AI Assistant</span></span>
            </div>
            
            <div className="hidden sm:block w-px h-10 bg-white/10"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center border border-[#10b981]/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <ShieldCheck className="w-5 h-5 text-[#10b981]" />
              </div>
              <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest text-left">100% Trusted<br/><span className="text-white">Premium Brand</span></span>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/10"></div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center pr-2">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <Users className="w-6 h-6 text-gray-300 drop-shadow-md" />
              </div>
              <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest text-left"><span className="text-[#10b981] font-black text-lg">1,000+</span><br/><span className="text-white">Live Users Now</span></span>
            </div>
          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="bg-[#10b981]/[0.02] rounded-3xl border border-[#10b981]/10 p-6 text-center flex flex-col items-center gap-4 hover:border-[#10b981]/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#10b981]/20 transition-all">
              <Shield className="w-5 h-5 text-[#10b981]" />
            </div>
            <div>
              <p className="text-white font-display font-bold text-lg tracking-tight">100% Autonomous</p>
              <p className="text-gray-500 text-sm font-medium">Device control engine</p>
            </div>
          </div>
          <div className="bg-[#10b981]/[0.02] rounded-3xl border border-[#10b981]/10 p-6 text-center flex flex-col items-center gap-4 hover:border-[#10b981]/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#10b981]/20 transition-all">
              <Users className="w-5 h-5 text-[#10b981]" />
            </div>
            <div>
              <p className="text-white font-display font-bold text-lg tracking-tight">Early Access</p>
              <p className="text-gray-500 text-sm font-medium">Join the whitelist</p>
            </div>
          </div>
          <div className="bg-[#10b981]/[0.02] rounded-3xl border border-[#10b981]/10 p-6 text-center flex flex-col items-center gap-4 hover:border-[#10b981]/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#10b981]/20 transition-all">
              <Terminal className="w-5 h-5 text-[#10b981]" />
            </div>
            <div>
              <p className="text-white font-display font-bold text-lg tracking-tight">Android Exclusive</p>
              <p className="text-gray-500 text-sm font-medium">Native deep integration</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default WelcomeScreen;
