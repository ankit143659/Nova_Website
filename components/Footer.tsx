import React from 'react';
import { AppScreen } from '../types';

interface FooterProps {
  onNavigate: (screen: AppScreen) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-auto py-8 border-t border-white/10 text-center text-text-secondary text-sm">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4">
        <button onClick={() => onNavigate(AppScreen.ABOUT)} className="hover:text-white transition-colors">About</button>
        <button onClick={() => onNavigate(AppScreen.CONTACT)} className="hover:text-white transition-colors">Support</button>
        <button onClick={() => onNavigate(AppScreen.DISTRIBUTION)} className="hover:text-white transition-colors">Delivery</button>
        <button onClick={() => onNavigate(AppScreen.SHIPPING)} className="hover:text-white transition-colors">Shipping</button>
        <button onClick={() => onNavigate(AppScreen.REFUND)} className="hover:text-white transition-colors">Refund</button>
        <button onClick={() => onNavigate(AppScreen.PRIVACY)} className="hover:text-white transition-colors">Privacy</button>
        <button onClick={() => onNavigate(AppScreen.TERMS)} className="hover:text-white transition-colors">Terms</button>
      </div>
      <p>&copy; {new Date().getFullYear()} NOVA.OS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
