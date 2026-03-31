import React from 'react';
import { AppScreen } from '../types';
import { Home, Package, HeadphonesIcon, Info, Cpu, Truck, Box, Undo, Shield, FileText } from 'lucide-react';

interface SidebarProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  themeColor: string;
}

const Sidebar: React.FC<SidebarProps> = ({ currentScreen, onNavigate, themeColor }) => {
  const navItems = [
    { id: AppScreen.WELCOME, label: 'Home', icon: Home },
    { id: AppScreen.MAIN_SELECTION, label: 'Products', icon: Package },
  ];

  const supportItems = [
    { id: AppScreen.CONTACT, label: 'Support', icon: HeadphonesIcon },
    { id: AppScreen.ABOUT, label: 'About', icon: Info },
  ];

  const legalItems = [
    { id: AppScreen.DISTRIBUTION, label: 'Delivery', icon: Truck },
    { id: AppScreen.SHIPPING, label: 'Shipping', icon: Box },
    { id: AppScreen.REFUND, label: 'Refund', icon: Undo },
    { id: AppScreen.PRIVACY, label: 'Privacy', icon: Shield },
    { id: AppScreen.TERMS, label: 'Terms', icon: FileText },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-[#050505] border-r border-white/5 z-40">
      <div className="p-6 flex items-center gap-3 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 shadow-inner">
          <Cpu className="w-4 h-4" style={{ color: themeColor }} />
        </div>
        <span className="font-display font-black tracking-widest text-white text-sm uppercase">
          NOVA<span style={{ color: themeColor }}>.OS</span>
        </span>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-8 custom-scrollbar">
        <div>
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-4 px-2">Main Menu</p>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id || (item.id === AppScreen.MAIN_SELECTION && [AppScreen.PRODUCT_OPTIONS, AppScreen.FEATURES, AppScreen.PRODUCT_DETAILS, AppScreen.PAYMENT_FORM].includes(currentScreen));
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as AppScreen)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium ${isActive ? 'bg-white/10 text-white shadow-inner' : 'text-text-secondary hover:bg-white/5 hover:text-white'}`}
                  style={isActive ? { borderLeft: `2px solid ${themeColor}` } : { borderLeft: '2px solid transparent' }}
                >
                  <Icon className={`w-5 h-5 ${isActive ? '' : 'opacity-70'}`} style={isActive ? { color: themeColor } : {}} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-4 px-2">Help & Resources</p>
          <div className="flex flex-col gap-1">
            {supportItems.map((item) => {
              const isActive = currentScreen === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as AppScreen)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium ${isActive ? 'bg-white/10 text-white shadow-inner' : 'text-text-secondary hover:bg-white/5 hover:text-white'}`}
                  style={isActive ? { borderLeft: `2px solid ${themeColor}` } : { borderLeft: '2px solid transparent' }}
                >
                  <Icon className={`w-5 h-5 ${isActive ? '' : 'opacity-70'}`} style={isActive ? { color: themeColor } : {}} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-4 px-2">Legal & Policies</p>
          <div className="flex flex-col gap-1">
            {legalItems.map((item) => {
              const isActive = currentScreen === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as AppScreen)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium ${isActive ? 'bg-white/10 text-white shadow-inner' : 'text-text-secondary hover:bg-white/5 hover:text-white'}`}
                  style={isActive ? { borderLeft: `2px solid ${themeColor}` } : { borderLeft: '2px solid transparent' }}
                >
                  <Icon className={`w-5 h-5 ${isActive ? '' : 'opacity-70'}`} style={isActive ? { color: themeColor } : {}} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
