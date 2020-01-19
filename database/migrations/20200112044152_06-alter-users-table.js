
exports.up = function(knex) {
    return knex.schema.table('users', table => {
          table.renameColumn('username', 'fullname')
          table.string("jwt", 512);
          table
            .boolean("isVerified")
            .notNullable()
            .defaultTo(0);
    
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users')
  };
  