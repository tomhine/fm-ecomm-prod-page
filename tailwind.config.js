module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "hsl(26, 100%, 55%)",
          paleorange: "hsl(25, 100%, 94%)",
        },
        neutral: {
          darkblue: "hsl(220, 13%, 13%)",
          darkgrayblue: "hsl(219, 9%, 45%)",
          grayblue: "hsl(220, 14%, 75%)",
          lightgrayblue: "hsl(223, 64%, 98%)",
        },
      },
      spacing: {
        17: "68px",
        75: "300px",
      },
    },
  },
  plugins: [],
};
