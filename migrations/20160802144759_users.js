exports.up = function (knex, Promise) {
  return knex.schema.createTable('students', function (table) {
    table.increments('id').primary()
    table.string('firstName')
    table.string('lastName')
    table.string('email')
    table.integer('phoneNumber')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
