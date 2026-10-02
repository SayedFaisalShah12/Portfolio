import React from 'react';
import { SKILL_CATEGORIES } from '../data/skills';
import { SkillCard } from '../components/SkillCard';
import { Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#090d16] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-2xl">
            Categorized technical stack spanning autonomous agent architectures, machine learning frameworks, data pipelines, and cross-platform UI engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCard key={category.title} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
