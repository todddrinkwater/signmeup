
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, firstName: 'Todd', lastName: 'Drinkwater', email: 'todddrinkwaternz@gmail.com', phoneNumber: 02734219065, activityID: 11001}
      ]);
    });
};
