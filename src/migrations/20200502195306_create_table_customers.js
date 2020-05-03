
exports.up = function(knex) {
  return knex.schema.createTable('customers', table=>{
      table.increments('id').primary()
      table.string('name', 200).notNullable()
      table.string('documentNumber', 30).notNullable()
      table.string('email', 50).notNullable
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers')
};
