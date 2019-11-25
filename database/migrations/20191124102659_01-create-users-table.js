
exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
        table
            .increments('id')
        table
            .string('username', 128)
            .notNullable()
            .unique()
        table
            .string('email', 200)
            .notNullable()
            .unique()
        table
            .string('password', 200)
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};
