
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {teacher_ID: 1, activity_ID: '1'},
        {teacher_ID: 2, activity_ID: '2'},
        {teacher_ID: 3, activity_ID: '3'}
      ]);
    });
};
