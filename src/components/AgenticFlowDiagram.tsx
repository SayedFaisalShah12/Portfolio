import React from 'react';
import { Cpu, Brain, Wrench, Database, Search, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export const AgenticFlowDiagram: React.FC = () => {
  const steps = [
    { title: "LLM Core", desc: "Base Reasoning Model", icon: Cpu, color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10" },
    { title: "Reasoning Loop", desc: "Structured Thoughts", icon: Brain, color: "text-indigo-400 border-indigo-500/40 bg-indigo-500/10" },
    { title: "Tools Execution", desc: "API & Functions", icon: Wrench, color: "text-blue-400 border-blue-500/40 bg-blue-500/10" },
    { title: "Memory Layer", desc: "Stateful Session", icon: Database, color: "text-purple-400 border-purple-500/40 bg-purple-500/10" },
    { title: "Vector Retrieval", desc: "Context RAG", icon: Search, color: "text-teal-400 border-teal-500/40 bg-teal-500/10" },
    { title: "Actions Dispatch", desc: "MCP Protocol", icon: Zap, color: "text-amber-400 border-amber-500/40 bg-amber-500/10" },
    { title: "Validated Results", desc: "Pydantic Schemas", icon: CheckCircle2, color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10" },
  ];

  return (
    <div className="w-full bg-[#0d1322] border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            Agentic AI Control Flow & Architecture
          </h4>
          <p className="text-xs text-slate-400 mt-1 font-mono">
            Autonomous feedback loop: Perception → Tool Calling → RAG Retrieval → Action Execution
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            PydanticAI
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full font-mono bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
            LangGraph
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full font-mono bg-purple-500/10 border border-purple-500/30 text-purple-300">
            MCP Protocol
          </span>
        </div>
      </div>

      {/* Horizontal / Grid Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="flex flex-col items-center">
              <div className={`w-full p-4 rounded-xl border ${step.color} backdrop-blur-sm flex flex-col items-center text-center transition-all hover:scale-105 duration-200 group`}>
                <div className="p-2.5 rounded-lg bg-slate-900/80 mb-2 border border-slate-800 group-hover:border-slate-700">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-100 line-clamp-1">{step.title}</span>
                <span className="text-[10px] text-slate-400 mt-0.5 font-mono">{step.desc}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center my-2 text-slate-600">
                  <ArrowRight className="w-4 h-4 text-cyan-500/40 transform rotate-90 lg:rotate-0" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
