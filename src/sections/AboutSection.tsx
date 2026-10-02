import React from 'react';
import { SITE_CONFIG } from '../config/site';
import { User, MapPin, Brain, Code2, Sparkles, Target, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const interests = [
    "AI Agents",
    "Agentic AI",
    "Generative AI",
    "LLM Applications",
    "Machine Learning",
    "Deep Learning",
    "RAG Systems",
    "AI Automation",
    "AI-Powered SaaS",
    "Flutter + AI Integration"
  ];

  return (
    <section id="about" className="py-24 bg-[#090d16] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-2xl">
            Combining software engineering discipline with modern artificial intelligence to build functional, practical intelligent software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Biography Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0d1322] border border-slate-800 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-cyan-400" />
                Software Engineering Meets Artificial Intelligence
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                I am a software engineer with experience in software development, Flutter application engineering, machine learning, and practical AI applications.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mt-4">
                My primary focus is <strong className="text-cyan-300 font-semibold">Agentic AI, Generative AI, Machine Learning, Deep Learning, LLM applications,</strong> and intelligent software systems. I combine my software engineering background with modern AI frameworks to build end-to-end applications that solve real domain challenges.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mt-4">
                I am transitioning from traditional software/Flutter development toward AI Engineering, leveraging my background in clean architecture and user experience to build robust AI-powered solutions.
              </p>
            </div>

            {/* Target Interests */}
            <div className="bg-[#0d1322] border border-slate-800 rounded-2xl p-8 shadow-xl">
              <h4 className="text-base font-bold text-slate-100 flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-cyan-400" />
                Key Technical Interest Areas
              </h4>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-300 flex items-center gap-1.5 hover:border-cyan-500/40 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Card Side (Requirement Section 9) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-[#0e172a] to-[#0d1322] border border-cyan-500/30 rounded-2xl p-8 shadow-2xl relative">
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-[#090d16] rounded-[15px] flex items-center justify-center">
                    <span className="font-mono font-extrabold text-xl text-cyan-300">
                      SFS
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">{SITE_CONFIG.name}</h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">Agentic AI & ML Engineer</p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 font-mono">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Primary Role</span>
                  <span className="text-slate-100 font-semibold">Agentic AI & Machine Learning Engineer</span>
                </div>

                <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Specialization</span>
                  <span className="text-cyan-300 font-semibold">Flutter Specialist</span>
                </div>

                <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Location</span>
                  <span className="text-slate-100 font-semibold">{SITE_CONFIG.location}</span>
                </div>

                <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Technical Focus</span>
                  <span className="text-slate-200">AI Engineering / Agentic AI / ML / GenAI</span>
                </div>

                <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Background & Experience</span>
                  <span className="text-slate-200">Software Engineering + practical AI/ML projects</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Factually verified personal portfolio profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
