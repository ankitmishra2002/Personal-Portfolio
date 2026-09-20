import React from 'react';
import { Quote } from 'lucide-react';

// Custom SVG Icons for Tech Stack to accurately mirror the design badges
const TechIcons = {
  html5: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 3l1.8 17 6.2 1.8 6.2-1.8L20 3H4z" fill="#E44D26" stroke="none" />
      <path d="M12 5v14.5l4.6-1.3L18 5H12z" fill="#F16529" stroke="none" />
      <path d="M7.5 7.5h9l-.4 3.5H12v3.5h3.8l-.4 4-3.4 1v-3.5" fill="none" stroke="#FFF" strokeWidth="1.5" />
    </svg>
  ),
  css3: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M4 3l1.8 17 6.2 1.8 6.2-1.8L20 3H4z" fill="#264DE4" />
      <path d="M12 5v14.5l4.6-1.3L18 5H12z" fill="#2965F1" />
      <path d="M7.5 7.5h9l-.4 3.5H12v3.5h3.8l-.4 4-3.4 1" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  javascript: (
    <svg className="w-8 h-8" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M12.5 17.5c.8 1.2 2.2 1.5 3.5.8 1-.6 1.2-1.8.6-2.6-.4-.5-1.2-.8-2-1.1l-.8-.3c-1.4-.5-2.2-1.5-2.2-2.8 0-1.8 1.5-3 3.5-3 1.5 0 2.8.6 3.5 1.8l-1.6 1c-.4-.7-1.1-1-1.9-1-.8 0-1.5.5-1.5 1.2 0 .5.3.9 1 1.2l.8.3c1.8.7 2.8 1.7 2.8 3.1 0 2.1-1.6 3.4-4 3.4-2.1 0-3.6-.9-4.3-2.5l1.8-1.1zm-6.2.2c.6.9 1.4 1.3 2.5 1.3.8 0 1.4-.4 1.4-1.2V9.5h2.2v8.2c0 2.2-1.5 3.3-3.6 3.3-1.8 0-3.2-.8-3.9-2.3l1.4-1.2z" fill="#000" />
    </svg>
  ),
  react: (
    <svg className="w-8 h-8 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  ),
  tailwind: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#06B6D4">
      <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6 1 2.4 1.8 1.3 1.3 2.8 2.8 6.4 2.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-1-2.4-1.8-1.3-1.3-2.8-2.8-6.4-2.8zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6 1 2.4 1.8 1.3 1.3 2.8 2.8 6.4 2.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-1-2.4-1.8-1.3-1.3-2.8-2.8-6.4-2.8z" />
    </svg>
  ),
  nodejs: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#339933">
      <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.5l6.5 3.8v7.5L12 19.5l-6.5-3.7V8.3L12 4.5z" />
    </svg>
  ),
  express: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" className="fill-slate-900 dark:fill-slate-100" />
      <path d="M7.5 17.5h7.5c0-3.2-1.8-5-4.5-5s-4.5 1.8-4.5 5c0 3.2 2 5 4.7 5 2.3 0 3.9-1.1 4.4-2.7h-2c-.4.7-1.3 1.1-2.4 1.1-1.6 0-2.7-1-2.9-2.5zm2.6-3.3c1.3 0 2.1.8 2.2 1.9h-4.3c.2-1.1 1-1.9 2.1-1.9z" className="fill-white dark:fill-slate-900" />
      <path d="M16.5 12.8h2.3l2.2 3.4 2.2-3.4h2.3l-3.3 4.8 3.5 5.2h-2.3l-2.4-3.7-2.4 3.7h-2.3l3.5-5.2-3.3-4.8z" className="fill-white dark:fill-slate-900" />
    </svg>
  ),
  java: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M8.5 18s-1 1 2 1c3.5 0 5.5-1.5 5.5-1.5M7 15.5s-1.5 1.5 3 1.5c4.5 0 6.5-2 6.5-2" stroke="#E76F00" strokeWidth="1.5" />
      <path d="M11 6c-1 1-1.5 2.5 0 4 .8.8 2 1.5 1 3" stroke="#5382A1" strokeWidth="1.5" />
    </svg>
  ),
  restapi: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M7 12h10M12 8v8" strokeLinecap="round" />
    </svg>
  ),
  mongodb: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#47A248">
      <path d="M12 2s-5 4.5-5 10.5c0 3.5 2.2 6.5 5 7.5 2.8-1 5-4 5-7.5C17 6.5 12 2 12 2zm0 15v-5" stroke="#47A248" strokeWidth="2" />
    </svg>
  ),
  mysql: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#4479A1">
      <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 15c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
    </svg>
  ),
  git: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F05032">
      <path d="M21.7 10.7l-8.4-8.4c-.4-.4-1-.4-1.4 0l-1.9 1.9 2.4 2.4c.4-.1.9 0 1.2.3.5.5.5 1.3 0 1.8-.4.4-1.1.5-1.6.2l-2.3 2.3v3.1c.3.2.5.6.5 1 0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3c0-.4.2-.8.5-1v-4.1c-.3-.2-.5-.6-.5-1 0-.5.3-.9.7-1.1l-2.4-2.4-5.3 5.3c-.4.4-.4 1 0 1.4l8.4 8.4c.4.4 1 .4 1.4 0l9.8-9.8c.4-.4.4-1 0-1.4z" />
    </svg>
  ),
  github: (
    <svg className="w-8 h-8 text-slate-800 dark:text-slate-200" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  vscode: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#007ACC">
      <path d="M23.15 2.587L18.21.21a1.49 1.49 0 00-1.7.34l-8.6 8.04-4.58-3.47a1.05 1.05 0 00-1.39.11L.26 6.85a1.05 1.05 0 000 1.47l4.16 3.68-4.16 3.68a1.05 1.05 0 000 1.47l1.68 1.62a1.05 1.05 0 001.39.11l4.58-3.47 8.6 8.04a1.49 1.49 0 001.7.34l4.94-2.38A1.49 1.49 0 0024 20.2V3.8a1.49 1.49 0 00-.85-1.213z" />
    </svg>
  ),
  postman: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF6C37">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  )
};

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: TechIcons.html5 },
      { name: 'CSS3', icon: TechIcons.css3 },
      { name: 'JavaScript', icon: TechIcons.javascript },
      { name: 'React', icon: TechIcons.react },
      { name: 'Tailwind CSS', icon: TechIcons.tailwind },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: TechIcons.nodejs },
      { name: 'Express.js', icon: TechIcons.express },
      { name: 'REST APIs', icon: TechIcons.restapi },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: TechIcons.mongodb },
      { name: 'MySQL', icon: TechIcons.mysql },
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: TechIcons.git },
      { name: 'GitHub', icon: TechIcons.github },
      { name: 'VS Code', icon: TechIcons.vscode },
      { name: 'Postman', icon: TechIcons.postman },
    ]
  }
];

const SkillsSection = ({ isDarkMode }) => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>My </span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className={`text-base sm:text-lg font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl ${isDarkMode
                ? 'bg-[#131b2e]/90 border-slate-800/90 text-white shadow-lg shadow-black/20'
                : 'bg-white border-slate-200 text-slate-900 shadow-md'
                }`}
            >
              <h3 className={`text-xl font-bold mb-6 pb-3 border-b flex items-center gap-2 ${
                isDarkMode ? 'border-slate-800 text-white' : 'border-slate-200 text-slate-900'
              }`}>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>{category.title}</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2.5 text-center group transition-all duration-300 hover:-translate-y-1 ${isDarkMode
                      ? 'bg-[#0b0f19]/70 border-slate-800 hover:bg-slate-800/50 hover:border-blue-500/30'
                      : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-blue-300 shadow-sm'
                      }`}
                  >
                    <div className="p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                      isDarkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-blue-600'
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Quote Box */}
        <div className={`mt-12 p-6 rounded-2xl border max-w-3xl mx-auto flex items-center justify-center gap-4 text-center ${isDarkMode
          ? 'bg-[#131b2e]/90 border-slate-800 text-white shadow-lg'
          : 'bg-white border-slate-200 text-slate-900 shadow-sm'
          }`}>
          <Quote className="w-6 h-6 text-blue-400 shrink-0 rotate-180" />
          <p className={`text-base sm:text-lg font-semibold italic ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            "Always eager to learn and work with new technologies."
          </p>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
