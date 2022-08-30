/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: {
          1000: '#001B3A',
          900: '#001f42',
          800: '#002249',
          700: '#1B314B',
          600: '#1a3555',
          500: '#0D2D52',
          400: '#4d627b',
          300: '#8C9AAA',
        },

        darkGrey: {
          500: '#374151',
        },
      },
      backgroundImage: {
        wavesDark: "url('/src/assets/background/waveDark.svg')",
        wavesLight: "url('/src/assets/background/waveLight.svg')",
        wavesLight50: "url('/src/assets/background/waveLight50.svg')",
        wavesDarkAlt: "url('/src/assets/background/wavesDarkAlt.svg')",
        wavesCurvedDark: "url('/src/assets/background/waveCurvedDark8003.svg')",
        wavesCurvedLight: "url('/src/assets/background/waveCurvedLight3.svg')",
        animatedwavesCurvedDark:
          "url('/src/assets/background/animatedwaveCurvedDark.svg')",
        animatedwavesCurvedLight:
          "url('/src/assets/background/animatedwaveCurvedLight.svg')",
        cardWaveLight: "url('/src/assets/background/cardBlobLight2.svg')",
        cardWaveDark: "url('/src/assets/background/cardBlobDark2.svg')",
      },
    },
  },
  plugins: [],
};
