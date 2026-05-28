
import React, { useState, useEffect } from 'react';
import { UserDetails } from '../types';
import { Check, Info, MessageCircle, Sparkles, Building, Lock, Zap, FileText, Cpu, Network } from 'lucide-react';
import ContactContent from './ContactContent';

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
  const [baseAiChoice, setBaseAiChoice] = useState<'MJ' | 'VASH'>('VASH');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCustomProduct && !aiName) return;
    if (!name || !email) return;
    onSubmit({ name, email, desiredAiName: aiName, baseAiChoice });
  };

  return (
    <div className="relative min-h-screen font-sans overflow-hidden pb-24 flex-1">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse duration-[8000ms] pointer-events-none" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen animate-pulse duration-7000 delay-1000 pointer-events-none"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxbC00MCAuNTotaloiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPHBhdGggZD0iTTAgMGgxdjQwbC0uNS00MHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>


      <div className={`relative z-10 max-w-3xl mx-auto py-12 px-4 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <div className="relative">
          
          <div className="relative z-10 glass-card p-8 md:p-14 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl bg-gradient-to-b from-white/[0.05] to-transparent">
            
            <div className="flex flex-col items-center text-center mb-12 relative z-10">
              <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <Check className="w-10 h-10 text-blue-400 relative z-10" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">Provisioning System</h2>
              <p className="text-gray-400 font-light text-base md:text-lg">Provide your corporate credentials for secure license assignment.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {isCustomProduct && (
                <div className="space-y-6 p-8 rounded-3xl bg-black/40 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 shadow-inner">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  <div className="flex items-center gap-3 mb-2">
                     <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white bg-blue-600/80 border border-blue-400/30 shadow-[0_0_15px_rgba(37,99,235,0.4)]">1</div>
                     <label className="text-base font-bold text-white tracking-wide">Custom Engine Architecture</label>
                  </div>
                  
                  <div className="space-y-5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-blue-400" /> Target Foundation Model
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setBaseAiChoice('VASH')}
                        className={`p-5 rounded-2xl border transition-all text-sm font-bold tracking-wider uppercase relative overflow-hidden group/btn ${baseAiChoice === 'VASH' ? 'bg-blue-500/10 text-blue-400 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'bg-white/[0.02] text-gray-500 border-white/10 hover:border-white/20'}`}
                      >
                         VASH Core
                         <div className="text-[10px] text-gray-500 mt-1 font-medium capitalize">Optimized for Scale</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setBaseAiChoice('MJ')}
                        className={`p-5 rounded-2xl border transition-all text-sm font-bold tracking-wider uppercase relative overflow-hidden group/btn ${baseAiChoice === 'MJ' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.15)]' : 'bg-white/[0.02] text-gray-500 border-white/10 hover:border-white/20'}`}
                      >
                        MJ Core
                         <div className="text-[10px] text-gray-500 mt-1 font-medium capitalize">Optimized for Depth</div>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Internal Codename</label>
                    <div className="relative">
                      <Check className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input 
                        required
                        type="text" 
                        value={aiName}
                        onChange={(e) => setAiName(e.target.value)}
                        placeholder="e.g. OMEGA, ATLAS, NEXUS"
                        className="w-full bg-[#050505] border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white outline-none transition-all text-sm focus:border-blue-500/50 focus:bg-blue-500/5 placeholder:text-gray-700 font-medium"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-2"><Network className="w-3.5 h-3.5" /> Compiles directly into your runtime continuous integration pipeline.</p>
                  </div>
                </div>
              )}

              <div className="space-y-6 p-8 rounded-3xl bg-black/40 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all duration-500 shadow-inner">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500/0 via-gray-500/30 to-gray-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                 {isCustomProduct && (
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gray-800 border border-gray-600">2</div>
                     <label className="text-base font-bold text-white tracking-wide">Corporate / User Details</label>
                   </div>
                 )}
                 
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Legal Name</label>
                    <div className="relative">
                      <FileText className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input 
                        required
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Authorized Person Name"
                        className="w-full bg-[#050505] border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white outline-none transition-all text-sm focus:border-blue-500/50 focus:bg-blue-500/5 placeholder:text-gray-700 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Corporate Email</label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input 
                        required
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@company.com"
                        className="w-full bg-[#050505] border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white outline-none transition-all text-sm focus:border-blue-500/50 focus:bg-blue-500/5 placeholder:text-gray-700 font-medium"
                      />
                    </div>
                  </div>
              </div>

              <div className="bg-[#050505]/80 p-8 rounded-3xl border border-white/5 space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium text-sm">License Plan</span>
                  <span className="text-white font-bold text-lg tracking-tight">{productTitle}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium text-sm">Initial Cost</span>
                  <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 text-2xl">₹{price}</span>
                </div>
                <div className="flex justify-between items-center pt-5 border-t border-white/5">
                  <span className="text-gray-500 font-medium text-xs">Reference ID</span>
                  <span className="text-gray-400 font-mono text-xs bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">{paymentId}</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-white text-black hover:bg-gray-100 rounded-2xl font-bold text-[15px] transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center justify-center mt-8 gap-3 hover:-translate-y-1"
              >
                <Lock className="w-5 h-5" /> 
                Authorize & Secure Registration
              </button>
              <p className="text-center text-xs text-gray-500 font-medium flex items-center justify-center gap-2 mt-6">
                <Building className="w-4 h-4" /> VASH AI TECHNOLOGIES PRIVATE LIMITED Official Portal
              </p>
            </form>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 pb-24 mt-12 relative z-10">
         <ContactContent />
      </div>
    </div>
  );
};

export default PaymentForm;
