import React, { useState } from 'react';
import { ExternalLink, Code2, Plus, Sparkles, X, Check } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'AcadBuddy Educational Platform',
    shortName: 'ACADBUDDY',
    category: 'Full Stack',
    imageBg: 'from-emerald-600/30 via-teal-900/40 to-slate-900',
    headerIcon: ' ACADBUDDY',
    description: 'AI-powered academic workspace for subjects, revision, exams, and community learning.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Open Router', 'Cloudinary'],
    liveUrl: 'https://acadbuddy.vercel.app/',
    codeUrl: 'https://github.com/ankitmishra2002/Acadbuddy',
    details: 'AcadBuddy is a full-stack educational platform that helps students organize subjects, generate AI-assisted notes and reports, prepare for exams, run quick revision sessions, and share materials in a community feed.'
  },
  {
    id: 2,
    title: 'E-waste & E-commerce platform',
    shortName: 'E-commerce and E-waste Management Platform',
    category: 'Full Stack',
    imageBg: 'from-indigo-600/30 via-purple-900/40 to-slate-900',
    headerIcon: '📋 E-commerce and E-waste Management Platform',
    description: 'Empowering circular economy through retail e-commerce and certified green e-waste collection.',
    tags: ['React', 'Express.js', 'MongoDB'],
    liveUrl: 'https://github.com/ankitmishra2002/E-Commerce-and-E-Waste-Management-System',
    codeUrl: 'https://github.com/ankitmishra2002/E-Commerce-and-E-Waste-Management-System',
    details: 'SparkIT is a full-stack, enterprise-grade marketplace designed to solve the growing environmental challenge of electronic waste (E-Waste) while delivering a premium, modern retail E-Commerce shopping experience'
  },

  {
    id: 3,
    title: 'AI Email Generator',
    shortName: 'AI Email',
    category: 'Full Stack',
    imageBg: 'from-rose-600/30 via-pink-900/40 to-slate-900',
    headerIcon: '✉️ AI Email',
    description: 'AI-powered personalized email replies with tone customization.',
    tags: ['React', 'Node.js', 'OpenAI API'],
    liveUrl: 'https://github.com/ankitmishra2002/AI-Email-Reply-Generator',
    codeUrl: 'https://github.com/ankitmishra2002/AI-Email-Reply-Generator',
    details: 'Allows selecting formal, persuasive, or casual tones, automatic summary extraction, and browser extension plugin.'
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    shortName: 'Portfolio',
    category: 'Frontend',
    imageBg: 'from-blue-600/30 via-violet-900/40 to-slate-900',
    headerIcon: '👤 Portfolio',
    description: 'My own portfolio website built with modern technologies.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://ankitmishra.example.com',
    codeUrl: 'https://github.com/ankitmishra/portfolio',
    details: 'Fully responsive glassmorphism dark aesthetic portfolio showcasing skills, projects, and contact details.'
  }
];

const categories = ['All', 'Web Apps', 'Full Stack', 'Frontend', 'Others'];

const ProjectsSection = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Web Apps') return true; // All are web apps
    if (activeCategory === 'Others') return project.category === 'Others' || project.category === 'Frontend';
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>My </span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`text-base sm:text-lg font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A collection of my recent work
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${isActive
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : isDarkMode
                    ? 'bg-[#131b2e] border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col group ${isDarkMode
                ? 'bg-[#131b2e]/90 border-slate-800/90 shadow-lg shadow-black/30 hover:border-blue-500/40'
                : 'bg-white border-slate-200 shadow-md hover:border-blue-400'
                }`}
            >

              {/* Project Card Header Graphic */}
              <div className={`h-44 w-full bg-gradient-to-br ${project.imageBg} relative p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-radial-glow opacity-60" />

                {/* Header Tag */}
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Banner Graphic Center */}
                <div className="relative z-10 text-center py-2">
                  <span className="text-2xl font-black tracking-wider text-white drop-shadow-lg">
                    {project.headerIcon}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-xs px-2.5 py-1 rounded-md font-medium border ${isDarkMode
                        ? 'bg-blue-950/40 border-blue-800/50 text-blue-300'
                        : 'bg-blue-50 border-blue-200 text-blue-700'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-xs font-bold">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors group/btn"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <span>View Code</span>
                    <Code2 className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}

          {/* Special "More Projects Coming Soon..." Card */}
          <div className={`rounded-3xl border-2 border-dashed p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[360px] transition-all duration-300 ${isDarkMode
            ? 'border-slate-800 bg-[#131b2e]/40 hover:border-blue-500/50 hover:bg-[#131b2e]/80'
            : 'border-slate-300 bg-slate-50/50 hover:border-blue-400 hover:bg-white'
            }`}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
              <Plus className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-200 dark:text-slate-200">
                More Projects
              </h3>
              <p className="text-sm font-semibold text-blue-400 mt-1">
                Coming Soon...
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Project Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className={`max-w-lg w-full rounded-3xl p-6 border shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200 ${isDarkMode ? 'bg-[#131b2e] border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}>

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={`h-40 rounded-2xl bg-gradient-to-br ${selectedProject.imageBg} flex items-center justify-center`}>
              <span className="text-3xl font-black text-white drop-shadow-md">
                {selectedProject.headerIcon}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="font-bold text-blue-400 block">Key Features & Highlights:</span>
              <p>{selectedProject.details}</p>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-center text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Demo</span>
              </a>
              <a
                href={selectedProject.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 font-bold text-slate-200 text-center text-sm flex items-center justify-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
