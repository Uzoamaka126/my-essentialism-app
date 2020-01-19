
exports.seed = function(knex) {
  return knex('users_and_values').insert([
    {
      user_id: 1, 
      value_id: 1
    },
    {
      user_id: 1, 
      value_id: 3
    },
  ]);
};
