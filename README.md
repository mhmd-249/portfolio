# Mohammed Mohammed - Portfolio

A minimal, aesthetic portfolio website for an ML Engineer/Researcher. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/mohammedmohammed/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── template.tsx        # Page transition wrapper
│   ├── page.tsx            # Landing page
│   ├── blog/page.tsx       # Blog listing
│   ├── projects/page.tsx   # Projects listing
│   └── experience/page.tsx # Timeline/experience
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with social links
│   ├── PageContainer.tsx   # Content wrapper
│   ├── AgentPathways.tsx   # SVG visualization
│   ├── BlogCard.tsx        # Blog entry component
│   ├── ProjectCard.tsx     # Project card component
│   └── TimelineEntry.tsx   # Timeline entry component
├── data/
│   ├── blogs.ts            # Blog post data
│   ├── projects.ts         # Project data
│   └── experience.ts       # Experience/timeline data
├── lib/
│   └── constants.ts        # Design tokens & config
└── CLAUDE.md               # Design specification
```

## Updating Content

### Blog Posts

Edit `data/blogs.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Your Blog Title',
    excerpt: 'A short description of your blog post.',
    date: '2025-01-15', // YYYY-MM-DD format
    slug: 'your-blog-slug',
  },
  // Add more posts...
];
```

### Projects

Edit `data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Detailed description of your project.',
    techStack: ['React', 'TypeScript', 'Node.js'],
    slug: 'project-slug',
  },
  // Add more projects...
];
```

### Experience/Timeline

Edit `data/experience.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Job Title',
    company: 'Company Name',
    description: 'What you did in this role.',
    learned: 'Skills you learned (optional)',
    date: '2023',
    isCurrent: false,      // Set true for current position
    isYearMarker: false,   // Set true for milestone markers
  },
  // Add more experiences...
];
```

### Social Links

Edit `lib/constants.ts`:

```typescript
export const socialLinks = {
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  twitter: 'https://x.com/yourhandle',
} as const;
```

## Design System

The design system is defined in `CLAUDE.md` and implemented via:

- **Colors:** Defined in `tailwind.config.ts` and `lib/constants.ts`
- **Typography:** Custom font sizes with line-height and letter-spacing
- **Spacing:** Consistent spacing scale for sections and components

Key design tokens:
- Background: `#F5F1ED` (cream) for landing, `#FFFFFF` for other pages
- Primary text: `#000000`
- Secondary text: `#6B7280`
- Accent: `#10B981` (mint green)
- Content max-width: `700px`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

```bash
# Build the project
npm run build

# The output will be in .next/
# Deploy the .next folder to your hosting platform
```

For static export:
```bash
# Add to next.config.js: output: 'export'
npm run build
# Deploy the 'out' folder
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new folder in `app/` with a `page.tsx` file
2. Use `PageContainer` for consistent layout
3. Add navigation link in `lib/constants.ts`

## License

MIT License - feel free to use this as a template for your own portfolio.
