import express from "express";
import { registerView } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/vidoes/:id([0-9a-f]{24})/view", registerView);

export default apiRouter;
