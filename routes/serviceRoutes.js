const express = require("express");

const ServicesController  = require("../controllers/serviceControllers.js");

const serviceRoutes = express.Router();
serviceRoutes.get("/service", ServicesController);

module.exports = serviceRoutes;
