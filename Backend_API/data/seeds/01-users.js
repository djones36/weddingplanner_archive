const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user").then(function() {
    // Inserts seed entries
    return knex("user").insert([
      {
        username: "weddingPlaner",
        password: bcrypt.hashSync("password1234"),
        name: "John Smith",
        phone: 18002341000,
        email: "johnSmith@gmail.com",
        location: "Seattle, WA"
      },
      {
        username: "weddingPlaner1",
        password: bcrypt.hashSync("password1234"),
        name: "Sarah",
        phone: 18642341020,
        email: "creativeweddings@gmail.com",
        location: "Portland"
      },
      {
        username: "weddingPlaner2",
        password: bcrypt.hashSync("password1234"),
        name: "Jessica Jung",
        phone: 18642341020,
        email: "jessica.jung.wedding@email.com",
        location: "NYC"
      }
    ]);
  });
};
