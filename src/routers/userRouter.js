import express from "express";

const userRouter = express.Router();

const handleEidtUser = (req, res) => res.send("Edit User")

userRouter.get("/edit", handleEidtUser)

export default userRouter;