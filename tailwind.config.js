/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 700: "#17345c", 800: "#10294a", 900: "#0b1d36" },
        teal: { 500: "#14a89a", 600: "#0d9488", 700: "#0b7a70" },
        surface: "#f4f6f9",
        ink: "#2b3138",
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"] },
      boxShadow: { card: "0 2px 12px rgba(16, 41, 74, 0.08)" },
    },
  },
  plugins: [],
};
