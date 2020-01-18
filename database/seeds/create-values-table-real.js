
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('values').insert([
        {
          value_name: "Athletic Ability"
        },
        {
          value_name: "Arts and Literature"
        },
        {
          value_name: "Career Growth"
        },
        {
          value_name: "Creativity"
        },
        {
          value_name: "Kindness and Generousity"
        },
        {
          value_name: "Living in the moment"
        },
        {
          value_name: "Membership in a social group"
        },
        {
          value_name: "My community"
        },
        {
          value_name: "Moral Pricniples"
        }
        ,
        {
          value_name: "Nature and the environment"
        },
        {
          value_name: "Others"
        },
        {
          value_name: "Relationships with Friends and Family"
        },
        {
          value_name: "Sense of Humour"
        }
      ]);
};
