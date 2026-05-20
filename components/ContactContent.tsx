import React, { useState } from 'react';
import { Mail, Clock, Send } from 'lucide-react';
import { submitQuery } from '../lib/firebase';

interface ContactContentProps {
  isHomePage?: boolean;
}

const ContactContent: React.FC<ContactContentProps> = ({ isHomePage = false }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const res = await submitQuery(formData);
    if (res.success) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="space-y-6 md:space-y-8 px-4 md:px-0">
      <section className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden">
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Get in Touch with Nova Ai Technologies</h2>
        <p className="text-gray-400 font-light leading-relaxed text-base">We're here to help you with any questions, concerns, or feedback regarding our services. Our dedicated support team is committed to providing you with the best possible assistance.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden">
          <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            Corporate Office
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Company</span>
              <span className="text-sm font-bold text-white">Nova Ai Technologies Pvt Ltd</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email Support</span>
              <span className="text-sm font-bold text-white">novawroking1122@gmail.com</span>
            </div>
            {!isHomePage && (
              <>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Owner Name</span>
                  <span className="text-sm font-bold text-white">Singh Ankit Vijay</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No</span>
                  <span className="text-sm font-bold text-blue-400">9512194144</span>
                </div>
              </>
            )}
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Address</span>
              <span className="text-sm text-gray-400 font-light">218, Kimavati complex kim, 394110, Surat Gujarat</span>
            </div>
            {isHomePage && (
              <div className="flex flex-col gap-1 mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <span className="text-sm font-medium text-blue-400 leading-relaxed">
                  Please submit your details in the inquiry form. Our customer care team will connect with you shortly.
                </span>
              </div>
            )}
            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" /> Executive response time: 24-48 hours
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden">
          <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
               <Send className="w-5 h-5 text-blue-400" />
             </div>
             Send a Business Inquiry
          </h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400 ml-1">Full Name *</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500" placeholder="John Doe" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400 ml-1">Email Address *</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500" placeholder="john@example.com" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400 ml-1">Phone Number *</label>
              <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500" placeholder="+91 9876543210" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400 ml-1">Subject *</label>
              <select required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all [&>option]:bg-[#111] [&>option]:text-white">
                <option value="" disabled>Select a subject</option>
                <option value="business-inquiry">Business Inquiry</option>
                <option value="technical-support">Technical Support</option>
                <option value="billing">Billing & Payment</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400 ml-1">Message *</label>
              <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Please describe your inquiry in detail..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-500"></textarea>
            </div>
            <button disabled={status === 'loading'} type="submit" className="w-full py-4 text-white font-bold text-sm tracking-wide rounded-xl hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all mt-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-70">
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Query Submitted Successfully!' : status === 'error' ? 'Error Submitting Query' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;
