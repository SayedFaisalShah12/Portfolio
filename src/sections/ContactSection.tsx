import React from 'react';
import { SITE_CONFIG, getSafeUrl } from '../config/site';
import { Mail, Github, Linkedin, MessageSquare, MapPin, Sparkles, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const safeEmail = getSafeUrl(SITE_CONFIG.social.email);
  const safeGithub = getSafeUrl(SITE_CONFIG.social.github);
  const safeLinkedin = getSafeUrl(SITE_CONFIG.social.linkedin);

  return (
    <section id="contact" className="py-24 bg-[#090d16] relative border-t border-slate-800/60 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <MessageSquare className="w-4 h-4 text-cyan-400" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Let's Build Something Intelligent.
        </h2>

        <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          "I'm open to AI engineering opportunities, software development projects, freelance work, and collaborations involving AI, machine learning, agentic systems, and Flutter."
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span>Based in {SITE_CONFIG.location} • Available Globally</span>
        </div>

        {/* Contact Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {safeEmail ? (
            <a
              href={`mailto:${SITE_CONFIG.social.email}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed"
              title="Email placeholder"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me (Placeholder)</span>
            </button>
          )}

          {safeGithub && (
            <a
              href={safeGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 transition-all shadow-md"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
          )}

          {safeLinkedin ? (
            <a
              href={safeLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 transition-all shadow-md"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/50 text-slate-500 border border-slate-800/50 cursor-not-allowed"
              title="LinkedIn placeholder"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn (Placeholder)</span>
            </span>
          )}
        </div>
      </div>
    </section>
  );
};
