/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // 8pt grid system (spacing multiplied by 0.5rem = 8px)
    spacing: {
      '0': '0px',
      '1': '0.5rem',   // 8px
      '2': '1rem',     // 16px
      '3': '1.5rem',   // 24px
      '4': '2rem',     // 32px
      '5': '2.5rem',   // 40px
      '6': '3rem',     // 48px
      '8': '4rem',     // 64px
      '10': '5rem',    // 80px
      '12': '6rem',    // 96px
      '16': '8rem',    // 128px
      '20': '10rem',   // 160px
      '24': '12rem',   // 192px
    },
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      // WCAG 2.1 AA compliant colors (4.5:1 contrast ratio minimum)
      colors: {
        // Google-inspired palette
        primary: {
          50: '#e8f0fe',
          100: '#d2e3fc',
          200: '#aecbfa',
          300: '#8ab4f8',
          400: '#669df6',
          500: '#4285f4', // Google blue
          600: '#1a73e8',
          700: '#1967d2',
          800: '#185abc',
          900: '#174ea6',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368', // Google gray
          800: '#3c4043',
          900: '#202124',
        },
        // Semantic colors with WCAG AA contrast
        success: {
          50: '#e6f4ea',
          500: '#1e8e3e',
          700: '#137333',
        },
        warning: {
          50: '#fef7e0',
          500: '#f9ab00',
          700: '#ea8600',
        },
        error: {
          50: '#fce8e6',
          500: '#d93025',
          700: '#c5221f',
        },
      },
      // Google-style shadows
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)',
        'DEFAULT': '0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15)',
        'md': '0 2px 6px 2px rgba(60, 64, 67, 0.15)',
        'lg': '0 8px 12px 6px rgba(60, 64, 67, 0.15)',
        'xl': '0 12px 24px 16px rgba(60, 64, 67, 0.15)',
      },
      borderRadius: {
        'sm': '0.25rem', // 4px
        'DEFAULT': '0.5rem',  // 8px
        'md': '0.75rem', // 12px
        'lg': '1rem',    // 16px
        'xl': '1.5rem',  // 24px
      },
      // Typography scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],     // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],    // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
        '5xl': ['3rem', { lineHeight: '1' }],          // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
      },
      // Focus ring for accessibility
      ringColor: {
        'focus': '#1a73e8',
      },
      ringWidth: {
        'focus': '3px',
      },
      // Motion-safe utilities
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
  