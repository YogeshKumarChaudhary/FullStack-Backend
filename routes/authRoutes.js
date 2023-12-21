import express from "express";
import { home, logIn, register, user } from "../controllers/authControllers.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { logInSchema, signUpSchema } from "../validators/authValidator.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = express.Router();
router.get("/", home);
router.post("/register", validate(signUpSchema), register);
router.post("/login", validate(logInSchema), logIn);
router.get("/user", authMiddleware ,user);
