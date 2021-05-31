import "./db";
import "./model/Video";
import express from "express"; // 서버 구축 시작
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 3000;

const app = express(); // express 애플리케이션 생성
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// this is callback
const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}`);

// listen connection
app.listen(PORT, handleListening); // port, callback
