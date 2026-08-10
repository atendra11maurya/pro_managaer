/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#151515",
        muted: "#686868",
        cream: "#ffffff",
        paper: "#f7f7f7",
        accent: "#1f81ff",
        line: "#dedede",
        contactBg: "#393837",
        footerBg: "#151515",
        skyGlow: "#56bdf8",
        skyBlue: "#60a5fa",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        'pop': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'level1': '0 2px 8px rgba(56, 189, 248, 0.08)',
        'level2': '0 4px 14px rgba(15, 23, 42, 0.08)',
        'level3': '0 20px 45px rgba(15, 23, 42, 0.1)',
        'level4': '0 10px 28px rgba(31, 129, 255, 0.35)',
        'level5': '0 28px 60px rgba(0, 0, 0, 0.5), 0 0 45px rgba(31, 129, 255, 0.22)',
      }
    },
  },
  plugins: [],
}
