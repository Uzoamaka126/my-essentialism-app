
exports.up = function(knex) {
  return knex.schema
    .createTable('values', table => {
        table
            .increments('id')
        table
            .string('value_name', 200)
            .notNullable()
            .unique()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('values')    
};
