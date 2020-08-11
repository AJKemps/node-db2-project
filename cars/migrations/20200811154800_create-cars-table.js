exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id");

    tbl.string("VIN", 100).notNullable().unique();
    tbl.string("Make", 50).notNullable();
    tbl.string("Model", 50).notNullable();
    tbl.integer("Mileage", 50).notNullable();

    tbl.string("Transmission Type", 50);
    tbl.string("Title Status", 50);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
