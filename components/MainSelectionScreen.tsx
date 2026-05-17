
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
      id: 'nova-windows',
      title: 'NOVA 7.0',
      subtitle: 'SYSTEM MASTER',
      desc: 'The Ultimate Autonomous Engine. Deep level system control and extreme automation protocols.',
      price: 1099,
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
      id: 'combo-max-nova',
      title: 'MAX 2.0 + NOVA',
      subtitle: 'WINDOWS + ANDROID COMBO',
      desc: 'Ultimate control anywhere. Get NOVA for Windows desktop and MAX 2.0 for your Android device in one unified package.',
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

      {/* Vertical Scroll Layout */}
      <div className="flex flex-col gap-32 mb-40 max-w-7xl mx-auto px-4 sm:px-6">
        {displayProducts.map((product, index) => {
          const { icon: Icon, color, bg } = getPlatformMeta(product.platform);
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24 group`}
            >
              {/* Massive Image/Iconography Side */}
              <div 
                className="w-full md:w-1/2 cursor-pointer relative"
                onClick={() => onProductSelect(product)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem] blur-xl pointer-events-none`}></div>
                <div className="relative aspect-square sm:aspect-[4/3] md:aspect-square w-full rounded-[3rem] bg-[#050505] border border-white/10 group-hover:border-white/20 overflow-hidden shadow-2xl transition-all duration-700 flex items-center justify-center">
                  <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-white/[0.02] -rotate-45 translate-x-[-20%] group-hover:translate-x-[10%] transition-transform duration-1000 ease-out pointer-events-none"></div>
                  
                  <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
                    <Icon className="w-16 h-16 md:w-24 md:h-24 transition-colors duration-500 drop-shadow-2xl" style={{ color }} />
                  </div>
                </div>
              </div>

              {/* Text & Action Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors">
                    {product.subtitle}
                  </div>
                  {isOfferActive && (
                    <div className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20 font-bold tracking-widest uppercase flex items-center gap-2 shell-glow">
                      <Sparkles className="w-4 h-4" /> Exclusive Offer
                    </div>
                  )}
                </div>

                <h3 className="text-5xl lg:text-7xl font-display font-black text-white mb-6 tracking-tight leading-[1.1]">
                  {product.title}
                </h3>
                
                <p className="text-gray-400 text-xl md:text-2xl leading-relaxed mb-8 font-light">
                  {/* @ts-ignore */}
                  {product.desc}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                  <p className="text-4xl font-bold font-mono tracking-tight" style={{ color }}>₹{product.price}</p>
                  
                  <button 
                    onClick={() => onProductSelect(product)}
                    className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-[15px] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Initialize Engine
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
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
