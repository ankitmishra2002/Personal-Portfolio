import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';

const Footer = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t transition-colors ${isDarkMode
        ? 'bg-[#090d16] border-slate-800/80 text-slate-400'
        : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
              <Code2 className="w-4 h-4" />
            </div>
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} <span className="font-bold text-white">Ankit Mishra</span>.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-6 text-sm font-semibold">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className={`p-3 rounded-xl border transition-all duration-300 hover:scale-110 ${isDarkMode
                ? 'bg-[#131b2e] border-slate-800 text-white hover:border-blue-500/50'
                : 'bg-white border-slate-200 text-slate-800 hover:border-blue-400'
              }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
