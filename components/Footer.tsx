import React, { useState } from 'react';
import { AppScreen } from '../types';
import { Cpu } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: AppScreen) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="mt-12 py-10 md:py-16 border-t border-white/10 text-center text-text-secondary text-sm bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center overflow-hidden mb-4 transition-all duration-300">
            {!logoError ? (
              <img src="/logo.png" alt="VASH AI Logo" className="w-full h-full object-contain" onError={() => setLogoError(true)} />
            ) : (
              <Cpu className="w-6 h-6 text-blue-500" />
            )}
          </div>
          <span className="font-display font-bold tracking-widest text-white text-lg uppercase">
            VASH AI TECHNOLOGIES
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 font-medium">
          <button onClick={() => onNavigate(AppScreen.ABOUT)} className="hover:text-white hover:scale-105 transition-all">About</button>
          <button onClick={() => onNavigate(AppScreen.CONTACT)} className="hover:text-white hover:scale-105 transition-all">Support</button>
          <button onClick={() => onNavigate(AppScreen.DISTRIBUTION)} className="hover:text-white hover:scale-105 transition-all">Delivery</button>
          <button onClick={() => onNavigate(AppScreen.SHIPPING)} className="hover:text-white hover:scale-105 transition-all">Shipping</button>
          <button onClick={() => onNavigate(AppScreen.REFUND)} className="hover:text-white hover:scale-105 transition-all">Refund</button>
          <button onClick={() => onNavigate(AppScreen.PRIVACY)} className="hover:text-white hover:scale-105 transition-all">Privacy</button>
          <button onClick={() => onNavigate(AppScreen.TERMS)} className="hover:text-white hover:scale-105 transition-all">Terms</button>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        <p className="tracking-wide opacity-70">&copy; {new Date().getFullYear()} VASH AI TECHNOLOGIES PVT LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
