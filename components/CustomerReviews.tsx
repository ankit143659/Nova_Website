
import React, { useEffect, useRef, useState } from 'react';

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
    <div className="mt-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-primary/5 blur-[100px] pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-white/10 text-white/70 text-[10px] font-black uppercase tracking-widest mb-4 shadow-lg">
           <i className="fas fa-users text-primary"></i> Community Feedback
        </div>
        <h2 className="font-orbitron text-2xl md:text-4xl text-white font-black uppercase tracking-tighter mb-2">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">India's Tech Elite</span>
        </h2>
        <p className="text-text-secondary text-xs uppercase tracking-widest font-bold opacity-60">
          500+ Active Users across 28 States
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div 
        className="flex overflow-x-hidden py-4"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="flex gap-6 px-6">
          {displayReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[350px] flex-shrink-0 glass-card p-6 rounded-3xl bg-[#0a0a12]/40 hover:bg-[#151525] transition-all duration-300 hover:scale-105 group relative"
            >
              {/* Card Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                   <div className="flex items-center">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                       {review.name.charAt(0)}
                     </div>
                     <div className="ml-3">
                       <div className="text-sm font-bold text-white leading-tight">{review.name}</div>
                       <div className="text-[10px] text-text-secondary flex items-center mt-0.5">
                         <i className="fas fa-map-marker-alt mr-1 text-primary/70 text-[9px]"></i> {review.location}
                       </div>
                     </div>
                   </div>
                   <div className="text-yellow-500 text-[9px] flex gap-0.5 bg-yellow-500/5 px-2 py-1 rounded-full border border-yellow-500/10">
                      {[...Array(review.stars)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                   </div>
                </div>

                <p className="text-text-secondary text-xs leading-relaxed font-medium mb-6 flex-grow">
                  "{review.text}"
                </p>

                <div className="flex justify-between items-center border-t border-white/5 pt-3 mt-auto">
                   <span className="text-[9px] font-black uppercase text-primary/80 tracking-wider bg-primary/5 px-2 py-1 rounded border border-primary/10">
                     {review.product}
                   </span>
                   <span className="text-[9px] text-green-400 font-bold flex items-center opacity-80">
                     <i className="fas fa-check-circle mr-1"></i> Verified
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Swipe Hint for Mobile */}
      <div className="text-center md:hidden mt-4 text-text-secondary/30 text-[9px] uppercase tracking-widest font-bold animate-pulse">
        <i className="fas fa-hand-pointer mr-2"></i> Swipe to pause
      </div>
    </div>
  );
};

export default CustomerReviews;
