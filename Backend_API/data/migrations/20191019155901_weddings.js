//Wedding Table
exports.up = function(knex) {
  return knex.schema.createTable("wedding", tbl => {
    tbl.increments(); //PK
    tbl
      .string("wedding_name", 256)
      .notNullable()
      .unique();
    tbl.string("venue", 128);
    tbl.integer("guest_num");
    tbl.text("description", 512);
    tbl.string("image_url");
    //FK
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("wedding");
};
