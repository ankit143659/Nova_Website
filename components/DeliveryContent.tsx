import React from 'react';
import { MessageCircle, Rocket, CheckCircle2, Key, Zap, ShieldCheck, PlayCircle, Headphones } from 'lucide-react';

const DeliveryContent: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-16 px-4 md:px-0">
      
      <section className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/5">
           <Rocket className="w-4 h-4 text-pink-400" />
           <span className="text-xs font-bold text-pink-400 tracking-widest uppercase">VIP Distribution</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">Direct Delivery Protocol</h2>
        <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed">
          To ensure maximum security and priority support, all standard and custom enterprise models are distributed exclusively via our direct WhatsApp channel.
        </p>
      </section>

      <div className="relative max-w-4xl mx-auto pl-8 md:pl-0 mt-12 md:mt-24">
        {/* Vertical Connecting Line */}
        <div className="absolute top-4 bottom-4 left-[15px] md:left-1/2 md:-ml-[1px] w-[2px] bg-gradient-to-b from-pink-500/20 via-blue-500/20 to-purple-500/20"></div>
        
        {[
          { step: '01', icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />, title: 'Payment Verification', desc: 'Once your secure payment is processed, our system flags your slot for immediate allocation.' },
          { step: '02', icon: <MessageCircle className="w-5 h-5 text-green-400" />, title: 'Direct WhatsApp Contact', desc: 'You will automatically be redirected to WhatsApp to send your predefined order details directly to our deployment team.' },
          { step: '03', icon: <Rocket className="w-5 h-5 text-purple-400" />, title: 'Software Package Dispatch', desc: 'Within 5-15 minutes, you will receive the standalone executable (.exe) application file specifically packaged for you.' },
          { step: '04', icon: <Key className="w-5 h-5 text-yellow-400" />, title: 'Elite License Key', desc: 'Along with the software, a secure, cryptographically generated activation key is provided for your hardware.' },
          { step: '05', icon: <PlayCircle className="w-5 h-5 text-indigo-400" />, title: 'Visual Setup Guide', desc: 'A clear, 2-minute instructional video is sent to walk you through the zero-configuration installation.' },
          { step: '06', icon: <Headphones className="w-5 h-5 text-blue-400" />, title: 'Ongoing Priority Support', desc: 'Your WhatsApp thread remains open permanently for any future technical inquiries or product updates.' }
        ].map((item, idx) => (
          <div key={idx} className={`relative flex items-center justify-between md:justify-normal mb-8 md:mb-16 group w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Timeline Node */}
            <div className="absolute left-[-31px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center z-10 group-hover:border-white/30 group-hover:scale-110 transition-all duration-500 shadow-xl">
               {item.icon}
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-[calc(50%-4rem)] glass-card rounded-[2rem] p-6 md:p-8 border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg ml-6 md:ml-0 group-hover:-translate-y-2 ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
              <div className="text-white/10 font-mono font-bold text-4xl md:text-5xl leading-none mb-4 pointer-events-none group-hover:text-white/20 transition-colors duration-500">{item.step}</div>
              <h4 className="text-xl md:text-2xl font-display font-medium text-white mb-3 group-hover:text-blue-200 transition-colors">{item.title}</h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DeliveryContent;
