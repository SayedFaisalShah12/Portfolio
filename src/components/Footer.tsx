import React from 'react';
import { SITE_CONFIG, getSafeUrl } from '../config/site';
import { Github, Linkedin, Mail, MapPin, Sparkles, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const safeGithub = getSafeUrl(SITE_CONFIG.social.github);
  const safeLinkedin = getSafeUrl(SITE_CONFIG.social.linkedin);
  const safeEmail = getSafeUrl(SITE_CONFIG.social.email);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060911] border-t border-slate-800/80 pt-12 pb-8 text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-xl font-bold text-slate-100 flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              Sayed Faisal Shah
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </a>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Agentic AI & Machine Learning Engineer | Flutter Specialist
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {SITE_CONFIG.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {safeGithub && (
              <a
                href={safeGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}

            {safeLinkedin ? (
              <a
                href={safeLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            ) : (
              <span className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/50 text-slate-600 cursor-not-allowed" title="LinkedIn URL placeholder">
                <Linkedin className="w-5 h-5" />
              </span>
            )}

            {safeEmail ? (
              <a
                href={`mailto:${SITE_CONFIG.social.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all shadow-md"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            ) : (
              <span className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/50 text-slate-600 cursor-not-allowed" title="Email placeholder">
                <Mail className="w-5 h-5" />
              </span>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500 font-mono">
          <p>© 2026 Sayed Faisal Shah. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
