
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppScreen, Platform, ProductData, UserDetails, OSType } from './types';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import CompanyHomePage from './components/CompanyHomePage';
import OSSelectionScreen from './components/OSSelectionScreen';
import OSFeaturesScreen from './components/OSFeaturesScreen';
import MainSelectionScreen from './components/MainSelectionScreen';
import FeaturesScreen from './components/FeaturesScreen';
import GenericPage from './components/GenericPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import PaymentForm from './components/PaymentForm';
import SupportChatBot from './components/SupportChatBot';

import { Mail, Clock, Send, Shield, Brain, Target, Zap, MessageCircle, AlertTriangle } from 'lucide-react';

import Footer from './components/Footer';
import ContactContent from './components/ContactContent';
import AboutContent from './components/AboutContent';
import DeliveryContent from './components/DeliveryContent';
import ShippingContent from './components/ShippingContent';
import RefundContent from './components/RefundContent';

import { allProducts } from './products';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.WELCOME);
  const [selectedOS, setSelectedOS] = useState<OSType>(null);
  const [activeProduct, setActiveProduct] = useState<ProductData | null>(null);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const getThemeColor = (platform: Platform | null) => {
    switch(platform) {
      case Platform.VASH: return '#3b82f6'; // Professional blue
      case Platform.MJ: return '#10b981'; // Emerald
      case Platform.COMBO: return '#eab308';
      case Platform.MAX: return '#6366f1'; // Indigo
      case Platform.CUSTOM: return '#8b5cf6';
      default: return '#ffffff';
    }
  };

  const themeColor = getThemeColor(activeProduct?.platform || null);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-theme', themeColor);
  }, [themeColor]);

  useEffect(() => {
    const path = location.pathname;
    let screen = AppScreen.WELCOME;

    if (path.startsWith('/product/')) {
      const id = path.split('/product/')[1];
      const prod = allProducts.find(p => p.id === id);
      if (prod) {
        setActiveProduct(prod);
        screen = AppScreen.PRODUCT_DETAILS;
      } else {
        screen = AppScreen.HOME;
      }
    } else if (path === '/checkout') {
      screen = AppScreen.PAYMENT_FORM;
    } else if (path === '/platforms') {
      screen = AppScreen.MAIN_SELECTION;
    } else if (path === '/os-features') {
      screen = AppScreen.OS_FEATURES;
    } else {
      const screenMap: { [key: string]: AppScreen } = {
        '/': AppScreen.HOME,
        '/welcome': AppScreen.WELCOME,
        '/os': AppScreen.OS_SELECTION,
        '/features': AppScreen.FEATURES,
        '/contact': AppScreen.CONTACT,
        '/about': AppScreen.ABOUT,
        '/distribution': AppScreen.DISTRIBUTION,
        '/shipping': AppScreen.SHIPPING,
        '/refund': AppScreen.REFUND,
        '/privacy': AppScreen.PRIVACY,
        '/terms': AppScreen.TERMS,
      };
      screen = screenMap[path] || AppScreen.HOME;
    }
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const navigateTo = (screen: AppScreen) => {
    const routes = {
      [AppScreen.HOME]: '/',
      [AppScreen.WELCOME]: '/welcome',
      [AppScreen.OS_SELECTION]: '/os',
      [AppScreen.OS_FEATURES]: '/os-features',
      [AppScreen.MAIN_SELECTION]: '/platforms',
      [AppScreen.FEATURES]: '/features',
      [AppScreen.CONTACT]: '/contact',
      [AppScreen.ABOUT]: '/about',
      [AppScreen.DISTRIBUTION]: '/distribution',
      [AppScreen.SHIPPING]: '/shipping',
      [AppScreen.REFUND]: '/refund',
      [AppScreen.PRIVACY]: '/privacy',
      [AppScreen.TERMS]: '/terms',
      [AppScreen.PAYMENT_FORM]: '/checkout',
    };
    
    if (screen === AppScreen.PRODUCT_DETAILS && activeProduct) {
       navigate(`/product/${activeProduct.id}`);
    } else {
       const p = routes[screen as keyof typeof routes] || '/';
       navigate(p);
    }
  };

  const handleOSSelect = (os: OSType) => {
    setSelectedOS(os);
    navigateTo(AppScreen.OS_FEATURES);
  };

  const startPayment = (finalPrice: number, currency: string = 'INR', quantity: number = 1) => {
    if (!activeProduct) return;
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      // For INR, use * 100 since Razorpay operates in paise.
      // Most major international currencies (USD, EUR, GBP, AUD) supported by Razorpay also use minor units (* 100).
      const options = {
        key: 'rzp_live_OcHSFiDAu0iMZC',
        amount: Math.round(finalPrice * 100),
        currency: currency,
        name: `VASH AI TECHNOLOGIES PVT LTD`,
        description: `License for ${activeProduct.title}`,
        handler: function(response: any) {
          setPaymentId(response.razorpay_payment_id);
          setActiveProduct({...activeProduct, price: finalPrice, quantity: quantity});
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
    const invoiceNo = `ELITE-${Date.now().toString().slice(-6)}`;
    
    // Custom products go to special numbers, others random
    const phones = ["919512194144", "917574821527"];
    const targetPhone = activeProduct.isCustom ? "919512194144" : phones[Math.floor(Math.random() * phones.length)];
    
    let message = `Hello! I just purchased ${activeProduct.title}.

📋 *OFFICIAL INVOICE:*
─────────────────
🆔 *Invoice:* ${invoiceNo}
💳 *Payment ID:* ${paymentId}
📦 *Product:* ${activeProduct.title} (${selectedOS?.toUpperCase()})${activeProduct.quantity && activeProduct.quantity > 1 ? `\n🔢 *Quantity:* ${activeProduct.quantity}` : ''}
💰 *Amount:* ₹${activeProduct.price}

👤 *CUSTOMER DETAILS:*
─────────────────
📛 *Name:* ${details.name}
📧 *Email:* ${details.email}`;

    if (activeProduct.isCustom && details.desiredAiName) {
      message += `\n\n🤖 *CUSTOM BUILD REQUEST:*
─────────────────
⚙️ *Base Engine:* ${details.baseAiChoice || 'Not Specified'}
✨ *Desired AI Name:* ${details.desiredAiName.toUpperCase()}`;
    }

    message += `\n\nPlease provide my ELITE access credentials. Thank you! 🚀`;
    
    window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // --- CONTENT PAGES DEFINITIONS ---

  const contactContent = (
    <div className="space-y-8">
      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Get in Touch</h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">We're here to help you with any questions, concerns, or feedback regarding VASH AI. Our dedicated support team is committed to providing you with the best possible assistance.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            Contact Info
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Email Support</span>
              <span className="text-sm font-bold text-white">vashaitechnologies@gmail.com</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Address</span>
              <span className="text-sm text-text-secondary font-light">218, Kimavati complex kim, 394110, Surat Gujarat</span>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="text-xs text-text-secondary flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Response time: 24-48 hours
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
               <Send className="w-5 h-5 text-primary" />
             </div>
             Send Message
          </h3>
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We\'ll get back to you within 24-48 hours.'); (e.target as HTMLFormElement).reset(); }}>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-text-secondary ml-1">Full Name *</label>
              <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-opacity-100 focus:ring-1 transition-all placeholder:text-white/20" placeholder="John Doe" style={{ borderColor: 'rgba(255,255,255,0.1)' }} onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary-theme)'; e.currentTarget.style.boxShadow = `0 0 0 1px var(--primary-theme)`; }} onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }} />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-text-secondary ml-1">Email Address *</label>
              <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-opacity-100 focus:ring-1 transition-all placeholder:text-white/20" placeholder="john@example.com" style={{ borderColor: 'rgba(255,255,255,0.1)' }} onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary-theme)'; e.currentTarget.style.boxShadow = `0 0 0 1px var(--primary-theme)`; }} onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }} />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-text-secondary ml-1">Subject *</label>
              <select required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-opacity-100 focus:ring-1 transition-all appearance-none" style={{ borderColor: 'rgba(255,255,255,0.1)' }} onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary-theme)'; e.currentTarget.style.boxShadow = `0 0 0 1px var(--primary-theme)`; }} onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <option value="" className="bg-black text-white">Select a subject</option>
                <option value="technical-support" className="bg-black text-white">Technical Support</option>
                <option value="billing" className="bg-black text-white">Billing & Payment</option>
                <option value="feature-request" className="bg-black text-white">Feature Request</option>
                <option value="bug-report" className="bg-black text-white">Bug Report</option>
                <option value="general-inquiry" className="bg-black text-white">General Inquiry</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-text-secondary ml-1">Message *</label>
              <textarea required rows={4} placeholder="Please describe your inquiry in detail..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-opacity-100 focus:ring-1 transition-all resize-none placeholder:text-white/20" style={{ borderColor: 'rgba(255,255,255,0.1)' }} onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary-theme)'; e.currentTarget.style.boxShadow = `0 0 0 1px var(--primary-theme)`; }} onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}></textarea>
            </div>
            <button type="submit" className="w-full py-4 text-black font-bold text-sm tracking-wide rounded-xl hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all mt-4" style={{ backgroundColor: 'var(--primary-theme)' }}>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );

  const termsContent = (
    <div className="space-y-8">
      <p className="text-center text-text-secondary text-sm">Last updated: January 2025</p>

      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          1. Acceptance of Terms
        </h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">
          By downloading, installing, or using <strong className="text-white font-medium">VASH AI</strong> software and services, you agree to be bound by these Terms and Conditions. These Terms constitute a legally binding agreement between you and VASH AI.
        </p>
      </section>

      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          2. License and Usage Rights
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-white text-sm font-bold uppercase mb-2 tracking-wider">2.1 License Grant</h3>
            <p className="text-text-secondary font-light leading-relaxed text-base">Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use VASH AI for personal or business purposes on devices you own.</p>
          </div>
          <div>
            <h3 className="text-white text-sm font-bold uppercase mb-2 tracking-wider">2.2 Restrictions</h3>
            <ul className="list-disc list-inside space-y-4 text-text-secondary text-base font-light leading-relaxed">
              <li>Reverse engineer or disassemble the software.</li>
              <li>Sell, lease, or sublicense the software.</li>
              <li>Remove proprietary notices or labels.</li>
              <li>Share your access key with unauthorized parties.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          3. User Responsibilities
        </h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">
          Users are responsible for maintaining account confidentiality, ensuring device compatibility, and reporting security vulnerabilities or bugs immediately.
        </p>
      </section>

      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          4. Payment and Billing
        </h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">
          All payments are processed securely through Razorpay. Access keys are generated ONLY after successful verification. Prices are in INR and include applicable taxes.
        </p>
      </section>

      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          5. Intellectual Property
        </h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">
          VASH AI and the VADRYK engine are protected by copyright laws. We retain all rights, title, and interest in the software. Unauthorized use may result in legal action.
        </p>
      </section>

      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          6. Limitations of Liability
        </h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">
          VASH AI is provided "as is" without warranties. We are not liable for any indirect or incidental damages arising from software usage.
        </p>
      </section>
    </div>
  );

  const privacyContent = (
    <div className="space-y-8">
      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          Privacy Commitment
        </h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">
          At VASH AI, we prioritize your data sovereignty. Unlike standard assistants, our core processing is designed to remain <strong className="text-white font-medium">on-device</strong> whenever possible.
        </p>
      </section>
      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          Data Collection
        </h2>
        <ul className="list-disc list-inside space-y-4 text-text-secondary font-light leading-relaxed text-base">
          <li><strong className="text-white font-medium">Personal Info:</strong> We only collect your email and name for license management.</li>
          <li><strong className="text-white font-medium">Voice Data:</strong> Your voice commands are processed locally.</li>
          <li><strong className="text-white font-medium">System Access:</strong> VASH requires system permissions for automation. This data never leaves your machine.</li>
        </ul>
      </section>
    </div>
  );

  const renderScreen = () => {
    switch(currentScreen) {
      case AppScreen.WELCOME:
        return <WelcomeScreen onContinue={() => navigateTo(AppScreen.HOME)} onExploreFeatures={() => navigateTo(AppScreen.FEATURES)} />;
      case AppScreen.HOME:
        return <CompanyHomePage onViewProducts={() => navigateTo(AppScreen.OS_SELECTION)} />;
      case AppScreen.OS_SELECTION:
        return <OSSelectionScreen onSelectOS={handleOSSelect} />;
      case AppScreen.OS_FEATURES:
        return <OSFeaturesScreen os={selectedOS} onBack={() => navigateTo(AppScreen.OS_SELECTION)} onContinue={() => navigateTo(AppScreen.MAIN_SELECTION)} />;
      case AppScreen.MAIN_SELECTION:
        return (
          <MainSelectionScreen 
            selectedOS={selectedOS} 
            onProductSelect={(prod) => { setActiveProduct(prod); navigateTo(AppScreen.PRODUCT_DETAILS); }}
            onExploreFeatures={() => navigateTo(AppScreen.FEATURES)}
            onRequireOS={() => navigateTo(AppScreen.OS_SELECTION)}
            onBackToFeatures={() => navigateTo(AppScreen.OS_FEATURES)}
          />
        );
      case AppScreen.FEATURES:
        return <FeaturesScreen onBack={() => selectedOS ? navigateTo(AppScreen.MAIN_SELECTION) : navigateTo(AppScreen.HOME)} />;
      case AppScreen.PRODUCT_DETAILS:
        return activeProduct ? (
          <ProductDetailsPage 
            product={activeProduct} 
            onBack={() => navigateTo(AppScreen.MAIN_SELECTION)}
            onPurchase={(price, currency, qty) => startPayment(price, currency, qty)}
            themeColor={themeColor}
            onViewFeatures={() => navigateTo(AppScreen.FEATURES)}
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
        return <GenericPage title="Contact Support" onBack={() => navigateTo(AppScreen.HOME)} content={<ContactContent />} />;
      case AppScreen.ABOUT:
        return <GenericPage title="About VASH" onBack={() => navigateTo(AppScreen.HOME)} content={<AboutContent />} />;
      case AppScreen.DISTRIBUTION:
        return <GenericPage title="Delivery Policy" onBack={() => navigateTo(AppScreen.HOME)} content={<DeliveryContent />} />;
      case AppScreen.SHIPPING:
        return <GenericPage title="Shipping Info" onBack={() => navigateTo(AppScreen.HOME)} content={<ShippingContent />} />;
      case AppScreen.REFUND:
        return <GenericPage title="Refund Policy" onBack={() => navigateTo(AppScreen.HOME)} content={<RefundContent />} />;
      case AppScreen.PRIVACY:
        return <GenericPage title="Privacy Policy" onBack={() => navigateTo(AppScreen.HOME)} content={privacyContent} />;
      case AppScreen.TERMS:
        return <GenericPage title="Terms of Service" onBack={() => navigateTo(AppScreen.HOME)} content={termsContent} />;
      default:
        return <CompanyHomePage onViewProducts={() => navigateTo(AppScreen.OS_SELECTION)} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-text-primary selection:bg-white selection:text-black flex flex-col relative z-10 w-full">
      <Header 
        currentScreen={currentScreen} 
        onNavigate={navigateTo} 
        themeColor={themeColor}
        platformName={selectedOS?.toUpperCase() || 'VASH AI'}
      />
      
      <main className="flex-1 w-full flex flex-col">
        <div className="w-full flex-1">
          {renderScreen()}
        </div>
        <Footer onNavigate={navigateTo} />
      </main>

      <SupportChatBot />
    </div>
  );
};

export default App;
