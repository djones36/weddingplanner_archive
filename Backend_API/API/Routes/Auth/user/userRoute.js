const router = require("express").Router();
const bcrypt = require("bcryptjs");
const gt = require("../../../../config/generateToken");
const Users = require("../../../Models/userModel");
const mw = require("../../../../Middleware/validateUserContent");
const errorRef = require("../../../../Middleware/errorRef");
const restrictionMiddleware = require("../../../../Middleware/restrictionMiddleware");

//Make an account
router.post("/register", mw.validateUserContent, (req, res) => {
  // implement registration
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(newUser => {
      console.log(newUser);
      res.status(201).json({
        message: `successfully registered new user ${newUser.username}, user ID ${newUser.id}`
      });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "failed to create account", error: errorRef(err) });
    });
});

//Login for user account
router.post("/login", mw.validateUserLogin, (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //produce token
        const token = gt.generateToken(user);

        //add token to response
        res.status(201).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "failed to login account", Err: errorRef(error) });
    });
});

// Get all users
router.get("/", restrictionMiddleware, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "failed to get all the users", Err: errorRef(error) });
    });
});

//Get user by id
router.get("/:id", restrictionMiddleware, mw.validateUserId, (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "failed to find user", Err: errorRef(error) });
    });
});

//Modify User
router.put("/:id", mw.validateUserId, restrictionMiddleware, (req, res) => {
  Users.update(req.params.id, req.body)
    .then(upUser => {
      res.status(201).json({
        message: "The user was correctly updated",
        updatedUser: upUser
      });
    })
    .catch(error =>
      res
        .status(500)
        .json({ message: "user unable to update", Err: errorRef(error) })
    );
});

//Delete User
router.delete("/:id", mw.validateUserId, restrictionMiddleware, (req, res) => {
  const id = req.params.id;
  Users.remove(id)
    .then(() => {
      res.status(200).json({ data: `User id ${id} was deleted` });
    })
    .catch(err => res.status(500).json({ err: "error", Err: errorRef(error) }));
});

module.exports = router;
