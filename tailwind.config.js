/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('../src/images/bg.jpg')",
        'dark': "url('../src/images/bg-dark.jpg')",
      },
      fontFamily: {
        'text': ['Poppins', 'sans-serif'],
        'heading': ['Roberto Slab', 'serif'],
      },
      colors: {
        'primary': "#f43f5e", // rose-500
        'lightSecondary':'#f3f4f6', // gray-100
        'darkSecondary':'#262626', // neutral-800
        'lightText':'#64748b', // slate-600
        'darkText':'#9ca3af', // gray-400
        'gradientFrom':'#DD2476', // pink-600
        'gradientTo':'#fa5252ef', // is'nt tailwind color
      },
    },
  },
  plugins: [require("daisyui")],
}

