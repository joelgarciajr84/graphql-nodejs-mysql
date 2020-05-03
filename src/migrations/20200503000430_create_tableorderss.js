exports.up = function (knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('orderID').primary();
    table.integer('customerID').unsigned().notNullable();
    table.foreign('customerID').references('id').inTable('customers');
    table.integer('total', 11).notNullable();
    table.string('date', 30).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders');
};


