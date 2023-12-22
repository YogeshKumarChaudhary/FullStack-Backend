const express = require("express");

const contactForm  = require("../controllers/contactControllers.js");

const contactRoutes = express.Router();
contactRoutes.post("/contact", contactForm);

module.exports = contactRoutes;
