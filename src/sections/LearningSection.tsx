import React from 'react';
import { GraduationCap, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const LearningSection: React.FC = () => {
  const learningDomains = [
    "Agentic AI & Agent Orchestration",
    "Generative AI & LLM Fine-Tuning",
    "Machine Learning & Statistical Modeling",
    "Deep Learning Neural Networks",
    "Retrieval-Augmented Generation (RAG)",
    "Computer Vision & Pattern Recognition",
    "AI Application Architecture & REST Endpoints",
    "Flutter + Mobile AI Integration"
  ];

  return (
    <section id="learning" className="py-24 bg-[#070b13] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Growth Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Continuous Learning & Research
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            "Continuously expanding my expertise through hands-on projects, experimentation, and practical AI engineering."
          </p>
        </div>

        <div className="bg-[#0d1322] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">Self-Directed AI Engineering Curriculum</h3>
              <p className="text-xs text-slate-400 font-mono">Practically grounded learning through codebase execution</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningDomains.map((domain) => (
              <div
                key={domain}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-3 hover:border-cyan-500/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs font-mono text-slate-200">{domain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
