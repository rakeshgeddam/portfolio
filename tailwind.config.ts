import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "#0ea5e9", // electric blue
          hover: "#0284c7",
          light: "#e0f2fe",
          dark: "#0369a1",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#171717",
          hover: "#F5F5F5",
          darkHover: "#262626",
          border: "#E5E5E5",
          darkBorder: "#404040",
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-hover': '0 8px 30px -4px rgba(0, 0, 0, 0.1)',
        'soft-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'soft-hover-dark': '0 8px 30px -4px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
} satisfies Config;
