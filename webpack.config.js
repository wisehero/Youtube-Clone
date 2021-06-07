const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js", // 우리가 변경하고자 하는 파일
  mode: "development",
  // 변경하고자 하는 파일을 저장하는 곳
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets", "js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
