const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js", // 우리가 변경하고자 하는 파일
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  // 변경하고자 하는 파일을 저장하는 곳
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "assets"),
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
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // 로더는 역순으로 써야한다. 웹팩은 뒤에서부터 시작하기 때문에
      },
    ],
  },
};
