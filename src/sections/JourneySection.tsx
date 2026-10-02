import React from 'react';
import { JOURNEY_MILESTONES } from '../data/timeline';
import { TimelineItem } from '../components/TimelineItem';
import { GitCommit, ShieldAlert } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#070b13] relative border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Evolutionary Progress</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Professional Journey
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-2xl leading-relaxed">
            "My journey has evolved from application development and Flutter into machine learning, generative AI, and agentic AI systems."
          </p>

          <div className="mt-4 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>These stages represent my technical development and hands-on skill evolution.</span>
          </div>
        </div>

        {/* Timeline List */}
        <div className="mt-10">
          {JOURNEY_MILESTONES.map((milestone, idx) => (
            <TimelineItem
              key={milestone.title}
              milestone={milestone}
              isLast={idx === JOURNEY_MILESTONES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
