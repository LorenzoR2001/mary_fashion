/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {colors: {
      myblack: "#1E1E1E",
      mywhite: "#F8F8F8",
      mygold: "#ebc67a",
      mygrey: "#707070",
      myred: "#db545a",
  },},
  },
  plugins: [],
};
