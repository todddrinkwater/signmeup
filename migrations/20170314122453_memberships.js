
exports.up = function(knex, Promise) {
  return knex.schema.createTable('memberships', function (table) {
    table.integer('student_ID')
    table.integer('activity_ID')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('memberships')
};
