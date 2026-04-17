
import React, { useState } from 'react';
import { UserDetails } from '../types';
import { Check, Info, MessageCircle, Sparkles } from 'lucide-react';

interface PaymentFormProps {
  productTitle: string;
  price: number;
  paymentId: string;
  isCustomProduct: boolean;
  onSubmit: (details: UserDetails) => void;
  themeColor: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ productTitle, price, paymentId, isCustomProduct, onSubmit, themeColor }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [aiName, setAiName] = useState('');
  const [baseAiChoice, setBaseAiChoice] = useState<'MJ' | 'NOVA'>('NOVA');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCustomProduct && !aiName) return;
    if (!name || !email) return;
    onSubmit({ name, email, desiredAiName: aiName, baseAiChoice });
  };

  return (
    <div className="animate-in fade-in duration-700 max-w-2xl mx-auto py-12 px-4 font-sans">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 blur-[100px] pointer-events-none" style={{ backgroundColor: themeColor }}></div>
        
        <div className="relative z-10 bg-[#09090b] border border-white/[0.08] p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden">
          
          <div className="flex flex-col items-center text-center mb-10 relative z-10">
            <div className="w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden" style={{ borderColor: `${themeColor}40`, backgroundColor: `${themeColor}10` }}>
              <Check className="w-8 h-8 relative z-10" style={{ color: themeColor }} />
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: `linear-gradient(45deg, transparent, ${themeColor}, transparent)` }}></div>
            </div>
            <h2 className="text-3xl font-display font-extrabold text-white mb-3 tracking-tight">Payment Successful</h2>
            <p className="text-gray-400 font-medium">Provide your details to generate your access key.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {isCustomProduct && (
              <div className="space-y-6 p-8 rounded-[1.5rem] bg-[#020202] border border-white/[0.05] relative overflow-hidden shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-black" style={{ backgroundColor: themeColor }}>1</div>
                   <label className="text-sm font-bold text-white tracking-wide">Custom OS Configuration</label>
                </div>
                
                <div className="space-y-4">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-[#a855f7]" /> Base Architecture
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setBaseAiChoice('NOVA')}
                      className={`p-4 rounded-xl border transition-all text-xs font-bold tracking-widest uppercase ${baseAiChoice === 'NOVA' ? 'bg-[#00f2ff]/10 text-[#00f2ff] border-[#00f2ff]/30 shadow-[0_0_20px_rgba(0,242,255,0.15)]' : 'bg-[#09090b] text-gray-500 border-white/[0.05] hover:border-white/[0.1] hover:text-gray-400'}`}
                    >
                      NOVA Core
                    </button>
                    <button
                      type="button"
                      onClick={() => setBaseAiChoice('MJ')}
                      className={`p-4 rounded-xl border transition-all text-xs font-bold tracking-widest uppercase ${baseAiChoice === 'MJ' ? 'bg-[#ff2a6d]/10 text-[#ff2a6d] border-[#ff2a6d]/30 shadow-[0_0_20px_rgba(255,42,109,0.15)]' : 'bg-[#09090b] text-gray-500 border-white/[0.05] hover:border-white/[0.1] hover:text-gray-400'}`}
                    >
                      MJ Core
                    </button>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/[0.05]">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Desired Codename</label>
                  <input 
                    required
                    type="text" 
                    value={aiName}
                    onChange={(e) => setAiName(e.target.value)}
                    placeholder="e.g. JARVIS, FRIDAY, TARS"
                    className="w-full bg-[#09090b] border border-white/[0.08] rounded-2xl px-5 py-4 text-white outline-none transition-all text-sm focus:border-opacity-100 placeholder:text-gray-600 font-medium"
                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = themeColor; e.currentTarget.style.boxShadow = `0 0 0 1px ${themeColor}`; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1.5"><Info className="w-3 h-3" /> Hardcoded into your executable.</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
               {isCustomProduct && (
                 <div className="flex items-center gap-3 mb-2 pt-4">
                   <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-black bg-white/50">2</div>
                   <label className="text-sm font-bold text-white tracking-wide">Owner Information</label>
                 </div>
               )}
               
               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Legal Name</label>
                  <input 
                    required
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="For license registration"
                    className="w-full bg-[#020202] border border-white/[0.08] rounded-2xl px-5 py-4 text-white outline-none transition-all text-sm focus:border-opacity-100 placeholder:text-gray-600 font-medium"
                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = themeColor; e.currentTarget.style.boxShadow = `0 0 0 1px ${themeColor}`; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Primary Email</label>
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Delivery & recovery address"
                    className="w-full bg-[#020202] border border-white/[0.08] rounded-2xl px-5 py-4 text-white outline-none transition-all text-sm focus:border-opacity-100 placeholder:text-gray-600 font-medium"
                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = themeColor; e.currentTarget.style.boxShadow = `0 0 0 1px ${themeColor}`; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
            </div>

            <div className="bg-[#020202] p-6 rounded-[1.5rem] border border-white/[0.05] space-y-4 mt-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-medium tracking-wide">License Type</span>
                <span className="text-white font-bold">{productTitle}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-medium tracking-wide">Amount Paid</span>
                <span style={{ color: themeColor }} className="font-bold text-lg">₹{price}</span>
              </div>
              <div className="flex justify-between items-center text-xs pt-4 border-t border-white/[0.05]">
                <span className="text-gray-500 font-medium tracking-wide">Transaction ID</span>
                <span className="text-gray-400 font-mono bg-white/[0.02] px-2 py-1 rounded-md">{paymentId}</span>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 text-black rounded-2xl font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:translate-y-0 flex items-center justify-center mt-10 gap-3 group relative overflow-hidden"
              style={{ backgroundColor: themeColor }}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="w-5 h-5 relative z-10" /> 
              <span className="relative z-10">Send Details to Server</span>
            </button>
            <p className="text-center text-[10px] text-gray-500 font-medium uppercase tracking-widest mt-4">
              Redirects to official secure WhatsApp
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
