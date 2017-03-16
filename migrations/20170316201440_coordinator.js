
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coordinator', function(table){
    table.string('teacher_ID')
    table.string('activity_ID')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('coordinator')
};
