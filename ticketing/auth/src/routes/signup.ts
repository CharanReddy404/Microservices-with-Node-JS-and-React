import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConnectionError } from "../errors/DatabaseConnectionError";
import { RequestValidationError } from "../errors/RequestValidationError";

const signupRouter = express.Router();

signupRouter.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("invalid email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    console.log("Creating user");

    throw new DatabaseConnectionError();

    res.send({ email, password });
  }
);

export default signupRouter;
