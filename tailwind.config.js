/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: "#FDFBF7",
        ink: "#2D2A26",
        forest: "#3A5A40",
        primary: "#2C787D",
        sand: "#D4A373",
        sage: "#A3B18A",
        clay: "#9B3525",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
