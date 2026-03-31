
import React, { useState } from 'react';
import { AppScreen } from '../types';
import { Home, Package, HeadphonesIcon, Info, Truck, Box, Undo, Shield, FileText, Menu, X, Cpu } from 'lucide-react';

interface HeaderProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  themeColor: string;
  platformName: string;
}

const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, themeColor, platformName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', screen: AppScreen.WELCOME, icon: Home },
    { label: 'Products', screen: AppScreen.MAIN_SELECTION, icon: Package },
    { label: 'Support', screen: AppScreen.CONTACT, icon: HeadphonesIcon },
    { label: 'About', screen: AppScreen.ABOUT, icon: Info },
    { label: 'Delivery', screen: AppScreen.DISTRIBUTION, icon: Truck },
    { label: 'Shipping', screen: AppScreen.SHIPPING, icon: Box },
    { label: 'Refund', screen: AppScreen.REFUND, icon: Undo },
    { label: 'Privacy', screen: AppScreen.PRIVACY, icon: Shield },
    { label: 'Terms', screen: AppScreen.TERMS, icon: FileText },
  ];

    const getScreenName = () => {
      switch(currentScreen) {
        case AppScreen.WELCOME: return 'Home';
        case AppScreen.MAIN_SELECTION: return 'Products';
        case AppScreen.FEATURES: return 'Features';
        case AppScreen.PRODUCT_OPTIONS: return 'Choose Version';
        case AppScreen.PRODUCT_DETAILS: return 'Product Details';
        case AppScreen.PAYMENT_FORM: return 'Checkout';
        case AppScreen.CONTACT: return 'Support';
        case AppScreen.ABOUT: return 'About';
        default: return 'Dashboard';
      }
    };

  return (
    <header className="sticky top-0 z-30 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 h-16 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Breadcrumbs / Title */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-text-secondary hidden sm:inline-block">NOVA.OS</span>
          <span className="text-text-secondary hidden sm:inline-block">/</span>
          <span className="text-white">{getScreenName()}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
         <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/70">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: themeColor, boxShadow: `0 0 10px ${themeColor}` }}></span>
            System Online
         </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#050505] animate-in fade-in duration-200">
          <div className="flex justify-between items-center p-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10">
                <Cpu className="w-4 h-4" style={{ color: themeColor }} />
              </div>
              <span className="font-display font-black tracking-widest text-white text-sm uppercase">
                NOVA<span style={{ color: themeColor }}>.OS</span>
              </span>
            </div>
            <button 
              className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-white rounded-lg hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 flex flex-col gap-2 overflow-y-auto h-[calc(100vh-73px)]">
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.screen);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all text-sm font-medium border ${isActive ? 'bg-white/10 text-white border-white/10 shadow-inner' : 'text-text-secondary border-transparent hover:bg-white/5 hover:text-white'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${isActive ? 'bg-gradient-to-br from-white/10 to-transparent border-white/20' : 'bg-white/5 border-white/5'}`}>
                    <Icon className="w-5 h-5" style={isActive ? { color: themeColor } : {}} />
                  </div>
                  <span className="uppercase tracking-widest font-bold">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
