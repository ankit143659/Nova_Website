
import React, { useState, useRef, useEffect } from 'react';
import { X, Bot, Monitor, ChevronDown, Send } from 'lucide-react';

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
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-transparent ${isOpen ? 'rotate-90' : 'animate-bounce-slow'}`}
        aria-label="Open Support Chat"
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <Bot className="w-8 h-8" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></span>
        )}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed z-50 bg-[#09090b] border border-white/[0.1] shadow-2xl transition-all duration-500 overflow-hidden flex flex-col origin-bottom-right
          ${isOpen 
            ? 'bottom-24 right-4 w-[90vw] sm:w-[380px] h-[70vh] sm:h-[600px] opacity-100 scale-100 rounded-3xl' 
            : 'bottom-6 right-6 w-0 h-0 opacity-0 scale-0 rounded-full'
          }
        `}
      >
        {/* Header */}
        <div className="p-4 bg-white/[0.02] border-b border-white/[0.08] flex items-center justify-center relative">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
                 <Monitor className="w-5 h-5" />
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#09090b] shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase">NOVA NEXUS</h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest animate-pulse">Online</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="absolute right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar bg-transparent">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-in slide-in-from-bottom-2 duration-300`}
            >
              <div 
                className={`max-w-[85%] p-4 rounded-2xl text-xs md:text-sm leading-relaxed shadow-lg ${
                  msg.sender === 'user' 
                    ? 'bg-white text-black font-medium border border-white rounded-tr-sm' 
                    : 'bg-white/[0.05] text-gray-300 border border-white/[0.1] rounded-tl-sm hover:border-white/[0.2] transition-colors'
                }`}
              >
                {msg.text}
                <div className={`text-[9px] mt-2 opacity-60 font-mono text-right ${msg.sender === 'user' ? 'text-black' : 'text-gray-500'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>

              {msg.sender === 'bot' && msg.showWhatsAppButton && (
                <div className="hidden"></div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/[0.05] border border-white/[0.1] px-4 py-3 rounded-2xl rounded-tl-sm flex space-x-1 items-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-transparent border-t border-white/[0.08] flex space-x-3">
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:border-white/[0.3] outline-none transition-all placeholder:text-gray-500 font-medium"
          />
          <button 
            type="submit"
            disabled={!inputText.trim() || isTyping}
            className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 disabled:bg-gray-700 disabled:text-gray-400"
          >
            <Send className="w-5 h-5" />
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
