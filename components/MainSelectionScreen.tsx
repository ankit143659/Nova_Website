
import React from 'react';
import { Platform } from '../types';
import CustomerReviews from './CustomerReviews';

interface MainSelectionScreenProps {
  onPlatformSelect: (platform: Platform) => void;
}

const MainSelectionScreen: React.FC<MainSelectionScreenProps> = ({ onPlatformSelect }) => {
  return (
    <div className="animate-in slide-in-from-bottom duration-600 px-2 pb-16">
      <div className="text-center mb-8 md:mb-12">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 bg-[#0a0a12] border border-primary/30 rounded-full px-6 py-2 mb-6 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
           <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-black"></div>
              <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-black"></div>
              <div className="w-6 h-6 rounded-full bg-pink-500 border-2 border-black"></div>
           </div>
           <span className="text-xs md:text-sm font-bold text-white tracking-wide">
             <span className="text-primary font-black">500+</span> Happy Users in India 🇮🇳
           </span>
        </div>

        <h2 className="font-orbitron text-3xl md:text-6xl text-white font-black tracking-tighter mb-4 leading-none uppercase">
          EXPLORE THE <span className="text-primary italic">MULTIVERSE</span>
        </h2>
        <p className="text-text-secondary text-xs md:text-sm uppercase tracking-[0.2em] font-bold max-w-xl mx-auto opacity-70 px-4">
          Next-generation personal intelligence for your ecosystem
        </p>
      </div>

      {/* Lifetime Value Banner */}
      <div className="max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shrink-0 animate-bounce-slow">
              <i className="fas fa-infinity text-black text-xl"></i>
           </div>
           <div>
              <h3 className="text-white font-orbitron font-black text-lg md:text-xl uppercase tracking-wider">
                 Buy Once • Use Forever • Free Updates
              </h3>
              <p className="text-text-secondary text-xs font-medium mt-1">
                 No monthly subscriptions. No hidden fees. 100% Lifetime Ownership.
              </p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[85rem] mx-auto">
        {/* NOVA Card */}
        <div 
          onClick={() => onPlatformSelect(Platform.NOVA)}
          className="glass-card p-6 rounded-[2.5rem] cursor-pointer group flex flex-col h-full border-primary/20 hover:border-primary/60 relative overflow-hidden active:scale-95 transition-all"
        >
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-all">
            <i className="fas fa-desktop text-primary text-2xl"></i>
          </div>
          <h3 className="font-orbitron font-black text-xl mb-3 text-white uppercase group-hover:text-primary transition-colors">NOVA 5.0</h3>
          <p className="text-text-secondary text-xs md:text-sm flex-grow mb-6 leading-relaxed font-medium">
            Advanced Windows assistant with VADRYK engine.
          </p>
          <div className="flex items-center text-[9px] font-black tracking-widest text-primary bg-primary/5 p-4 rounded-2xl border border-primary/10 uppercase">
            <i className="fas fa-microchip mr-2"></i>
            <span>SYSTEM MASTER</span>
          </div>
        </div>

        {/* MJ Card - STANDARD */}
        <div 
          onClick={() => onPlatformSelect(Platform.MJ)}
          className="glass-card p-6 rounded-[2.5rem] cursor-pointer group flex flex-col h-full border-[#ff2a6d]/40 hover:border-[#ff2a6d] relative overflow-hidden active:scale-95 transition-all shadow-[0_0_30px_rgba(255,42,109,0.15)] hover:shadow-[0_0_50px_rgba(255,42,109,0.3)]"
        >
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#ff2a6d]/20 rounded-full blur-3xl group-hover:bg-[#ff2a6d]/30 transition-all"></div>
          
          <div className="w-14 h-14 bg-[#ff2a6d]/10 rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-all">
            <i className="fas fa-heart text-[#ff2a6d] text-2xl"></i>
          </div>
          
          <h3 className="font-orbitron font-black text-xl mb-3 text-white uppercase group-hover:text-[#ff2a6d] transition-colors">MJ v2</h3>
          <p className="text-text-secondary text-xs md:text-sm flex-grow mb-6 leading-relaxed font-medium">
            Cognitive empathy companion. <span className="text-[#ff2a6d] font-bold">Emotion Engine.</span>
          </p>
          
          <div className="flex items-center text-[9px] font-black tracking-widest text-[#ff2a6d] bg-[#ff2a6d]/10 p-4 rounded-2xl border border-[#ff2a6d]/20 uppercase">
            <i className="fas fa-brain mr-2"></i>
            <span>HUMAN-LIKE AI</span>
          </div>
        </div>

        {/* UNIFIED COMBO Card */}
        <div 
          onClick={() => onPlatformSelect(Platform.SPECIAL_OFFER)}
          className="glass-card p-6 rounded-[2.5rem] cursor-pointer group flex flex-col h-full border-accent/20 hover:border-accent/60 relative overflow-hidden active:scale-95 transition-all"
        >
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all"></div>
          <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-all">
            <i className="fas fa-layer-group text-accent text-2xl"></i>
          </div>
          <h3 className="font-orbitron font-black text-xl mb-3 text-white uppercase group-hover:text-accent transition-colors">MJ & NOVA</h3>
          <p className="text-text-secondary text-xs md:text-sm flex-grow mb-6 leading-relaxed font-medium">
            Unified intelligence. Both engines simultaneously.
          </p>
          <div className="flex items-center text-[9px] font-black tracking-widest text-accent bg-accent/5 p-4 rounded-2xl border border-accent/10 uppercase">
            <i className="fas fa-star mr-2"></i>
            <span>DUAL CORE</span>
          </div>
        </div>

        {/* ANDROID SOURCE CODE */}
        <div 
          onClick={() => onPlatformSelect(Platform.ANDROID)}
          className="glass-card p-6 rounded-[2.5rem] cursor-pointer group flex flex-col h-full border-green-500/20 hover:border-green-500/60 relative overflow-hidden active:scale-95 transition-all"
        >
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all"></div>
          <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-all">
            <i className="fab fa-android text-green-500 text-2xl"></i>
          </div>
          <h3 className="font-orbitron font-black text-xl mb-3 text-white uppercase group-hover:text-green-500 transition-colors">ANDROID SRC</h3>
          <p className="text-text-secondary text-xs md:text-sm flex-grow mb-6 leading-relaxed font-medium">
            Full Android source code package.
          </p>
          <div className="flex items-center text-[9px] font-black tracking-widest text-green-500 bg-green-500/5 p-4 rounded-2xl border border-green-500/10 uppercase">
            <i className="fas fa-code mr-2"></i>
            <span>FULL ZIP</span>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center mb-16">
        <p className="text-text-secondary text-[10px] font-black tracking-[0.3em] uppercase opacity-40">
           Select a platform to begin your journey
        </p>
      </div>

      {/* Customer Reviews Section */}
      <CustomerReviews />

      <style>{`
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default MainSelectionScreen;
