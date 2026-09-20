import React from 'react';
import { ArrowRight, Mail, Zap, FolderCheck, Briefcase, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, GmailIcon } from './SocialIcons';

const HeroSection = ({ isDarkMode, onOpenCvModal }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">

      {/* Background ambient glowing blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">

            {/* Greeting Tag */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border ${isDarkMode
              ? 'bg-blue-950/40 border-blue-800/50 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}>
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Hi, I'm</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>Ankit Kumar </span>
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Mishra
                </span>
              </h1>
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Full Stack Developer
              </h2>
            </div>

            {/* Short Bio Paragraph */}
            <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
              I build modern, scalable and user-friendly web applications that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all duration-300 ${isDarkMode
                  ? 'bg-[#131b2e]/80 border-slate-700/80 text-white hover:bg-slate-800 hover:border-slate-600'
                  : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                  }`}
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: GithubIcon, href: 'https://github.com/ankitmishra2002', label: 'GitHub' },
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ankit-mishra-bb1967284/', label: 'LinkedIn' },
                { icon: TwitterIcon, href: 'https://x.com/Ankitmi23961841', label: 'Twitter' },
                { icon: GmailIcon, href: 'mailto:ankitmishra84763@gmail.com', label: 'Email' }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 border ${isDarkMode
                      ? 'bg-[#131b2e] border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-950/30 hover:scale-110 shadow-md'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 hover:scale-110 shadow-sm'
                      }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">

            {/* Glow frame container */}
            <div className="relative group w-72 sm:w-80 lg:w-96 aspect-[4/5] rounded-3xl p-2 bg-gradient-to-b from-blue-500/30 via-indigo-500/20 to-purple-500/30 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-900/40">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0d1322] relative">
                <img
                  src="/ankit-mishra.jpg"
                  alt="Ankit Mishra"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient bottom shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Highlights / Stats Bar (Grid of 4 Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20">
          {[
            { title: '3+', subtitle: 'Projects Completed', icon: FolderCheck, iconColor: 'text-blue-400' },
            { title: '⚡', subtitle: 'Problem Solver', icon: Zap, iconColor: 'text-amber-400' },
            { title: '⚡', subtitle: 'Fast Learner', icon: Zap, iconColor: 'text-cyan-400' },
            { title: '💼', subtitle: 'Open to Opportunities', icon: Briefcase, iconColor: 'text-purple-400' },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${isDarkMode
                  ? 'bg-[#131b2e]/90 border-slate-800/90 text-white shadow-lg shadow-black/20 hover:border-blue-500/40'
                  : 'bg-white border-slate-200 text-slate-900 shadow-md hover:border-blue-400'
                  }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {item.title}
                  </span>
                  <div className={`p-2 rounded-xl ${isDarkMode ? 'bg-slate-800/80' : 'bg-slate-100'} ${item.iconColor}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                <p className={`text-xs sm:text-sm font-semibold tracking-wide ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
