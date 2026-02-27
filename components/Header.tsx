
import React, { useState } from 'react';
import { AppScreen } from '../types';

interface HeaderProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  themeColor: string;
  platformName: string;
}

const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, themeColor, platformName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', screen: AppScreen.WELCOME, icon: 'fa-home' },
    { label: 'Contact', screen: AppScreen.CONTACT, icon: 'fa-envelope' },
    { label: 'About', screen: AppScreen.ABOUT, icon: 'fa-robot' },
    { label: 'Delivery', screen: AppScreen.DISTRIBUTION, icon: 'fa-truck' },
    { label: 'Shipping', screen: AppScreen.SHIPPING, icon: 'fa-box' },
    { label: 'Refund', screen: AppScreen.REFUND, icon: 'fa-undo' },
    { label: 'Privacy', screen: AppScreen.PRIVACY, icon: 'fa-shield-alt' },
    { label: 'Terms', screen: AppScreen.TERMS, icon: 'fa-file-contract' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div 
            className="flex items-center cursor-pointer select-none"
            onClick={() => { onNavigate(AppScreen.WELCOME); setIsOpen(false); }}
          >
            <span 
              className="font-orbitron font-black text-xl md:text-2xl tracking-tighter transition-all hover:scale-105"
              style={{ color: themeColor, textShadow: `0 0 15px ${themeColor}4D` }}
            >
              {platformName} AI
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.screen)}
                className="flex items-center space-x-2 text-[10px] font-black transition-all uppercase tracking-widest hover:brightness-125"
                style={{ color: currentScreen === item.screen ? themeColor : '#a0a0c0' }}
              >
                <i className={`fas ${item.icon} text-[11px]`}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-text-primary active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-surface border-b border-white/10 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.screen);
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-4 w-full p-4 text-left hover:bg-white/5 rounded-xl transition-colors active:bg-white/10"
                  style={{ color: currentScreen === item.screen ? themeColor : 'white' }}
                >
                  <div className="w-8 flex justify-center">
                    <i className={`fas ${item.icon} text-lg`} style={{ color: currentScreen === item.screen ? themeColor : '#4a4a6a' }}></i>
                  </div>
                  <span className="uppercase text-xs font-black tracking-widest">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
