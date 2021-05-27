import express from "express"; // 서버 구축의 시작
import morgan from "morgan";

const PORT = 4000;

const app = express(); // express 애플리케이션 생성
const logger = morgan("dev");
app.use(logger);

// Global Router
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

// Local Router
const userRoudter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRoudter.get("/edit", handleEditUser);

const videoRouter = express.Router();

videoRouter.get("/watch", handleWatchVideo);

const handleWatchVideo = (req, res) => res.send("Watch Video");

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRoudter);

// this is callback
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// listen connection
app.listen(PORT, handleListening); // port, callback
