
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('memberships').del()
    .then(function () {
      // Inserts seed entries
      return knex('memberships').insert([
        {student_ID: 1, activity_ID: '1'},
        {student_ID: 2, activity_ID: '2'},
        {student_ID: 3, activity_ID: '2'},
        {student_ID: 3, activity_ID: '3'},
        {student_ID: 4, activity_ID: '1'}
      ]);
    });
};
