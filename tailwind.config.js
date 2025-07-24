/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D9CDB", // Healthcare Blue
        accent: "#F58A1F", // Saffron
        danger: "#EB5757", // Soft Red
        success: "#27AE60", // Mint Green
        charcoal: "#1F1F1F", // Dark Text
        lightGray: "#F4F4F4", // Light Text
        section: "#F0F2F5", // Light Background
        background: "#FFFFFF", //White
      },
    },
  },
  plugins: [],
};
