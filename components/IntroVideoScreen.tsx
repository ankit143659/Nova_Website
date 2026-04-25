import React from 'react';
import { PlayCircle, ShieldCheck, ArrowRight, MonitorPlay } from 'lucide-react';

interface IntroVideoScreenProps {
  onContinue: () => void;
}

const IntroVideoScreen: React.FC<IntroVideoScreenProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center py-12 px-4 sm:px-6 relative overflow-hidden font-sans">
      
      {/* Background cinematic effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#10b981]/10 via-[#030303]/80 to-[#030303] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-5xl w-full z-10 flex flex-col items-center">
        
        {/* Header Alert */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-red-500/30 bg-red-500/10 mb-8 animate-in slide-in-from-top-8 duration-700">
          <MonitorPlay className="w-4 h-4 text-red-500" />
          <span className="text-xs md:text-sm font-bold text-red-400 tracking-[0.1em] uppercase">
            Mandatory Action Required
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-black text-white text-center mb-6 tracking-tight drop-shadow-2xl">
          Before You <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">Enter...</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl text-center max-w-3xl mb-4 font-medium leading-relaxed">
          Please watch this complete guide to understand exactly how to purchase and install our products seamlessly.
        </p>
        <p className="text-red-400/80 text-sm md:text-base text-center max-w-2xl mb-12 font-bold tracking-wide uppercase">
          (Video dekhna important hai aage badhne aur purchase samajhne ke liye)
        </p>

        {/* Video Container - Cinematic */}
        <div className="w-full relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.15)] ring-1 ring-white/5 mb-14 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <iframe 
            src="https://www.youtube.com/embed/uQo_LHobvCM?si=3MEx7Ug12pUIrsOO&autoplay=1" 
            title="NOVA & MAX Setup Guide" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full z-0"
          ></iframe>
        </div>

        {/* Action Button */}
        <button 
          onClick={onContinue}
          className="relative inline-flex items-center justify-center gap-3 px-8 py-5 md:px-12 md:py-6 bg-white text-black rounded-full font-black text-lg md:text-xl tracking-wide hover:scale-[1.02] hover:bg-gray-100 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] group overflow-hidden border border-white/50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <ShieldCheck className="w-6 h-6 text-green-600" />
          <span>I Have Watched The Video — Proceed</span>
          <ArrowRight className="w-6 h-6 text-gray-500 group-hover:translate-x-1 group-hover:text-black transition-all" />
        </button>

      </div>
    </div>
  );
};

export default IntroVideoScreen;
