/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        colors: {
          'google-blue': '#4285f4',
          'google-gray': '#5f6368',
          'light-gray': '#f8f9fa',
        },
        boxShadow: {
          'google': '0 2px 10px 0 rgba(0,0,0,0.1)',
          'google-hover': '0 4px 15px 0 rgba(0,0,0,0.15)',
        },
      },
    },
    plugins: [require("shadcn-ui/plugin")],
  }
  