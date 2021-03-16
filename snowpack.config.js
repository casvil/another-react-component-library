/** @type {import("snowpack").SnowpackUserConfig} */
module.exports = {
  mount: {
    // directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-react-refresh"],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
};
