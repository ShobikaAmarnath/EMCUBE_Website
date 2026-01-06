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
          primary: '#0047FF',           // Core Cobalt Blue from logo
          secondary: '#4D00FF',         // Deep Indigo/Purple from logo accents
          accent: '#00D1FF',            // Electric Cyan for "Glow" effects
          'primary-translucent': 'rgba(0, 71, 255, 0.2)', // For button overlays
          slate: '#2D3447',             // Professional Slate from logo circuit lines
          glow: '#00FFFF',              // Keeping cyan/aqua as it fits the tech vibe
          matrix: '#00D1FF',            // Changed from green to cyan for tech consistency
        },
        // Primary Palette (Blues)
        primary: {
          50: '#f0f5ff',
          100: '#e0eaff',
          500: '#0047FF',               // Main Cobalt
          600: '#0036D1',               // Darker Cobalt
          700: '#0026A3',
          800: '#001A75',               // Deep Navy
        },
        // Secondary Palette (Teals)
        secondary: {
          50: '#f5f0ff',
          100: '#ece0ff',
          500: '#4D00FF',               // Main Indigo
          600: '#3C00C7',
          700: '#2C0094',
        },
        // Accent Colors
        accent: {
          silver: '#E2E8F0',            // New Silver accent for "Tech" feel
          success: '#10B981',           // Standard professional emerald green
          'success-dark': '#059669',
          purple: {
            100: '#f3e8ff',
            300: '#d8b4fe',
            500: '#8B5CF6',
            600: '#7C3AED',
          },
          indigo: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            500: '#6366f1',
            600: '#4f46e5',
          },
        },
        // Text Colors
        text: {
          main: '#1A202C',              // Deepest Slate
          heading: '#171923',
          'heading-dark': '#CBD5E0',    // Light gray for dark backgrounds
          body: '#2D3748',
          'body-dark': '#A0AEC0',       // Muted gray for dark backgrounds
          muted: '#718096',
          light: '#EDF2F7',
          icon: '#4A5568',
          'footer-link': '#E2E8F0',
          footer: '#A0AEC0',
          white: '#ffffff',
        },
        // Background Colors
        background: {
          main: '#ffffff',
          'light-gray': '#F7FAFC',      // Clean slate-tinted off-white
          subtle: '#EDF2F7',
          hover: '#E2E8F0',
          'hover-light': '#F1F5F9',
          accent: '#EBF8FF',            // Subtle blue tint instead of purple
          dark: '#0A1128',              // Deep Midnight Navy (Replaced hero dark)
          'body-1': '#050A18',          // Deepest Navy for gradients
          'body-2': '#0A1128',          // Core Navy
          'body-3': '#1C2541',          // Lighter Navy/Slate
          tab: '#CBD5E0',
        },
        // Border Colors
        border: {
          DEFAULT: '#E2E8F0',
          dark: '#2D3748',
          form: '#CBD5E0',
          tab: '#EDF2F7',
        },
        // UI Specific Colors
        ui: {
          link: '#0047FF',
        },
        hover: {
          indigo: '#4D00FF',
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