
import React, { useState } from 'react';

interface MJVariantSelectorProps {
  onBack: () => void;
  onSelect: (variant: string, price: number) => void;
}

const MJVariantSelector: React.FC<MJVariantSelectorProps> = ({ onBack, onSelect }) => {
  const [code, setCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [error, setError] = useState('');

  const originalPrice = 1299;
  const discountedPrice = 899;

  const handleApplyCode = () => {
    if (code.toUpperCase() === 'MJAIV1') {
      setDiscountApplied(true);
      setError('');
    } else {
      setDiscountApplied(false);
      setError('Invalid code.');
    }
  };

  return (
    <div className="relative w-full h-full animate-in slide-in-from-right duration-700">
      
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-text-secondary hover:text-[#ff2a6d] transition-colors font-orbitron text-xs font-bold tracking-widest relative z-20"
      >
        <i className="fas fa-arrow-left mr-2"></i> BACK
      </button>

      <div className="max-w-3xl mx-auto text-center mb-8 relative z-20">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#ff2a6d]/10 border border-[#ff2a6d]/30 text-[#ff2a6d] text-[10px] font-black uppercase tracking-[0.2em]">
          <i className="fas fa-brain mr-2"></i> Cognitive Empathy Engine
        </div>
        <h2 className="font-orbitron text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,42,109,0.5)]">
          MJ v2 <span className="text-[#ff2a6d]">Emotion</span> Core
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto font-medium text-sm tracking-wide">
          The only AI designed to understand human emotions, tone, and context. Experience true digital companionship.
        </p>
      </div>

      <div className="max-w-xl mx-auto relative z-20">
        <div className="glass-card p-1 rounded-[2.5rem] relative overflow-hidden group shadow-[0_0_80px_rgba(255,42,109,0.1)] border-[#ff2a6d]/30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a6d]/5 via-transparent to-transparent opacity-50"></div>
          
          <div className="bg-[#0f0508]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.3rem] relative">
            
            <div className="flex items-center justify-between mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ff2a6d] to-[#ff0055] rounded-3xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <i className="fas fa-heart text-white text-4xl"></i>
              </div>
              <div className="text-right">
                <div className="flex flex-col items-end">
                    {discountApplied ? (
                        <>
                        <div className="text-sm text-text-secondary line-through font-bold">₹{originalPrice}</div>
                        <div className="text-5xl font-orbitron font-black text-white drop-shadow-[0_0_10px_rgba(255,42,109,0.8)]">₹{discountedPrice}</div>
                        </>
                    ) : (
                        <div className="text-5xl font-orbitron font-black text-white drop-shadow-[0_0_10px_rgba(255,42,109,0.8)]">₹{originalPrice}</div>
                    )}
                </div>
                <div className="text-[10px] text-[#ff2a6d] font-black uppercase tracking-widest mt-2 border border-[#ff2a6d]/30 px-2 py-1 rounded bg-[#ff2a6d]/5">
                   Lifetime License
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-white/5 to-white/0 p-6 rounded-2xl border border-white/10 mb-8 relative overflow-hidden">
              <div className="flex justify-between items-center mb-3">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] block">Redeem Launch Code</label>
                <a 
                  href="https://youtu.be/fY17HZcXppE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[9px] font-black text-[#ff2a6d] hover:text-white transition-colors uppercase flex items-center"
                >
                  <i className="fab fa-youtube mr-1 text-red-500"></i> Code Hidden in Video
                </a>
              </div>
              <div className="flex gap-3 relative z-10">
                <input 
                  type="text" 
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="ENTER CODE" 
                  className="flex-grow bg-[#1a0b10] border border-[#ff2a6d]/30 rounded-xl px-4 py-3 text-sm font-bold text-white focus:border-[#ff2a6d] outline-none transition-all placeholder:text-white/20"
                />
                <button 
                  onClick={handleApplyCode}
                  className="px-6 py-3 bg-[#ff2a6d] text-white rounded-xl font-black text-xs tracking-widest hover:bg-[#ff0055] hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,42,109,0.4)]"
                >
                  APPLY
                </button>
              </div>
              {error && <p className="text-red-500 text-[10px] font-bold mt-2 uppercase flex items-center gap-1"><i className="fas fa-times-circle"></i> {error}</p>}
              {discountApplied && <p className="text-green-400 text-[10px] font-bold mt-2 uppercase flex items-center gap-1"><i className="fas fa-check-circle"></i> Code Applied! ₹400 OFF.</p>}
            </div>

            <button 
              onClick={() => onSelect('mj-v2', discountApplied ? discountedPrice : originalPrice)}
              className="w-full py-6 bg-gradient-to-r from-[#ff2a6d] to-[#ff0055] text-white rounded-2xl font-orbitron font-black text-sm tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(255,42,109,0.4)] group-hover:shadow-[0_0_60px_rgba(255,42,109,0.6)]"
            >
              ACTIVATE EMOTION ENGINE
            </button>
            
            <div className="mt-6 flex justify-center gap-6 text-[10px] text-text-secondary font-bold uppercase tracking-wider">
               <span className="flex items-center gap-2"><i className="fas fa-check-circle"></i> Instant Access</span>
               <span className="flex items-center gap-2"><i className="fas fa-infinity"></i> Lifetime Validity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MJVariantSelector;
