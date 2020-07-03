module.exports = (req, res, next) => {
  if (!req.body.wedding_name || !req.body.description) {
    res.status(400).json({
      message: "wedding_name and description fields are required."
    });
  } else {
    next();
  }
};
