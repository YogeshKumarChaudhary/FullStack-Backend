const Contact = require("../models/contactModel");
const Service = require("../models/serviceModel");
const User = require("../models/userModel");

// Get
const getUsersData = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Users Not Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    console.log("getUserData error", error);
  }
};
const getContactData = async (req, res) => {
  try {
    const message = await Contact.find();
    if (!message || message.length === 0) {
      return res.status(404).json({ message: "Contacts Not Found" });
    }
    res.status(200).json(message);
  } catch (error) {
    console.log("getContactData error", error);
  }
};
const getServiceData = async (req, res) => {
  try {
    const service = await Service.find();
    if (!service || service.length === 0) {
      return res.status(404).json({ message: "Services Not Found" });
    }
    res.status(200).json(service);
  } catch (error) {
    console.log("getServiceData error", error);
  }
};

// Delete
const deleteUsers = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Delete SuccessFully", user });
  } catch (error) {
    console.log("deleteUsers error", error);
  }
};
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete({ _id: req.params.id });
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Message Delete SuccessFully", contact });
  } catch (error) {
    console.log("deleteContact error", error);
  }
};
const deleteServices = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete({ _id: req.params.id });
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service Delete SuccessFully", service });
  } catch (error) {
    console.log("deleteServices error", error);
  }
};

// Updata
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const response = await User.findByIdAndUpdate({ _id: id }, updateData, {
      new: true,
    });
    // console.log(res);
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ response });
  } catch (error) {
    console.log("updateUser", error);
  }
};

const updateService = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const response = await Service.findByIdAndUpdate({ _id: id }, updateData, {
      new: true,
    });
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ response });
  } catch (error) {
    console.log("updateService Error", error);
  }
};

module.exports = {
  getUsersData,
  getContactData,
  getServiceData,
  deleteUsers,
  deleteContact,
  deleteServices,
  updateUser,
  updateService
};
