import React from 'react';
import { X, Download, FileText, CheckCircle2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose, isDarkMode }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ankit new cv.pdf';
    link.download = 'Ankit_Mishra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className={`max-w-2xl w-full rounded-3xl p-6 sm:p-8 border shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 ${isDarkMode ? 'bg-[#131b2e] border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}>

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Curriculum Vitae</h3>
              <p className="text-xs text-slate-400">Ankit Kumar Mishra - Full Stack Developer</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CV Preview Content */}
        <div className="space-y-6 text-sm text-slate-300">

          {/* Header Info */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">Ankit Kumar Mishra</h4>
              <p className="text-xs text-blue-400 font-semibold">Full Stack Developer | B.Tech CS</p>
            </div>
            <div className="text-xs space-y-1 text-slate-400">
              <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-400" /> ankitmishra84763@gmail.com</p>
              <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 80026 24955</p>
              <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-purple-400" /> India</p>
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h5 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Technical Capabilities</h5>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'Express.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'MongoDB', 'REST APIs', 'Git/GitHub'].map((skill, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-800/50 text-blue-300 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h5 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Featured Projects</h5>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <span className="font-bold text-white text-xs">AcadBuddy - AcadBuddy Educational Platform</span>
                <p className="text-xs text-slate-400">React, Node.js, MongoDB platform connecting donors with communities.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <span className="font-bold text-white text-xs">E-commerce and E-waste Management Platform
                </span>
                <p className="text-xs text-slate-400">Empowering circular economy through retail e-commerce and certified green e-waste collection.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-700/50 flex gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume File</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl font-bold text-slate-300 hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
