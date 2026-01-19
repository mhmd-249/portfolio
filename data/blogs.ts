export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

// Dummy blog posts - replace with real content later
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building production-ready agentic AI systems',
    excerpt: 'A deep dive into designing and deploying autonomous AI agents that can reliably operate in production environments.',
    date: '2025-01-15',
    slug: 'building-production-ready-agentic-ai-systems',
  },
  {
    id: '2',
    title: 'Fine-tuning LLMs for domain-specific tasks',
    excerpt: 'Practical strategies for adapting large language models to specialized domains while maintaining generalization.',
    date: '2024-12-20',
    slug: 'fine-tuning-llms-domain-specific-tasks',
  },
  {
    id: '3',
    title: 'Vector databases: A comprehensive guide',
    excerpt: 'Understanding vector embeddings, similarity search, and how to choose the right vector database for your use case.',
    date: '2024-11-08',
    slug: 'vector-databases-comprehensive-guide',
  },
  {
    id: '4',
    title: 'Deployment strategies for ML models at scale',
    excerpt: 'From model serving to monitoring: best practices for deploying machine learning models in production.',
    date: '2024-10-05',
    slug: 'deployment-strategies-ml-models-scale',
  },
  {
    id: '5',
    title: 'Understanding transformer architectures',
    excerpt: 'Breaking down the attention mechanism and architectural innovations that power modern language models.',
    date: '2024-09-12',
    slug: 'understanding-transformer-architectures',
  },
];
