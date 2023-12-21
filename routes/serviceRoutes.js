import express from "express";
import {Services}  from "../controllers/servicecontrollers.js";

export const serviceRoutes = express.Router();
serviceRoutes.get("/service", Services);
