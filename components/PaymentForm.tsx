
import React, { useState } from 'react';
import { UserDetails } from '../types';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCustomProduct && !aiName) return;
    if (!name || !email) return;
    onSubmit({ name, email, desiredAiName: aiName });
  };

  return (
    <div className="animate-in zoom-in duration-500 max-w-xl mx-auto py-12">
      <div className="glass-card p-8 md:p-12 rounded-[2.5rem] relative" style={{ borderColor: `${themeColor}4D` }}>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white font-black px-6 py-2 rounded-full shadow-lg text-xs tracking-widest">
          PAYMENT SUCCESSFUL
        </div>
        
        <div className="text-center mb-10">
          <h2 className="font-orbitron text-2xl font-black text-white mb-2 uppercase">Activation Details</h2>
          <p className="text-text-secondary text-sm">Provide your final configuration to generate your ELITE access key.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isCustomProduct && (
            <div className="space-y-4 p-6 rounded-[2rem] bg-white/5 border border-dashed border-white/20 animate-in slide-in-from-top duration-500">
              <div className="flex items-center space-x-3 mb-2">
                 <span className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-surface" style={{ backgroundColor: themeColor }}>01</span>
                 <label className="text-xs font-black uppercase tracking-widest" style={{ color: themeColor }}>Your Custom AI Name</label>
              </div>
              <input 
                required
                type="text" 
                value={aiName}
                onChange={(e) => setAiName(e.target.value)}
                placeholder="JARVIS / FRIDAY / TARS"
                className="w-full bg-surface-lighter border border-white/10 rounded-2xl px-6 py-4 text-white outline-none transition-all font-bold focus:border-opacity-100 ring-2 ring-primary/10"
                style={{ borderColor: themeColor }}
              />
              <p className="text-[9px] text-text-secondary uppercase font-bold px-2 italic">This will be hardcoded into your personal build.</p>
            </div>
          )}

          <div className="space-y-4">
             {isCustomProduct && (
               <div className="flex items-center space-x-3 mb-2 px-1">
                 <span className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-surface bg-white/20">02</span>
                 <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Owner Information</label>
               </div>
             )}
             
             <div className="space-y-2">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name for invoice"
                  className="w-full bg-surface-lighter border border-white/10 rounded-2xl px-6 py-4 text-white outline-none transition-all font-bold"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = themeColor}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Delivery email address"
                  className="w-full bg-surface-lighter border border-white/10 rounded-2xl px-6 py-4 text-white outline-none transition-all font-bold"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = themeColor}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
              <span className="text-text-secondary">Product:</span>
              <span className="text-white">{productTitle}</span>
            </div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
              <span className="text-text-secondary">Amount Paid:</span>
              <span style={{ color: themeColor }}>₹{price}</span>
            </div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
              <span className="text-text-secondary">Ref ID:</span>
              <span className="text-text-secondary">{paymentId.substring(0, 12)}...</span>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-5 text-surface rounded-2xl font-orbitron font-black text-sm tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center"
            style={{ backgroundColor: themeColor, boxShadow: `0 0 20px ${themeColor}4D` }}
          >
            <i className="fab fa-whatsapp mr-3 text-lg"></i> GET ACCESS KEY ON WHATSAPP
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
