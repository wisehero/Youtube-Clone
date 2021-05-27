import express from "express"; // 서버 구축의 시작
import morgan from "mogran";

const PORT = 4000;

const app = express(); // express 애플리케이션 생성
const logger = morgan("dev");
app.use(logger);

// Global Router
const globalRouter = express.Router();
// Local Router
const userRoudter = express.Router();
const videoRouter = express.Router();

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRoudter);

// this is callback
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// listen connection
app.listen(PORT, handleListening); // port, callback
