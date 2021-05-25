import express from "express"; // 서버 구축의 시작

const PORT = 4000;

const app = express(); // express 애플리케이션 생성

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// http GET Method.  this is request
const handleHome = (req, res) => {
  return res.send("i love middlewares");
};

app.get("/", logger, handleHome);

// this is callback
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// listen connection
app.listen(PORT, handleListening); // port, callback
