
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, first_name: 'Todd', last_name: 'Drinkwater', email: 'todddrinkwaternz@gmail.com', phone: 02734219065},
        {id: 2, first_name: 'Blair', last_name: 'Drinkwater', email: 'blaird@gmail.com', phone: 02731234567},
        {id: 3, first_name: 'John', last_name: 'Smithy', email: 'smithy@gmail.com', phone: 0273567874},
        {id: 4, first_name: 'George', last_name: 'Lucas', email: 'chewy@gmail.com', phone: 0273123654}
      ]);
    });
};
