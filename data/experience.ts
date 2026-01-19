export interface Experience {
  id: string;
  title: string;
  company: string;
  description: string;
  learned?: string;
  date: string;
  isCurrent?: boolean;
  isYearMarker?: boolean;
}

// Placeholder experience entries - replace with real content later
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Today',
    company: '',
    description: '',
    date: '2025',
    isCurrent: true,
    isYearMarker: true,
  },
  {
    id: '2',
    title: 'Senior ML Engineer',
    company: '[Company]',
    description: 'Leading the development of production AI systems and mentoring junior engineers. Architecting scalable ML infrastructure.',
    learned: 'System design at scale, team leadership, cross-functional collaboration',
    date: '2023',
  },
  {
    id: '3',
    title: 'ML Researcher',
    company: '[Lab]',
    description: 'Conducted research on large language models and reinforcement learning. Published papers on efficient fine-tuning methods.',
    learned: 'Research methodology, academic writing, experimental design',
    date: '2021',
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: '[Startup]',
    description: 'Built end-to-end machine learning pipelines for customer analytics. Deployed models serving millions of predictions daily.',
    learned: 'Startup velocity, full-stack ML, business impact measurement',
    date: '2019',
  },
  {
    id: '5',
    title: 'Graduated MSc Computer Science',
    company: '[University]',
    description: 'Specialized in machine learning and natural language processing. Thesis on attention mechanisms in neural networks.',
    date: '2018',
    isYearMarker: true,
  },
];
