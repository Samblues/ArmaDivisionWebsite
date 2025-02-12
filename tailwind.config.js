module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'tactical-green': '#0C403E',
        'pure-white': '#FFFFFF',
        'deep-black': '#0E0E0E',
        'tactical-gray': '#A9A9A9',
        'crimson-red': '#7D1516',
        'alert-orange': '#E54716',
        'red-alert': '#B22222',
        'night-black': '#1C1C1C',
      },
      fontFamily: {
        primary: ['Oswald', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif'],
      },
      textShadow: {
        'glow': '0 0 10px rgba(255,255,255,0.5)',
        'glow-intense': '0 0 15px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.3)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(12,64,62,0.6))' },
          '50%': { filter: 'drop-shadow(0 0 15px rgba(12,64,62,0.9))' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          'text-shadow': '0 0 10px rgba(255,255,255,0.5)',
        },
        '.text-shadow-glow-intense': {
          'text-shadow': '0 0 15px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.3)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}; 