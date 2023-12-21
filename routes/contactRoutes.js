import express from "express";
import { contactForm } from "../controllers/contactControllers.js";

export const contactRoutes = express.Router();
contactRoutes.post("/contact", contactForm);
