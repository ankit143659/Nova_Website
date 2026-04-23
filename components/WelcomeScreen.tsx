
import React from 'react';
import { Cpu, Users, Shield, ArrowRight, Sparkles, Terminal } from 'lucide-react';

interface WelcomeScreenProps {
  onContinue: () => void;
  onExploreFeatures: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue, onExploreFeatures }) => {
  return (
    <div className="animate-in fade-in duration-1000 pb-24 font-sans selection:bg-white selection:text-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold text-gray-300 tracking-widest uppercase">
              NOVA OS · Next Generation Intelligence
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-display font-extrabold tracking-tighter text-white mb-6 md:mb-8 leading-[1.05]">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
              The Future.
            </span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed tracking-tight px-2 md:px-4 mb-10 md:mb-12">
            Experience next-generation autonomous AI assistants tailored for your digital ecosystem. Unprecedented performance. Absolute privacy.
          </p>

          {/* Video Tutorial Section */}
          <div className="max-w-4xl mx-auto mb-10 md:mb-16">
            <div className="text-center mb-6">
              <p className="text-gray-300 text-lg md:text-xl font-bold tracking-wide">Watch how to get our product</p>
            </div>
            <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <iframe 
                src="https://www.youtube.com/embed/uTaSAFUbS-s?si=x3-zLzXkjJSEBluQ" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          <button 
            onClick={onContinue}
            className="inline-flex items-center justify-center gap-3 px-6 py-4 md:px-8 md:py-5 bg-white text-black rounded-full font-bold text-base md:text-lg tracking-wide hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] group w-full sm:w-auto"
          >
            <Sparkles className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
            <span>Check our Assistants</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-20 md:mt-32 max-w-4xl mx-auto">
          <div className="bg-[#09090b] rounded-3xl border border-white/[0.08] p-6 text-center flex flex-col items-center gap-4 hover:border-white/[0.15] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.08] transition-all">
              <Shield className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-white font-display font-bold text-lg tracking-tight">100% Secure</p>
              <p className="text-gray-500 text-sm font-medium">Enterprise privacy</p>
            </div>
          </div>
          <div className="bg-[#09090b] rounded-3xl border border-white/[0.08] p-6 text-center flex flex-col items-center gap-4 hover:border-white/[0.15] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.08] transition-all">
              <Users className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-white font-display font-bold text-lg tracking-tight">500+ Users</p>
              <p className="text-gray-500 text-sm font-medium">Global community</p>
            </div>
          </div>
          <div className="bg-[#09090b] rounded-3xl border border-white/[0.08] p-6 text-center flex flex-col items-center gap-4 hover:border-white/[0.15] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.08] transition-all">
              <Terminal className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-white font-display font-bold text-lg tracking-tight">Multi-OS Support</p>
              <p className="text-gray-500 text-sm font-medium">Windows, Mac, Android</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default WelcomeScreen;
