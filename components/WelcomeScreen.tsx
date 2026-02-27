
import React from 'react';

interface WelcomeScreenProps {
  onContinue: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-in fade-in duration-700">
      <h1 className="font-orbitron font-black text-6xl md:text-8xl mb-4 tracking-widest text-white drop-shadow-[0_0_20px_rgba(0,242,255,0.5)]">
        NOVA AI
      </h1>
      <p className="font-exo text-primary text-xl md:text-2xl mb-2 tracking-[0.3em] uppercase">
        The Ultimate Personal Assistant
      </p>
      <p className="text-text-secondary max-w-xl mb-12">
        Welcome to the official Nova 4.0 VADRYK download portal. Experience next-generation intelligence.
      </p>
      
      <button 
        onClick={onContinue}
        className="group relative px-12 py-4 bg-transparent border-2 border-primary text-primary font-orbitron font-bold overflow-hidden transition-all hover:text-surface"
      >
        <span className="relative z-10 flex items-center">
          CONTINUE <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
        </span>
        <div className="absolute top-0 left-0 w-full h-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
      </button>
    </div>
  );
};

export default WelcomeScreen;
