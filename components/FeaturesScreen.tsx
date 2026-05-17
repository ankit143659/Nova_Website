import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Monitor, Layout, Zap, Code, Globe, Layers, Sparkles, Terminal } from 'lucide-react';
import { FEATURE_CATEGORIES } from '../featuresData';

interface FeaturesScreenProps {
  onBack: () => void;
}

const FeaturesScreen: React.FC<FeaturesScreenProps> = ({ onBack }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className="relative min-h-screen font-sans overflow-hidden pb-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxbC00MCAuNTotaloiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPHBhdGggZD0iTTAgMGgxdjQwbC0uNS00MHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPC9zdmc+')] opacity-40 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-12 md:pt-24">
        
        <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)]">
             <Layers className="w-4 h-4 text-blue-400" />
             <span className="text-[10px] md:text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">System Architecture</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Capabilities</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light mx-auto leading-relaxed">
            Explore the extensive list of neural modules and features built into our AI models, engineered for deep logic and automation.
          </p>
        </div>

        <div className={`space-y-6 transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {FEATURE_CATEGORIES.map((category) => {
            const isExpanded = expandedCategory === category.id;
            
            return (
              <div 
                key={category.id} 
                className={`glass-card rounded-[2rem] overflow-hidden transition-all duration-500 border relative ${isExpanded ? 'border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)] bg-gradient-to-b from-blue-500/[0.03] to-transparent' : 'border-white/5 hover:border-white/20'}`}
              >
                {isExpanded && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                )}
                
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors relative z-10"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-white/5 border border-white/10 text-gray-400'}`}>
                      {category.icon}
                    </div>
                    <h3 className={`text-xl font-display font-bold tracking-wide transition-colors ${isExpanded ? 'text-white' : 'text-gray-300'}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isExpanded ? 'bg-blue-500/10 text-blue-400' : 'text-gray-500'}`}>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden relative z-10 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-8 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="bg-[#0a0a0a]/50 border border-white/5 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden backdrop-blur-md">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all duration-300 text-gray-400">
                             {/* Reusing a generic sparkle or terminal if no direct icon prop */}
                             {feature.icon || <Terminal className="w-4 h-4" />}
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-[15px] mb-1.5 group-hover:text-blue-400 transition-colors tracking-tight">{feature.title}</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesScreen;
