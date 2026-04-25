import React from 'react';
import { OSType } from '../types';
import { ArrowLeft, Rocket, Zap, Smartphone, Monitor, ChevronRight } from 'lucide-react';
import { FEATURE_CATEGORIES } from '../featuresData';

interface OSFeaturesScreenProps {
  os: OSType;
  onBack: () => void;
  onContinue: () => void;
}

const ANDROID_FEATURES = [
  {
    category: "Navigation",
    items: [
      { title: "Home Screen", desc: "Instantly return to the home screen." }
    ]
  },
  {
    category: "Flashlight",
    items: [
      { title: "Flashlight On/Off", desc: "Turn the flashlight on or off instantly." },
      { title: "Toggle Flashlight", desc: "Switch the flashlight state without asking." }
    ]
  },
  {
    category: "Camera",
    items: [
      { title: "Take Photo", desc: "Capture a photo hands-free." },
      { title: "Open Camera", desc: "Launch the camera app immediately." },
      { title: "Click Shutter", desc: "Click a photo if the camera is already open." },
      { title: "Flip Camera", desc: "Switch between front and back cameras." }
    ]
  },
  {
    category: "Volume & Sound",
    items: [
      { title: "Adjust Volume", desc: "Increase or decrease volume smoothly." },
      { title: "Max Volume", desc: "Set volume to 100%." },
      { title: "Mute/Unmute", desc: "Quickly silence or restore media sound." },
      { title: "Set Volume Level", desc: "Set volume to a specific percentage (e.g., 70%)." },
      { title: "Sound Profiles", desc: "Switch between Silent, Vibrate, and Normal modes." },
      { title: "Volume Status", desc: "Check current exact volume levels." }
    ]
  },
  {
    category: "Brightness",
    items: [
      { title: "Adjust Brightness", desc: "Increase or decrease screen brightness." },
      { title: "Max & Min Brightness", desc: "Switch to 100% or 0% brightness instantly." },
      { title: "Auto Brightness", desc: "Enable automatic brightness adjustment." },
      { title: "Set Brightness Level", desc: "Set brightness to a specific percentage (e.g., 60%)." },
      { title: "Brightness Status", desc: "Check your current screen brightness." }
    ]
  },
  {
    category: "Reminders",
    items: [
      { title: "Smart Reminders", desc: "Set precise reminders using natural language (e.g., 'Remind me in 5 minutes', 'Remind me tomorrow at 8 AM')." }
    ]
  },
  {
    category: "System Info",
    items: [
      { title: "Time & Date", desc: "Get current time, day, or full date combined." },
      { title: "Battery Status", desc: "Check explicit percentage and charging status." },
      { title: "Local Weather", desc: "Get real-time weather for your saved city or current GPS location." },
      { title: "Current Location", desc: "Get your exact current address instantly." }
    ]
  },
  {
    category: "Messaging",
    items: [
      { title: "Send SMS", desc: "Compose and send text messages via voice." },
      { title: "Send WhatsApp", desc: "Send fully autonomous WhatsApp messages." },
      { title: "Smart Contact Select", desc: "Easily resolve multi-contact name conflicts." }
    ]
  },
  {
    category: "Maps & Location",
    items: [
      { title: "Start Navigation", desc: "Begin turn-by-turn directions to a place." },
      { title: "View on Map", desc: "Locate a specific address or place on the map." },
      { title: "Search Map", desc: "Perform a general search on Google Maps." },
      { title: "Find Nearby", desc: "Quickly find nearby ATMs, petrol pumps, hospitals, or restaurants." }
    ]
  },
  {
    category: "Lock & Power",
    items: [
      { title: "Lock Screen", desc: "Turn off the screen and lock the device." },
      { title: "Power Menu", desc: "Open the system power dialog securely." }
    ]
  },
  {
    category: "Music",
    items: [
      { title: "Play Spotify Song", desc: "Search and play a specific track on Spotify." },
      { title: "Resume Playback", desc: "Resume your last playing Spotify media." }
    ]
  },
  {
    category: "Connectivity",
    items: [
      { title: "Smart Network Toggle", desc: "Turn WiFi, Bluetooth, Mobile Data, or Hotspot on and off." },
      { title: "Airplane Mode", desc: "Toggle airplane mode with a single command." },
      { title: "Auto Network Resolve", desc: "Assistant predicts which network setting you want to change." }
    ]
  },
  {
    category: "Apps & Calls",
    items: [
      { title: "Launch App", desc: "Open any installed app instantly by name." },
      { title: "Cellular Call", desc: "Place a direct phone call to any contact." },
      { title: "Accept/Reject Calls", desc: "Answer or decline incoming phone calls hands-free." },
      { title: "WhatsApp Audio Call", desc: "Start a WhatsApp voice call." },
      { title: "WhatsApp Video Call", desc: "Start a WhatsApp video call." }
    ]
  }
];

const DesktopFeatures = FEATURE_CATEGORIES.map(cat => ({
  category: cat.title,
  items: cat.features.map(f => ({
    title: f.title,
    desc: f.desc
  }))
}));

const OSFeaturesScreen: React.FC<OSFeaturesScreenProps> = ({ os, onBack, onContinue }) => {
  const isAndroid = os === 'android';
  const features = isAndroid ? ANDROID_FEATURES : DesktopFeatures;

  const headerTitle = isAndroid ? 'Android Engine Capabilities' : (os === 'mac' ? 'macOS Engine Capabilities' : 'Windows Engine Capabilities');
  const headerDesc = isAndroid 
    ? 'Discover the absolute power of MAX. Deep system hooks allow for true autonomous device control directly from your pocket.'
    : 'Explore the vast and unrestricted system-level permissions our Desktop Cognitive Engines possess.';

  return (
    <div className="animate-in fade-in duration-700 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12">
        
        {/* Top Navbar */}
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest group"
        >
          <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Select Architecture
        </button>

        {/* Intro Header */}
        <div className="mb-16 md:mb-20">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.05] mb-6">
            <Zap className="w-3 h-3 text-white" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-white">System Protocol</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 tracking-tight">
            {headerTitle}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
            {headerDesc}
          </p>
        </div>

        {/* Dynamic Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {features.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-white font-display font-bold text-lg uppercase tracking-widest mb-6 border-b border-white/[0.08] pb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-white mr-3"></span>
                {section.category}
              </h3>
              
              <div className="flex flex-col gap-3">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-[#09090b] border border-white/[0.08] rounded-2xl p-5 hover:border-white/[0.2] transition-colors relative overflow-hidden group shadow-lg">
                    <div className="absolute top-0 left-0 w-1 h-full bg-white/[0.1] group-hover:bg-white transition-colors"></div>
                    <h4 className="text-white font-bold text-sm tracking-wide mb-1.5 ml-2">{item.title}</h4>
                    <p className="text-gray-400 text-xs font-medium leading-relaxed ml-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#000000]/80 backdrop-blur-xl border-t border-white/[0.1] z-40 px-4 py-4 md:py-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="hidden sm:block">
            <p className="text-white font-bold text-sm uppercase tracking-widest">{os?.toUpperCase()} Assistant Engine</p>
            <p className="text-gray-400 text-xs font-medium mt-1">Review features and continue to variants.</p>
          </div>
          {isAndroid ? (
            <button 
              onClick={onContinue}
              className="w-full sm:w-auto px-8 py-4 lg:py-4 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] text-white font-bold text-sm tracking-widest flex flex-col items-center justify-center hover:scale-105 active:scale-95 transition-all outline-none shadow-[0_0_30px_rgba(16,185,129,0.3)] ring-1 ring-[#34d399]/40"
            >
              <span className="uppercase tracking-[0.2em] text-xs font-black">Download MAX</span>
            </button>
          ) : (
            <button 
              onClick={onContinue}
              className="w-full sm:w-auto px-8 py-4 lg:py-4 rounded-xl bg-white text-black font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 transition-all outline-none"
            >
              Download Now <Rocket className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OSFeaturesScreen;
