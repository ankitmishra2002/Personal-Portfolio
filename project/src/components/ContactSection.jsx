import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Quote, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, GmailIcon } from './SocialIcons';

const ContactSection = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>Get </span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              In Touch
            </span>
          </h2>
          <p className={`text-base sm:text-lg font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-3xl border shadow-xl ${isDarkMode
              ? 'bg-[#131b2e]/90 border-slate-800/90 text-white shadow-black/30'
              : 'bg-white border-slate-200 text-slate-900 shadow-md'
              }`}>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-semibold">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div className="space-y-2">
                  <label className={`text-xs uppercase font-bold tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode
                      ? 'bg-[#0b0f19] border-slate-800 text-white placeholder:text-slate-600'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'
                      }`}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className={`text-xs uppercase font-bold tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode
                      ? 'bg-[#0b0f19] border-slate-800 text-white placeholder:text-slate-600'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'
                      }`}
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className={`text-xs uppercase font-bold tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode
                      ? 'bg-[#0b0f19] border-slate-800 text-white placeholder:text-slate-600'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'
                      }`}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className={`text-xs uppercase font-bold tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Message</label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${isDarkMode
                      ? 'bg-[#0b0f19] border-slate-800 text-white placeholder:text-slate-600'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'
                      }`}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {loading ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

          {/* Right Column: Information Cards & Social Links */}
          <div className="lg:col-span-5 space-y-6">

            {/* Info Cards */}
            <div className="space-y-4">
              {[
                { label: 'Email', value: 'ankitmishra84763@gmail.com', icon: Mail, href: 'mailto:ankitmishra84763@gmail.com', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
                { label: 'Phone', value: '+91 80026 24955', icon: Phone, href: 'tel:+918002624955', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                { label: 'Location', value: 'Patna, Bihar,', icon: MapPin, href: '#', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className={`p-5 rounded-2xl border transition-all duration-300 hover:border-blue-500/40 flex items-center gap-4 group ${isDarkMode
                      ? 'bg-[#131b2e]/90 border-slate-800/90 text-white shadow-lg'
                      : 'bg-white border-slate-200 text-slate-900 shadow-sm'
                      }`}
                  >
                    <div className={`p-3 rounded-xl border shrink-0 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-xs uppercase font-bold tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</h4>
                      <p className={`text-base font-semibold transition-colors ${
                        isDarkMode ? 'text-slate-200 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-600'
                      }`}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Follow Me Social Bar */}
            <div className={`p-6 rounded-2xl border space-y-4 ${isDarkMode
              ? 'bg-[#131b2e]/90 border-slate-800/90 text-white'
              : 'bg-white border-slate-200 text-slate-900'
              }`}>
              <h4 className={`text-sm font-bold tracking-wide uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Follow Me</h4>
              <div className="flex items-center gap-4">
                {[
                  { icon: GithubIcon, href: 'https://github.com/ankitmishra2002', label: 'GitHub' },
                  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ankit-mishra-bb1967284/', label: 'LinkedIn' },
                  { icon: TwitterIcon, href: 'https://x.com/Ankitmi23961841', label: 'Twitter' },
                  { icon: GmailIcon, href: 'mailto:ankitmishra84763@gmail.com', label: 'Email' }
                ].map((s, idx) => {
                  const SIcon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${isDarkMode
                        ? 'bg-[#0b0f19] border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:scale-110'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-blue-600 hover:scale-110'
                        }`}
                    >
                      <SIcon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bottom Quote Card */}
            <div className={`p-6 rounded-2xl border flex items-start gap-4 ${isDarkMode
              ? 'bg-[#131b2e]/90 border-slate-800 text-white'
              : 'bg-white border-slate-200 text-slate-900'
              }`}>
              <Quote className="w-6 h-6 text-blue-400 shrink-0 rotate-180" />
              <p className={`text-sm font-semibold italic leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                "Feel free to reach out - I'm always open to new opportunities and interesting projects!"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
