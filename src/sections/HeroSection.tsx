import React from 'react';
import { SITE_CONFIG, getSafeUrl } from '../config/site';
import { NeuralBackground } from '../components/NeuralBackground';
import { ArrowRight, FileText, Mail, Github, Linkedin, MapPin, Sparkles, Bot, Terminal } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const safeGithub = getSafeUrl(SITE_CONFIG.social.github);
  const safeLinkedin = getSafeUrl(SITE_CONFIG.social.linkedin);
  const safeEmail = getSafeUrl(SITE_CONFIG.social.email);
  const safeResume = getSafeUrl(SITE_CONFIG.social.resume);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#090d16]">
      {/* Animated Neural Background */}
      <NeuralBackground />

      {/* Subtle Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono font-medium text-cyan-300">
            Available for Agentic AI & ML Engineering Opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
          Sayed Faisal Shah
        </h1>

        {/* Headline / Subtitle */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-lg sm:text-2xl font-semibold">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Agentic AI & Machine Learning Engineer
          </span>
          <span className="text-slate-500 font-normal">|</span>
          <span className="text-slate-300 font-medium">Flutter Specialist</span>
        </div>

        {/* Professional Statements */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          "{SITE_CONFIG.tagline}"
        </p>

        <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-mono">
          {SITE_CONFIG.secondaryTagline}
        </p>

        {/* Location Badge */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>{SITE_CONFIG.location}</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {safeResume && (
            <a
              href={safeResume}
              download="Sayed_Faisal_Shah_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 transition-all shadow-md"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              Download Resume
            </a>
          )}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {safeGithub && (
            <a
              href={safeGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all shadow-md"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          )}

          {safeLinkedin ? (
            <a
              href={safeLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all shadow-md"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          ) : (
            <span
              className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/40 text-slate-600 cursor-not-allowed"
              title="LinkedIn Placeholder"
            >
              <Linkedin className="w-5 h-5" />
            </span>
          )}

          {safeEmail ? (
            <a
              href={`mailto:${SITE_CONFIG.social.email}`}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all shadow-md"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          ) : (
            <span
              className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/40 text-slate-600 cursor-not-allowed"
              title="Email Placeholder"
            >
              <Mail className="w-5 h-5" />
            </span>
          )}
        </div>

        {/* Terminal Tech Strip */}
        <div className="mt-16 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0d1322] border border-slate-800/80 text-xs font-mono text-slate-400 max-w-full overflow-x-auto">
          <Terminal className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span className="text-cyan-300">stack:</span>
          <span>Python</span>
          <span className="text-slate-600">•</span>
          <span>PydanticAI</span>
          <span className="text-slate-600">•</span>
          <span>LangGraph</span>
          <span className="text-slate-600">•</span>
          <span>FastAPI</span>
          <span className="text-slate-600">•</span>
          <span>Flutter</span>
          <span className="text-slate-600">•</span>
          <span>RAG</span>
        </div>
      </div>
    </section>
  );
};
