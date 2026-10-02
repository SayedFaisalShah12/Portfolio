import { WorkflowStep } from '../types';

export const AI_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "Problem Scoping",
    description: "Identify target domain requirements, data inputs, performance constraints, and desired autonomous agent outcomes.",
    tools: ["System Spec", "Architecture Blueprint"]
  },
  {
    step: 2,
    title: "Data & Knowledge Base",
    description: "Structure domain knowledge, schema definitions, vector embeddings, and contextual context stores.",
    tools: ["FAISS", "Vector DB", "JSON Schemas"]
  },
  {
    step: 3,
    title: "Model & LLM Foundation",
    description: "Select optimal base models or fine-tuned parameters balancing speed, reasoning quality, and API efficiency.",
    tools: ["Ollama", "Gemini API", "OpenAI"]
  },
  {
    step: 4,
    title: "RAG & Tool Integration",
    description: "Equip models with domain tools, real-time web/API integrations, memory layers, and retrieval pipelines.",
    tools: ["PydanticAI", "MCP", "FastAPI"]
  },
  {
    step: 5,
    title: "Agentic Workflow",
    description: "Orchestrate multi-step reasoning, cyclic tool execution loops, human-in-the-loop validation, and state control.",
    tools: ["LangGraph", "Structured Outputs"]
  },
  {
    step: 6,
    title: "API Layer",
    description: "Expose reliable backend endpoints with validation, streaming responses, and asynchronous event channels.",
    tools: ["FastAPI", "Python", "REST"]
  },
  {
    step: 7,
    title: "Application Interface",
    description: "Deliver intuitive user interfaces on web and mobile with dynamic feedback, visual workflows, and streaming UI.",
    tools: ["Flutter", "React", "TypeScript"]
  },
  {
    step: 8,
    title: "Deployment & Monitored Execution",
    description: "Deploy client and server artifacts to production environments with error logging and performance metrics.",
    tools: ["GitHub Pages", "Cloud Host", "Docker"]
  }
];
