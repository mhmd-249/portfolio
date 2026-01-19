// Design System Constants from CLAUDE.md specification

// =============================================================================
// COLORS
// =============================================================================

export const colors = {
  // Primary Colors
  background: {
    landing: '#F5F1ED',    // Warm cream
    page: '#FFFFFF',       // White for other pages
  },
  text: {
    primary: '#000000',    // Main text
    secondary: '#6B7280',  // Descriptions, subtitles
    tertiary: '#9CA3AF',   // Dates, meta, footer
  },
  accent: {
    link: '#10B981',       // Mint green for links
    timeline: '#9CA3AF',   // Year markers
  },
  border: '#E5E7EB',       // Subtle borders

  // Visualization Colors (Agent Pathways)
  visualization: {
    nodes: '#374151',      // Dark gray
    paths: '#6B7280',      // Medium gray
  },
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const typography = {
  // Font Weights
  fontWeight: {
    normal: 400,
    bold: 700,
  },

  // Font Sizes (rem)
  fontSize: {
    pageTitle: '3rem',        // 48px
    sectionDesc: '1.25rem',   // 20px
    cardTitle: '1.5rem',      // 24px
    body: '1rem',             // 16px
    meta: '0.875rem',         // 14px
  },

  // Line Heights
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Letter Spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
  },
} as const;

// =============================================================================
// SPACING
// =============================================================================

export const spacing = {
  // Content Layout
  maxWidth: {
    content: '700px',
    visualization: '600px',
  },

  // Padding
  padding: {
    mobile: '1.5rem',      // 24px
    desktop: '3rem',       // 48px
  },

  // Vertical Spacing
  section: {
    sm: '5rem',            // 80px
    lg: '7.5rem',          // 120px
  },

  // Component Spacing
  paragraph: '1.5rem',     // 24px
  blogEntry: '3rem',       // 48px between blog entries
  projectCard: '4rem',     // 64px between project cards

  // Header
  headerHeight: '4rem',    // 64px

  // Footer
  footerPadding: '2rem',   // 32px
} as const;

// =============================================================================
// ANIMATIONS
// =============================================================================

export const animation = {
  // Durations
  duration: {
    fast: 200,             // ms - hover states
    normal: 300,           // ms - fade transitions
    slow: 400,             // ms - slide transitions
    visualization: 2500,   // ms - agent pathway flow
  },

  // Easing
  ease: {
    default: [0.4, 0.0, 0.2, 1],
    smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  },

  // Page Transitions
  pageTransition: {
    fadeIn: 300,
    slideUp: 20,           // px offset
    slideDuration: 400,
  },
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
} as const;

// =============================================================================
// SEO & METADATA
// =============================================================================

export const siteMetadata = {
  title: 'Mohammed Mohammed | ML Engineer & Researcher',
  description: 'Machine learning engineer and researcher helping companies build production-grade AI solutions.',
  keywords: 'machine learning, AI engineering, agentic AI, ML research',
  author: 'Mohammed Mohammed',
  siteUrl: 'https://mohammedmohammed.com', // Update with actual URL
} as const;

// =============================================================================
// NAVIGATION
// =============================================================================

export const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
] as const;

// =============================================================================
// SOCIAL LINKS
// =============================================================================

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/mohammedmohammed', // Update with actual URL
  github: 'https://github.com/mohammedmohammed',        // Update with actual URL
  twitter: 'https://x.com/mohammedmohammed',            // Update with actual URL
} as const;
