import React, { useEffect, useState } from 'react';
import CustomerReviews from './CustomerReviews';
import { Building2, Image as ImageIcon, CheckCircle2, PlayCircle, Users, ArrowRight, ShieldCheck, Sparkles, Target, Zap, Globe, Cpu, Network, Terminal, Activity, Server, Command, Workflow, Box, ChevronDown, Rocket, Monitor, Lock, FileCheck, CreditCard, MessageCircle, Key, Headphones } from 'lucide-react';
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

      <div className="relative z-10 w-full pt-12 md:pt-24 pb-0">
        
        {/* Intro Section - Hero */}
        <div className={`text-center max-w-[1200px] mx-auto px-6 mb-16 md:mb-32 pt-10 md:pt-16 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 md:mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
            <span className="text-[10px] md:text-xs font-bold text-blue-200 tracking-[0.2em] uppercase">VASH AI TECHNOLOGIES PVT LTD</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-6 md:mb-10 leading-tight">
            The Next Generation of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-lg">Cognitive Intelligence</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 md:mb-12 max-w-3xl mx-auto px-2">
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
              href="https://instagram.com/vash_voice_assistant" 
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
        <div className={`mb-16 md:mb-32 w-full max-w-5xl mx-auto transition-all duration-1000 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-center text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-widest mb-8">Trusted by Forward-Thinking Teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-4">
             {/* Text logos for partners */}
             <div className="flex items-center gap-2 hover:scale-105 transition-transform"><div className="w-6 h-6 bg-white/20 rounded-full"></div><span className="text-xl font-bold text-white tracking-tighter">NexusCorp</span></div>
             <div className="flex items-center gap-2 hover:scale-105 transition-transform"><div className="w-4 h-6 bg-white/20"></div><span className="text-xl font-display font-medium text-white tracking-widest uppercase">Axiom</span></div>
             <div className="flex items-center gap-2 hover:scale-105 transition-transform"><div className="w-6 h-6 border-2 border-white/20 rotate-45"></div><span className="text-xl font-bold text-white italic">Vertex</span></div>
             <div className="flex items-center gap-2 hover:scale-105 transition-transform"><div className="w-6 h-6 rounded-sm bg-white/20"></div><span className="text-xl font-display font-extrabold text-white tracking-tight">QUANTUM</span></div>
          </div>
        </div>

        {/* Video Tutorial Section */}
        <div className={`mb-16 md:mb-32 w-full max-w-6xl mx-auto px-6 transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent relative overflow-hidden group shadow-2xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
             
             {/* Decorative glow */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>

             {/* Description (Left Side) */}
             <div className="w-full lg:w-1/2 relative z-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
                <PlayCircle className="w-3 h-3 lg:w-4 lg:h-4 text-blue-400" />
                <span className="text-[10px] lg:text-xs font-bold text-blue-400 tracking-widest uppercase">Visual Setup Guide</span>
              </div>
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-display font-medium text-white tracking-tight mb-6">Quick & Easy Setup</h3>
              <div className="space-y-6 text-gray-400 font-light text-sm lg:text-base leading-relaxed">
                <p>
                  Watch our simple video guide to see how easy it is to install our software. No technical knowledge required at all.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                       <span className="text-emerald-400 text-xs font-bold">1</span>
                    </div>
                    <span><strong className="text-gray-200 font-medium block mb-1">Download & Open</strong> Just download the file we send you and open it on your PC. It takes only a few seconds.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                       <span className="text-blue-400 text-xs font-bold">2</span>
                    </div>
                    <span><strong className="text-gray-200 font-medium block mb-1">Enter License Key</strong> Enter the unique activation key provided to you via WhatsApp to unlock your copy.</span>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="mt-1 w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                       <span className="text-purple-400 text-xs font-bold">3</span>
                    </div>
                    <span><strong className="text-gray-200 font-medium block mb-1">Start Using</strong> That's it! The software is now ready to use. Start exploring the powerful features immediately.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Video (Right Side) */}
            <div className="w-full lg:w-1/2 relative z-10 perspective-1000">
              <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] transition-all duration-500 bg-[#050505] transform -rotate-y-2 group-hover:rotate-y-0">
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
        </div>

        {/* Global Impact / Trust Metrics */}
        <div className={`mb-16 md:mb-32 w-full max-w-6xl mx-auto px-4 transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl mx-auto border-none py-0 bg-transparent">
             {[
               { icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />, value: '100%', label: 'Trusted Entity' },
               { icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />, value: '1+ Year', label: 'Proven Track Record' },
               { icon: <Building2 className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />, value: 'Pvt Ltd', label: 'Registered Company' },
               { icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />, value: 'Global', label: 'Service Standard' },
             ].map((stat, idx) => (
               <div key={idx} className="glass-card rounded-[1.25rem] md:rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center p-6 text-center hover:-translate-y-1 transition-all duration-500 group shadow-lg">
                 <div className="flex justify-center mb-3 md:mb-4 bg-[#0a0a0b] p-3 rounded-full border border-white/5 shadow-inner opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{stat.icon}</div>
                 <div className="text-xl md:text-3xl font-display font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                 <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-medium">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Compliance & Security Certifications */}
        <div className={`mb-24 md:mb-48 w-full max-w-[1200px] mx-auto transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} px-6`}>
          <div className="py-12 md:py-16 relative">
            <div className="text-center mb-12 md:mb-20">
              <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                 <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                 <span className="text-[10px] md:text-sm font-bold text-emerald-400 tracking-[0.3em] uppercase">Trust & Compliance</span>
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Enterprise-Grade Security</h3>
              <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Built to meet the rigorous security requirements of global enterprises and regulated industries.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />, title: 'SOC 2 Type II', desc: 'Secure Operations' },
                { icon: <Lock className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />, title: 'End-to-End', desc: 'AES-256 Encryption' },
                { icon: <FileCheck className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />, title: 'GDPR & HIPAA', desc: 'Privacy by Design' },
                { icon: <Server className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />, title: '99.99% SLA', desc: 'Carrier-Grade Uptime' },
              ].map((cert, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-white/[0.05] group-hover:border-white/20 transition-all duration-500">
                    {cert.icon}
                  </div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-2 tracking-wide">{cert.title}</h4>
                  <p className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-[0.15em]">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className={`mb-16 md:mb-32 w-full max-w-7xl mx-auto transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} px-6`}>
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6 md:gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5">
                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
                 <span className="text-[10px] md:text-xs font-bold text-blue-400 tracking-widest uppercase">System Architecture</span>
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Capabilities</span></h3>
            </div>
            <p className="text-gray-400 text-sm md:text-lg max-w-lg font-light leading-relaxed pb-4">
              A comprehensive suite of intelligent tools engineered for scale, security, and seamless integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Feature 1 */}
            <div className="glass-card rounded-[2rem] border border-white/10 lg:col-span-2 group relative min-h-[300px] flex flex-col justify-between p-8 md:p-12 overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all">
               <div className="absolute -top-24 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none group-hover:scale-150 transition-transform duration-1000 ease-out"></div>
               
               <div className="relative z-10 w-full lg:w-4/5 mt-auto">
                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
                    <Cpu className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-blue-400 transition-colors" />
                 </div>
                 <h4 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white mb-3 md:mb-4 tracking-tight">Advanced Neural Engine</h4>
                 <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                   Leverage deep learning models to predict trends, automate complex reasoning tasks, and generate insights in real-time across your entire data ecosystem.
                 </p>
               </div>
            </div>

            {/* Feature 2 */}
            <div className="glass-card rounded-[2rem] border border-white/10 group relative min-h-[300px] flex flex-col justify-between p-8 overflow-hidden shadow-lg hover:shadow-indigo-500/10 transition-all">
               <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-700"></div>
               
               <div className="relative z-10 w-full mt-auto">
                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-500">
                    <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-gray-300 group-hover:text-indigo-400 transition-colors" />
                 </div>
                 <h4 className="text-xl md:text-2xl font-display font-medium text-white mb-3 md:mb-4">Zero-Trust Security</h4>
                 <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                   Military-grade end-to-end encryption for all processed data, ensuring your corporate IP never leaves restricted boundaries.
                 </p>
               </div>
            </div>

            {/* Feature 3 */}
            <div className="glass-card rounded-[2rem] border border-white/10 group relative min-h-[300px] flex flex-col justify-between p-8 overflow-hidden shadow-lg hover:shadow-emerald-500/10 transition-all">
               <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none group-hover:-translate-x-10 group-hover:-translate-y-10 transition-transform duration-700"></div>
               
               <div className="relative z-10 w-full mt-auto">
                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-500">
                    <Zap className="w-6 h-6 md:w-7 md:h-7 text-gray-300 group-hover:text-emerald-400 transition-colors" />
                 </div>
                 <h4 className="text-xl md:text-2xl font-display font-medium text-white mb-3 md:mb-4">Ultra-Low Latency</h4>
                 <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                   Sub-50ms response times for critical edge requests powered by our globally distributed CDN and specialized routing.
                 </p>
               </div>
            </div>

            {/* Feature 4 */}
            <div className="glass-card rounded-[2rem] border border-white/10 lg:col-span-2 group relative min-h-[300px] flex flex-col justify-between p-8 md:p-12 overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-all">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full blur-[100px] pointer-events-none"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 mt-auto">
                 <div className="flex-1">
                   <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-500">
                      <Terminal className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-purple-400 transition-colors" />
                   </div>
                   <h4 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white mb-3 md:mb-4 tracking-tight">Standalone Desktop App (.exe)</h4>
                   <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                     No complex setups, technical configurations, or command-line scripting required. Just run our lightweight standalone executable file (.exe) and access the full power of VASH AI directly from your desktop.
                   </p>
                 </div>
                 
                 <div className="w-full md:w-[320px] flex-shrink-0 relative group-hover:translate-x-2 transition-transform duration-500">
                    <div className="bg-[#050505] rounded-xl border border-white/10 p-6 xl:p-8 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-purple-500/30 transition-colors min-h-[180px]">
                       <div className="w-14 h-14 bg-transparent border border-purple-500/30 rounded-full flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-500">
                         <Monitor className="w-6 h-6 text-purple-300 relative z-10" />
                       </div>
                       <div className="text-white font-bold text-sm md:text-base tracking-wide relative z-10">VASH_AI_Setup.exe</div>
                       <div className="text-gray-500 text-[10px] md:text-xs mt-2 font-mono uppercase tracking-widest relative z-10">Windows 10/11 • 245 MB</div>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>

        {/* Our Deployment Process - NEW SECTION ALIGNING WITH USER REQUEST */}
        <div className={`mb-16 md:mb-32 w-full max-w-7xl mx-auto transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} px-6`}>
           <div className="text-center mb-12 md:mb-20">
              <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/5">
                 <Rocket className="w-4 h-4 text-pink-400" />
                 <span className="text-[10px] md:text-xs font-bold text-pink-400 tracking-widest uppercase">How We Deliver</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-4">Our Deployment Process</h3>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                A streamlined, battle-tested methodology designed to get your custom AI solutions deployed into production quickly and securely.
              </p>
           </div>
           
           <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
              {/* Vertical Connecting Line */}
              <div className="absolute top-4 bottom-4 left-[15px] md:left-1/2 md:-ml-[1px] w-[2px] bg-gradient-to-b from-pink-500/20 via-purple-500/20 to-blue-500/20"></div>
              
              {[
                { step: '01', icon: <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-pink-400" />, title: 'Secure Payment', desc: 'Complete your payment securely and seamlessly directly on our website to begin.' },
                { step: '02', icon: <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />, title: 'Payment Confirmation', desc: 'Your transaction is instantly verified and your deployment slot is reserved.' },
                { step: '03', icon: <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />, title: 'WhatsApp Contact', desc: 'Our team connects with you on WhatsApp to deliver your custom application package.' },
                { step: '04', icon: <Box className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />, title: 'Application Delivery', desc: 'You receive the standalone executable (.exe) software directly via WhatsApp.' },
                { step: '05', icon: <Key className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />, title: 'Access Key Allocation', desc: 'A unique, hardware-locked license key is provisioned and securely delivered to you.' },
                { step: '06', icon: <PlayCircle className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />, title: 'Setup Demonstration', desc: 'We provide a detailed visual tutorial video guiding you through the fast 2-minute installation.' },
                { step: '07', icon: <Headphones className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />, title: '24/7 Premium Support', desc: 'Continuous, round-the-clock priority technical assistance provided directly on WhatsApp.' },
              ].map((item, idx) => (
                <div key={idx} className={`relative flex items-center justify-between md:justify-normal mb-8 md:mb-12 group w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[-31px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center z-10 group-hover:border-white/30 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                     {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] glass-card rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg ml-6 md:ml-0 group-hover:-translate-y-1 ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="text-white/10 font-mono font-bold text-3xl md:text-4xl leading-none mb-3 pointer-events-none group-hover:text-white/20 transition-colors duration-500">{item.step}</div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide group-hover:text-pink-100 transition-colors">{item.title}</h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>

      {/* Team Members */}
        <div className={`mb-16 md:mb-32 w-full max-w-7xl mx-auto transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} px-6`}>
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6 md:gap-10 border-b border-white/10 pb-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5">
                 <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                 <span className="text-[10px] md:text-xs font-bold text-indigo-400 tracking-widest uppercase">Core Team</span>
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight">Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Team</span></h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base max-w-lg font-light leading-relaxed">
              The visionaries and structural architects behind VASH AI's workflow innovations and proprietary deep logic.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'Ankit Singh', role: 'CEO & Founder', desc: 'Driving strategy and corporate vision.', img: '/ankit-singh.jpg' },
              { name: 'Sumit Maurya', role: 'Chief Technical Officer', desc: 'Architecting scalable server-side systems.', img: '/sumit.jpg' },
              { name: 'Harsh Ghatad', role: 'Lead AI Eng.', desc: 'Developing logic layers and training sets.', img: '/harsh.jpg' },
              { name: 'Vishal Chauhan', role: 'Head of Marketing & Sales', desc: 'Expanding global market presence.', img: '/vishal.jpg' }
            ].map((member, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 text-center group relative overflow-hidden flex flex-col justify-start border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
                {member.img ? (
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full mb-6 overflow-hidden bg-[#050505] group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0 border border-white/10 shadow-lg">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=random&color=fff&size=512' }} />
                  </div>
                ) : (
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full mb-6 border border-white/10 flex items-center justify-center shadow-lg transition-colors duration-500 bg-[#0a0a0b] group-hover:bg-indigo-500/10">
                    <span className="text-2xl md:text-3xl font-display font-medium text-indigo-300/30 group-hover:scale-110 group-hover:text-indigo-400 transition-all duration-700 tracking-widest">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                
                <div className="relative z-10 w-full">
                  <h4 className="text-base md:text-lg lg:text-xl font-display font-medium text-white mb-1 tracking-tight">{member.name}</h4>
                  <p className="text-indigo-400/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed hidden sm:block">
                     {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`mb-16 md:mb-32 w-full max-w-5xl mx-auto transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} px-6`}>
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
            <div className="flex-1 md:sticky top-32">
              <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5">
                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] md:text-xs font-bold text-blue-400 tracking-widest uppercase">Knowledge Base</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight mb-4">Common Questions</h3>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-sm">Everything you need to know about the product, licensing, and enterprise adoption.</p>
            </div>
            
            <div className="flex-1 w-full space-y-4">
              {[
                { q: 'Is VASH AI secure enough for enterprise data?', a: 'Yes, we employ zero-trust architecture and AES-256 encryption. Your corporate data is sandboxed and never used to train public models.' },
                { q: 'How long does the installation process take?', a: 'It takes mere minutes. Simply download the .exe application, run it on your Windows machine, and start utilizing the AI immediately.' },
                { q: 'Can I use it entirely offline?', a: 'Yes. VASH AI can be configured to run entirely locally on your machine without requiring an active internet connection.' },
                { q: 'Do I need developer skills to set it up?', a: 'Not at all. We have packaged the entire model ecosystem into an easy-to-use plug-and-play desktop application software.' }
              ].map((faq, idx) => (
                <div key={idx} className="glass-card rounded-[1.25rem] p-6 border border-white/5 hover:border-white/20 transition-all shadow-md group">
                   <h4 className="text-base md:text-lg font-display font-medium text-white mb-2 group-hover:text-blue-200 transition-colors">{faq.q}</h4>
                   <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={`mb-24 md:mb-48 w-full max-w-[1400px] mx-auto transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} px-6`}>
          <div className="py-24 md:py-40 border-y border-white/5 text-center relative overflow-hidden group">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none group-hover:opacity-70 transition-opacity duration-1000"></div>
             
             <Rocket className="w-12 h-12 md:w-16 md:h-16 text-white/50 mx-auto mb-8 relative z-10 animate-pulse" />
             <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight mb-8 relative z-10">Deploy Intelligence</h3>
             <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-12 relative z-10">
               Join industry leaders who have already transformed their workflows with VASH AI. Start your custom enterprise deployment today.
             </p>
             <button 
               onClick={onViewProducts}
               className="relative z-10 inline-flex items-center gap-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-[15px] hover:scale-105 transition-all shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
             >
               <span>Request Access</span>
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* Contact Form Details */}
        <div className={`w-full max-w-[1000px] mx-auto mt-24 md:mt-48 px-6 transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
           <ContactContent isHomePage={true} />
        </div>

        {/* Customer Testimonials */}
        <div className={`mt-16 md:mt-24 pb-12 w-full transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="w-full -mb-8">
             <CustomerReviews />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompanyHomePage;
