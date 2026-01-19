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
    title: 'Multi-Agent Research Assistant',
    description: 'An agentic AI system that coordinates multiple specialized agents to conduct comprehensive research tasks. Features autonomous web browsing, document analysis, and synthesis capabilities with built-in fact verification.',
    techStack: ['Python', 'LangChain', 'GPT-4', 'Pinecone', 'FastAPI'],
    slug: 'multi-agent-research-assistant',
  },
  {
    id: '2',
    title: 'Production LLM Pipeline',
    description: 'End-to-end deployment framework for large language models featuring automatic scaling, A/B testing, model versioning, and comprehensive monitoring. Handles millions of inference requests daily.',
    techStack: ['Kubernetes', 'Ray Serve', 'MLflow', 'Prometheus', 'Grafana'],
    slug: 'production-llm-pipeline',
  },
  {
    id: '3',
    title: 'Vector Search Engine',
    description: 'High-performance similarity search system optimized for billion-scale vector datasets. Implements approximate nearest neighbor algorithms with sub-millisecond latency.',
    techStack: ['Rust', 'HNSW', 'ScaNN', 'Redis', 'gRPC'],
    slug: 'vector-search-engine',
  },
  {
    id: '4',
    title: 'Custom RLHF Framework',
    description: 'Implementation of Reinforcement Learning from Human Feedback for fine-tuning language models. Includes reward model training, PPO optimization, and human preference data collection tools.',
    techStack: ['PyTorch', 'Transformers', 'DeepSpeed', 'Weights & Biases'],
    slug: 'custom-rlhf-framework',
  },
];
