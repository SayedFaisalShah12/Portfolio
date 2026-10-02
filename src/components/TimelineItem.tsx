import React from 'react';
import { JourneyMilestone } from '../types';
import { Code2, Smartphone, BrainCircuit, Sparkles, Bot, CheckCircle } from 'lucide-react';

interface TimelineItemProps {
  milestone: JourneyMilestone;
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ milestone, isLast }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return Code2;
      case 'Smartphone': return Smartphone;
      case 'BrainCircuit': return BrainCircuit;
      case 'Sparkles': return Sparkles;
      case 'Bot': return Bot;
      default: return Code2;
    }
  };

  const Icon = getIcon(milestone.iconName);

  return (
    <div className="relative flex gap-6 pb-10 group">
      {/* Timeline connector line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-slate-800 group-hover:bg-cyan-500/40 transition-colors" />
      )}

      {/* Timeline Node Circle */}
      <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl bg-[#0d1322] border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-950/40 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>

      {/* Content Card */}
      <div className="flex-1 bg-[#0d1322] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {milestone.period} • {milestone.stage}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
          {milestone.title}
        </h3>

        <p className="text-slate-300 text-sm mt-2 leading-relaxed">
          {milestone.description}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
          {milestone.highlights.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
