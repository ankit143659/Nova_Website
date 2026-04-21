
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { AppScreen } from '../types';
import { Menu, X, Cpu } from 'lucide-react';

interface HeaderProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  themeColor: string;
  platformName: string;
}

const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, themeColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Products', screen: AppScreen.MAIN_SELECTION },
    { label: 'Delivery', screen: AppScreen.DISTRIBUTION },
    { label: 'Shipping', screen: AppScreen.SHIPPING },
    { label: 'Support', screen: AppScreen.CONTACT },
    { label: 'Refund Policy', screen: AppScreen.REFUND },
    { label: 'About', screen: AppScreen.ABOUT },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-[#000000]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        
        {/* Logo left */}
        <div 
          className="flex items-center gap-3 cursor-pointer group shrink-0"
          onClick={() => onNavigate(AppScreen.WELCOME)}
        >
          <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all duration-300">
            <Cpu className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-black tracking-widest text-white text-sm md:text-base uppercase">
            NOVA<span className="text-gray-500">.OS</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 flex-1 px-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.screen)}
              className={`px-4 py-2 rounded-full text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${currentScreen === item.screen ? 'bg-white/[0.05] text-white' : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side status / mobile menu */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-[10px] font-bold tracking-widest uppercase text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
            System Online
          </div>
          
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && createPortal(
        <div className="lg:hidden fixed inset-0 z-[100] bg-[#000000]/95 backdrop-blur-2xl animate-in fade-in duration-300 flex flex-col">
          <div className="flex justify-between items-center px-4 h-16 md:h-20 border-b border-white/[0.05]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08]">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-black tracking-widest text-white text-sm uppercase">
                NOVA<span className="text-gray-500">.OS</span>
              </span>
            </div>
            <button 
              className="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08]"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 py-8 flex flex-col gap-2">
            <button
              onClick={() => { onNavigate(AppScreen.WELCOME); setIsOpen(false); }}
              className={`flex items-center w-full px-6 py-4 rounded-2xl transition-all text-sm font-bold uppercase tracking-widest ${currentScreen === AppScreen.WELCOME ? 'bg-white/[0.05] text-white border border-white/[0.05]' : 'text-gray-400 border border-transparent'}`}
            >
              Home
            </button>
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.screen);
                    setIsOpen(false);
                  }}
                  className={`flex items-center w-full px-6 py-4 rounded-2xl transition-all text-sm font-bold uppercase tracking-widest gap-4 ${isActive ? 'bg-white/[0.05] text-white border border-white/[0.05]' : 'text-gray-400 border border-transparent hover:text-white'}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Header;
