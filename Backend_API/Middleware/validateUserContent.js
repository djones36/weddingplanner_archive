module.exports = {
  validateUserContent,
  validateUserId,
  validateUserLogin
};
const Users = require("../API/Models/userModel");

//Middleware for login and account creation
function validateUserContent(req, res, next) {
  if (
    !req.body.username ||
    !req.body.password ||
    !req.body.name ||
    !req.body.email
  ) {
    res.status(400).json({
      message:
        "Username, password, name, email, & location fields are required."
    });
  } else if (req.body.password.length < 12) {
    res
      .status(400)
      .json({ message: "password must be at least 12 characters long." });
  } else {
    next();
  }
}

function validateUserLogin(req, res, next) {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      message: "Username, password fields are required."
    });
  } else {
    next();
  }
}

function validateUserId(req, res, next) {
  const userId = req.params.id;
  Users.findById(userId).then(valUser => {
    console.log(valUser);
    if (valUser) {
      req.user = valUser;
      next();
    } else {
      res.status(400).json({ message: "invalid user id" });
    }
  });
}

// async function checkValidUsername(req, res, next) {
//   const user = req.body.username;
//   const storedUser = await Users.findBy(user.username);
//   const storedEmail = await Users.findBy(user.email);
//   if (storedUser && user.username === storedUser.username) {
//     res
//       .status(404)
//       .json({ message: "Username is already taken, please choose another." });
//   } else if (storedEmail && user.email === storedUser.email) {
//     res
//       .status(404)
//       .json({ message: "email is already taken, please choose another." });
//   } else
//     next()
// }
