
import React from 'react';
import { Star, MapPin, ShieldCheck, Quote } from 'lucide-react';

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

// Split reviews into two rows for a richer layout
const row1 = reviews.slice(0, 6);
const row2 = reviews.slice(6, 12);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="w-[350px] md:w-[400px] flex-shrink-0 p-8 rounded-[2rem] bg-[#09090b] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-500 group relative shadow-2xl overflow-hidden flex flex-col">
    {/* Subtle gradient glow inside card */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-start justify-between mb-8">
         <div className="flex items-center gap-4">
           <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-500 shadow-inner">
             {review.name.charAt(0)}
           </div>
           <div>
             <div className="text-sm font-bold text-white mb-1 group-hover:text-gray-200 transition-colors duration-300">{review.name}</div>
             <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
               <MapPin className="w-3 h-3 text-gray-600" /> {review.location}
             </div>
           </div>
         </div>
         <div className="flex gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.05]">
            {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-3 h-3 fill-white text-white" />)}
         </div>
      </div>

      <p className="text-gray-400 text-[14px] leading-relaxed font-medium mb-10 flex-grow">
        "{review.text}"
      </p>

      <div className="flex justify-between items-center pt-5 border-t border-white/[0.05] mt-auto">
         <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/[0.05]">
           {review.product}
         </span>
         <span className="text-[10px] text-white font-bold flex items-center uppercase tracking-widest bg-white/[0.05] px-3 py-1.5 rounded-lg border border-white/[0.1]">
           <ShieldCheck className="w-3 h-3 mr-1.5" /> Verified
         </span>
      </div>
    </div>
  </div>
);

const CustomerReviews: React.FC = () => {
  return (
      <div className="mt-24 relative overflow-hidden py-24 bg-[#020202]">
        <style>
          {`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee-left {
              animation: marquee-left 40s linear infinite;
            }
            .animate-marquee-right {
              animation: marquee-right 40s linear infinite;
            }
            .marquee-container:hover .animate-marquee-left,
            .marquee-container:hover .animate-marquee-right {
              animation-play-state: paused;
            }
          `}
        </style>

        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-purple-500/[0.03] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-20 relative z-10 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
            <Star className="w-4 h-4 text-white" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">Wall of Love</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-500">The Elite</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Join over 500+ active users across India who have upgraded their digital ecosystem with our advanced AI solutions.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative z-10 flex flex-col gap-8 marquee-container">
          {/* Gradient Masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none"></div>

          {/* Row 1: Scrolling Left */}
          <div className="flex overflow-hidden">
            <div className="flex gap-8 px-4 animate-marquee-left w-max">
              {[...row1, ...row1, ...row1, ...row1].map((review, index) => (
                <ReviewCard key={`r1-${index}`} review={review} />
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex overflow-hidden">
            <div className="flex gap-8 px-4 animate-marquee-right w-max">
              {[...row2, ...row2, ...row2, ...row2].map((review, index) => (
                <ReviewCard key={`r2-${index}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default CustomerReviews;
