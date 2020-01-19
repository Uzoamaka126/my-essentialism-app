
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('users').insert([
    {
      fullname: "Uzoamaka Anyanwu",
      email: "uzoamakaanyanwu26@gmail.com",
      password: "1234",
      
    }
  ]);
};
