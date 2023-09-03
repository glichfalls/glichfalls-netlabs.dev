/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primary: "#324EA3",
      secondary: "#FA8F68",
      accent: "#8C4B3C",
      white: "#FFFFFF",
      gray: {
        900: "#111820",
        800: "#1F2937",
        700: "#374151",
        600: "#4B5563",
        500: "#6B7280",
        400: "#9CA3AF",
        300: "#D1D5DB",
        200: "#E5E7EB",
        100: "#F3F4F6",
      },
    },
    fontFamily: {
      "open-sans": ['"Open Sans"', "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
