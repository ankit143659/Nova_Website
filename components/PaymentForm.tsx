
import React, { useState } from 'react';
import { UserDetails } from '../types';
import { Check, Info, MessageCircle } from 'lucide-react';

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
    <div className="animate-in fade-in duration-700 max-w-2xl mx-auto py-12 px-4">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden">
          
          <div className="flex flex-col items-center text-center mb-10 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <Check className="w-8 h-8 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Payment Successful</h2>
            <p className="text-text-secondary text-sm">Provide your details to generate your access key.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {isCustomProduct && (
              <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-black" style={{ backgroundColor: themeColor }}>1</div>
                   <label className="text-sm font-bold text-white">Your Custom AI Name</label>
                </div>
                
                <div>
                  <input 
                    required
                    type="text" 
                    value={aiName}
                    onChange={(e) => setAiName(e.target.value)}
                    placeholder="e.g. JARVIS, FRIDAY, TARS"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none transition-all text-sm focus:border-opacity-100 focus:ring-1"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = themeColor; e.currentTarget.style.boxShadow = `0 0 0 1px ${themeColor}`; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                  <p className="text-xs text-text-secondary mt-2 flex items-center gap-1.5"><Info className="w-3 h-3" /> This will be hardcoded into your personal build.</p>
                </div>
              </div>
            )}

            <div className="space-y-5">
               {isCustomProduct && (
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-black bg-white/50">2</div>
                   <label className="text-sm font-bold text-white">Owner Information</label>
                 </div>
               )}
               
               <div className="space-y-2">
                  <label className="text-xs font-medium text-text-secondary ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name for invoice"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none transition-all text-sm focus:border-opacity-100 focus:ring-1"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = themeColor; e.currentTarget.style.boxShadow = `0 0 0 1px ${themeColor}`; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-text-secondary ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Delivery email address"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none transition-all text-sm focus:border-opacity-100 focus:ring-1"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = themeColor; e.currentTarget.style.boxShadow = `0 0 0 1px ${themeColor}`; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-3 mt-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-text-secondary">Product</span>
                <span className="text-white font-medium">{productTitle}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-text-secondary">Amount Paid</span>
                <span style={{ color: themeColor }} className="font-bold">₹{price}</span>
              </div>
              <div className="flex justify-between items-center text-xs pt-3 border-t border-white/5">
                <span className="text-text-secondary">Ref ID</span>
                <span className="text-text-secondary font-mono">{paymentId.substring(0, 12)}...</span>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 text-black rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center mt-8 gap-3"
              style={{ backgroundColor: themeColor }}
            >
              <MessageCircle className="w-5 h-5" /> Get Access Key on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
