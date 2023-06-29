import express from "express";

const signinRouter = express.Router();

signinRouter.post("/api/users/signin", (req, res) => {
  res.send("Hello World");
});

export default signinRouter;
