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
    title: 'Machine Learning Engineer',
    company: 'Equitech Futures',
    description: '',
    date: 'July 2025',
    learned: 'Production System Design, Comprehensive Monitoring, A/B Testing',
    isCurrent: true,
    isYearMarker: true,
  },
  {
    id: '2',
    title: 'Graduated MSc Business Analytics',
    company: 'University of Birmingham',
    description: 'Relevant coursework: Python Programming, Machine Learning, SQL, Data Management, Data Visualization. Thesis on Building Online Database for the Plant Records for Winterbourne',
    date: '2025',
  },
  {
    id: '3',
    title: 'ML Researcher',
    company: 'Equitech Futures',
    description: 'Conducted research on NLP and reinforcement learning. Published papers on efficient fine-tuning methods.',
    learned: 'Research methodology, academic writing, experimental design',
    date: 'Dec 2023 - Sep 2024',
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'Yalla Nabda Business',
    description: 'Built end-to-end machine learning pipelines for customer analytics. Deployed models serving millions of predictions daily.',
    learned: 'Startup velocity, full-stack Data Science, business impact measurement',
    date: 'Nov 2022 – Jun 2023',
  },
  {
    id: '5',
    title: 'Graduated BSc Engineering',
    company: 'Sudan University of Science and Technology',
    description: 'Specialized in Petroleum Engineering. Thesis on using computer vision algorithms to detect Chan patterns.',
    date: '2022',
    isYearMarker: true,
  },
];
