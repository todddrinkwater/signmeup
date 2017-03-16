
exports.up = function(knex, Promise) {
  return knex.schema.createTable('activity', function(table){
    table.increments('id').primary()
    table.string('activity_name')
    table.time('meeting_time')
    table.date('meeting_date')
    table.string('meeting_location')
    table.string('description')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activity')
};
