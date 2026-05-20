import React, { useEffect, useState } from 'react';
import CustomerReviews from './CustomerReviews';
import { Building2, Image as ImageIcon, CheckCircle2, PlayCircle, Users, ArrowRight, ShieldCheck, Sparkles, Target, Zap, Globe, Cpu, Network, Terminal, Activity, Server, Command, Workflow, Box, ChevronDown, Rocket, Monitor, Lock, FileCheck } from 'lucide-react';
import ContactContent from './ContactContent';

interface CompanyHomePageProps {
  onViewProducts: () => void;
}

const CompanyHomePage: React.FC<CompanyHomePageProps> = ({ onViewProducts }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen font-sans overflow-hidden pb-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxbC00MCAuNTotaloiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPHBhdGggZD0iTTAgMGgxdjQwbC0uNS00MHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPC9zdmc+')] opacity-50 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-24 pb-24">
        
        {/* Intro Section - Hero */}
        <div className={`text-center max-w-5xl mx-auto mb-12 md:mb-32 pt-4 md:pt-16 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 md:mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
            <span className="text-[9px] md:text-xs font-bold text-blue-200 tracking-[0.2em] uppercase">Nova AI Technologies Pvt Ltd</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-6 md:mb-8 leading-tight">
            The Next Generation of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-lg">Cognitive Intelligence</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto px-2">
            We specialize in building secure, automated, and highly customized AI ecosystems for a digital-first world. Driving operational excellence seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <button 
                onClick={onViewProducts}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-[15px] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            <a 
              href="https://instagram.com/nova_voice_assistant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full font-medium text-[15px] transition-all w-full sm:w-auto backdrop-blur-md group"
            >
              <ImageIcon className="w-5 h-5 text-pink-400 group-hover:scale-110 group-hover:-rotate-6 transition-transform" />
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* Trusted By / Partners */}
        <div className={`mb-16 md:mb-32 max-w-5xl mx-auto transition-all duration-1000 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-center text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-8">Trusted by Forward-Thinking Teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-4">
             {/* Text logos for partners */}
             <div className="flex items-center gap-2 hover:scale-105 transition-transform"><div className="w-6 h-6 bg-white/20 rounded-full"></div><span className="text-xl font-bold text-white tracking-tighter">NexusCorp</span></div>
             <div className="flex items-center gap-2 hover:scale-105 transition-transform"><div className="w-4 h-6 bg-white/20"></div><span className="text-xl font-display font-medium text-white tracking-widest uppercase">Axiom</span></div>
             <div className="flex items-center gap-2 hover:scale-105 transition-transform"><div className="w-6 h-6 border-2 border-white/20 rotate-45"></div><span className="text-xl font-bold text-white italic">Vertex</span></div>
             <div className="flex items-center gap-2 hover:scale-105 transition-transform"><div className="w-6 h-6 rounded-sm bg-white/20"></div><span className="text-xl font-display font-extrabold text-white tracking-tight">QUANTUM</span></div>
          </div>
        </div>

        {/* Video Tutorial Section */}
        <div className={`mb-16 md:mb-32 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent relative overflow-hidden mx-4 md:mx-0">
             
             {/* Decorative glow behind video */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 blur-[100px] pointer-events-none"></div>

             <div className="text-center relative z-10 mb-6 md:mb-8 pt-2 md:pt-4">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-black/50 border border-white/10 mb-4 backdrop-blur-md">
                <PlayCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                <span className="text-[10px] md:text-xs font-bold text-gray-300 tracking-widest uppercase">Quick Start Guide</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">How to Install & Setup</h3>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-10 bg-[#050505]">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/uQo_LHobvCM?si=3MEx7Ug12pUIrsOO" 
                title="Installation Guide" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="opacity-90 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Global Impact / Trust Metrics */}
        <div className={`mb-16 md:mb-32 transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} px-4 md:px-0`}>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 max-w-5xl mx-auto">
             {[
               { icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />, value: '100%', label: 'Trusted Entity' },
               { icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />, value: '1+ Year', label: 'Proven Track Record' },
               { icon: <Building2 className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />, value: 'Pvt Ltd', label: 'Registered Company' },
               { icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />, value: 'Global', label: 'Service Standard' },
             ].map((stat, idx) => (
               <div key={idx} className="glass-card rounded-[1.25rem] md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/[0.02] transition-colors border border-white/5">
                 <div className="flex justify-center mb-2 md:mb-3 opacity-80">{stat.icon}</div>
                 <div className="text-xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                 <div className="text-[9px] md:text-xs uppercase tracking-wider text-gray-500 font-medium">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Compliance & Security Certifications */}
        <div className={`mb-16 md:mb-32 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} px-4 md:px-0`}>
          <div className="glass-card rounded-[2rem] p-8 md:p-12 border border-emerald-500/10 bg-gradient-to-r from-emerald-500/[0.02] via-transparent to-blue-500/[0.02]">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-3 md:mb-4 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                 <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                 <span className="text-[10px] md:text-xs font-bold text-emerald-400 tracking-[0.2em] uppercase">Trust & Compliance</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">Enterprise-Grade Security</h3>
              <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-light">
                Built to meet the rigorous security requirements of global enterprises and regulated industries.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {[
                { icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />, title: 'SOC 2 Type II', desc: 'Secure Operations' },
                { icon: <Lock className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />, title: 'End-to-End', desc: 'AES-256 Encryption' },
                { icon: <FileCheck className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />, title: 'GDPR & HIPAA', desc: 'Privacy by Design' },
                { icon: <Server className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />, title: '99.99% SLA', desc: 'Carrier-Grade Uptime' },
              ].map((cert, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:bg-white/10 transition-all duration-500 shadow-lg">
                    {cert.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm md:text-base mb-1 tracking-tight">{cert.title}</h4>
                  <p className="text-gray-500 text-[10px] md:text-xs font-medium uppercase tracking-wider">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className={`mb-16 md:mb-32 max-w-6xl mx-auto transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6 px-4 md:px-0">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                 <span className="text-[10px] md:text-xs font-bold text-blue-400 tracking-[0.2em] uppercase">System Architecture</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Capabilities</span></h3>
            </div>
            <p className="text-gray-400 text-sm md:text-lg max-w-md font-light leading-relaxed">
              A comprehensive suite of intelligent tools engineered for scale, security, and seamless integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-4 md:px-0">
            
            {/* Main Feature - 8 cols */}
            <div className="md:col-span-8 glass-card rounded-[2rem] p-6 md:p-12 border border-white/5 hover:border-blue-500/30 transition-all duration-500 group overflow-hidden relative min-h-[280px] md:min-h-[360px] flex flex-col justify-end bg-[#050505]">
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none group-hover:scale-150 transition-transform duration-1000 ease-out"></div>
               <div className="absolute top-12 right-12 text-white/[0.02] group-hover:text-blue-500/10 transition-colors duration-700 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:-translate-y-0">
                  <Cpu className="w-64 h-64" />
               </div>
               
               <div className="relative z-10 w-full lg:w-3/4">
                 <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-500 shadow-lg">
                    <Cpu className="w-5 h-5 md:w-7 md:h-7 text-gray-400 group-hover:text-blue-400 transition-colors" />
                 </div>
                 <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 md:mb-4 tracking-tight">Advanced Neural Engine</h4>
                 <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                   Leverage deep learning models to predict trends, automate complex reasoning tasks, and generate insights in real-time across your entire data ecosystem.
                 </p>
               </div>
            </div>

            {/* Side Feature 1 - 4 cols */}
            <div className="md:col-span-4 glass-card rounded-[2rem] p-6 md:p-10 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group overflow-hidden relative min-h-[260px] md:min-h-[360px] bg-[#050505] flex flex-col">
               <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-700"></div>
               
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-500 shadow-lg">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-indigo-400 transition-colors" />
               </div>
               
               <div className="relative z-10 mt-8 md:mt-12">
                 <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2 md:mb-3">Zero-Trust Security</h4>
                 <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                   Military-grade end-to-end encryption for all processed data, ensuring your corporate IP never leaves restricted boundaries.
                 </p>
               </div>
            </div>

            {/* Side Feature 2 - 4 cols */}
            <div className="md:col-span-4 glass-card rounded-[2rem] p-6 md:p-10 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group overflow-hidden relative min-h-[260px] md:min-h-[360px] bg-[#050505] flex flex-col">
               <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none group-hover:-translate-x-10 group-hover:-translate-y-10 transition-transform duration-700"></div>
               
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all duration-500 shadow-lg">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-emerald-400 transition-colors" />
               </div>
               
               <div className="relative z-10 mt-8 md:mt-12">
                 <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2 md:mb-3">Ultra-Low Latency</h4>
                 <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                   Sub-50ms response times for critical edge requests powered by our globally distributed CDN and specialized routing.
                 </p>
               </div>
            </div>

            {/* Bottom Feature - 8 cols */}
            <div className="md:col-span-8 glass-card rounded-[2rem] p-6 md:p-12 border border-white/5 hover:border-purple-500/30 transition-all duration-500 group overflow-hidden relative min-h-[280px] md:min-h-[360px] flex md:flex-row flex-col items-center gap-6 md:gap-8 bg-[#050505]">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               
               <div className="flex-1 relative z-10">
                 <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-500 shadow-lg">
                    <Terminal className="w-5 h-5 md:w-7 md:h-7 text-gray-400 group-hover:text-purple-400 transition-colors" />
                 </div>
                 <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 md:mb-4 tracking-tight">Standalone Desktop App (.exe)</h4>
                 <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                   No complex setups, technical configurations, or command-line scripting required. Just run our lightweight standalone executable file (.exe) and access the full power of Nova AI directly from your desktop.
                 </p>
               </div>
               
               <div className="w-full md:w-[350px] flex-shrink-0 relative group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none rounded-2xl"></div>
                  <div className="bg-[#0a0a0a] p-8 rounded-[2rem] border border-white/5 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group-hover:border-purple-500/20 transition-colors h-full min-h-[220px]">
                     <div className="absolute inset-0 bg-purple-500/5 blur-[30px] group-hover:bg-purple-500/10 transition-all duration-500"></div>
                     <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 relative z-10 shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-transform duration-500">
                       <Monitor className="w-8 h-8 text-white relative z-10" />
                     </div>
                     <div className="text-white font-bold text-sm tracking-wide relative z-10">Nova_AI_Setup.exe</div>
                     <div className="text-gray-500 text-[10px] mt-2 font-mono uppercase tracking-widest relative z-10">Windows 10/11 • 245 MB</div>
                  </div>
               </div>
            </div>

          </div>
        </div>

      {/* Team Members */}
        <div className={`mb-16 md:mb-24 max-w-6xl mx-auto transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-16 gap-4 md:gap-6 px-4 md:px-0">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                 <span className="text-[10px] md:text-xs font-bold text-indigo-400 tracking-[0.2em] uppercase">Core Team</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Team</span></h3>
            </div>
            <p className="text-gray-400 text-sm md:text-lg max-w-md font-light leading-relaxed">
              The visionaries and structural architects behind Nova AI's workflow innovations and proprietary deep logic.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
            {[
              { name: 'Ankit Singh', role: 'CEO & Founder', desc: 'Driving strategy and corporate vision.', img: '/ankit-singh.jpg' },
              { name: 'Sumit Maurya', role: 'Chief Technical Officer', desc: 'Architecting scalable server-side systems.' },
              { name: 'Harsh Ghatad', role: 'Lead AI Eng.', desc: 'Developing logic layers and training sets.' },
              { name: 'Vishal Chauhan', role: 'Head of Marketing & Sales', desc: 'Expanding global market presence.' }
            ].map((member, idx) => (
              <div key={idx} className="glass-card rounded-[1.5rem] p-4 md:p-6 text-center hover:-translate-y-2 transition-all duration-500 border border-white/10 hover:border-indigo-500/50 bg-gradient-to-b from-white/[0.02] to-[#050505] group overflow-hidden relative flex flex-col items-center shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
                
                {member.img ? (
                  <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 overflow-hidden shadow-lg border-2 border-white/10 bg-[#111] group-hover:border-indigo-500/40 transition-colors duration-500">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=random&color=fff&size=512' }} />
                  </div>
                ) : (
                  <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-white/10 flex items-center justify-center transition-colors duration-500 shadow-lg group-hover:border-indigo-500/40">
                    <span className="text-2xl md:text-3xl font-display font-medium text-indigo-300/50 group-hover:scale-110 transition-transform duration-700 tracking-widest">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                
                <div className="relative z-10 mt-auto w-full">
                  <h4 className="text-base md:text-lg font-bold text-white mb-1 tracking-tight group-hover:text-indigo-300 transition-colors">{member.name}</h4>
                  <p className="text-indigo-400/80 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className={`mb-16 md:mb-24 transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="max-w-6xl mx-auto px-4 md:px-0">
             <CustomerReviews />
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`mb-16 md:mb-24 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} px-4 md:px-0`}>
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5">
                <span className="text-[10px] md:text-xs font-bold text-blue-400 tracking-[0.2em] uppercase">Knowledge Base</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'Is Nova AI secure enough for enterprise data?', a: 'Yes, we employ zero-trust architecture and AES-256 encryption. Your corporate data is sandboxed and never used to train public models.' },
              { q: 'How long does the installation process take?', a: 'It takes mere minutes. Simply download the .exe application, run it on your Windows machine, and start utilizing the AI immediately.' },
              { q: 'Can I use it entirely offline?', a: 'Yes. Nova AI can be configured to run entirely locally on your machine without requiring an active internet connection.' },
              { q: 'Do I need developer skills to set it up?', a: 'Not at all. We have packaged the entire model ecosystem into an easy-to-use plug-and-play desktop application software.' }
            ].map((faq, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 bg-[#050505] hover:border-blue-500/30 transition-colors group">
                 <h4 className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide">{faq.q}</h4>
                 <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className={`mb-16 md:mb-24 max-w-5xl mx-auto transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} px-4 md:px-0`}>
          <div className="glass-card rounded-[2.5rem] p-8 md:p-16 border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-[#050505] to-purple-500/10 text-center relative overflow-hidden group shadow-2xl">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700"></div>
             
             <Rocket className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mx-auto mb-6 relative z-10 animate-bounce shadow-blue-500/50 drop-shadow-xl" />
             <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4 md:mb-6 relative z-10">Ready to Deploy Intelligence?</h3>
             <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-8 relative z-10">
               Join industry leaders who have already transformed their workflows with Nova AI. Start your custom enterprise deployment today.
             </p>
             <button 
               onClick={onViewProducts}
               className="relative z-10 inline-flex items-center gap-2 bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-wide hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
             >
               <span>Request Priority Access</span>
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* Contact Form Details */}
        <div className={`max-w-4xl mx-auto mt-16 md:mt-32 transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
           <ContactContent isHomePage={true} />
        </div>

      </div>
    </div>
  );
};

export default CompanyHomePage;
