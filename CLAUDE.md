# PORTFOLIO PROJECT SPECIFICATION
**Owner:** Mohammed Mohammed  
**Type:** ML Engineer/Researcher Portfolio  
**Last Updated:** January 2025

---

## PROJECT VISION
Minimal, aesthetic portfolio website with generous whitespace and clean typography. 
Inspired by: leoniemonigatti.com and shud.in

---

## DESIGN SYSTEM (MASTER REFERENCE)

### Typography Rules
**Reference Site:** https://shud.in/projects (projects section)
```
Page Titles: 
  - font-weight: 700 (bold)
  - font-size: 3rem (48px)
  - letter-spacing: tight
  - color: #000000

Section Descriptions:
  - font-weight: 400
  - font-size: 1.25rem (20px)
  - color: #6B7280
  - line-height: 1.75

Blog/Project Titles:
  - font-weight: 700
  - font-size: 1.5rem (24px)
  - color: #000000

Body Text:
  - font-weight: 400
  - font-size: 1rem (16px)
  - line-height: 1.75
  - color: #000000

Dates/Meta:
  - font-weight: 400
  - font-size: 0.875rem (14px)
  - color: #9CA3AF

Links:
  - color: #10B981 (mint green)
  - hover: underline
  - include arrow (→) for "Read more" style links
```

### Color Palette
```
PRIMARY COLORS:
- Landing Background: #F5F1ED (warm cream)
- Other Pages Background: #FFFFFF
- Primary Text: #000000
- Secondary Text: #6B7280
- Tertiary Text: #9CA3AF
- Links/Accent: #10B981 (mint green)
- Timeline Accent: #9CA3AF (for year markers)

VISUALIZATION COLORS (for agent pathways):
- Nodes: #374151 (dark gray)
- Paths: #6B7280 (medium gray)
- Background: Matches page (#F5F1ED)
```

### Spacing System
```
Vertical Section Spacing: 5rem - 7.5rem (80px-120px)
Content Max Width: 700px (always centered)
Horizontal Padding: 
  - Mobile: 1.5rem (24px)
  - Desktop: 3rem (48px)
Content Line Height: 1.75
Paragraph Spacing: 1.5rem (24px)
```

### Component Patterns
```
Header:
  - Sticky top
  - Left: Name (clickable → home)
  - Right: Navigation links (uppercase, generous letter-spacing)
  - Height: 4rem (64px)
  - Border-bottom: 1px solid #E5E7EB

Footer:
  - Simple text
  - Text: "Copyright 2025, Mohammed Mohammed"
  - Padding: 2rem top/bottom
  - Text color: #9CA3AF
  - Size: 0.875rem

Blog Entry:
  - Two-column layout feel
  - Date: 20% width, aligned left, gray
  - Content: 80% width
  - Spacing between entries: 3rem (48px)
  - "Read article →" link in mint green

Project Card:
  - Title (bold)
  - Description paragraph
  - Tech stack (inline, subtle)
  - Vertical spacing: 4rem between projects

Timeline Entry:
  - Vertical line (2px, #E5E7EB)
  - Dots at each point (#000000 or #9CA3AF for year markers)
  - Entries on right side of line
  - Title bold, description regular
  - "Learned:" section in italic/smaller text
```

---

## SITE STRUCTURE

### Page 1: Landing Page (/)
**Layout Type:** Single page, non-scrollable, 100vh

**Content:**
```
Header:
  Left: "Mohammed Mohammed"
  Right: "BLOG  PROJECTS  EXPERIENCE"

Hero (centered vertically):
  "Hi, I'm Mohammed"
  
  Bio: "a machine learning engineer and researcher. I help companies 
  build production-grade AI solutions. My thoughts focuses on machine 
  learning and AI engineering."
  
  Call-to-action: "You can start reading my personal blog posts or 
  my portfolio of projects."
  (Inline links underlined)

Visualization:
  Agent pathways/decision tree
  - Below bio text
  - Subtle animation
  - Dark gray on cream
  - Abstract tree structure showing AI agent decision flow
  - Width: 400-600px
  - Canvas or SVG implementation

Footer:
  Left: Social icons (LinkedIn, GitHub, X)
  Right: Copyright text
```

**Background:** #F5F1ED

### Page 2: Blog (/blog)
**Layout Type:** White background, scrollable

**Content:**
```
Header: (same as landing, white background)

Page Title: 
  "Writing on machine learning, AI engineering, and AI systems."

Subtitle:
  "All of my long-form thoughts on AI, engineering, research, and more, 
  collected in chronological order."

Blog Entries: (5-6 dummy posts)
  [Use two-column layout pattern from Component Patterns]
```

**Dummy Content Required:**
1. "Building production-ready agentic AI systems"
2. "Fine-tuning LLMs for domain-specific tasks"
3. "Vector databases: A comprehensive guide"
4. "Deployment strategies for ML models at scale"
5. "Understanding transformer architectures"

### Page 3: Projects (/projects)
**Layout Type:** White background, scrollable, centered content

**Content:**
```
Header: (same as other pages)

Page Title: "Projects"

Subtitle: "Selected work in machine learning and AI engineering."

Project Entries: (4-5 dummy projects)
  [Use Project Card pattern from Component Patterns]
```

**Dummy Content Required:**
1. "Multi-Agent Research Assistant" - Agentic AI system for research
2. "Production LLM Pipeline" - End-to-end deployment framework
3. "Vector Search Engine" - High-performance similarity search
4. "Custom RLHF Framework" - RLHF implementation

### Page 4: Experience (/experience)
**Layout Type:** White background, scrollable, vertical timeline

**Content:**
```
Header: (same)

Page Title: "Timeline"

Timeline Entries: (4-5 placeholders)
  [Use Timeline Entry pattern from Component Patterns]
```

**Placeholder Content Required:**
1. Today marker (gold/amber)
2. Senior ML Engineer at [Company]
3. ML Researcher at [Lab]
4. Data Scientist at [Startup]
5. Graduated MSc Computer Science

---

## TECH STACK

**Framework:** Next.js 14 (App Router)  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Animations:** Framer Motion  
**Deployment:** Vercel

---

## PROJECT STRUCTURE
```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Landing
│   ├── blog/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   └── experience/
│       └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AgentPathways.tsx     # Visualization
│   ├── BlogCard.tsx
│   ├── ProjectCard.tsx
│   └── TimelineEntry.tsx
├── data/
│   ├── blogs.ts
│   ├── projects.ts
│   └── experience.ts
├── lib/
│   └── constants.ts          # Colors, spacing
├── CLAUDE.md                 # This file
└── README.md
```

---

## CRITICAL DESIGN RULES

1. **Spacing is Sacred:** Never compromise on whitespace
2. **Typography Hierarchy:** Strictly follow the type scale
3. **Centered Content:** Max-width 700px, always centered
4. **Minimal Color Use:** Only black, grays, and mint green accent
5. **Smooth Interactions:** All transitions 200-300ms
6. **Mobile First:** But desktop is the primary experience
7. **No Clutter:** When in doubt, add more space

---

## RESPONSIVE BREAKPOINTS
```
Mobile: < 768px
  - Stack all content
  - Reduce font sizes by 15-20%
  - Full-width navigation (hamburger)
  - Visualization scales down

Tablet: 768px - 1024px
  - Maintain centered layout
  - Keep desktop typography

Desktop: > 1024px
  - Full design as specified
  - Max content width: 700px
```

---

## ANIMATION GUIDELINES

**Page Transitions:**
- Fade in: 300ms
- Slide up: 20px over 400ms
- Ease: cubic-bezier(0.4, 0.0, 0.2, 1)

**Agent Pathways Visualization:**
- Particles flow through tree
- Speed: Slow, contemplative (2-3s per path)
- Direction: Root → leaves
- Continuous loop
- No jarring movements

**Hover States:**
- Links: Underline fade-in 200ms
- Navigation: Color change 200ms
- Buttons/CTAs: Subtle scale 200ms

---

## SEO & METADATA
```typescript
Title: "Mohammed Mohammed | ML Engineer & Researcher"
Description: "Machine learning engineer and researcher helping companies build production-grade AI solutions."
Keywords: "machine learning, AI engineering, agentic AI, ML research"
```

---

## ACCESSIBILITY

- Semantic HTML throughout
- Proper heading hierarchy (h1 → h2 → h3)
- Focus states on all interactive elements
- Alt text for visualization (decorative)
- Color contrast ratio > 4.5:1
- Keyboard navigation support

---

## FUTURE EXTENSIBILITY

**Phase 2 Features (Not Now):**
- Individual blog post pages (MDX)
- Project detail pages
- Contact form
- Resume download
- Dark mode toggle
- Analytics

**Content Management:**
- Structure data files to easily migrate to CMS
- Keep dummy content clearly marked
- Use TypeScript interfaces for type safety

---

## QUALITY CHECKLIST

Before each phase completion:
- [ ] Matches CLAUDE.md specifications
- [ ] Typography follows design system
- [ ] Spacing is generous and consistent
- [ ] Colors match exactly
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] Smooth animations
- [ ] Fast page load
- [ ] Clean, readable code
