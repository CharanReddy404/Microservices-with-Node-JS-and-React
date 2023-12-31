import express from "express";
import { json } from "body-parser";
import "express-async-errors";

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
    secure: process.env.NODE_ENV !== "test",
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

export { app };
