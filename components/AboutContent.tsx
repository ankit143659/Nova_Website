import React from 'react';
import { Target, Users, Zap, Shield, Brain, Rocket, Code, Database, TrendingUp, Monitor } from 'lucide-react';

const AboutContent: React.FC = () => {
  const team = [
    { name: 'Ankit Singh', role: 'CEO & Founder', desc: 'Driving strategy and corporate vision.', img: '/ankit-singh.jpg' },
    { name: 'Sumit Maurya', role: 'Chief Technical Officer', desc: 'Architecting scalable server-side systems.', img: '/sumit.jpg' },
    { name: 'Harsh Ghatad', role: 'Lead AI Eng.', desc: 'Developing logic layers and training sets.', img: '/harsh.jpg' },
    { name: 'Vishal Chauhan', role: 'Head of Marketing & Sales', desc: 'Expanding global market presence.', img: '/vishal.jpg' }
  ];

  return (
    <div className="space-y-12 md:space-y-20 px-4 md:px-0">
      
      {/* Hero Header */}
      <section className="text-center max-w-4xl mx-auto pt-8 md:pt-12">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5">
           <Zap className="w-4 h-4 text-blue-400" />
           <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">The Next Evolution</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 tracking-tight">Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Intelligent Automation</span></h2>
        <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed">
          At VASH AI (Voice Automated System Handler) TECHNOLOGIES PVT LTD, our mission is to revolutionize the way enterprises interact with technology through secure, private, and customizable AI solutions.
        </p>
      </section>

      {/* Origin Story / Development Journey */}
      <section className="glass-card rounded-[2rem] p-8 md:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        <h3 className="text-2xl md:text-4xl font-display font-medium text-white mb-6">Our Journey</h3>
        <div className="space-y-6">
          <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
            For the past <strong className="text-white font-medium">two years</strong>, our core engineering team has been relentlessly building and refining the VASH AI ecosystem. What started as an ambitious experiment in desktop automation has evolved into a robust, enterprise-grade cognitive engine.
          </p>
          <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
            We spent countless hours perfecting the underlying logic layers, optimizing ultra-low latency executions, and ensuring military-grade encryption without compromising on processing speed. VASH AI is the culmination of two years of unyielding dedication to creating the perfect synergy between standalone software and neural intelligence.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="pt-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight mb-4">Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Core Team</span></h3>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            The visionary minds who spent over two years architecting the proprietary logic driving VASH AI's workflow innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, idx) => (
             <div key={idx} className="glass-card rounded-[1.5rem] p-6 text-center group border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2 shadow-lg">
               {member.img ? (
                 <div className="w-28 h-28 mx-auto rounded-full mb-6 overflow-hidden bg-[#050505] group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0 border-2 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=random&color=fff&size=512' }} />
                 </div>
               ) : (
                 <div className="w-28 h-28 mx-auto rounded-full mb-6 border-2 border-white/10 flex items-center justify-center shadow-lg transition-colors duration-500 bg-[#0a0a0b] group-hover:bg-indigo-500/10">
                   <span className="text-3xl font-display font-medium text-indigo-300/40 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-700">
                     {member.name.split(' ').map(n => n[0]).join('')}
                   </span>
                 </div>
               )}
               <h4 className="text-xl font-display font-medium text-white mb-2">{member.name}</h4>
               <p className="text-indigo-400/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3">{member.role}</p>
               <p className="text-gray-500 text-sm font-light leading-relaxed hidden sm:block">{member.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Core Values / Why Choose Us */}
      <section className="glass-card rounded-[2rem] p-8 md:p-12 border border-white/10 relative overflow-hidden">
        <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-10 text-center">Engineered for Excellence</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {[
            { icon: <Zap className="w-6 h-6 text-blue-400" />, title: 'High Performance', text: 'Optimized enterprise-grade automation systems.' },
            { icon: <Shield className="w-6 h-6 text-emerald-400" />, title: 'Absolute Privacy', text: 'Strict adherence to data privacy and corporate security.' },
            { icon: <Brain className="w-6 h-6 text-purple-400" />, title: 'Cognitive Superiority', text: 'State-of-the-art cognitive models tailored to workflows.' },
            { icon: <Target className="w-6 h-6 text-pink-400" />, title: 'Targeted Execution', text: 'Scalable infrastructure designed for real-world impact.' }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{item.title}</h4>
                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutContent;
