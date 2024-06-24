import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'beige-bg': '#edd0be',
      'tile-bg': '#4a7174',
      'light-text': '#e7eaef',
      'dark-text': '#222222',
      'dark-text-subtle': '#555555',
      'subtle-text': '#bb7d7d',
      'accept': '#58c885',
      'reject': '#df6153',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    // fontSize: {
    //   'text-base': [
    //     '2rem',
    //     '2.5rem'
    //   ],
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
