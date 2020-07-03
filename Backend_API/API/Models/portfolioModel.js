const db = require("../../config/dbConfig");

module.exports = {
  showAll,
  showProfile
};

function showAll() {
  return db("wedding as w")
    .join("user as u", "w.user_id", "u.id")
    .select("u.id", "u.name", "u.phone", "u.email", "u.location", "w.*")
    .orderBy("user_id");
}
function showProfile(id) {
  return db("wedding as w")
    .join("user as u", "w.user_id", "u.id")
    .select("u.id", "u.name", "u.phone", "u.email", "u.location", "w.*")
    .where({ user_id: Number(id) })
    .orderBy("user_id");
}
