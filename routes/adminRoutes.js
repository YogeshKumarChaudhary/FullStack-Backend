const express = require("express");
const {
  getUsersData,
  getContactData,
  getServiceData,
  deleteUsers,
  deleteContact,
  deleteServices,
  updateUser,
  updateService,
} = require("../controllers/adminControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const adminRoutes = express.Router();

adminRoutes.get("/users", authMiddleware, adminMiddleware, getUsersData);
adminRoutes.get("/contacts", authMiddleware, adminMiddleware, getContactData);
adminRoutes.get("/services", authMiddleware, adminMiddleware, getServiceData);
adminRoutes.delete("/users/:id", authMiddleware, adminMiddleware, deleteUsers);
adminRoutes.delete(
  "/contacts/:id",
  authMiddleware,
  adminMiddleware,
  deleteContact
);
adminRoutes.delete(
  "/services/:id",
  authMiddleware,
  adminMiddleware,
  deleteServices
);
adminRoutes.put("/users/update/:id",authMiddleware,adminMiddleware,updateUser)
adminRoutes.put("/services/update/:id",authMiddleware,adminMiddleware,updateService)

module.exports = adminRoutes;
