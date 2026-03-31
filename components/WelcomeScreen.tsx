
import React from 'react';
import { Cpu, Users, Zap, Bot, ArrowRight, Sparkles, List } from 'lucide-react';

interface WelcomeScreenProps {
  onContinue: () => void;
  onExploreFeatures: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue, onExploreFeatures }) => {
  const isOfferActive = true;

  return (
    <div className="animate-in fade-in duration-1000 pb-24">
      {/* Hero Section */}
      <div className="relative mb-16 pt-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-[100px] pointer-events-none rounded-full"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {isOfferActive && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white mb-8 animate-bounce">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-bold">Special Offer Available with Redeem Code</span>
            </div>
          )}
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight">
            The Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Personal Intelligence</span>
          </h1>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto font-light mb-12 leading-relaxed">
            Experience the next generation of autonomous AI assistants. Unprecedented performance, lifetime access, and complete privacy.
          </p>

          {/* Features Action Area */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto shadow-2xl group hover:border-white/20 transition-all duration-500 mb-8">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Bot className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Know what MJ and NOVA can do for you</h3>
              <p className="text-text-secondary text-base mb-8 leading-relaxed max-w-md mx-auto">
                Discover the incredible capabilities of our AI assistants. From system control to speaking and understanding any language in the world, see how they can transform your workflow.
              </p>
              <button 
                onClick={onExploreFeatures}
                className="group/btn2 relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-bold text-base tracking-wide hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden"
              >
                <List className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Explore Features</span>
              </button>
            </div>
          </div>

          {/* Main Action Area - Get Your AI Now */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto shadow-2xl group hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Get Your AI Now</h3>
              <p className="text-text-secondary text-base mb-8 leading-relaxed max-w-md mx-auto">
                Select your preferred AI platform. Secure your lifetime license today with instant delivery.
              </p>
              <button 
                onClick={onContinue}
                className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold text-base tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Explore Products</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats / Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Cpu className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-text-secondary text-sm font-medium mb-2 uppercase tracking-widest">System Status</h3>
          <p className="text-2xl font-bold text-white tracking-tight">All Systems Operational</p>
        </div>
        
        <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors"></div>
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-text-secondary text-sm font-medium mb-2 uppercase tracking-widest">Active Users</h3>
          <p className="text-2xl font-bold text-white tracking-tight">500+ Elite Users</p>
        </div>

        <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-text-secondary text-sm font-medium mb-2 uppercase tracking-widest">Latest Version</h3>
          <p className="text-2xl font-bold text-white tracking-tight">NOVA OS v6.0</p>
        </div>
      </div>

    </div>
  );
};

export default WelcomeScreen;
