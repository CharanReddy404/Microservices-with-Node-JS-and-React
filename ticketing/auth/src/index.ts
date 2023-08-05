import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import mongoose from "mongoose";

import currentUserRouter from "./routes/currentUser";
import signinRouter from "./routes/signin";
import signoutRouter from "./routes/signout";
import signupRouter from "./routes/signup";
import { errorHandler } from "./middlewares/errorHandler";
import { NotFoundError } from "./errors/NotFoundError";
import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to MongoDB..");
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log("listening on port 3000..");
  });
};

start();
