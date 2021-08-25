import express from "express";

const videoRouter = express.Router();

const hadleWatchVideo = (req, res) => res.send("Watch Video")


videoRouter.get("/watch", hadleWatchVideo)

export default videoRouter;