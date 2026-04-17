
import React, { useEffect } from 'react';
import { Platform, OSType, ProductData } from '../types';
import CustomerReviews from './CustomerReviews';
import { List, Heart, Monitor, Layers, Check, Sparkles, Smartphone, Terminal, ArrowLeft } from 'lucide-react';
import { ELITE_FEATURES } from '../featuresData';

interface MainSelectionScreenProps {
  selectedOS: OSType;
  onProductSelect: (product: ProductData) => void;
  onExploreFeatures: () => void;
  onRequireOS?: () => void;
  onBackToFeatures?: () => void;
}

const GLOBAL_VIDEO_URL = "https://www.youtube.com/embed/fY17HZcXppE?si=U7dZqtakf--m_OuT";

const MainSelectionScreen: React.FC<MainSelectionScreenProps> = ({ selectedOS, onProductSelect, onExploreFeatures, onRequireOS, onBackToFeatures }) => {
  const isOfferActive = true;

  useEffect(() => {
    if (!selectedOS && onRequireOS) {
      onRequireOS();
    }
  }, [selectedOS, onRequireOS]);

  // Define products directly here, to pass them wholesale back to App.tsx when selected.
  const winProducts: ProductData[] = [
    {
      id: 'mj-windows',
      title: 'MJ v4',
      subtitle: 'HEART EDITION',
      desc: 'Advanced Cognitive Intelligence. A sentient companion that understands context and emotion.',
      price: 999,
      platform: Platform.MJ,
      variantName: 'WINDOWS APP',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
    },
    {
      id: 'nova-windows',
      title: 'NOVA 6.0',
      subtitle: 'SYSTEM MASTER',
      desc: 'The Ultimate Autonomous Engine. Deep level system control and extreme automation protocols.',
      price: 1499,
      platform: Platform.NOVA,
      variantName: 'WINDOWS APP',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
    },
    {
      id: 'combo-windows',
      title: 'UNIFIED COMBO',
      subtitle: 'DUAL CORE',
      desc: 'Elite Performance & Human Empathy Combined. Run both NOVA and MJ simultaneously.',
      price: 1999,
      platform: Platform.COMBO,
      variantName: 'UNIFIED',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
    },
    {
      id: 'custom-windows',
      title: 'CUSTOM BRANDED AI',
      subtitle: 'YOUR NAME. YOUR VOICE.',
      desc: 'White-label architecture. Choose your base engine (MJ or NOVA) and customize its core identity.',
      price: 2299,
      platform: Platform.CUSTOM,
      variantName: 'CUSTOM',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
      isCustom: true
    }
  ];

  const androidProducts: ProductData[] = [
    {
      id: 'max-android',
      title: 'MAX Assistant',
      subtitle: 'PORTABLE INTELLIGENCE',
      desc: 'Your on-the-go cognitive assistant optimized for Android architecture and mobile workflows.',
      price: 1199,
      platform: Platform.MAX,
      variantName: 'ANDROID APP',
      videoUrl: GLOBAL_VIDEO_URL,
      features: [
        { icon: 'Zap', title: 'Mobile Autonomy', desc: 'Deep Android integration' },
        { icon: 'Shield', title: 'On-device Processing', desc: 'Secure local compute' },
        { icon: 'Target', title: 'Task Execution', desc: 'Automates regular workflows' }
      ],
    },
    {
      id: 'custom-android',
      title: 'CUSTOM BRANDED AI',
      subtitle: 'YOUR NAME. YOUR VOICE.',
      desc: 'White-label architecture. Choose your base engine and customize its core identity for Android.',
      price: 2299,
      platform: Platform.CUSTOM,
      variantName: 'CUSTOM',
      videoUrl: GLOBAL_VIDEO_URL,
      features: [
        { icon: 'Zap', title: 'White-label Mobile', desc: 'Your own branded Android app' },
        { icon: 'Shield', title: 'Custom Identity', desc: 'Responds to your selected name' },
        { icon: 'Target', title: 'Core Autonomy', desc: 'Full custom workflow integration' }
      ],
      isCustom: true
    }
  ];

  const macProducts: ProductData[] = [
    {
      id: 'mj-macos',
      title: 'MJ v4',
      subtitle: 'MACOS EDITION',
      desc: 'Advanced Cognitive Intelligence natively compiled for Apple Silicon and macOS environments.',
      price: 1699,
      platform: Platform.MJ,
      variantName: 'MACOS APP',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
    }
  ];

  let displayProducts: ProductData[] = [];
  if (selectedOS === 'windows') displayProducts = winProducts;
  if (selectedOS === 'android') displayProducts = androidProducts;
  if (selectedOS === 'mac') displayProducts = macProducts;

  if (!selectedOS) return null;

  const getPlatformMeta = (platform: Platform) => {
    switch (platform) {
      case Platform.MJ: return { icon: Heart, color: '#ff2a6d', bg: 'from-[#ff2a6d]/10' };
      case Platform.NOVA: return { icon: Monitor, color: '#00f2ff', bg: 'from-[#00f2ff]/10' };
      case Platform.COMBO: return { icon: Layers, color: '#eab308', bg: 'from-[#eab308]/10' };
      case Platform.MAX: return { icon: Smartphone, color: '#10b981', bg: 'from-[#10b981]/10' };
      case Platform.CUSTOM: return { icon: Terminal, color: '#a855f7', bg: 'from-[#a855f7]/10' };
      default: return { icon: Monitor, color: '#ffffff', bg: 'from-white/10' };
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 pb-24 font-sans">
      
      {/* Header Section */}
      <div className="mb-16 flex flex-col gap-6 max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div>
          {onBackToFeatures && (
            <button 
              onClick={onBackToFeatures}
              className="mb-6 flex items-center text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Back to Features
            </button>
          )}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">{selectedOS} Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
            Available Models
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium tracking-tight">
            Select the cognitive engine that fits your requirements. Perpetual license. Zero recurring fees.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className={`grid grid-cols-1 md:grid-cols-${Math.min(3, displayProducts.length)} gap-6 mb-32 max-w-7xl mx-auto px-4 sm:px-6`}>
        {displayProducts.map((product) => {
          const { icon: Icon, color, bg } = getPlatformMeta(product.platform);
          const isAndroidProduct = selectedOS === 'android';
          
          return (
          <div 
            key={product.id}
            onClick={() => {
              if (!isAndroidProduct) {
                onProductSelect(product);
              }
            }}
            className={`group relative flex flex-col bg-[#09090b] border border-white/[0.08] hover:border-white/[0.2] rounded-3xl p-8 md:p-10 ${isAndroidProduct ? 'cursor-default opacity-80' : 'cursor-pointer'} overflow-hidden transition-all duration-700 shadow-2xl hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]`}
          >
            {isAndroidProduct && (
              <div className="absolute inset-0 z-30 bg-[#09090b]/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6 border border-white/[0.05] rounded-3xl">
                <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold tracking-widest uppercase text-white mb-3 backdrop-blur-md">
                  Coming Soon
                </span>
                <p className="font-display font-extrabold text-white text-2xl tracking-tight mb-2">Launching on May 1</p>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Mobile Intelligence Reboot</p>
              </div>
            )}
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
            
            {/* Top Section */}
            <div className="flex justify-between items-start mb-10 relative z-10 w-full">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <Icon className="w-8 h-8 text-white transition-colors duration-500" style={{ color }} />
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors">
                  {product.subtitle}
                </div>
                {isOfferActive && (
                  <div className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 shadow-lg shadow-white/10">
                    <Sparkles className="w-3 h-3" /> Offer
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
              <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                {product.title}
              </h3>
              <p className="text-xl font-bold mb-4" style={{ color }}>₹{product.price}</p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-medium">
                {/* @ts-ignore */}
                {product.desc}
              </p>
            </div>

            {/* Action Button */}
            <div className="relative z-10 mt-auto w-full pt-4 border-t border-white/[0.05]">
              <div className="w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 group-hover:gap-4 transition-all duration-300" style={{ color }}>
                Select Engine <Check className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0" />
              </div>
            </div>
          </div>
        )})}
      </div>

      <CustomerReviews />
    </div>
  );
};

export default MainSelectionScreen;
