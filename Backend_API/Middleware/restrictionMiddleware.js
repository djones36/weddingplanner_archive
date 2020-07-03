const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // check that the token is valid
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        // Invalid token
        res.status(401).json({ message: "Invalid token" });
      } else {
        // token is correct
        req.user = {
          username: decodedToken.username,
          role: decodedToken.role,
          id: decodedToken.subject
        };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No token provided" });
  }
};
