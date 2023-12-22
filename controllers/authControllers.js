// const { isValidObjectId } = require("mongoose");
const  User  = require("../models/userModel.js");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Wellcome to router Home controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;
    const emailCheck = await User.findOne({ email: email });
    if (emailCheck) {
      return res.status(400).json({ msg: "Email AllReady Exist!!" });
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User({
      username,
      email,
      phone,
      password: hashPassword,
    }).save();
    res.status(201).json({
      msg: "Registration Succesfully",
      user,
      token: await user.generateToken(),
      userId: user._id.toString(),
    });
  } catch (error) {
    console.log(error);
    // res.status(500).json("Internal server Error");
    next(error);
  }
};

const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const isUserValid = await User.findOne({ email: email });
    if (!isUserValid) {
      res.status(400).json({ msg: "Invalid Credentials" });
    }

    // const isPasswordValid = await bcrypt.compare(
    //   password,
    //   isUserValid.password
    // );
    const isPasswordValid = await isUserValid.comparePassword(password);
    if (isPasswordValid) {
      res.status(200).json({
        msg: "LogIn Succesfully",
        isUserValid,
        token: await isUserValid.generateToken(),
        userId: isUserValid._id.toString(),
      });
    } else {
      res.status(400).json({ msg: "Invalid Email or Password !" });
    }
  } catch (error) {
    // res.status(500).json("Internal server Error");
    next(error);
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);
    return res.status(200).json(userData);
  } catch (error) {
    console.log("User Route", error);
  }
};

module.exports = { user, home, register, logIn };
