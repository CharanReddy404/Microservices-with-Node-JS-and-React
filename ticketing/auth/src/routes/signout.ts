import express from "express";

const signoutRouter = express.Router();

signoutRouter.post("/api/users/currentuser", (req, res) => {
  res.send("Hello World");
});

export default signoutRouter;
