import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json("Unauthorized HTTP, Token not Provided");
  }
  //   console.log("token from authMiddleware", token);

  const jwtToken = token.replace("Bearer", "").trim();
  //   console.log("Token from authMiddleware", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.jWT_TOKEN_KEY);
    // console.log(isVerified);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    // console.log(userData);
    req.user = userData;
    req.token = token;
    req.userId = isVerified._id;

    next();
  } catch (error) {
    console.log("authMiddleware Error", error);
  }
};
