import express from "express"; // 서버 구축의 시작

const PORT = 4000;

const app = express(); // express 애플리케이션 생성

// http GET Method.  this is request
const handleHome = (req, res) => {
  return res.send("i still love you");
};

const handleLogin = (req, res) => {
  return res.send("Login here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

// this is callback
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// listen connection
app.listen(PORT, handleListening); // port, callback
