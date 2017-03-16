
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teacher').del()
    .then(function () {
      // Inserts seed entries
      return knex('teacher').insert([
        {id: 1, first_name: 'Megan', last_name: 'Figgest', email: 'mfiggest@abc.com', phone: 0234567891},
        {id: 2, first_name: 'Jack', last_name: 'Black', email: 'jb@abc.com', phone: 0234567234},
        {id: 3, first_name: 'Iron', last_name: 'Maiden', email: 'unicorn@abc.com', phone: 0234567321}
      ]);
    });
};
