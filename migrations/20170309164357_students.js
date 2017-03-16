exports.up = function (knex, Promise) {
  return knex.schema.createTable('students', function (table) {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.integer('phone')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('students')
}
