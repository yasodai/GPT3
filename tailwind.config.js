// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
      },
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        subtext: "var(--color-subtext)",
        blog: "var(--color-blog)",
        footer: "var(--color-footer)",
      },
      backgroundImage: {
        gradient:
          "radial-gradient(circle at 10% 13%, #000C1A 0%, #002853 0%, #040C1A 100%)",
        "gradient-text":
          "linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%)",
        "gradient-bar":
          "linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%)",
        "gradient-gpt3":
          "radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)",
      },
    },
  },
  plugins: [],
};
