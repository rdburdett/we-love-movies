/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable("movies_theaters", (table) => {
    // - `movie_id`: (Foreign Key) A reference ID to a particular movie.
    table.integer("movie_id").unsigned().notNullable();
    table
    .foreign("movie_id")
    .references("movie_id")
    .inTable("movies")
    .onDelete("cascade");
    // - `critic_id`: (Foreign Key) A reference ID to a particular critic.
    table.integer("theater_id").unsigned().notNullable();
    table
    .foreign("theater_id")
    .references("theater_id")
    .inTable("theaters")
    .onDelete("cascade");
    // - `is_showing`: (Boolean) A representation of whether or not the movie is currently showing in the referenced theater.
    table.boolean("is_showing")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("movies_theaters");
};
