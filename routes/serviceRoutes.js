const express = require("express");

const Services  = require("../controllers/serviceControllers.js");

const serviceRoutes = express.Router();
serviceRoutes.get("/service", Services);

module.exports = serviceRoutes;
