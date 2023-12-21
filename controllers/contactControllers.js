import { Contact } from "../models/contactModel.js";

export const contactForm = async (req, res, next) => {
  try {
    const contactDetails = await Contact(req.body).save();
    res
      .status(200)
      .json({ message: "Message send SuccessFully", contactDetails });
  } catch (error) {
    // return res.status(500).json({ message: "Message not Delivered" });
    console.log(error);
  }
};
