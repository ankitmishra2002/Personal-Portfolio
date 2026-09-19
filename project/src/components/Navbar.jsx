import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Code2, Download } from 'lucide-react';

const Navbar = ({ activeSection, isDarkMode, toggleTheme, onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? isDarkMode 
          ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Ankit <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Mishra</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full ${
            isDarkMode 
              ? 'bg-[#131b2e]/80 border border-slate-800/80 shadow-inner' 
              : 'bg-slate-100 border border-slate-200'
          }`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : isDarkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Theme Toggle & Download CV */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                isDarkMode
                  ? 'bg-[#131b2e] border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Download CV Button */}
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-slate-900 dark:bg-[#131b2e] border border-blue-500/40 hover:border-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-blue-500/30 group"
            >
              <span>Download CV</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border ${
                isDarkMode ? 'bg-[#131b2e] border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isDarkMode ? 'bg-[#131b2e] border-slate-800 text-white' : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-4 pb-6 border-b shadow-2xl transition-all ${
          isDarkMode ? 'bg-[#0e1424] border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-blue-600 text-white'
                    : isDarkMode ? 'text-slate-300 hover:bg-slate-800/60' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-2 mt-2 border-t border-slate-800/50 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full py-3 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
