import express from "express";
import {see, edit, upload, deleteVideo} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload",upload); // 순서 중요! express가 upload가 id라고 인식하지 않기 위해
videoRouter.get("/:id", see)
videoRouter.get("/:id/edit", edit)
videoRouter.get("/:id/delete", deleteVideo)

export default videoRouter;