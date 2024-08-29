/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C93C3",
        primaryHover: "#55679C",
        secondary: "#1E2A5E",
      },
    },
  },
  plugins: [],
};
