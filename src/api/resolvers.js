const db = require('../config/database');

module.exports = {
  Query: {
    async getCustomer(_, { id }) {
      return await db('customers').where('id', '=', id).first();
    },
    async getCustomers() {
      return await db('customers');
    },
    async getOrder(_, { orderID }) {
      console.log(orderID);
      return await db('orders').where('orderID', '=', orderID).first();
    },
    async getOrders() {
      return await db('orders');
    },
    async getCustomerOrders(_, { customerID }) {
      return await db('orders').where('customerID', '=', customerID);
    },
  },
  Mutation: {
    async createCustomer(_, newCustomer) {
      const result = await db('customers').insert({
        name: newCustomer.input.name,
        documentNumber: newCustomer.input.documentNumber,
        email: newCustomer.input.email,
      });

      const id = result[0];
      return await db('customers').where({ id }).first();
    },

    async createOrder(_, newOrder) {
      const result = await db('orders').insert({
        customerID: newOrder.input.customerID,
        total: newOrder.input.total,
        date: newOrder.input.date,
      });

      const orderID = result[0];
      return await db('orders').where({ orderID }).first();
    },
  },
};