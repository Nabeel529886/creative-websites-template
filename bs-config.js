module.exports = {
  proxy: "localhost:8000",
  files: ["**/*.css", "**/*.pug", "**/*.js"],
  ignore: ["node_modules"],
  reloadDelay: 10,
  open: false,
  ui: false,
  notify: false,
  port: 3000,
};
