import React from 'react';
import { AgenticFlowDiagram } from '../components/AgenticFlowDiagram';
import { Bot, Sparkles, Terminal, ShieldAlert, Cpu } from 'lucide-react';

export const AgenticSection: React.FC = () => {
  const agenticHighlights = [
    { title: "PydanticAI", desc: "Type-safe agent definition with strict input/output validation schemas." },
    { title: "LangGraph", desc: "Cyclic state graph workflows for complex multi-step reasoning agents." },
    { title: "MCP Protocol", desc: "Model Context Protocol integration for unified tool & resource access." },
    { title: "RAG & Vector Search", desc: "Contextual retrieval via vector embeddings and semantic search (FAISS)." },
    { title: "Autonomous Tool Calling", desc: "Equipping LLMs with live APIs, web access, and executable scripts." },
    { title: "Local Models (Ollama)", desc: "Private, low-latency agent execution using quantized open weights." }
  ];

  return (
    <section id="agentic-ai" className="py-24 bg-[#070b13] relative border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Bot className="w-4 h-4 text-cyan-400" />
            <span>Primary Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight flex items-center gap-3">
            Agentic AI Engineering
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            "I am focused on building AI systems that go beyond simple text generation by combining language models with tools, memory, structured workflows, APIs, retrieval, and autonomous task execution."
          </p>
        </div>

        {/* Architecture Concept Diagram */}
        <div className="mb-12">
          <AgenticFlowDiagram />
        </div>

        {/* Key Framework Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agenticHighlights.map((item) => (
            <div
              key={item.title}
              className="bg-[#0d1322] border border-slate-800 hover:border-cyan-500/40 rounded-xl p-6 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Code Snippet / Technical Insight */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-2xl p-6 font-mono text-xs text-slate-300 shadow-2xl relative">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-400">agent_orchestration.py</span>
            </div>
            <span className="text-[10px] text-cyan-400/70 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              PydanticAI + Tools
            </span>
          </div>

          <pre className="overflow-x-auto text-slate-300 leading-relaxed">
{`from pydantic_ai import Agent, RunContext
from pydantic import BaseModel

class AnalysisResult(BaseModel):
    summary: str
    confidence_score: float
    recommended_tools: list[str]

agent = Agent(
    'gemini-1.5-pro',
    result_type=AnalysisResult,
    system_prompt="You are an autonomous engineering agent executing multi-step diagnostic workflows."
)

@agent.tool
async def execute_retrieval(ctx: RunContext[None], query: str) -> str:
    # Context retrieval & tool execution
    return await vector_search_pipeline(query)`}
          </pre>
        </div>
      </div>
    </section>
  );
};
