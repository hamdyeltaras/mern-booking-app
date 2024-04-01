/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        sm: "4rem", 
        md: "6rem", 
        lg: "8rem", 
        xl: "10rem", 
      },
    },
  },
  plugins: [],
}

