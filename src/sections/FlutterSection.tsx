import React from 'react';
import { Smartphone, Layers, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const FlutterSection: React.FC = () => {
  const flutterTech = [
    "Flutter",
    "Dart",
    "Firebase",
    "REST APIs",
    "Bloc Pattern",
    "Provider",
    "GetX",
    "MVVM Architecture",
    "TFLite Integration",
    "AI Client Integration"
  ];

  return (
    <section id="flutter" className="py-24 bg-[#090d16] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0d1322] via-[#0f172a] to-[#0d1322] border border-cyan-500/20 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span>Secondary Specialization</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Flutter Development & Mobile AI Integration
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                "With a background in Flutter and Dart, I build cross-platform mobile and web applications and integrate AI capabilities into modern applications."
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>The Flutter + AI Synergy</span>
                </div>
                <p className="text-slate-400 font-mono text-[11px] leading-relaxed">
                  Integrating low-latency Python AI endpoints (FastAPI / Agentic workflows) with responsive Flutter user interfaces provides a complete full-stack product experience.
                </p>
              </div>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {flutterTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-800 text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#090d16] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    Flutter Architecture
                  </span>
                  <span className="text-cyan-400 font-bold">Client Layer</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-200 font-bold block">Cross-Platform UI</span>
                      <span className="text-[11px] text-slate-400">Single codebase for Android, iOS, & Web.</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-200 font-bold block">On-Device Machine Learning</span>
                      <span className="text-[11px] text-slate-400">TFLite embeddings & offline model inferencing.</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-200 font-bold block">Streaming LLM UI</span>
                      <span className="text-[11px] text-slate-400">Real-time token streaming & chat interface design.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
