import React from 'react';
import { AlertTriangle, ShieldAlert, BadgeCheck, FileWarning } from 'lucide-react';

const RefundContent: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-16 px-4 md:px-0 max-w-4xl mx-auto">
      
      <section className="text-center pt-6">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5">
           <FileWarning className="w-4 h-4 text-red-400" />
           <span className="text-xs font-bold text-red-400 tracking-widest uppercase">Important Notice</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">Software Licensing Policy</h2>
        <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed">
          Please review our strict operational guidelines regarding the provisioning and utilization of digital license keys.
        </p>
      </section>

      <div className="bg-gradient-to-br from-red-500/10 to-[#050505] border border-red-500/20 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl group hover:border-red-500/40 transition-colors duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-500/20 transition-all duration-700"></div>
        
        <h2 className="text-2xl md:text-3xl font-display font-bold text-red-500 mb-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
          Strict No-Refund Rule on Activated Goods
        </h2>
        
        <div className="space-y-6">
          <p className="text-white/90 font-light text-base md:text-lg leading-relaxed">
            Due to the proprietary nature of our neural architectures and the irreversible hardware-binding process, we enforce a strict policy: <strong className="text-white font-bold">Once a NOVA AI or MJ AI product has been ACTIVATED using your unique Elite access key, it is permanently consumed.</strong>
          </p>
          <div className="p-4 md:p-6 bg-red-500/5 border-l-4 border-red-500 rounded-r-xl">
            <p className="font-bold text-red-400 text-lg">Refunds are strictly prohibited and cannot be issued under any circumstances after activation.</p>
          </div>
          <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
            Generating and validating an access key consumes irreversible computational resources and permanently links the software instance to your specific machine signature to prevent intellectual property theft.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/5 relative overflow-hidden group">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
             <div className="p-2 bg-emerald-500/10 rounded-lg"><BadgeCheck className="w-5 h-5 text-emerald-400" /></div>
             30-Day Window (Unactivated)
          </h3>
          <p className="font-light text-gray-400 leading-relaxed text-sm md:text-base mb-6">
            We do offer a standard <strong className="text-white">30-day refund window</strong> exclusively for products that remain fully inactive. You may request a refund only if:
          </p>
          <ul className="space-y-4">
            {[
              'The request is made within 30 days of initial payment.',
              'The cryptographic access key has NEVER been used.',
              'No deployment analytics correspond to your issued key.'
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 font-light text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/5 relative overflow-hidden group">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
             <div className="p-2 bg-blue-500/10 rounded-lg"><ShieldAlert className="w-5 h-5 text-blue-400" /></div>
             Assistance & Intervention
          </h3>
          <p className="font-light text-gray-400 leading-relaxed text-sm md:text-base mb-4">
            If you encounter critical deployment issues prior to activation, do not attempt brute-force operations.
          </p>
          <p className="font-light text-gray-400 leading-relaxed text-sm md:text-base">
            Reach out to our operational team via the WhatsApp support channel. Our dedicated structural engineers will assist with environmental configuration or process an authorized cancellation if the software remains entirely uninitialized.
          </p>
        </div>
      </div>

    </div>
  );
};

export default RefundContent;
