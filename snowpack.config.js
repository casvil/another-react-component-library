/** @type {import("snowpack").SnowpackUserConfig} */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-babel",
  ],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
};
