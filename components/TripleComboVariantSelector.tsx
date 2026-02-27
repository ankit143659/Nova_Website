
import React, { useState } from 'react';

interface TripleComboVariantSelectorProps {
  onBack: () => void;
  onSelect: (price: number) => void;
}

const TripleComboVariantSelector: React.FC<TripleComboVariantSelectorProps> = ({ onBack, onSelect }) => {
  const [code, setCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [error, setError] = useState('');

  const originalPrice = 3499;
  const discountedPrice = 1999;

  const handleApplyCode = () => {
    if (code.toUpperCase() === 'ULTIMATETRIPLE') {
      setDiscountApplied(true);
      setError('');
    } else {
      setDiscountApplied(false);
      setError('Invalid code.');
    }
  };

  return (
    <div className="animate-in slide-in-from-right duration-500">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-text-secondary hover:text-yellow-500 transition-colors font-orbitron text-xs font-bold tracking-widest"
      >
        <i className="fas fa-arrow-left mr-2"></i> BACK
      </button>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
          THE <span className="text-yellow-500">TRIPLE PROTOCOL</span>
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto uppercase text-[10px] font-black tracking-widest opacity-80">
          The Ultimate Tech Sovereign Kit: MJ + NOVA + ANDROID SOURCE
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group border-yellow-500/30 shadow-[0_0_60px_rgba(234,179,8,0.2)]">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>
          
          <div className="flex items-center justify-between mb-8">
            <div className="w-20 h-20 bg-yellow-500/20 rounded-3xl flex items-center justify-center shadow-2xl">
              <i className="fas fa-crown text-yellow-500 text-4xl"></i>
            </div>
            <div className="text-right">
              {discountApplied ? (
                <>
                  <div className="text-sm text-text-secondary line-through font-bold">₹{originalPrice}</div>
                  <div className="text-5xl font-orbitron font-black text-white">₹{discountedPrice}</div>
                </>
              ) : (
                <div className="text-5xl font-orbitron font-black text-white">₹{originalPrice}</div>
              )}
              <div className="text-[10px] text-yellow-500 font-black uppercase tracking-widest mt-1">Ultimate Triple License</div>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 mb-8">
            <div className="flex justify-between items-center mb-3">
              <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] block">Redeem Triple Code</label>
              <a 
                href="https://wa.me/917574821527?text=Hello,%20I%20want%20to%20get%20a%20redeem%20code%20for%20the%20ULTIMATE%20TRIPLE%20offer." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[9px] font-black text-yellow-500 hover:text-white transition-colors uppercase flex items-center"
              >
                <i className="fab fa-whatsapp mr-1"></i> Don't have code? Get it
              </a>
            </div>
            <div className="flex gap-3">
              <input 
                type="text" 
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="ENTER CODE" 
                className="flex-grow bg-surface border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:border-yellow-500 outline-none transition-all uppercase"
              />
              <button 
                onClick={handleApplyCode}
                className="px-8 py-4 bg-yellow-500 text-surface rounded-2xl font-black text-xs tracking-widest hover:brightness-125 transition-all shadow-md active:scale-95"
              >
                APPLY
              </button>
            </div>
            {error && <p className="text-red-500 text-[10px] font-bold mt-3 uppercase tracking-wider">{error}</p>}
            {discountApplied && <p className="text-green-500 text-[10px] font-bold mt-3 uppercase tracking-wider">Triple Code Verified! ₹1500 Discount Unlocked.</p>}
          </div>

          <button 
            onClick={() => onSelect(discountApplied ? discountedPrice : originalPrice)}
            className="w-full py-6 bg-yellow-500 text-surface rounded-3xl font-orbitron font-black text-sm tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(234,179,8,0.4)]"
          >
            ACTIVATE TRIPLE PROTOCOL
          </button>
          
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                <i className="fas fa-desktop text-primary text-xl mb-2"></i>
                <div className="text-[8px] font-black uppercase text-text-secondary">NOVA 5.0</div>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                <i className="fas fa-heart text-secondary text-xl mb-2"></i>
                <div className="text-[8px] font-black uppercase text-text-secondary">MJ v2</div>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                <i className="fab fa-android text-green-500 text-xl mb-2"></i>
                <div className="text-[8px] font-black uppercase text-text-secondary">MOBILE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleComboVariantSelector;
