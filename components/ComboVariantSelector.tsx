
import React, { useState } from 'react';

interface ComboVariantSelectorProps {
  onBack: () => void;
  onSelect: (price: number) => void;
}

const ComboVariantSelector: React.FC<ComboVariantSelectorProps> = ({ onBack, onSelect }) => {
  const [code, setCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [error, setError] = useState('');

  const originalPrice = 1999;
  const discountedPrice = 1499;

  const handleApplyCode = () => {
    if (code.toUpperCase() === 'MJXNOVA') {
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
        className="mb-8 flex items-center text-text-secondary hover:text-accent transition-colors font-orbitron text-xs font-bold tracking-widest"
      >
        <i className="fas fa-arrow-left mr-2"></i> BACK
      </button>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-orbitron text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
          UNIFIED <span className="text-accent">COMBO PROTOCOL</span>
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto">
          Dual-engine activation. Combine the mechanical precision of NOVA with the emotional depth of MJ.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="glass-card p-8 rounded-[2rem] relative overflow-hidden group border-accent/30 shadow-[0_0_50px_rgba(255,0,212,0.1)]">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="flex items-center justify-between mb-8">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center shadow-lg">
              <i className="fas fa-layer-group text-accent text-3xl"></i>
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
              <div className="text-[10px] text-accent font-black uppercase tracking-widest mt-1">Unified License</div>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
            <div className="flex justify-between items-center mb-3">
              <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] block">Redeem Combo Code</label>
              <a 
                href="https://youtu.be/fY17HZcXppE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[9px] font-black text-accent hover:text-white transition-colors uppercase flex items-center"
              >
                <i className="fab fa-youtube mr-1 text-red-500"></i> Don't have code? Watch Video
              </a>
            </div>
            <div className="flex gap-3">
              <input 
                type="text" 
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="ENTER CODE" 
                className="flex-grow bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm font-bold focus:border-accent outline-none transition-all uppercase"
              />
              <button 
                onClick={handleApplyCode}
                className="px-6 py-3 bg-accent text-white rounded-xl font-black text-xs tracking-widest hover:brightness-125 transition-all shadow-md active:scale-95"
              >
                APPLY
              </button>
            </div>
            {error && <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-wider">{error}</p>}
            {discountApplied && <p className="text-green-500 text-[10px] font-bold mt-2 uppercase tracking-wider">Combo Code Verified! ₹500 Instant Discount.</p>}
          </div>

          <button 
            onClick={() => onSelect(discountApplied ? discountedPrice : originalPrice)}
            className="w-full py-5 bg-accent text-white rounded-2xl font-orbitron font-black text-sm tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(255,0,212,0.3)]"
          >
            ACTIVATE UNIFIED COMBO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComboVariantSelector;
