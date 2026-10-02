import React from 'react';
import { SkillCategory } from '../types';
import { Cpu, Terminal, Layers, Smartphone, Wrench } from 'lucide-react';

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return Cpu;
      case 1: return Terminal;
      case 2: return Layers;
      case 3: return Smartphone;
      default: return Wrench;
    }
  };

  const Icon = getIcon(index);

  return (
    <div className="bg-[#0d1322] border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
              {category.title}
            </h3>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-5 leading-relaxed">
          {category.description}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border ${category.badgeColor} backdrop-blur-sm transition-all hover:scale-105 duration-200`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
