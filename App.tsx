
import React, { useState, useEffect } from 'react';
import { AppScreen, Platform, ProductData, UserDetails, Feature, Variant } from './types';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import MainSelectionScreen from './components/MainSelectionScreen';
import ProductOptionsScreen from './components/ProductOptionsScreen';
import FeaturesScreen from './components/FeaturesScreen';
import GenericPage from './components/GenericPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import PaymentForm from './components/PaymentForm';
import SupportChatBot from './components/SupportChatBot';
import { Mail, Clock, Send, Shield, Brain, Target, Zap, MessageCircle, AlertTriangle } from 'lucide-react';
import { ELITE_FEATURES } from './featuresData';

const GLOBAL_VIDEO_URL = "https://www.youtube.com/embed/fY17HZcXppE?si=U7dZqtakf--m_OuT";

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.WELCOME);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [activeProduct, setActiveProduct] = useState<ProductData | null>(null);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  const getThemeColor = (platform: Platform | null) => {
    switch(platform) {
      case Platform.NOVA: return '#00f2ff';
      case Platform.MJ: return '#ff2a6d'; // Pink theme for MJ
      case Platform.COMBO: return '#eab308'; // Gold theme for Combo
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

  const handlePlatformSelect = (platform: Platform | 'features') => {
    if (platform === 'features') {
      navigateTo(AppScreen.FEATURES);
      return;
    }
    
    setSelectedPlatform(platform);
    
    if (platform === Platform.COMBO) {
      setActiveProduct({
        id: 'combo',
        title: 'UNIFIED NOVA & MJ COMBO',
        subtitle: 'Elite Performance & Human Empathy Combined',
        price: 1999,
        platform: Platform.COMBO,
        videoUrl: GLOBAL_VIDEO_URL,
        features: ELITE_FEATURES,
        variantName: 'UNIFIED'
      });
      navigateTo(AppScreen.PRODUCT_DETAILS);
    } else {
      navigateTo(AppScreen.PRODUCT_OPTIONS);
    }
  };

  const handleProductOption = (option: string, price: number) => {
    const platformTag = selectedPlatform?.toUpperCase() || 'NOVA';
    const isMJ = selectedPlatform === Platform.MJ;
    
    if (option === 'windows') {
      setActiveProduct({
        id: `${selectedPlatform}-windows`,
        title: `${platformTag} ${isMJ ? 'v4 HEART EDITION' : '6.0'}`,
        subtitle: isMJ ? 'Advanced Cognitive Intelligence' : 'The Ultimate Autonomous Engine',
        price: price,
        platform: selectedPlatform || Platform.NOVA,
        variantName: 'WINDOWS APP',
        videoUrl: GLOBAL_VIDEO_URL,
        features: ELITE_FEATURES
      });
      navigateTo(AppScreen.PRODUCT_DETAILS);
    } else if (option === 'custom') {
      setActiveProduct({
        id: 'custom-ai',
        title: `CUSTOM BRANDED ${platformTag} AI`,
        subtitle: isMJ ? 'Your Name. Your Voice.' : 'Your Name. Your Voice. Your Brand.',
        price: price,
        platform: selectedPlatform || Platform.NOVA,
        variantName: 'CUSTOM',
        videoUrl: GLOBAL_VIDEO_URL,
        features: ELITE_FEATURES,
        isCustom: true
      });
      navigateTo(AppScreen.PRODUCT_DETAILS);
    }
  };

  const startPayment = (finalPrice: number) => {
    if (!activeProduct) return;
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      const options = {
        key: 'rzp_live_OcHSFiDAu0iMZC',
        amount: finalPrice * 100,
        currency: 'INR',
        name: `${selectedPlatform?.toUpperCase() || 'NOVA'} AI`,
        description: `Activation for ${activeProduct.title}`,
        handler: function(response: any) {
          setPaymentId(response.razorpay_payment_id);
          setActiveProduct({...activeProduct, price: finalPrice});
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
    <div className="space-y-8">
      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Get in Touch</h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">We're here to help you with any questions, concerns, or feedback regarding NOVA AI. Our dedicated support team is committed to providing you with the best possible assistance.</p>
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
              <span className="text-sm font-bold text-white">novawroking1122@gmail.com</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Owner Name</span>
              <span className="text-sm font-bold text-white">Singh Ankit Vijay</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Address</span>
              <span className="text-sm text-text-secondary font-light">218, Kimavati complex kim, 394110, Surat Gujarat</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Mobile No</span>
              <span className="text-sm font-bold text-primary">9512194144</span>
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
          By downloading, installing, or using <strong className="text-white font-medium">NOVA AI</strong> software and services, you agree to be bound by these Terms and Conditions. These Terms constitute a legally binding agreement between you and NOVA AI.
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
            <p className="text-text-secondary font-light leading-relaxed text-base">Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use NOVA AI for personal or business purposes on devices you own.</p>
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
          NOVA AI and the VADRYK engine are protected by copyright laws. We retain all rights, title, and interest in the software. Unauthorized use may result in legal action.
        </p>
      </section>

      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          6. Limitations of Liability
        </h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">
          NOVA AI is provided "as is" without warranties. We are not liable for any indirect or incidental damages arising from software usage.
        </p>
      </section>
    </div>
  );

  const aboutContent = (
    <div className="space-y-8">
      <p className="text-center text-text-secondary text-sm">Last updated: January 2025</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
            Our Mission
          </h2>
          <p className="text-text-secondary font-light leading-relaxed text-base">
            At <strong className="text-white font-medium">NOVA AI</strong>, our mission is to revolutionize the way users interact with technology through intelligent voice-based automation. We're focused on building a personal assistant that is fast, private, customizable, and always evolving.
          </p>
        </section>

        <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
            Who We Are
          </h2>
          <p className="text-text-secondary font-light leading-relaxed text-base">
            NOVA AI is a futuristic personal assistant built entirely by <strong className="text-white font-medium">Ankit Singh</strong>, a passionate software developer and an MCA pursuing student. Designed with precision and creativity, Nova AI integrates intelligent voice interaction, automation, and cross-platform support.
          </p>
        </section>
      </div>

      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          Why NOVA?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: <Zap className="w-5 h-5 text-primary" />, text: 'Lightweight yet powerful voice assistant for Android & Windows.' },
            { icon: <Shield className="w-5 h-5 text-primary" />, text: 'Strong focus on privacy and offline capabilities.' },
            { icon: <Brain className="w-5 h-5 text-primary" />, text: 'Smart learning features that adapt to your routine.' },
            { icon: <Target className="w-5 h-5 text-primary" />, text: 'Developed for real-world automation and utilities.' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <p className="text-sm text-text-secondary font-light leading-relaxed pt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const distributionContent = (
    <div className="space-y-8">
      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          Official Delivery Method
        </h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">To ensure high-security activation and direct owner-to-user support, all NOVA AI and MJ AI products are distributed through our <strong className="text-white font-medium">VIP Delivery System</strong>.</p>
      </section>
      <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-primary" />
          </div>
          Step-by-Step Process
        </h3>
        <ol className="space-y-6 text-base text-text-secondary list-decimal list-inside font-light leading-relaxed">
          <li>Complete your payment via our secure Razorpay gateway.</li>
          <li>You will be automatically prompted to provide your final activation details.</li>
          <li>Once submitted, a unique message will be generated for our distribution team.</li>
          <li><strong className="text-white font-medium">Your personalized Service App (EXE/ZIP) and ELITE Activation Key will be sent directly to your WhatsApp.</strong></li>
          <li>Typical delivery window: <strong className="text-white font-medium">5 to 15 minutes</strong> after verification.</li>
        </ol>
      </div>
    </div>
  );

  const shippingContent = (
    <div className="space-y-8">
      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          Digital Shipping Policy
        </h2>
        <p className="text-text-secondary font-light leading-relaxed text-base">
          Since NOVA AI products are <strong className="text-white font-medium">digital software licenses</strong>, there is no physical shipping involved. This means you receive your product instantly without any shipping costs.
        </p>
      </section>
      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          How You Receive Your Order
        </h2>
        <ul className="list-disc list-inside space-y-4 text-text-secondary font-light leading-relaxed text-base">
          <li><strong className="text-white font-medium">Instant Confirmation:</strong> You will receive an immediate confirmation on the web portal.</li>
          <li><strong className="text-white font-medium">Digital Assets:</strong> Your activation key and download link will be delivered via WhatsApp within 15 minutes.</li>
          <li><strong className="text-white font-medium">No Hidden Costs:</strong> There are zero shipping, handling, or processing fees for our digital products.</li>
        </ul>
      </section>
    </div>
  );

  const refundContent = (
    <div className="space-y-8">
      <div className="bg-red-500/5 border border-red-500/20 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-red-500 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          Strict Activation Policy
        </h2>
        <p className="text-white/90 font-light text-base leading-relaxed">
          Please read carefully: Once a NOVA AI or MJ AI product has been <strong className="text-white font-medium">ACTIVATED</strong> using your unique Elite access key, it is permanently consumed and linked to your hardware. 
          <br /><br />
          <span className="underline font-bold text-red-400">Refunds are strictly prohibited after activation.</span>
        </p>
      </div>

      <section className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-2 h-6 rounded-full" style={{ backgroundColor: 'var(--primary-theme)' }}></div>
          30-Day Refund Policy
        </h2>
        <p className="font-light text-text-secondary leading-relaxed text-base">We offer a <strong className="text-white font-medium">30-day refund window</strong> for unactivated products. You may request a refund if:</p>
        <ul className="list-disc list-inside space-y-4 text-text-secondary mt-6 font-light leading-relaxed text-base">
          <li>The request is made within <strong className="text-white font-medium">30 days</strong> of payment.</li>
          <li>The access key has <strong className="text-white font-medium">NOT</strong> been used for activation.</li>
          <li>The Service App (EXE/ZIP) has not been successfully deployed on your machine.</li>
        </ul>
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
          At NOVA AI, we prioritize your data sovereignty. Unlike standard assistants, our core processing is designed to remain <strong className="text-white font-medium">on-device</strong> whenever possible.
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
          <li><strong className="text-white font-medium">System Access:</strong> NOVA requires system permissions for automation. This data never leaves your machine.</li>
        </ul>
      </section>
    </div>
  );

  const renderScreen = () => {
    switch(currentScreen) {
      case AppScreen.WELCOME:
        return <WelcomeScreen onContinue={() => navigateTo(AppScreen.MAIN_SELECTION)} onExploreFeatures={() => navigateTo(AppScreen.FEATURES)} />;
      case AppScreen.MAIN_SELECTION:
        return <MainSelectionScreen onPlatformSelect={handlePlatformSelect} />;
      case AppScreen.FEATURES:
        return <FeaturesScreen onBack={() => navigateTo(AppScreen.MAIN_SELECTION)} />;
      case AppScreen.PRODUCT_OPTIONS:
        return (
          <ProductOptionsScreen 
            platform={selectedPlatform} 
            onBack={() => navigateTo(AppScreen.MAIN_SELECTION)}
            onSelectOption={handleProductOption}
            themeColor={themeColor}
          />
        );
      case AppScreen.PRODUCT_DETAILS:
        return activeProduct ? (
          <ProductDetailsPage 
            product={activeProduct} 
            onBack={() => navigateTo(activeProduct.platform === Platform.COMBO ? AppScreen.MAIN_SELECTION : AppScreen.PRODUCT_OPTIONS)}
            onPurchase={startPayment}
            onInternationalHelp={(country) => {
              const message = `Hello! I am from ${country}. I want to purchase ${activeProduct.title}. Please help me with international payment options.`;
              window.open(`https://wa.me/919512194144?text=${encodeURIComponent(message)}`, '_blank');
            }}
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
        return <WelcomeScreen onContinue={() => navigateTo(AppScreen.MAIN_SELECTION)} onExploreFeatures={() => navigateTo(AppScreen.FEATURES)} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-text-primary selection:bg-primary selection:text-black flex relative z-10">
      <Sidebar 
        currentScreen={currentScreen} 
        onNavigate={navigateTo} 
        themeColor={themeColor} 
      />
      
      <div className="flex-1 flex flex-col md:ml-64 min-h-screen transition-all duration-300 overflow-x-hidden">
        <Header 
          currentScreen={currentScreen} 
          onNavigate={navigateTo} 
          themeColor={themeColor}
          platformName={selectedPlatform?.toUpperCase() || 'NOVA'}
        />
        
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-center py-3 px-4 shadow-lg animate-pulse-slow border-b border-white/20 relative z-20">
          <p className="text-sm md:text-base font-bold tracking-wider uppercase">
            🚀 Use redeem code <span className="font-black bg-white/20 px-2 py-0.5 rounded">MJXHEART</span> to unlock special pricing! 🚀
          </p>
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col">
          <div className="max-w-6xl mx-auto w-full flex-1">
            {renderScreen()}
          </div>
          <Footer onNavigate={navigateTo} />
        </main>
      </div>

      <SupportChatBot />
    </div>
  );
};

export default App;
