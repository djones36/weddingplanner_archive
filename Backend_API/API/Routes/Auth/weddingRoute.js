const router = require("express").Router();
const Weddings = require("../../../API/Models/weddingModel");
const errorRef = require("../../../Middleware/errorRef");
const validatePostContent = require("../../../Middleware/validatePostContent");

//get all user wedding

router.get("/", (req, res) => {
  Weddings.find(req.params.id)
    .then(wedding => {
      res.status(200).json(wedding);
    })
    .catch(err => {
      res.status(500).json({
        message: "failed to load all of the wedding post",
        error: errorRef(err)
      });
    });
});

//get user's wedding by ID
router.get("/user/", (req, res) => {
  const userId = req.user.id;
  Weddings.findByUserId(userId)
    .then(wedding => {
      console.log(wedding);
      if (wedding.length > 0) {
        res.status(200).json({
          message: `All of user ID ${userId} weddings`,
          weddings: wedding
        });
      } else {
        res.status(404).json({
          message: "The user with this specified ID doesn't exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "The User's wedding post information couldn't be retrieved.",
        error: errorRef(err)
      });
    });
});

//get single wedding by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Weddings.findById(id)
    .then(wedding => {
      console.log(wedding);
      if (wedding.length > 0) {
        res.status(200).json(wedding);
      } else {
        res.status(404).json({
          message: "The wedding with this specified ID doesn't exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "The wedding post information couldn't be retrieved.",
        error: errorRef(err)
      });
    });
});
//create a wedding post without userID
router.post("/", validatePostContent, (req, res) => {
  const weddingPost = req.body;
  Weddinds.add(weddingPost)
    .then(wedding => {
      res.status(201).json(wedding);
    })
    .catch(err => {
      res.status(500).json({
        message: "failed to create wedding post",
        error: errorRef(err)
      });
    });
});
//Create wedding with user id
router.post("/user/", validatePostContent, (req, res) => {
  const userId = req.user.id;
  const weddingPost = req.body;
  Weddings.addByUser(userId, weddingPost)
    .then(weddingPost => {
      res.status(201).json(weddingPost);
    })
    .catch(err => {
      res.status(500).json({
        message: "failed to create wedding post",
        error: errorRef(err)
      });
    });
});
//edit wedding
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const update = req.body;
  Weddings.updateContent(id, update)
    .then(updateRes => {
      console.log("update", updateRes);
      res.status(200).json(updateRes);
    })
    .catch(err => {
      res.status(500).json(errorRef(err));
    });
});

//delete wedding by its id

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Weddings.findById(id)
    .first()
    .then(obj => {
      if (obj) {
        Weddings.remove(obj.id)
          .then(deleted => {
            res
              .status(200)
              .json({ message: "deleted a wedding", Deleted: deleted });
          })
          .catch(err => {
            res.status(500).json(errorRef(err));
          });
      } else {
        res
          .status(404)
          .json({ message: "The post with this id does not exist." });
      }
    });
});

module.exports = router;
