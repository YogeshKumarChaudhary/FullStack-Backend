const express = require("express");
const {
  home,
  logIn,
  register,
  user,
} = require("../controllers/authControllers.js");
const validate = require("../middlewares/validateMiddleware.js");
const { logInSchema, signUpSchema } = require("../validators/authValidator.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();
router.get("/", home);
router.post("/register", validate(signUpSchema), register);
router.post("/login", validate(logInSchema), logIn);
router.get("/user", authMiddleware, user);

module.exports = router;
