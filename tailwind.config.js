/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "#D3D3D3",
        silver: "#C0C0C0",
        gray: "#808080",
        darkgray: "#A9A9A9",
        dimgray: "#696969",
        charcoal: "#36454F",
        jetblack: "#343434",
        // Add complementary colors if needed
        softblue: "#AEC6E4",
        blushpink: "#F6D2C2",
        sagegreen: "#B2BBAE",
        softyellow: "#F3E6A4",
        coral: "#FF6F61",
      },
    },
  },
  plugins: [],
};
