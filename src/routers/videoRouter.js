import express from "express";
import {see, edit, upload, deleteVideo} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see) // 숫자만 들어갈수 있게 (\\d+) 정규식을 적어줌
videoRouter.get("/:id(\\d+)/edit", edit)
videoRouter.get("/:id(\\d+)/delete", deleteVideo)
videoRouter.get("/upload",upload); // 순서 중요! express가 upload가 id라고 인식하지 않기 위해 + 추가 하지만 이제는 순서에 상관없이 쓸수 있음 위에 정규식을 추가하여 숫자만 인식하도록 하였기에

export default videoRouter;