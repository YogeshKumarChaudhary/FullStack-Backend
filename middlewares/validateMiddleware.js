const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = "wrong Details Filled";
    const extraDetails = err.errors[0].message;
    const error = {
      message,
      extraDetails,
    };
    // res.status(400).json({ msg: message });
    next(error);
  }
};

module.exports = validate;
