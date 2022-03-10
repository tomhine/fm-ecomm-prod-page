module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "hsl(26, 100%, 55%)",
        },
      },
    },
  },
  plugins: [],
};
