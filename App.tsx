
import React, { useState, useEffect } from 'react';
import { AppScreen, Platform, ProductData, UserDetails, Feature } from './types';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import MainSelectionScreen from './components/MainSelectionScreen';
import ProductOptionsScreen from './components/ProductOptionsScreen';
import NovaVariantSelector from './components/NovaVariantSelector';
import MJVariantSelector from './components/MJVariantSelector';
import ComboVariantSelector from './components/ComboVariantSelector';
import GenericPage from './components/GenericPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import PaymentForm from './components/PaymentForm';
import SupportChatBot from './components/SupportChatBot';

const ELITE_FEATURES: Feature[] = [
  { icon: '🔍', title: 'search_web', desc: 'Real-time AI-powered web exploration.' },
  { icon: '⏰', title: 'get_time_info', desc: 'Deep temporal data retrieval.' },
  { icon: '🚀', title: 'open_app', desc: 'Universal application execution.' },
  { icon: '🧠', title: 'get_system_info_deep', desc: 'Detailed hardware and OS telemetry.' },
  { icon: '🌦️', title: 'get_weather', desc: 'Geo-synced atmospheric data.' },
  { icon: '🪟', title: 'manage_window', desc: 'Precise UI window state control.' },
  { icon: '📋', title: 'list_windows', desc: 'Full active process visualization.' },
  { icon: '🎵', title: 'play_media', desc: 'Global media playback engine.' },
  { icon: '⌨️', title: 'press_key', desc: 'Hardware-level keystroke injection.' },
  { icon: '📝', title: 'write_in_notepad', desc: 'Direct text buffer writing.' },
  { icon: '🖥️', title: 'desktop_control', desc: 'Remote-style mouse & input control.' },
  { icon: '↕️', title: 'scroll_content', desc: 'Intelligent UI scrolling.' },
  { icon: '💬', title: 'send_whatsapp_message', desc: 'Native WhatsApp automation.' },
  { icon: '📋', title: 'use_smart_clipboard', desc: 'Multi-buffer clipboard manager.' },
  { icon: '📂', title: 'universal_file_opener', desc: 'Extension-agnostic file execution.' },
  { icon: '🔌', title: 'system_power_action', desc: 'Secure power state management.' },
  { icon: '📰', title: 'get_top_news', desc: 'Global headline synchronization.' },
  { icon: '⚡', title: 'execute_multi_task', desc: 'Parallel command processing.' },
  { icon: '💻', title: 'generate_and_type_code', desc: 'AI developer coding injection.' },
  { icon: '🛠️', title: 'run_file_in_vscode', desc: 'Native VSCode bridge.' },
  { icon: '📸', title: 'screen_short', desc: 'Instant high-res screen capture.' },
  { icon: '🤖', title: 'type_user_message_auto', desc: 'Human-like auto-typing.' },
  { icon: '🛡️', title: 'scan_system_for_viruses', desc: 'Integrated security heuristics.' },
  { icon: '🔊', title: 'control_system_volume', desc: 'Master audio gain control.' },
  { icon: '☀️', title: 'control_screen_brightness', desc: 'Hardware backlight management.' },
  { icon: '🎨', title: 'generate_ai_image', desc: 'On-device creative synthesis.' },
  { icon: '🔧', title: 'fix_code_error', desc: 'Automated syntax & logic repair.' },
  { icon: '📅', title: 'set_reminder', desc: 'Context-aware temporal alerts.' },
  { icon: '👁️', title: 'view_reminders', desc: 'Reminder queue visualization.' },
  { icon: '❌', title: 'cancel_reminder', desc: 'Temporal alert termination.' },
  { icon: '📄', title: 'process_document_query', desc: 'AI-powered document analysis.' },
  { icon: '📤', title: 'send_media_to_whatsapp', desc: 'Automated media attachment.' },
  { icon: '📊', title: 'create_excel_file', desc: 'Spreadsheet generation engine.' },
  { icon: '💾', title: 'save_excel_changes', desc: 'Persistent data commit.' },
  { icon: '🗑️', title: 'delete_all_data', desc: 'Secure data wiping.' },
  { icon: '⬅️', title: 'move_left', desc: 'Grid coordinate manipulation.' },
  { icon: '⬆️', title: 'move_up', desc: 'Vertical cell navigation.' },
  { icon: '✍️', title: 'enter_data_quick', desc: 'Accelerated data entry.' },
  { icon: '⚡', title: 'enter_multiple_data_quick', desc: 'Batch data population.' },
  { icon: '⬇️', title: 'move_down', desc: 'Vertical navigation engine.' },
  { icon: '➡️', title: 'move_right', desc: 'Horizontal cell navigation.' },
  { icon: '⌫', title: 'delete_current_cell', desc: 'Cell buffer clearing.' },
  { icon: '📍', title: 'go_to_cell', desc: 'Direct address targeting.' },
  { icon: 'B', title: 'toggle_text_bold', desc: 'Visual style modification.' },
  { icon: '📑', title: 'select_row_or_column', desc: 'Mass data targeting.' },
  { icon: '↕️', title: 'sort_excel_data', desc: 'Heuristic data organization.' },
  { icon: '📋', title: 'excel_clipboard_action', desc: 'Specialized spreadsheet buffer.' },
  { icon: '➕', title: 'calculate_sum', desc: 'Arithmetic aggregation engine.' },
  { icon: '📄', title: 'word_to_pdf', desc: 'PDF conversion (Word).' },
  { icon: '🖼️', title: 'image_to_pdf', desc: 'PDF conversion (Images).' },
  { icon: '📈', title: 'excel_to_pdf', desc: 'PDF conversion (Excel).' },
  { icon: '📽️', title: 'ppt_to_pdf', desc: 'PDF conversion (Slides).' },
  { icon: '🔄', title: 'convert_image_format', desc: 'Universal image transcoding.' },
  { icon: '🧪', title: 'test_converters', desc: 'Conversion engine validation.' },
  { icon: '📁', title: 'create_here', desc: 'Contextual directory creation.' },
  { icon: '🔡', title: 'read_screen_text', desc: 'Visual OCR integration.' },
  { icon: '📷', title: 'camera_analysis', desc: 'Real-time optics processing.' },
  { icon: '🖥️', title: 'analyze_screen', desc: 'Full screen visual intelligence.' },
  { icon: '🖼️', title: 'analyze_local_image', desc: 'Static image heuristics.' },
  { icon: '🎧', title: 'open_spotify', desc: 'Spotify platform bridge.' },
  { icon: '⏭️', title: 'spotify_next', desc: 'Track advance control.' },
  { icon: '⏮️', title: 'spotify_previous', desc: 'Track reverse control.' },
  { icon: '🎵', title: 'spotify_play_song', desc: 'Specific track execution.' },
  { icon: '❤️', title: 'spotify_play_liked', desc: 'Favorites library playback.' },
  { icon: '⏸️', title: 'spotify_pause', desc: 'Audio state suspension.' },
  { icon: '🔍', title: 'spotify_search_play_quick', desc: 'Instant track search & play.' },
  { icon: '🖼️', title: 'set_wallpaper', desc: 'Desktop background customization.' },
  { icon: '📝', title: 'modify_code_file', desc: 'Direct source code manipulation.' },
  { icon: '🌐', title: 'create_advanced_website', desc: 'Full-stack web generation.' },
  { icon: '⚡', title: 'quick_code_change', desc: 'Rapid snippet injection.' },
  { icon: '🧠', title: 'add_user_instruction', desc: 'Custom behavioral training.' },
  { icon: '💾', title: 'save_user_instructions', desc: 'Persist learned behaviors.' },
  { icon: '⚙️', title: 'save_user_preferences', desc: 'Store user configuration.' },
  { icon: '📂', title: 'load_user_instructions', desc: 'Retrieve behavioral models.' },
  { icon: '🔄', title: 'load_user_preferences', desc: 'Restore user settings.' },
  { icon: '📊', title: 'generate_instructions_report', desc: 'Behavioral audit logging.' },
  { icon: 'ℹ️', title: 'get_current_preferences', desc: 'Active config retrieval.' },
  { icon: '🧹', title: 'clear_all_preferences', desc: 'Reset configuration state.' },
  { icon: '🚫', title: 'deactivate_instruction', desc: 'Disable specific behaviors.' },
];

const ANDROID_FEATURES: Feature[] = [
  { icon: '📦', title: 'Elite ZIP Package', desc: 'The entire project compressed and ready for deployment.' },
  { icon: '⚡', title: '30+ Exclusive Modules', desc: 'High-performance AI core modules for mobile automation.' },
  { icon: '🤖', title: 'Full Android Studio Proj', desc: 'Complete Java/Kotlin codebase with structured architecture.' },
  { icon: '📱', title: 'Premium Mobile UI', desc: 'High-end responsive layouts for all Android devices.' },
  { icon: '🛠️', title: 'Dev Environment Setup', desc: 'Documentation for building your own personal assistant.' },
  { icon: '🎤', title: 'Advanced Voice Core', desc: 'On-device speech recognition and processing system.' },
  { icon: '⚙️', title: 'Gradle Build Files', desc: 'Pre-configured dependencies for instant compilation.' },
  { icon: '🚀', title: 'Modular Architecture', desc: 'Easily add or remove features using our modular system.' },
  { icon: '🛡️', title: 'Security Infrastructure', desc: 'Encrypted communication and secure data handling.' },
  { icon: '🌍', title: 'API Integration Hub', desc: 'Pre-built bridges for web search, weather, and more.' }
];

const GLOBAL_VIDEO_URL = "https://www.youtube.com/embed/fY17HZcXppE?si=U7dZqtakf--m_OuT";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.WELCOME);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [activeProduct, setActiveProduct] = useState<ProductData | null>(null);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  const getThemeColor = (platform: Platform | null) => {
    switch(platform) {
      case Platform.NOVA: return '#00f2ff';
      case Platform.MJ: return '#ff2a6d'; // Pink theme for MJ
      case Platform.ANDROID: return '#22c55e';
      case Platform.SPECIAL_OFFER: return '#ff00d4';
      default: return '#00f2ff';
    }
  };

  const themeColor = getThemeColor(selectedPlatform);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-theme', themeColor);
  }, [themeColor]);

  const navigateTo = (screen: AppScreen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlatformSelect = (platform: Platform) => {
    setSelectedPlatform(platform);
    if (platform === Platform.ANDROID) {
      setActiveProduct({
        id: 'android-source',
        title: 'NOVA AI ANDROID SOURCE',
        subtitle: 'Professional Mobile Intelligence Infrastructure',
        price: 1499,
        platform: Platform.ANDROID,
        videoUrl: GLOBAL_VIDEO_URL,
        features: ANDROID_FEATURES,
        variantName: 'FULL ZIP'
      });
      navigateTo(AppScreen.PRODUCT_DETAILS);
    } else if (platform === Platform.SPECIAL_OFFER) {
      navigateTo(AppScreen.VARIANTS);
    } else {
      navigateTo(AppScreen.PRODUCT_OPTIONS);
    }
  };

  const handleNovaVariant = (variantId: string) => {
    setActiveProduct({
      id: 'nova-vadryk',
      title: 'NOVA 5.0 VADRYK ELITE',
      subtitle: 'The Ultimate Autonomous Engine',
      price: 899,
      originalPrice: 1199,
      platform: Platform.NOVA,
      variantName: 'ELITE',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES
    });
    navigateTo(AppScreen.PRODUCT_DETAILS);
  };

  const handleMJVariant = (variantId: string, price: number) => {
    setActiveProduct({
      id: 'mj-v2',
      title: 'MJ v2 - EMOTION ENGINE',
      subtitle: 'Advanced Cognitive Intelligence',
      price: price,
      platform: Platform.MJ,
      variantName: 'EMOTION CORE',
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES
    });
    navigateTo(AppScreen.PRODUCT_DETAILS);
  };

  const handleComboSelect = (price: number) => {
    setActiveProduct({
      id: 'combo',
      title: 'UNIFIED NOVA & MJ COMBO',
      subtitle: 'Elite Performance & Human Empathy Combined',
      price: price,
      originalPrice: 1999,
      platform: Platform.SPECIAL_OFFER,
      videoUrl: GLOBAL_VIDEO_URL,
      features: ELITE_FEATURES,
      variantName: 'UNIFIED'
    });
    navigateTo(AppScreen.PRODUCT_DETAILS);
  };

  const handleProductOption = (option: string) => {
    const platformTag = selectedPlatform?.toUpperCase() || 'NOVA';
    
    if (option === 'windows-app') {
       navigateTo(AppScreen.VARIANTS);
    } else if (option === 'source-code') {
       // Only for Nova if accessed (MJ source removed)
       setActiveProduct({
        id: 'full-source',
        title: `${platformTag} FULL SOURCE CODE`,
        subtitle: 'Enterprise AI Development Assets',
        price: 5999,
        originalPrice: 13999,
        platform: selectedPlatform || Platform.NOVA,
        variantName: 'STUDENT SOURCE',
        videoUrl: GLOBAL_VIDEO_URL,
        features: ELITE_FEATURES
      });
      navigateTo(AppScreen.PRODUCT_DETAILS);
    } else if (option === 'custom-name') {
      const isMJ = selectedPlatform === Platform.MJ;
      setActiveProduct({
        id: 'custom-ai',
        title: `CUSTOM BRANDED ${platformTag} AI`,
        subtitle: isMJ ? 'Your Name. Your Voice.' : 'Your Name. Your Voice. Your Brand.',
        price: 1999,
        originalPrice: 3500,
        platform: selectedPlatform || Platform.NOVA,
        variantName: 'CUSTOM',
        videoUrl: GLOBAL_VIDEO_URL,
        features: ELITE_FEATURES,
        isCustom: true
      });
      navigateTo(AppScreen.PRODUCT_DETAILS);
    }
  };

  const startPayment = () => {
    if (!activeProduct) return;
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      const options = {
        key: 'rzp_live_OcHSFiDAu0iMZC',
        amount: activeProduct.price * 100,
        currency: 'INR',
        name: `${selectedPlatform?.toUpperCase() || 'NOVA'} AI`,
        description: `Activation for ${activeProduct.title}`,
        handler: function(response: any) {
          setPaymentId(response.razorpay_payment_id);
          navigateTo(AppScreen.PAYMENT_FORM);
        },
        theme: { color: themeColor }
      };
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  const handleFinalSubmit = (details: UserDetails) => {
    if (!activeProduct || !paymentId) return;
    const invoiceNo = `${selectedPlatform?.toUpperCase()}-ELITE-${Date.now()}`;
    
    let targetPhone = "919512194144";
    
    if (activeProduct.id !== 'custom-ai') {
      const phones = ["919512194144", "917574821527"];
      targetPhone = phones[Math.floor(Math.random() * phones.length)];
    }
    
    let message = `Hello! I just purchased ${activeProduct.title}.

📋 *OFFICIAL INVOICE:*
─────────────────
🆔 *Invoice:* ${invoiceNo}
💳 *Payment ID:* ${paymentId}
📦 *Product:* ${activeProduct.title}
💰 *Amount:* ₹${activeProduct.price}

👤 *CUSTOMER:*
─────────────────
📛 *Name:* ${details.name}
📧 *Email:* ${details.email}`;

    if (details.desiredAiName) {
      message += `\n🤖 *Desired AI Name:* ${details.desiredAiName.toUpperCase()}`;
    }

    message += `\n\nPlease provide my ELITE access credentials for ${selectedPlatform?.toUpperCase()} AI. Thank you! 🚀`;
    
    window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // --- CONTENT PAGES DEFINITIONS ---

  const contactContent = (
    <div className="space-y-12">
      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">Get in Touch</h2>
        <p className="text-text-secondary">We're here to help you with any questions, concerns, or feedback regarding NOVA AI. Our dedicated support team is committed to providing you with the best possible assistance.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-6 rounded-2xl bg-white/5 border border-primary/20">
          <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
            <i className="fas fa-envelope mr-3"></i> CONTACT INFORMATION
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-text-secondary mb-1">Email Support</p>
              <p className="text-sm font-bold text-white">novawroking1122@gmail.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-text-secondary mb-1">Owner Name</p>
              <p className="text-sm font-bold text-white">Singh Ankit Vijay</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-text-secondary mb-1">Address</p>
              <p className="text-sm text-text-secondary">218, Kimavati complex kim, 394110, Surat Gujarat</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-text-secondary mb-1">Mobile No</p>
              <p className="text-sm text-primary font-bold">9512194144</p>
            </div>
            <p className="text-[10px] text-text-secondary italic pt-4">Response time: 24-48 hours</p>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl bg-white/5 border border-primary/20">
          <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
             <i className="fas fa-paper-plane mr-3"></i> SEND US A MESSAGE
          </h3>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We\'ll get back to you within 24-48 hours.'); (e.target as HTMLFormElement).reset(); }}>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-text-secondary uppercase">Full Name *</label>
              <input required type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-primary" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-text-secondary uppercase">Email Address *</label>
              <input required type="email" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-primary" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-text-secondary uppercase">Subject *</label>
              <select required className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-primary text-text-secondary">
                <option value="">Select a subject</option>
                <option value="technical-support">Technical Support</option>
                <option value="billing">Billing & Payment</option>
                <option value="feature-request">Feature Request</option>
                <option value="bug-report">Bug Report</option>
                <option value="general-inquiry">General Inquiry</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-text-secondary uppercase">Message *</label>
              <textarea required rows={4} placeholder="Please describe your inquiry in detail..." className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-primary"></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-primary text-surface font-black text-xs tracking-widest uppercase rounded-xl hover:brightness-125 transition-all shadow-lg">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );

  const termsContent = (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">1. Acceptance of Terms</h2>
        <p>By downloading, installing, or using NOVA AI software and services, you agree to be bound by these Terms and Conditions. These Terms constitute a legally binding agreement between you and NOVA AI.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">2. License and Usage Rights</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-primary text-sm font-bold uppercase mb-2">2.1 License Grant</h3>
            <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use NOVA AI for personal or business purposes on devices you own.</p>
          </div>
          <div>
            <h3 className="text-primary text-sm font-bold uppercase mb-2">2.2 Restrictions</h3>
            <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
              <li>Reverse engineer or disassemble the software.</li>
              <li>Sell, lease, or sublicense the software.</li>
              <li>Remove proprietary notices or labels.</li>
              <li>Share your access key with unauthorized parties.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">3. User Responsibilities</h2>
        <p>Users are responsible for maintaining account confidentiality, ensuring device compatibility, and reporting security vulnerabilities or bugs immediately.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">4. Payment and Billing</h2>
        <p>All payments are processed securely through Razorpay. Access keys are generated ONLY after successful verification. Prices are in INR and include applicable taxes.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">5. Intellectual Property</h2>
        <p>NOVA AI and the VADRYK engine are protected by copyright laws. We retain all rights, title, and interest in the software. Unauthorized use may result in legal action.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">6. Limitations of Liability</h2>
        <p>NOVA AI is provided "as is" without warranties. We are not liable for any indirect or incidental damages arising from software usage.</p>
      </section>
    </div>
  );

  const aboutContent = (
    <div className="space-y-8">
      <p className="text-center italic opacity-60 text-sm">Last updated: January 2025</p>
      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">Our Mission</h2>
        <p>At <strong>NOVA AI</strong>, our mission is to revolutionize the way users interact with technology through intelligent voice-based automation. We're focused on building a personal assistant that is fast, private, customizable, and always evolving.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">Who We Are</h2>
        <p>NOVA AI is a futuristic personal assistant built entirely by <strong>Ankit Singh</strong>, a passionate software developer and an MCA pursuing student. Designed with precision and creativity, Nova AI integrates intelligent voice interaction, automation, and cross-platform support.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">Why NOVA?</h2>
        <ul className="list-disc list-inside space-y-2 text-text-secondary">
          <li>⚡ Lightweight yet powerful voice assistant for Android & Windows.</li>
          <li>🛡️ Strong focus on privacy and offline capabilities.</li>
          <li>🧠 Smart learning features that adapt to your routine.</li>
          <li>🎯 Developed for real-world automation and utilities.</li>
        </ul>
      </section>
    </div>
  );

  const distributionContent = (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">Official Delivery Method</h2>
        <p>To ensure high-security activation and direct owner-to-user support, all NOVA AI and MJ AI products are distributed through our **VIP Delivery System**.</p>
      </section>
      <div className="glass-card p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-4">
        <h3 className="font-bold text-primary flex items-center uppercase tracking-widest text-xs">
          <i className="fab fa-whatsapp mr-2"></i> STEP-BY-STEP PROCESS
        </h3>
        <ol className="space-y-3 text-sm text-text-secondary list-decimal list-inside">
          <li>Complete your payment via our secure Razorpay gateway.</li>
          <li>You will be automatically prompted to provide your final activation details.</li>
          <li>Once submitted, a unique message will be generated for our distribution team.</li>
          <li><strong>Your personalized Service App (EXE/ZIP) and ELITE Activation Key will be sent directly to your WhatsApp.</strong></li>
          <li>Typical delivery window: <strong>5 to 15 minutes</strong> after verification.</li>
        </ol>
      </div>
    </div>
  );

  const shippingContent = (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">Digital Shipping Policy</h2>
        <p>Since NOVA AI products are <strong>digital software licenses</strong>, there is no physical shipping involved. This means you receive your product instantly without any shipping costs.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">How You Receive Your Order</h2>
        <ul className="list-disc list-inside space-y-2 text-text-secondary">
          <li><strong>Instant Confirmation:</strong> You will receive an immediate confirmation on the web portal.</li>
          <li><strong>Digital Assets:</strong> Your activation key and download link will be delivered via WhatsApp within 15 minutes.</li>
          <li><strong>No Hidden Costs:</strong> There are zero shipping, handling, or processing fees for our digital products.</li>
        </ul>
      </section>
    </div>
  );

  const refundContent = (
    <div className="space-y-8">
      <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl">
        <h2 className="text-xl font-black text-red-500 mb-2 uppercase flex items-center">
          <i className="fas fa-exclamation-triangle mr-3"></i> Strict Activation Policy
        </h2>
        <p className="text-white font-bold text-sm">
          Please read carefully: Once a NOVA AI or MJ AI product has been **ACTIVATED** using your unique Elite access key, it is permanently consumed and linked to your hardware. 
          <br /><br />
          <span className="underline uppercase tracking-widest">Refunds are strictly prohibited after activation.</span>
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">30-Day Refund Policy</h2>
        <p>We offer a <strong>30-day refund window</strong> for unactivated products. You may request a refund if:</p>
        <ul className="list-disc list-inside space-y-2 text-text-secondary mt-2">
          <li>The request is made within <strong>30 days</strong> of payment.</li>
          <li>The access key has <strong>NOT</strong> been used for activation.</li>
          <li>The Service App (EXE/ZIP) has not been successfully deployed on your machine.</li>
        </ul>
      </section>
    </div>
  );

  const privacyContent = (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">Privacy Commitment</h2>
        <p>At NOVA AI, we prioritize your data sovereignty. Unlike standard assistants, our core processing is designed to remain **on-device** whenever possible.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4 uppercase">Data Collection</h2>
        <ul className="list-disc list-inside space-y-2 text-text-secondary">
          <li><strong>Personal Info:</strong> We only collect your email and name for license management.</li>
          <li><strong>Voice Data:</strong> Your voice commands are processed locally.</li>
          <li><strong>System Access:</strong> NOVA requires system permissions for automation. This data never leaves your machine.</li>
        </ul>
      </section>
    </div>
  );

  const renderScreen = () => {
    switch(currentScreen) {
      case AppScreen.WELCOME:
        return <WelcomeScreen onContinue={() => navigateTo(AppScreen.MAIN_SELECTION)} />;
      case AppScreen.MAIN_SELECTION:
        return <MainSelectionScreen onPlatformSelect={handlePlatformSelect} />;
      case AppScreen.PRODUCT_OPTIONS:
        return (
          <ProductOptionsScreen 
            platform={selectedPlatform} 
            onBack={() => navigateTo(AppScreen.MAIN_SELECTION)}
            onSelectOption={handleProductOption}
            themeColor={themeColor}
          />
        );
      case AppScreen.VARIANTS:
        if (selectedPlatform === Platform.NOVA) {
           return <NovaVariantSelector onBack={() => navigateTo(AppScreen.PRODUCT_OPTIONS)} onSelect={handleNovaVariant} />;
        } else if (selectedPlatform === Platform.MJ) {
           return <MJVariantSelector onBack={() => navigateTo(AppScreen.PRODUCT_OPTIONS)} onSelect={handleMJVariant} />;
        } else if (selectedPlatform === Platform.SPECIAL_OFFER) {
           return <ComboVariantSelector onBack={() => navigateTo(AppScreen.MAIN_SELECTION)} onSelect={handleComboSelect} />;
        } 
        return null;
      case AppScreen.PRODUCT_DETAILS:
        return activeProduct ? (
          <ProductDetailsPage 
            product={activeProduct} 
            onBack={() => navigateTo(AppScreen.MAIN_SELECTION)}
            onPurchase={startPayment}
            themeColor={themeColor}
          />
        ) : null;
      case AppScreen.PAYMENT_FORM:
        return activeProduct ? (
          <PaymentForm 
            productTitle={activeProduct.title}
            price={activeProduct.price}
            paymentId={paymentId || 'PENDING'}
            isCustomProduct={activeProduct.isCustom || false}
            onSubmit={handleFinalSubmit}
            themeColor={themeColor}
          />
        ) : null;
      case AppScreen.CONTACT:
        return <GenericPage title="Contact Support" onBack={() => navigateTo(AppScreen.MAIN_SELECTION)} content={contactContent} />;
      case AppScreen.ABOUT:
        return <GenericPage title="About Nova" onBack={() => navigateTo(AppScreen.MAIN_SELECTION)} content={aboutContent} />;
      case AppScreen.DISTRIBUTION:
        return <GenericPage title="Delivery Policy" onBack={() => navigateTo(AppScreen.MAIN_SELECTION)} content={distributionContent} />;
      case AppScreen.SHIPPING:
        return <GenericPage title="Shipping Info" onBack={() => navigateTo(AppScreen.MAIN_SELECTION)} content={shippingContent} />;
      case AppScreen.REFUND:
        return <GenericPage title="Refund Policy" onBack={() => navigateTo(AppScreen.MAIN_SELECTION)} content={refundContent} />;
      case AppScreen.PRIVACY:
        return <GenericPage title="Privacy Policy" onBack={() => navigateTo(AppScreen.MAIN_SELECTION)} content={privacyContent} />;
      case AppScreen.TERMS:
        return <GenericPage title="Terms of Service" onBack={() => navigateTo(AppScreen.MAIN_SELECTION)} content={termsContent} />;
      default:
        return <WelcomeScreen onContinue={() => navigateTo(AppScreen.MAIN_SELECTION)} />;
    }
  };

  return (
    <div className="min-h-screen font-exo text-text-primary selection:bg-primary selection:text-black">
      {/* HEADER ALWAYS VISIBLE */}
      <Header 
        currentScreen={currentScreen} 
        onNavigate={navigateTo} 
        themeColor={themeColor}
        platformName={selectedPlatform?.toUpperCase() || 'NOVA'}
      />
      
      <main className={`container mx-auto px-4 md:px-6 ${currentScreen !== AppScreen.WELCOME ? 'pt-24 md:pt-32 pb-20' : 'pt-24'}`}>
        {renderScreen()}
      </main>

      <SupportChatBot />
    </div>
  );
};

export default App;
