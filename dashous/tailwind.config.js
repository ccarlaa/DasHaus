/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
  extend: {
    colors: 
    {
      blue:{ 
        default: "#00274C",
      },
      red: {
        default: "#B23814",
      },
      gray: {
        100: "#D8D8D8",
        200: "#231F20",
      }
    },
    fontSize: {
      '2xl': '40px',
      xl: '36px',
      lg: '24px',
      md: '18px',
      sm: '16px',
    },
    fontFamily: {
      default: ['Nunito', 'sans-serif'],
      sans: ["Nunito", "sans-serif"],
      goblin: ["Goblin One", "serif"],
    },
  },
  },
  plugins: [],
}
