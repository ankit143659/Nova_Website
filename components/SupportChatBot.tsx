
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: React.ReactNode;
  sender: 'user' | 'bot';
  timestamp: Date;
  isError?: boolean;
  showWhatsAppButton?: boolean;
}

const PREDEFINED_RULES = [
  {
    keywords: ['price', 'cost', 'how much', 'rate', 'pricing'],
    answer: "💰 **Product Pricing:**\n\n• **NOVA 5.0**: ₹899\n• **MJ v2**: ₹899\n• **Android Source**: ₹1499\n• **Custom Name AI**: ₹1999"
  },
  {
    keywords: ['offer', 'discount', 'code', 'promo', 'valentine', 'bogo', 'mj'],
    answer: "✨ **Special Offer:**\n\n**MJ v2 Emotion AI** is available for ₹899 (Lifetime License).\n\nUse code **MJAIV2** for discount."
  },
  {
    keywords: ['nova', 'vadryk', 'windows', 'pc'],
    answer: "⚡ **NOVA 5.0 (Vadryk Engine)**:\n\nOur flagship Windows assistant. It can control your mouse, type for you, open apps, and manage system settings autonomously."
  },
  {
    keywords: ['android', 'mobile', 'app', 'source', 'kotlin', 'java'],
    answer: "📱 **Android Source Code:**\n\nGet the full **Android Studio Project** (Java/Kotlin) for ₹1499.\nIncludes 30+ modules, Voice Core, and UI assets. Ready to build your own assistant."
  },
  {
    keywords: ['payment', 'pay', 'money', 'fail', 'deducted', 'transaction', 'pending'],
    answer: "💳 **Payment Issue?**\n\nDon't panic! Your money is safe.\n\n1. Take a screenshot of the payment.\n2. Email it to us at **novawroking1122@gmail.com** for immediate assistance."
  },
  {
    keywords: ['refund', 'return', 'cancel', 'money back'],
    answer: "🚫 **Refund Policy:**\n\nSince this is a digital product (Source Code & License Keys), requests are generally **non-refundable** once the key is delivered.\n\nIf the key is invalid, we will replace it."
  },
  {
    keywords: ['delivery', 'receive', 'get', 'time', 'shipping', 'mail', 'email'],
    answer: "🚀 **Instant Delivery:**\n\n1. Complete Payment.\n2. Submit details in the form.\n3. Receive **Activation Key & App Link** on **WhatsApp** within 5-15 minutes."
  },
  {
    keywords: ['hello', 'hi', 'hey', 'start', 'help'],
    answer: "Hello! I am **NOVA NEXUS**. 🤖\n\nI can help you with **Pricing, Offers, and Delivery**.\n\nType your question below! 🚀"
  }
];

const SupportChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: (
        <span>
          Hello! I am <strong>NOVA NEXUS</strong>. 🤖<br/><br/>
          I can help you with pricing, installation, and payment queries.<br/><br/>
          How can I help you today?
        </span>
      ),
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  // Basic Markdown Formatter for AI Responses
  const formatResponse = (text: string): React.ReactNode => {
    if (!text) return null;
    const lines = text.split('\n');
    return (
      <span className="block space-y-1">
        {lines.map((line, i) => {
          if (line.trim().startsWith('• ') || line.trim().startsWith('- ')) {
            return <span key={i} className="block pl-4">• {formatBold(line.substring(2))}</span>;
          }
          if (line.trim() === '') return <br key={i}/>;
          return <span key={i} className="block">{formatBold(line)}</span>;
        })}
      </span>
    );
  };

  const formatBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const findAnswer = (input: string): { text: string, showWhatsApp: boolean } | null => {
    const lowerInput = input.toLowerCase();
    
    for (const rule of PREDEFINED_RULES) {
      if (rule.keywords.some(keyword => lowerInput.includes(keyword))) {
        return { 
          text: rule.answer, 
          showWhatsApp: rule.showWhatsApp || false 
        };
      }
    }
    return null;
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    const userMsg: Message = {
      id: Date.now(),
      text: userText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const match = findAnswer(userText);
      let botResponse: Message;

      if (match) {
        botResponse = {
          id: Date.now() + 1,
          text: formatResponse(match.text),
          sender: 'bot',
          timestamp: new Date(),
          showWhatsAppButton: false
        };
      } else {
        // Fallback for 0% match
        botResponse = {
          id: Date.now() + 1,
          text: formatResponse("🤔 I'm not sure about that.\n\nPlease email us at **novawroking1122@gmail.com** for detailed assistance."),
          sender: 'bot',
          timestamp: new Date(),
          showWhatsAppButton: false
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-black shadow-[0_0_40px_rgba(0,242,255,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20 ${isOpen ? 'rotate-90' : 'animate-bounce-slow'}`}
        aria-label="Open Support Chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
             <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12h1.5m12 0h1.5m-1.5 3.75h1.5m-16.5 0h1.5M12 3v2.25m0 12.75V12m0 12.75v-1.5M12 21.75c-1.371 0-2.628-.276-3.75-.783-1.636-.74-2.92-1.956-3.763-3.468C4.09 16.666 4.29 15.698 4.5 14.815c.196-.827.818-1.5 1.636-1.77.72-.239 1.488-.367 2.276-.376a6.006 6.006 0 015.176 0c.788.009 1.556.137 2.276.376.818.27 1.44.943 1.636 1.77.21.883.41 1.851.013 2.689-.843 1.512-2.127 2.728-3.763 3.469-1.122.507-2.379.783-3.75.783z" />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></span>
        )}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed z-50 bg-[#0a0a12]/95 backdrop-blur-xl border border-primary/40 shadow-2xl transition-all duration-500 overflow-hidden flex flex-col origin-bottom-right
          ${isOpen 
            ? 'bottom-24 right-4 w-[90vw] sm:w-[380px] h-[70vh] sm:h-[600px] opacity-100 scale-100 rounded-[2rem]' 
            : 'bottom-6 right-6 w-0 h-0 opacity-0 scale-0 rounded-full'
          }
        `}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-primary/20 via-surface to-secondary/20 border-b border-white/10 flex items-center justify-center relative">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center border border-primary/50 shadow-inner text-primary">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                 </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-surface shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-white text-sm tracking-wider">NOVA NEXUS</h3>
              <p className="text-[10px] text-primary/80 font-bold uppercase tracking-widest animate-pulse">Online</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="absolute right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar bg-gradient-to-b from-transparent to-black/20">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-in slide-in-from-bottom-2 duration-300`}
            >
              <div 
                className={`max-w-[85%] p-4 rounded-2xl text-xs md:text-sm leading-relaxed shadow-lg backdrop-blur-sm ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-to-br from-primary to-primary/80 text-black font-bold rounded-tr-none' 
                    : 'bg-white/5 text-text-secondary border border-white/10 rounded-tl-none hover:border-primary/30 transition-colors'
                }`}
              >
                {msg.text}
                <div className={`text-[9px] mt-2 opacity-60 font-mono text-right ${msg.sender === 'user' ? 'text-black' : 'text-text-secondary'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>

              {/* WhatsApp Fallback Button Removed */}
              {msg.sender === 'bot' && msg.showWhatsAppButton && (
                <div className="hidden"></div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-none border border-white/5 flex space-x-1 items-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/5 flex space-x-3 backdrop-blur-md">
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type 'price', 'offer', 'support'..."
            className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary focus:bg-white/10 outline-none transition-all placeholder:text-text-secondary/50 font-medium"
          />
          <button 
            type="submit"
            disabled={!inputText.trim() || isTyping}
            className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 text-black rounded-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 disabled:grayscale"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
      
      <style>{`
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </>
  );
};

export default SupportChatBot;
