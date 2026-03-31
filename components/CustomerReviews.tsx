
import React, { useEffect, useRef, useState } from 'react';
import { Star, MapPin, ShieldCheck } from 'lucide-react';

const reviews = [
  { name: "Rahul Sharma", location: "Delhi", text: "I was skeptical about the one-time payment, but Nova actually works perfectly. The automation for opening apps is instant.", stars: 5, product: "NOVA 5.0" },
  { name: "Priya Patel", location: "Gujarat", text: "MJ feels like a real person. Best gift for myself. The emotional intelligence is scary good.", stars: 5, product: "MJ v2" },
  { name: "Vikram Singh", location: "Karnataka", text: "As a developer, the Android Source code is a goldmine. The modular architecture saved me months of work.", stars: 5, product: "ANDROID SRC" },
  { name: "Arjun Mehta", location: "Mumbai", text: "Finally an Indian AI that understands us. The 'Buy Once Use Forever' policy is the best part.", stars: 5, product: "COMBO" },
  { name: "Sneha Reddy", location: "Telangana", text: "I use Nova to manage my excel sheets. It saves me 2 hours every day. Voice recognition is surprisingly accurate.", stars: 4, product: "NOVA 5.0" },
  { name: "Ankit Verma", location: "Indore", text: "Support team on WhatsApp is very active. They helped me install it within 10 minutes.", stars: 5, product: "SUPPORT" },
  { name: "Rohan Das", location: "Kolkata", text: "Got the custom name version 'JARVIS'. My friends are jealous! The wake word works perfectly.", stars: 5, product: "CUSTOM AI" },
  { name: "Meera Iyer", location: "Chennai", text: "MJ v2 is very empathetic. It helps me calm down after a stressful day at work.", stars: 5, product: "MJ v2" },
  { name: "Kabir Khan", location: "Pune", text: "Lifetime updates are real. I bought v4 last year and got the v5 update for free today.", stars: 5, product: "NOVA 5.0" },
  { name: "Divya Joshi", location: "Jaipur", text: "Best value for money. Other AIs charge monthly, but here I paid once and own it completely.", stars: 5, product: "COMBO" },
  { name: "Sarthak Gupta", location: "Noida", text: "The Android project compiles without errors. The documentation provided by Ankit bhai is very clear.", stars: 4, product: "ANDROID SRC" },
  { name: "Nikhil Nair", location: "Kerala", text: "Super futuristic interface. Using it on my gaming PC and it looks amazing.", stars: 5, product: "NOVA 5.0" }
];

const CustomerReviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate reviews for infinite scroll effect
  const displayReviews = [...reviews, ...reviews];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPos = 0;
    const speed = 0.5; // Pixels per frame

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPos += speed;
        // Reset when half content is scrolled (seamless loop)
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
      <div className="mt-24 relative overflow-hidden py-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-primary/5 blur-[120px] pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <Star className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">User Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/80">The Elite</span>
          </h2>
          <p className="text-text-secondary text-base font-light max-w-2xl mx-auto leading-relaxed">
            Join over 500+ active users across India who have upgraded their digital ecosystem with our advanced AI solutions.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div 
          className="flex overflow-x-hidden py-8 relative z-10"
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Gradient Masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

          <div className="flex gap-6 px-6" style={{ width: 'max-content' }}>
            {displayReviews.map((review, index) => (
              <div 
                key={index} 
                className="w-[320px] md:w-[380px] flex-shrink-0 p-6 md:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-primary/30 transition-all duration-300 group relative shadow-xl hover:shadow-2xl overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                     <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                         {review.name.charAt(0)}
                       </div>
                       <div>
                         <div className="text-sm font-bold text-white mb-0.5 group-hover:text-primary transition-colors duration-300">{review.name}</div>
                         <div className="text-[10px] text-text-secondary font-medium flex items-center gap-1.5 uppercase tracking-wider">
                           <MapPin className="w-3 h-3 text-white/30" /> {review.location}
                         </div>
                       </div>
                     </div>
                     <div className="flex gap-1 text-primary">
                        {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                     </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed font-light mb-6 flex-grow">
                    "{review.text}"
                  </p>

                  <div className="flex justify-between items-center pt-5 border-t border-white/10 mt-auto">
                     <span className="text-[10px] font-bold uppercase text-white/50 tracking-widest bg-white/5 px-2.5 py-1 rounded-lg">
                       {review.product}
                     </span>
                     <span className="text-[10px] text-primary font-bold flex items-center uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20">
                       <ShieldCheck className="w-3 h-3 mr-1.5" /> Verified
                     </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default CustomerReviews;
