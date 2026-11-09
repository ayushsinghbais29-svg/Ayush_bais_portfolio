import React, { useState } from 'react';
import { X, Mail, Phone, MessageSquare, Linkedin, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { USER_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Simulate sending inquiry
    setIsSubmitted(true);
    setTimeout(() => {
      // Auto close or reset
    }, 4000);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#181818] border border-zinc-700/80 rounded-lg shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#141414] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-[#E50914] text-white flex items-center justify-center font-bold text-sm">
              N
            </span>
            <div>
              <h2 className="text-lg font-bold text-white font-['Montserrat']">
                Direct Connect & Inquiries
              </h2>
              <p className="text-xs text-zinc-400">
                Get in touch with {USER_INFO.name} for hiring, freelance, or consulting
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {/* Email */}
            <div className="p-3.5 bg-zinc-900/90 rounded border border-zinc-800 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded bg-red-950/50 text-[#E50914]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">Direct Email</p>
                  <a
                    href={`mailto:${USER_INFO.email}`}
                    className="text-white hover:text-[#E50914] font-medium truncate block"
                  >
                    {USER_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(USER_INFO.email, 'email')}
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone / WhatsApp */}
            <div className="p-3.5 bg-zinc-900/90 rounded border border-zinc-800 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded bg-emerald-950/50 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">Phone / WhatsApp</p>
                  <a
                    href={`tel:${USER_INFO.rawPhone}`}
                    className="text-white hover:text-emerald-400 font-mono font-medium truncate block"
                  >
                    +91 {USER_INFO.rawPhone}
                  </a>
                </div>
              </div>
              <a
                href={`https://wa.me/91${USER_INFO.rawPhone}?text=Hi%20Ayush,%20I%20reviewed%20your%20portfolio`}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-semibold whitespace-nowrap"
              >
                Chat
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-3.5 bg-zinc-900/90 rounded border border-zinc-800 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded bg-blue-950/50 text-blue-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">LinkedIn Profile</p>
                  <a
                    href={USER_INFO.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-blue-400 font-medium truncate block"
                  >
                    in/{USER_INFO.linkedInHandle}
                  </a>
                </div>
              </div>
              <a
                href={USER_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[11px] font-semibold whitespace-nowrap"
              >
                Connect
              </a>
            </div>

            {/* Location */}
            <div className="p-3.5 bg-zinc-900/90 rounded border border-zinc-800 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded bg-amber-950/50 text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">Location</p>
                  <p className="text-white font-medium truncate">
                    {USER_INFO.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="pt-2 border-t border-zinc-800">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-3">
              Send a Direct Message
            </h3>

            {isSubmitted ? (
              <div className="p-4 bg-emerald-950/40 border border-emerald-500/50 rounded text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Inquiry Dispatched!</h4>
                <p className="text-xs text-zinc-300">
                  Thank you! Your message has been prepared for Ayush. You can also reach him immediately via WhatsApp or Email above.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs text-emerald-400 underline font-medium"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-zinc-400 block mb-1">Your Name / Title</label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Jane Doe (Tech Lead)"
                      className="w-full bg-zinc-900 text-white p-2.5 rounded border border-zinc-700 focus:outline-none focus:border-[#E50914]"
                    />
                  </div>
                  <div>
                    <label className="text-zinc-400 block mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full bg-zinc-900 text-white p-2.5 rounded border border-zinc-700 focus:outline-none focus:border-[#E50914]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-zinc-400 block mb-1">Company / Project / Purpose</label>
                  <input
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder="e.g. Full-time role / Contract Data Analytics / Web Dev project"
                    className="w-full bg-zinc-900 text-white p-2.5 rounded border border-zinc-700 focus:outline-none focus:border-[#E50914]"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 block mb-1">Message or Offer Details</label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your requirements, timeline, or interview invitation..."
                    className="w-full bg-zinc-900 text-white p-2.5 rounded border border-zinc-700 focus:outline-none focus:border-[#E50914]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-zinc-500">
                    Typical response time: &lt; 24 hours
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#E50914] hover:bg-[#B81D24] text-white font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
