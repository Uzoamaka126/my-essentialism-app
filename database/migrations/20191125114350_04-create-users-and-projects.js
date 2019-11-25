
exports.up = function(knex) {
  return knex.schema 
    .createTable('users_and_projects', table => {
        table
            .increments('id')
        table
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
        table
            .string('project_name')
            .notNullable()
            .unique()
        table
            .string('project_description')
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users_and_projects')
};
