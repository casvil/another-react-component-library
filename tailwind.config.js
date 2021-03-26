const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", "./index.css"],
  theme: {
    backgroundColor: {
      default: colors.gray,
      primary: colors.lightBlue,
      success: colors.green,
      warning: colors.yellow,
      danger: colors.red,
    },
    textColor: {
      default: colors.white,
      primary: colors.white,
      success: colors.white,
      warning: colors.white,
      danger: colors.white,
    },
  },
};
