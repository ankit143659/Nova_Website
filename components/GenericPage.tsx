
import React from 'react';

interface GenericPageProps {
  title: string;
  content: React.ReactNode;
  onBack: () => void;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, content, onBack }) => {
  return (
    <div className="animate-in fade-in zoom-in duration-500 max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-text-secondary hover:text-primary transition-colors font-orbitron text-xs font-bold tracking-widest"
      >
        <i className="fas fa-arrow-left mr-2"></i> BACK
      </button>

      <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border-white/10">
        <h1 className="font-orbitron text-3xl md:text-5xl font-black mb-8 text-white uppercase tracking-tighter">
          {title}
        </h1>
        <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
          {content}
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
