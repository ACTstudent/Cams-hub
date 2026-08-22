/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: "#E0E5EC",
          fg: "#3D4852",
          muted: "#6B7280",
          accent: "#6C63FF",
          "accent-light": "#8B84FF",
          teal: "#38B2AC",
          "shadow-light": "rgba(255, 255, 255, 0.5)",
          "shadow-dark": "rgba(163, 177, 198, 0.6)",
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '32px',
        '2xl': '16px',
        'xl': '12px',
      },
      boxShadow: {
        'neo-extruded': '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)',
        'neo-extruded-hover': '12px 12px 20px rgba(163, 177, 198, 0.7), -12px -12px 20px rgba(255, 255, 255, 0.6)',
        'neo-extruded-sm': '5px 5px 10px rgba(163, 177, 198, 0.6), -5px -5px 10px rgba(255, 255, 255, 0.5)',
        'neo-inset': 'inset 6px 6px 10px rgba(163, 177, 198, 0.6), inset -6px -6px 10px rgba(255, 255, 255, 0.5)',
        'neo-inset-deep': 'inset 10px 10px 20px rgba(163, 177, 198, 0.7), inset -10px -10px 20px rgba(255, 255, 255, 0.6)',
        'neo-inset-sm': 'inset 3px 3px 6px rgba(163, 177, 198, 0.6), inset -3px -3px 6px rgba(255, 255, 255, 0.5)',
        'neo-accent-btn': '6px 6px 14px rgba(108, 99, 255, 0.4), -6px -6px 14px rgba(255, 255, 255, 0.6)',
        'neo-accent-active': 'inset 4px 4px 8px rgba(0, 0, 0, 0.25), inset -4px -4px 8px rgba(255, 255, 255, 0.2)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        }
      }
    },
  },
  plugins: [],
}
