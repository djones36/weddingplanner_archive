const db = require("../../config/dbConfig");

module.exports = {
  find,
  findById,
  findByUserId,
  add,
  addByUser,
  updateContent,
  remove,
  removeAllWeddings
};

function find(id) {
  return db("wedding");
}

function findById(id) {
  console.log("findbyID", id);
  return db("wedding").where("id", Number(id));
}

function findByUserId(id) {
  return db("wedding").where({ user_id: Number(id) });
}

function addByUser(userId, weddingPost) {
  weddingPost.user_id = userId;
  return db("wedding")
    .where("user_id", Number(userId))
    .insert(weddingPost)
    .then(ids => {
      return findById(ids[0]);
    });
}

function add(wedding) {
  return db("wedding")
    .insert(wedding, "id")
    .then(([id]) => findById(id));
}

async function updateContent(id, wedding) {
  console.log("wedding", wedding);
  await db("wedding")
    .update({
      wedding_name: wedding.wedding_name,
      venue: wedding.venue,
      guest_num: wedding.guest_num,
      description: wedding.description,
      image_url: wedding.image_url
    })
    .where("id", Number(id));

  return findById(Number(id)).first();
}

function remove(id) {
  console.log("deleted", id);
  return db("wedding")
    .del()
    .where("id", id);
}

function removeAllWeddings(id) {
  return db("wedding")
    .where("user_id", Number(id))
    .delete();
}
