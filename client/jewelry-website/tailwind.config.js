/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // ✅ Correct paths
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#6A0DAD", // Royal Purple
        secondary: "#008080", // Cool Teal
        gold: "#CE8B39", // Gold Foil for typography
        silver: "#C0C0C0", // Metallic Silver for buttons & accents
        charcoal: "#333333", // Charcoal Grey for depth & text
        background: "#0A0A0A", // Deep black background for luxury feel
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
