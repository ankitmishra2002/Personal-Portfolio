import React from 'react';
import { MapPin, GraduationCap, Heart, Languages, Briefcase, Quote, CheckCircle2 } from 'lucide-react';

const AboutSection = ({ isDarkMode }) => {
  return (
    <section id="about" className="py-20 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>About </span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className={`text-base sm:text-lg font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Get to know me better
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Framed Image with Status Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">

              {/* Outer decorative card */}
              <div className={`rounded-3xl p-3 border transition-all duration-300 shadow-2xl ${isDarkMode
                ? 'bg-[#131b2e]/90 border-slate-800/80 shadow-blue-950/40'
                : 'bg-white border-slate-200 shadow-slate-200'
                }`}>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 relative">
                  <img
                    src="/ankit-mishra.jpg"
                    alt="Ankit Mishra About"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 via-transparent to-transparent opacity-50" />
                </div>
              </div>

              {/* Floating Status Badge overlay */}
              <div className={`absolute -bottom-6 right-2 sm:-right-4 p-4 rounded-2xl border shadow-xl backdrop-blur-md flex items-center gap-3.5 z-20 ${isDarkMode
                ? 'bg-[#0e1628]/95 border-blue-500/30 text-white shadow-black/40'
                : 'bg-white/95 border-blue-200 text-slate-900 shadow-slate-300'
                }`}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      Fresher
                    </span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-300 dark:text-slate-300 mt-1">Open to Work</p>
                  <p className="text-xs text-blue-400 font-bold">Full Stack Developer</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Information Grid */}
          <div className="lg:col-span-7 space-y-8 mt-6 lg:mt-0">

            {/* Bio Paragraph */}
            <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              I'm <span className="font-bold text-blue-400">Ankit Kumar Mishra</span>, a passionate Full Stack Developer who loves building modern web applications and exploring new technologies. I enjoy turning ideas into real products and continuously learning to improve my skills.
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'India', icon: MapPin, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
                { label: 'Education', value: 'B.Tech in Computer Science', icon: GraduationCap, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
                { label: 'Interests', value: 'Web Development, DSA, Open Source', icon: Heart, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
                { label: 'Languages', value: 'English, Hindi', icon: Languages, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all duration-300 hover:border-blue-500/40 flex items-start gap-3.5 ${isDarkMode
                      ? 'bg-[#131b2e]/80 border-slate-800/80 text-white'
                      : 'bg-white border-slate-200 text-slate-900 shadow-sm'
                      }`}
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 ${item.bg} ${item.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-0.5">{item.label}</h4>
                      <p className="text-sm sm:text-base font-semibold text-slate-200 dark:text-slate-200">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Quote Box */}
            <div className={`p-6 rounded-2xl border relative overflow-hidden flex items-center gap-4 ${isDarkMode
              ? 'bg-[#131b2e]/90 border-slate-800 text-white shadow-lg'
              : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}>
              <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400 shrink-0">
                <Quote className="w-6 h-6 rotate-180" />
              </div>
              <p className="text-base sm:text-lg font-bold italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-400">
                "Code. Learn. Build. Repeat."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
