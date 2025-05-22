import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'anticipatory-black': '#000000',
        'conversational-white': '#FFFFFF',
        'predictive-magenta': '#FF0099',
        'intelligent-gray': {
          50: '#FAFAFA',
          100: '#F8F8F8',
          200: '#E5E5E5',
          600: '#666666',
          800: '#1A1A1A',
          900: '#0F0F0F'
        }
      },
      fontFamily: {
        'anticipatory': ['Raleway', 'sans-serif'],
        'conversational': ['Manrope', 'sans-serif']
      },
      fontWeight: {
        'ultra-thin': '200',
        'conversational': '300',
        'predictive': '600'
      },
      letterSpacing: {
        'anticipatory': '0.1em',
        'conversational': '0.03em'
      },
      spacing: {
        'asymmetric-third': '33.333333%',
        'asymmetric-two-thirds': '66.666667%'
      },
      animation: {
        'predictive-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'thinking': 'spin 1s linear infinite',
        'anticipatory-fade': 'fadeIn 0.5s ease-in-out'
      }
    }
  },
  plugins: [],
};

export default config;