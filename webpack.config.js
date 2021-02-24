const path = require("path");

module.exports = {
  entry: "./components/index.js",
  output: {
    filename: "sway-ui.js",
    path: path.resolve(__dirname, "."),
  },
};
