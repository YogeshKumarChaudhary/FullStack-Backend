import express from "express";
import services  from "../controllers/servicecontrollers.js";

export const serviceRoutes = express.Router();
serviceRoutes.get("/service", services);
