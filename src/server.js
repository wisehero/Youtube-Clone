import express from "express"; // 서버 구축 시작
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express(); // express 애플리케이션 생성
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    // 몽고 디비랑 연결
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

// View에서 데이터를 사용하게 해줄 수 있는 미들웨어
app.use(localsMiddleware);
// multer가 저장하는 폴더를 알려주는 코드
app.use("/uploads", express.static("uploads"));
// 라우터 등록
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
