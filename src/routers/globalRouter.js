import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);

const handleHome = (req, res) => res.send("Home");

export default globalRouter;
