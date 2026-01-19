import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        cream: '#F5F1ED',

        // Text Colors
        'text-primary': '#000000',
        'text-secondary': '#6B7280',
        'text-tertiary': '#9CA3AF',

        // Accent Colors
        mint: '#10B981',

        // Border Colors
        border: '#E5E7EB',

        // Visualization Colors
        'viz-nodes': '#374151',
        'viz-paths': '#6B7280',
      },

      fontSize: {
        // Custom Typography Scale
        'page-title': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.025em', fontWeight: '700' }],
        'section-desc': ['1.25rem', { lineHeight: '1.75', fontWeight: '400' }],
        'card-title': ['1.5rem', { lineHeight: '1.5', fontWeight: '700' }],
        'body': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'meta': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },

      spacing: {
        // Custom Spacing
        'content': '700px',
        'section-sm': '5rem',
        'section-lg': '7.5rem',
        'header': '4rem',
        'blog-entry': '3rem',
        'project-card': '4rem',
      },

      maxWidth: {
        'content': '700px',
        'visualization': '600px',
      },

      letterSpacing: {
        'tight': '-0.025em',
        'wide': '0.05em',
        'wider': '0.1em',
      },

      lineHeight: {
        'relaxed': '1.75',
      },

      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },

      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
};

export default config;
