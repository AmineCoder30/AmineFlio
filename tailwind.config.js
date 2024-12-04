/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sideBg: {
          900: "#ffffff08",
          950: "#151312",
        },
      },
    },
  },
  plugins: [],
};
