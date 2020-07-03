const db = require("../../config/dbConfig");

module.exports = {
  find,
  findById,
  findBy,
  add,
  update,
  remove
};

function find() {
  return db("user").select("username", "name", "phone", "email", "location");
} //working

function findById(id) {
  return db("user")
    .select("username", "id", "name", "phone", "email", "location")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("user").where(filter);
}

function add(user) {
  return db("user")
    .insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(id, changes) {
  return db("user")
    .where({ id })
    .update(changes)
    .then(id => {
      return findById(id);
    });
}

function remove(id) {
  return db("user")
    .where("id", id)
    .del();
}
