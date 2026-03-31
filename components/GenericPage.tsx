
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface GenericPageProps {
  title: string;
  content: React.ReactNode;
  onBack: () => void;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, content, onBack }) => {
  return (
    <div className="animate-in fade-in duration-700 max-w-4xl mx-auto pt-8 pb-24 px-4">
      <button 
        onClick={onBack}
        className="mb-10 flex items-center text-text-secondary hover:text-white transition-colors text-sm font-medium group"
      >
        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4 text-primary" />
        </div>
        Back to Products
      </button>

      <div className="relative">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
            {title}
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-text-secondary leading-relaxed space-y-6 font-light prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-white prose-a:transition-colors prose-strong:text-white prose-strong:font-medium">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
