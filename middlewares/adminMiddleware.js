const adminMiddleware = async (req, res, next) => {
  try {
    const isAdmin = req.user.isAdmin;
    // console.log(isAdmin);
    if (!isAdmin) {
      return res
        .status(403)
        .json({ message: "Access denied. User is not an Admin" });
    }

    return next();
  } catch (error) {
    console.log("adminMiddleware error", error);
  }
};

module.exports = adminMiddleware;
