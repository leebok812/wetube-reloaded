import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home")
globalRouter.get("/", handleHome)

const userRouter = express.Router();
const handleEidtUser = (req, res) => res.send("Edit User")
userRouter.get("/edit", handleEidtUser)

const videoRouter = express.Router();
const hadleWatchVideo = (req, res) => res.send("Watch Video")
videoRouter.get("/watch", hadleWatchVideo)


app.use("/", globalRouter);
app.use("/videos",videoRouter);
app.use("/users", userRouter);




const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);