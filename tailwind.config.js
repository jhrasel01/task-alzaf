/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "320px",
        // => @media (min-width: 320px)

        tab: "667px",
        // => @media (min-width: 667px)

        laptop: "1024px",
        // => @media (min-width: 1024px)

        desktop: "1220px",
        // => @media (min-width: 1220px)
      },
      container: {
        center: true,
      },
      colors: {
        "custom-orang": "#F97316",
        "custom-dark-orang": "#ff984f",

        "custom-black": "#2E2E2E",
        "custom-text": "#434343",
        "custom--light-text": "#707070",

        "custom-bg-1": "#F0F1F1",
        "custom-bg-2": "#EFF0F5",

        "custom-border": "#D6D6D6",
      },
    },
  },
  plugins: [],
};
