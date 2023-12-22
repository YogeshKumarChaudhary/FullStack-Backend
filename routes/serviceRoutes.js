import express from "express";
import {ServicesController}  from "../controllers/servicecontrollers.js";

export const serviceRoutes = express.Router();
serviceRoutes.get("/service", ServicesController);
