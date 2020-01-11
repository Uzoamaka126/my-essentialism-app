
exports.up = function(knex) {
    return knex.schema 
      .createTable('users_values_and_projects', table => {
          table
              .increments('id')
          table
              .integer('user_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('users')
            table
              .integer('value_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('values')
            table
              .string('project_name', 128)
              .notNullable()
              .unique()
            table
              .string('project_description', 300)
              .notNullable()
            table
                .boolean("isCompleted")
                .notNullable()
                .defaultTo(0);
                
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users_values_and_projects')
  };
  