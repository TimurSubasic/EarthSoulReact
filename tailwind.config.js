/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '535px'
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        "wiggle-fast": "wiggle-fast 0.3s ease-in-out infinite",
        "pulse-strong": "pulse-strong 1.45s ease-in-out infinite",
        "pulse-strong-fast": "pulse-strong 0.5s ease-in-out infinite",
        "ping-light": "ping-light 1s ease-in-out infinite",

      },
      keyframes: {
        wiggle: {
          "0%, 100%": {transform: "rotate(-6deg)"},
          "50%": {transform: "rotate(6deg)"}
        },
        "wiggle-fast": {
          "0%, 100%": {transform: "rotate(-2deg)"},
          "50%": {transform: "rotate(2deg)"}
        },
        "pulse-strong": {
          "0%, 100%": {opacity: "100%"},
          "50%": {opacity: "10%"}
        },
        "ping-light": {
          "0%, 50%": {
              transform: "scale(1.15)",
              opacity: "0.6"
          },
          "50%, 100%": {
            transform: "scale(1)",
            opacity: "1"
        }
        }
      },
      fontFamily: {
        static: ["Sedan SC", "static"],
        sans: ["Open Sans", "sans-serif"],
        serif: ["Playfair Display SC", "serif"]
      }
    },
  },
  plugins: [],
}
