
import React from 'react';
import { Platform } from '../types';
import CustomerReviews from './CustomerReviews';
import { List, Heart, Monitor, Layers, Check, Sparkles } from 'lucide-react';

interface MainSelectionScreenProps {
  onPlatformSelect: (platform: Platform | 'features') => void;
}

const platforms = [
  {
    id: Platform.MJ,
    name: 'MJ v4',
    subtitle: 'HEART EDITION',
    desc: 'Advanced Cognitive Intelligence. A companion that understands you.',
    icon: Heart,
    color: '#ff2a6d', // Pink/Red
    bg: 'from-[#ff2a6d]/10 to-transparent',
    border: 'border-[#ff2a6d]/30',
    features: ['Emotion Recognition', 'Conversational Memory', 'Voice Synthesis'],
    hasOffer: true
  },
  {
    id: Platform.NOVA,
    name: 'NOVA 6.0',
    subtitle: 'System Master',
    desc: 'The Ultimate Autonomous Engine. Total system automation and control.',
    icon: Monitor,
    color: '#00f2ff', // Cyan
    bg: 'from-[#00f2ff]/10 to-transparent',
    border: 'border-[#00f2ff]/30',
    features: ['Voice Control', 'System Automation', 'Offline Mode'],
    hasOffer: true
  },
  {
    id: Platform.COMBO,
    name: 'UNIFIED COMBO',
    subtitle: 'Dual Core',
    desc: 'Elite Performance & Human Empathy Combined. Run both NOVA and MJ.',
    icon: Layers,
    color: '#eab308', // Gold
    bg: 'from-[#eab308]/10 to-transparent',
    border: 'border-[#eab308]/30',
    features: ['NOVA 6.0 Included', 'MJ v4 Included', 'Shared Memory'],
    hasOffer: true
  }
];

const MainSelectionScreen: React.FC<MainSelectionScreenProps> = ({ onPlatformSelect }) => {
  const isOfferActive = true;

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      
      {/* Header Section */}
      <div className="mb-12 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-white/80 tracking-widest uppercase">Products Available</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Choose Your AI Assistant
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl font-light">
            Select the AI that fits your needs. Buy once, use forever. No hidden subscriptions.
          </p>
        </div>
        <button 
          onClick={() => onPlatformSelect('features')}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
        >
          <List className="w-4 h-4" />
          Explore Features
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {platforms.map((p) => {
          const Icon = p.icon;
          return (
          <div 
            key={p.id}
            onClick={() => onPlatformSelect(p.id)}
            className="group relative flex flex-col bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${p.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
            
            {/* Top Section */}
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-6 h-6" style={{ color: p.color }} />
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/50 group-hover:text-white/90 transition-colors">
                  {p.subtitle}
                </div>
                {isOfferActive && p.hasOffer && (
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 text-[10px] font-bold tracking-widest uppercase text-orange-400 flex items-center gap-1 animate-pulse">
                    <Sparkles className="w-3 h-3" /> Offer Active
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
                {p.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8 font-light">
                {p.desc}
              </p>
            </div>

            {/* Features List */}
            <div className="relative z-10 border-t border-white/10 pt-6 mt-auto">
              <ul className="flex flex-col gap-3">
                {p.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-text-secondary">
                    <Check className="w-3 h-3" style={{ color: p.color }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <div className="relative z-10 mt-8">
              <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold tracking-wide group-hover:bg-white group-hover:text-black transition-all duration-300">
                Select
              </button>
            </div>
          </div>
        )})}
      </div>

      <CustomerReviews />
    </div>
  );
};

export default MainSelectionScreen;
