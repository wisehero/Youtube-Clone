import express from "express"; // 서버 구축 시작
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import apiRouter from "./routers/apiRouter";
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

app.use(flash());
// View에서 데이터를 사용하게 해줄 수 있는 미들웨어
app.use(localsMiddleware);
// multer가 저장하는 폴더를 알려주는 코드
// express에게 폴더를 보여주는 static
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
// 라우터 등록
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/api", apiRouter);

export default app;
