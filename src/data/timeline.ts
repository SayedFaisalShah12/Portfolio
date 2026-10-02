import { JourneyMilestone } from '../types';

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "Phase 1",
    stage: "Foundation",
    title: "Software Engineering Core",
    description: "Built strong fundamentals in object-oriented programming, data structures, algorithms, modular architecture, and clean code principles.",
    highlights: [
      "System logic & clean architecture",
      "Git version control & collaborative practices",
      "API design and integration"
    ],
    iconName: "Code2"
  },
  {
    period: "Phase 2",
    stage: "Specialization",
    title: "Flutter & Mobile Application Development",
    description: "Expanded into cross-platform software engineering using Flutter and Dart, building high-performance mobile and web user interfaces.",
    highlights: [
      "State management (Bloc, Provider, GetX)",
      "Clean architecture & MVVM patterns",
      "Mobile client integration with Firebase & REST APIs"
    ],
    iconName: "Smartphone"
  },
  {
    period: "Phase 3",
    stage: "Expansion",
    title: "Machine Learning & Data Science",
    description: "Dived deep into computational intelligence, exploratory data analysis, tabular ML models, computer vision, and deep learning neural networks.",
    highlights: [
      "Python data stack (Scikit-learn, TensorFlow)",
      "Supervised ML, Anomaly Detection & Computer Vision",
      "Model training, evaluation & Streamlit deployment"
    ],
    iconName: "BrainCircuit"
  },
  {
    period: "Phase 4",
    stage: "Innovation",
    title: "Generative AI & LLM Systems",
    description: "Transitioned to building intelligent systems using Large Language Models, prompt engineering, RAG pipelines, and API-driven generative intelligence.",
    highlights: [
      "Gemini & OpenAI API integration",
      "Vector search & document retrieval (FAISS)",
      "Combining Flutter clients with FastAPI GenAI backends"
    ],
    iconName: "Sparkles"
  },
  {
    period: "Current Focus",
    stage: "Frontier",
    title: "Agentic AI Engineering",
    description: "Focusing on autonomous AI agents, multi-agent workflows, tool execution, structured output validation, and stateful agent frameworks.",
    highlights: [
      "Agent orchestration with PydanticAI & LangGraph",
      "Model Context Protocol (MCP) integration",
      "Autonomous tool calling & structured workflow execution"
    ],
    iconName: "Bot"
  }
];
