//Logger
module.exports = (req, res, next) => {
  console.log(`${req.method} to ${req.path} at ${new Date().toISOString()}`);
  next();
};
