/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        sand: "#F4EAD6",
        clay: "#C9B69A",
        brass: "#B08A5A",
        paper: "#FAF7F0"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
};
