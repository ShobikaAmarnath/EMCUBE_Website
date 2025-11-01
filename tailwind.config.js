/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          pink: '#ff6b9d',                // Main brand pink
          orange: '#f7971e',              // Main brand orange
          'orange-translucent': '#f7951ec4', // Translucent variant for buttons
          magenta: '#e737ac',              // Accent magenta for headings
          glow: '#00ffff',                 // Decorative cyan/aqua glow
          matrix: '#00ff00',               // Decorative matrix green
        },
        // Primary Palette (Blues)
        primary: {
          50: '#eff6ff',                  // blue-50
          100: '#dbeafe',                 // blue-100
          500: '#3b82f6',                 // blue-500
          600: '#2563eb',                 // blue-600
          700: '#1d4ed8',                 // blue-700
          800: '#1e40af',                 // blue-800
        },
        // Secondary Palette (Teals)
        secondary: {
          50: '#f0fdfa',                  // teal-50
          100: '#ccfbf1',                 // teal-100
          500: '#14b8a6',                 // teal-500
          600: '#0d9488',                 // teal-600
          700: '#0f766e',                 // teal-700
        },
        // Accent Colors
        accent: {
          yellow: '#fde047',              // yellow-300
          success: '#4ade80',             // green-400
          'success-dark': '#48bb78',      // green-500
          purple: {
            100: '#f3e8ff',               // purple-100
            300: '#d8b4fe',               // purple-300
            500: '#a855f7',               // purple-500
            600: '#9333ea',               // purple-600
          },
          indigo: {
            50: '#eef2ff',                 // indigo-50
            100: '#e0e7ff',               // indigo-100
            200: '#c7d2fe',               // indigo-200
            300: '#a5b4fc',               // indigo-300
            500: '#6366f1',               // indigo-500
            600: '#4f46e5',               // indigo-600
          },
        },
        // Text Colors
        text: {
          main: '#1f2937',                 // gray-800, for primary text
          heading: '#333333',              // Dark gray for general headings
          'heading-dark': '#2d3748',      // slate-800, for dark headings
          body: '#374151',                 // gray-700, for body paragraphs
          'body-dark': '#4a5568',         // slate-600, for darker body text
          muted: '#4b5563',                // gray-600, for lighter descriptions
          light: '#e5e7eb',                // gray-200, for light text on dark backgrounds
          icon: '#9ca3af',                 // gray-400, for icons
          'footer-link': '#d1d5db',       // gray-300, for footer links
          footer: '#cccccc',               // Light gray for footer text
          white: '#ffffff',                // Pure white
        },
        // Background Colors
        background: {
          main: '#ffffff',                 // Pure white background
          'light-gray': '#f8f9fa',        // Off-white for sections
          subtle: '#f8fafc',               // slate-50, very light gray
          hover: '#f3f4f6',                // gray-100, for light hover states
          'hover-light': '#edf2f7',      // slate-100, another light hover
          accent: '#faf5ff',               // purple-50, for subtle accent backgrounds
          dark: '#0d1a2d',                 // Very dark blue for hero sections
          'body-1': '#1a0d1f',             // Dark purple for body gradient
          'body-2': '#2d1b3d',             // Medium-dark purple for body gradient
          'body-3': '#3d2447',             // Lightest purple for body gradient
          tab: '#b7cfde',                  // Light blue/gray for filter tabs
        },
        // Border Colors
        border: {
          DEFAULT: '#e5e7eb',              // gray-200, default border color
          dark: '#1f2937',                 // gray-800, for dark borders
          form: '#d1d5db',                 // gray-300, for form inputs
          tab: '#e2e8f0',                  // slate-200, for filter tabs
        },
        // UI & Hover Specific Colors
        ui: {
          link: '#667eea',                 // indigo-400, for links
        },
        hover: {
          indigo: '#4f46e5',               // indigo-600, for indigo hover states
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}