import express from "express";
import { currentUser } from "../middlewares/currentUser";

const currentUserRouter = express.Router();

currentUserRouter.get("/api/users/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export default currentUserRouter;
