import React from 'react';
import { AI_WORKFLOW_STEPS } from '../data/workflow';
import { Network, ArrowRight, CheckCircle2 } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-[#090d16] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>End-to-End Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            AI Application Engineering Workflow
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-2xl">
            A structured end-to-end engineering process for translating domain requirements into production-ready AI applications.
          </p>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 relative">
          {AI_WORKFLOW_STEPS.map((item, idx) => (
            <div key={item.step} className="flex flex-col h-full group">
              <div className="bg-[#0d1322] border border-slate-800 hover:border-cyan-500/40 rounded-xl p-4 flex-1 flex flex-col justify-between transition-all duration-300 relative">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center">
                      0{item.step}
                    </span>
                    {idx < AI_WORKFLOW_STEPS.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    )}
                  </div>

                  <h3 className="text-xs font-bold text-slate-100 mb-1 line-clamp-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-3 mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1">
                  {item.tools.map((t) => (
                    <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
