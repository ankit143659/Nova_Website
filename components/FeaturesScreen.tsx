import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Monitor, Layout, Zap, Code, Globe } from 'lucide-react';
import { FEATURE_CATEGORIES } from '../featuresData';

interface FeaturesScreenProps {
  onBack: () => void;
}

const FeaturesScreen: React.FC<FeaturesScreenProps> = ({ onBack }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('system');

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Core Capabilities
        </h2>
        <p className="text-text-secondary text-base md:text-lg max-w-2xl font-light">
          Explore the extensive list of modules and features built into our AI assistants, logically organized for your convenience.
        </p>
      </div>

      <div className="space-y-4">
        {FEATURE_CATEGORIES.map((category) => {
          const isExpanded = expandedCategory === category.id;
          
          return (
            <div 
              key={category.id} 
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">{category.title}</h3>
                </div>
                <div className="text-text-secondary">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-4 hover:border-primary/30 transition-colors group">
                      <div className="text-2xl mb-3">{feature.icon}</div>
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                      <p className="text-text-secondary text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesScreen;
