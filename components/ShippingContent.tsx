import React from 'react';
import { Box, Send, Clock, Globe } from 'lucide-react';

const ShippingContent: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-16 px-4 md:px-0">
      
      <section className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5">
           <Send className="w-4 h-4 text-blue-400" />
           <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">Zero Friction</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">Digital Shipping Policy</h2>
        <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed">
          As a purveyor of premium software licenses, our delivery infrastructure entirely bypasses traditional physical shipping logistics.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {[
          { icon: <Box className="w-6 h-6 text-emerald-400" />, title: 'No Physical Media', desc: 'We do not ship USB drives, CDs, or printed manuals. The entirety of the VASH AI platform is encapsulated in a streamlined digital format.' },
          { icon: <Clock className="w-6 h-6 text-purple-400" />, title: 'Instant Processing', desc: 'No transit times. Once verified, your custom instance is packaged and prepared for direct digital transfer within 15 minutes.' },
          { icon: <Send className="w-6 h-6 text-blue-400" />, title: 'Zero Shipping Costs', desc: 'There are absolutely no handling fees, processing charges, or shipping costs associated with our digital products.' },
          { icon: <Globe className="w-6 h-6 text-pink-400" />, title: 'Global Availability', desc: 'By utilizing digital infrastructure, we guarantee equal access and immediate delivery regardless of your geographical location.' }
        ].map((item, idx) => (
           <div key={idx} className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-300 group shadow-lg">
             <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
               {item.icon}
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
             <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
           </div>
        ))}
      </div>

    </div>
  );
};

export default ShippingContent;
