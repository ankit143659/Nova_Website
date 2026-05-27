
import React, { useEffect } from 'react';
import { Platform, OSType, ProductData } from '../types';
import CustomerReviews from './CustomerReviews';
import { List, Heart, Monitor, Layers, Check, Sparkles, Smartphone, Terminal, ArrowLeft, ArrowRight } from 'lucide-react';
import { ELITE_FEATURES } from '../featuresData';
import { motion } from 'motion/react';

interface MainSelectionScreenProps {
  selectedOS: OSType;
  onProductSelect: (product: ProductData) => void;
  onExploreFeatures: () => void;
  onRequireOS?: () => void;
  onBackToFeatures?: () => void;
}

const GLOBAL_VIDEO_URL = "https://www.youtube.com/embed/uQo_LHobvCM?si=3MEx7Ug12pUIrsOO";

const MainSelectionScreen: React.FC<MainSelectionScreenProps> = ({ selectedOS, onProductSelect, onExploreFeatures, onRequireOS, onBackToFeatures }) => {
  const isOfferActive = true;

  useEffect(() => {
    if (!selectedOS && onRequireOS) {
      onRequireOS();
    }
  }, [selectedOS, onRequireOS]);

  const winProducts: ProductData[] = [
    {
      id: 'mj-windows',
      title: 'MJ v5',
      subtitle: 'HEART EDITION',
      desc: 'Advanced Cognitive Intelligence. A sentient companion that understands context and emotion.',
      price: 1399,
      platform: Platform.MJ,
      variantName: 'WINDOWS APP',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
    },
    {
      id: 'vash-windows',
      title: 'Nova 7.0',
      subtitle: 'SYSTEM MASTER',
      desc: 'The Ultimate Autonomous Engine. Deep level system control and extreme automation protocols.',
      price: 1099,
      platform: Platform.VASH,
      variantName: 'WINDOWS APP',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
    },
    {
      id: 'combo-windows',
      title: 'UNIFIED COMBO',
      subtitle: 'DUAL CORE',
      desc: 'Elite Performance & Human Empathy Combined. Run both Nova and MJ simultaneously.',
      price: 1999,
      platform: Platform.COMBO,
      variantName: 'UNIFIED',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
    },
    {
      id: 'combo-custom-unified',
      title: 'CUSTOM UNIFIED COMBO',
      subtitle: 'CUSTOM MJ + CUSTOM NOVA',
      desc: 'Fully customized identities for both MJ and Nova engines in one powerful package.',
      price: 3299,
      platform: Platform.COMBO,
      variantName: 'CUSTOM UNIFIED',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
      isCustom: true
    },
    {
      id: 'custom-windows',
      title: 'CUSTOM BRANDED AI',
      subtitle: 'YOUR NAME. YOUR VOICE.',
      desc: 'White-label architecture. Choose your base engine (MJ or Nova) and customize its core identity.',
      price: 2499,
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
      title: 'MAX 2.0 Assistant',
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
    }
  ];

  const macProducts: ProductData[] = [
    {
      id: 'mj-macos',
      title: 'MJ v5',
      subtitle: 'MACOS EDITION',
      desc: 'Advanced Cognitive Intelligence natively compiled for Apple Silicon and macOS environments.',
      price: 1599,
      platform: Platform.MJ,
      variantName: 'MACOS APP',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
    }
  ];

  const comboWinAndProducts: ProductData[] = [
    {
      id: 'combo-max-vash',
      title: 'MAX 2.0 + Nova',
      subtitle: 'WINDOWS + ANDROID COMBO',
      desc: 'Ultimate control anywhere. Get Nova for Windows desktop and MAX 2.0 for your Android device in one unified package.',
      price: 2699,
      platform: Platform.COMBO,
      variantName: 'WIN + ANDROID',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
    },
    {
      id: 'combo-max-mj',
      title: 'MAX 2.0 + MJ',
      subtitle: 'WINDOWS + ANDROID COMBO',
      desc: 'Creative intelligence meets portable autonomy. Get MJ for Windows desktop and MAX 2.0 for your Android device.',
      price: 2699,
      platform: Platform.COMBO,
      variantName: 'WIN + ANDROID',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
    },
    {
      id: 'combo-max-custom-nova',
      title: 'CUSTOM NOVA + MAX 2.0',
      subtitle: 'WINDOWS + ANDROID COMBO',
      desc: 'Get a custom branded Nova engine for Windows desktop and MAX 2.0 for your Android device.',
      price: 3299,
      platform: Platform.COMBO,
      variantName: 'CUSTOM + ANDROID',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
      isCustom: true
    },
    {
      id: 'combo-max-custom-mj',
      title: 'CUSTOM MJ + MAX 2.0',
      subtitle: 'WINDOWS + ANDROID COMBO',
      desc: 'Get a custom branded MJ companion for Windows desktop and MAX 2.0 for your Android device.',
      price: 3299,
      platform: Platform.COMBO,
      variantName: 'CUSTOM + ANDROID',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
      isCustom: true
    }
  ];

  let displayProducts: ProductData[] = [];
  if (selectedOS === 'windows') displayProducts = winProducts;
  if (selectedOS === 'android') displayProducts = androidProducts;
  if (selectedOS === 'mac') displayProducts = macProducts;
  if (selectedOS === 'combo-win-and') displayProducts = comboWinAndProducts;

  if (!selectedOS) return null;

  const getPlatformMeta = (platform: Platform) => {
    switch (platform) {
      case Platform.MJ: return { icon: Heart, color: '#ff2a6d', bg: 'from-[#ff2a6d]/10' };
      case Platform.VASH: return { icon: Monitor, color: '#00f2ff', bg: 'from-[#00f2ff]/10' };
      case Platform.COMBO: return { icon: Layers, color: '#eab308', bg: 'from-[#eab308]/10' };
      case Platform.MAX: return { icon: Smartphone, color: '#10b981', bg: 'from-[#10b981]/10' };
      case Platform.CUSTOM: return { icon: Sparkles, color: '#a855f7', bg: 'from-[#a855f7]/10' };
      default: return { icon: Monitor, color: '#ffffff', bg: 'from-white/10' };
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 pb-24 font-sans">
      
      {/* Header Section */}
      <div className="mb-24 flex flex-col gap-6 max-w-7xl mx-auto px-4 sm:px-6 mt-12 md:mt-24 text-center">
        <div>
          {onBackToFeatures && (
            <button 
              onClick={onBackToFeatures}
              className="mb-8 flex items-center justify-center mx-auto text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Back to Features
            </button>
          )}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">{selectedOS} Ecosystem</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
            Available Models
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Select the cognitive engine that fits your requirements.<br className="hidden md:block" /> Perpetual license. Zero recurring fees.
          </p>
        </div>
      </div>

      {/* Premium Vertical Stack Layout */}
      <div className="flex flex-col gap-6 md:gap-8 mb-40 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {displayProducts.map((product) => {
          const { icon: Icon, color, bg } = getPlatformMeta(product.platform);
          
          return (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2rem] p-[1px] overflow-hidden cursor-pointer"
              onClick={() => onProductSelect(product)}
            >
              {/* Premium Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/30 transition-colors duration-700"></div>
              
              {/* Glowing Background Effect */}
              <div className={`absolute -inset-10 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${bg} to-transparent blur-3xl transition-opacity duration-1000 rounded-[3rem] pointer-events-none`}></div>

              {/* Main Card Body */}
              <div className="relative bg-[#050505]/90 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 border border-white/5 shadow-2xl h-full">
                
                {/* Left Section: Information */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 ease-out">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-500" style={{ color }} />
                    </div>
                    <div className="flex flex-col">
                      <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors self-start mb-1">
                        {product.subtitle}
                      </div>
                      {isOfferActive && (
                        <div className="flex items-center gap-1 text-[10px] md:text-[11px] font-bold text-blue-400 tracking-widest uppercase">
                          <Sparkles className="w-3 h-3" /> Special Offer Active
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-5 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-500">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                    {/* @ts-ignore */}
                    {product.desc}
                  </p>
                </div>

                {/* Right Section: Price & Action */}
                <div className="w-full lg:w-auto flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center flex-shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-16 mt-4 lg:mt-0">
                  <div className="flex flex-col items-start lg:items-end">
                    <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mb-2 hidden lg:block">Perpetual License</span>
                    <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mb-1 lg:hidden">Price</span>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-mono tracking-tighter" style={{ color }}>
                      ₹{product.price}
                    </div>
                  </div>
                  
                  <button className="relative overflow-hidden group/btn flex items-center justify-center gap-2 px-6 py-4 md:px-8 md:py-5 bg-white text-black rounded-full font-bold text-sm md:text-sm tracking-widest uppercase mt-0 lg:mt-8 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                    <span className="relative z-10 flex items-center gap-2">
                       <span className="hidden md:inline">Select</span> Engine
                       <ArrowRight className="w-4 h-4 md:w-5 md:h-5 md:group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
                  </button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <CustomerReviews />
    </div>
  );
};

export default MainSelectionScreen;
