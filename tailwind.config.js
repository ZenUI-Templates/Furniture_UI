/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        bgColor: "#F6FAFD",
        bgCard: "#DDDDDDF",
        mainColor: "#FA522D",
        card: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
