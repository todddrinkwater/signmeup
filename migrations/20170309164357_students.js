exports.up = function (knex, Promise) {
  return knex.schema.createTable('students', function (table) {
    table.increments('id').primary()
    table.string('firstName')
    table.string('lastName')
    table.string('email')
    table.integer('phoneNumber')
    table.integer('activityID')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('students')
}
