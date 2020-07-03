module.exports = (res, req, next) => {
  const Wedding = require("../API/Models/weddingModel");
  const postId = req.params.id;
  Wedding.findById(postId).then(valPost => {
    if (valPost) {
      req.post = valPost;
      next();
    } else {
      res.status(400).json({ message: "invalid user ID" });
    }
  });
};
