
import React from 'react';
import { ProductData } from '../types';

interface ProductDetailsPageProps {
  product: ProductData;
  onBack: () => void;
  onPurchase: () => void;
  themeColor: string;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product, onBack, onPurchase, themeColor }) => {
  return (
    <div className="animate-in slide-in-from-bottom md:slide-in-from-right duration-500 max-w-6xl mx-auto px-2">
      <button 
        onClick={onBack}
        className="mb-6 md:mb-8 flex items-center text-text-secondary transition-colors font-orbitron text-xs font-bold tracking-widest hover:brightness-125 min-h-[44px]"
      >
        <i className="fas fa-arrow-left mr-2" style={{ color: themeColor }}></i> BACK
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column: Info & Features */}
        <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
          <div className="text-center lg:text-left">
            <h1 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-2 uppercase tracking-tighter leading-none">
              {product.title}
            </h1>
            <p className="font-orbitron text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase" style={{ color: themeColor }}>
              {product.subtitle}
            </p>
          </div>

          <div className="glass-card p-5 md:p-6 rounded-[2rem] border-white/5 space-y-6">
            <h3 className="font-orbitron font-bold text-white uppercase text-[10px] md:text-sm tracking-widest border-b border-white/10 pb-4 flex justify-between items-center">
              <span>{product.variantName || 'Elite'} Command Suite</span>
              <span className="text-[9px] md:text-[10px] animate-pulse flex items-center" style={{ color: themeColor }}>
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: themeColor }}></span>
                {product.features.length}+ ACTIONS
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar touch-pan-y">
              {product.features.map((f, i) => (
                <div 
                  key={i} 
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5 transition-all group active:bg-white/10"
                >
                  <span className="text-xl md:text-lg group-hover:scale-110 transition-transform">{f.icon}</span>
                  <div className="overflow-hidden">
                    <h4 className="text-white font-black text-[9px] md:text-[10px] uppercase truncate" style={{ color: 'white' }}>{f.title}</h4>
                    <p className="text-[8px] md:text-[9px] text-text-secondary truncate">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={onPurchase}
              className="w-full py-5 md:py-6 rounded-2xl font-orbitron font-black text-sm md:text-lg tracking-[0.2em] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center group text-surface"
              style={{ backgroundColor: themeColor, boxShadow: `0 0 30px ${themeColor}4D` }}
            >
              <i className="fas fa-shopping-cart mr-4 group-hover:rotate-12 transition-transform"></i> 
              ACTIVATE {product.variantName || 'NOW'} - ₹{product.price}
            </button>
            <p className="text-center text-[9px] md:text-[10px] text-text-secondary uppercase tracking-widest font-black opacity-60">
              <i className="fas fa-shield-alt mr-2" style={{ color: themeColor }}></i> 256-Bit Secure Payment Gateway
            </p>
          </div>
        </div>

        {/* Right Column: Video & Price Card */}
        <div className="space-y-6 order-1 lg:order-2">
          <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 glass-card bg-black shadow-2xl relative">
            <iframe 
              src={product.videoUrl}
              className="w-full h-full"
              allowFullScreen
              title="Product Demo"
            ></iframe>
          </div>

          <div className="glass-card p-6 md:p-8 rounded-[2rem] border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden" style={{ borderLeft: `4px solid ${themeColor}` }}>
            <div className="absolute top-4 right-4 text-surface text-[9px] font-black px-3 py-1 rounded-full shadow-lg" style={{ backgroundColor: themeColor }}>
              {product.platform.toUpperCase()}
            </div>
            <h4 className="font-orbitron font-black text-white text-xs md:text-sm mb-6 uppercase tracking-widest">Premium Inclusions:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
               {[
                {icon: 'fa-key', text: 'Activation Key'},
                {icon: 'fa-headset', text: 'VIP Support'},
                {icon: 'fa-sync', text: 'Lifetime Updates'},
                {icon: 'fa-file-invoice', text: 'GST Invoice'},
                {icon: 'fa-rocket', text: 'Zero Latency API'}
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center text-[10px] md:text-xs text-text-secondary">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0" style={{ backgroundColor: `${themeColor}1A` }}>
                      <i className={`fas ${item.icon} text-sm`} style={{ color: themeColor }}></i>
                   </div>
                   <span className="font-bold uppercase tracking-wider">{item.text}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: ${themeColor}; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default ProductDetailsPage;
