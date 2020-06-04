import morgan from "morgan";
import express from "express"; // express를 파일안에서 찾는다. 만약에 없으면 node_modules에서 찾는ㄷ.
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express(); // express를 app 변수에 담아서 실행

const PORT = 4000; //

// function handleListening() {
//   console.log("Listening on: http://localhost:4000");
// }

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

function handleHome(req, res) {
  console.log("Hi from home");
  res.send("Hello from the other side");
}
app.use(cookieParser());
app.use(bodyParser.json()); // json을 전송했을 때 서버가 json을 이해하게 해준다.
app.use(bodyParser.urlencoded({ extended: true })); // 일반적인 html form을 전송했을 때 서버가 urlencoded라는걸 이해하게 해준다.
app.use(morgan("tiny"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
