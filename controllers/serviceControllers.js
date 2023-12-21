import { Service } from "../models/serviceModel.js";

export const Services = async (req, res, next) => {
  try {
    const response = await Service.find();

    if (!response) {
      res.status(404).json({ message: "No services Found" });
    }

    res.status(200).json({ message: "Services Fetch SuccessFully", response });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: "Services not Fetched" });
  }
};

