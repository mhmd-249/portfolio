export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  slug: string;
}

// Dummy projects - replace with real content later
export const projects: Project[] = [
  {
    id: '1',
    title: 'Multi-Agent Health Surveillance System',
    description: 'An agentic AI system that coordinates multiple specialized agents to conduct comprehensive research tasks. Features autonomous web browsing, document analysis, and synthesis capabilities with built-in fact verification.',
    techStack: ['Python', 'LangChain', 'Sonnet 4.5', 'PostgreSQL', 'FastAPI', 'Docker'],
    slug: 'multi-agent-health-surveillance-system',
  },
  {
    id: '2',
    title: 'Socratic Personal Tutor',
    description: 'End-to-end deployment framework for large language models featuring automatic scaling, A/B testing, model versioning, and comprehensive monitoring. Handles millions of inference requests daily.',
    techStack: ['Docker', 'RAG', 'PostgreSQL & Pgvector', 'Prometheus', 'Grafana'],
    slug: 'socratic-personal-tutor',
  },
  {
    id: '3',
    title: 'AmAIcus: AI Legal Assistant',
    description: 'High-performance similarity search system optimized for billion-scale vector datasets. Implements approximate nearest neighbor algorithms with sub-millisecond latency.',
    techStack: ['Rust', 'RAG', 'ScaNN', 'Redis', 'gRPC'],
    slug: 'ai-legal-assistant',
  },
  {
    id: '4',
    title: 'Custom RLHF Framework',
    description: 'Implementation of Reinforcement Learning from Human Feedback for fine-tuning language models. Includes reward model training, PPO optimization, and human preference data collection tools.',
    techStack: ['PyTorch', 'Transformers', 'DeepSpeed', 'Weights & Biases'],
    slug: 'custom-rlhf-framework',
  },
];
