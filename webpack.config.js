module.exports = {
  entry: "./src/client/js/main.js", // 우리가 변경하고자 하는 파일
  // 변경하고자 하는 파일을 저장하는 곳
  output: {
    filename: "main.js",
    path: "./assets/js",
  },
};
