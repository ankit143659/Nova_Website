
import React from 'react';

interface NovaVariantSelectorProps {
  onBack: () => void;
  onSelect: (variant: string) => void;
}

const NovaVariantSelector: React.FC<NovaVariantSelectorProps> = ({ onBack, onSelect }) => {
  const eliteVariant = {
    id: 'vadryk',
    name: 'VADRYK Elite Edition',
    price: 899,
    originalPrice: 1199,
    icon: 'fa-crown',
    color: 'primary',
    tag: '👑 MOST POWERFUL AI',
    features: ['Universal File Opener', 'Full Desktop Automation', 'Quantum System Intelligence', 'Multi-Tasking Engine']
  };

  return (
    <div className="animate-in slide-in-from-right duration-500">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-text-secondary hover:text-primary transition-colors font-orbitron text-xs font-bold tracking-widest"
      >
        <i className="fas fa-arrow-left mr-2"></i> BACK
      </button>

      <h2 className="font-orbitron text-3xl md:text-5xl text-center mb-2 font-black tracking-tight uppercase">
        Nova 5.0 <span className="text-primary">Elite</span>
      </h2>
      <p className="text-center text-text-secondary mb-12 uppercase text-[10px] font-bold tracking-[0.3em]">The Apex of Windows Automation</p>

      <div className="max-w-xl mx-auto">
        <div 
          onClick={() => onSelect(eliteVariant.id)}
          className={`glass-card p-10 rounded-[2.5rem] cursor-pointer group relative flex flex-col border-primary/30 hover:border-primary shadow-[0_0_50px_rgba(0,242,255,0.1)]`}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-surface text-[10px] font-black px-6 py-2 rounded-full shadow-xl tracking-widest uppercase">
            {eliteVariant.tag}
          </div>
          
          <div className={`w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform`}>
            <i className={`fas ${eliteVariant.icon} text-primary text-4xl`}></i>
          </div>

          <h3 className="font-orbitron font-black text-3xl text-center mb-4 text-white uppercase">{eliteVariant.name}</h3>
          
          <div className="text-center mb-8">
            <span className="text-sm text-text-secondary line-through block font-bold mb-1">₹{eliteVariant.originalPrice}</span>
            <span className="text-6xl font-black text-white font-orbitron tracking-tighter">₹{eliteVariant.price}</span>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            {eliteVariant.features.map((f, i) => (
              <li key={i} className="flex items-center text-sm text-text-secondary font-bold uppercase tracking-wider">
                <i className={`fas fa-check-circle text-primary mr-3`}></i>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <button className={`w-full py-5 rounded-2xl bg-primary text-surface font-orbitron font-black text-sm tracking-widest group-hover:brightness-125 transition-all shadow-lg`}>
            SELECT ELITE EDITION
          </button>
        </div>
      </div>
    </div>
  );
};

export default NovaVariantSelector;
