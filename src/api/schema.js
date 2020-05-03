const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');
const customerAttrs = `
    id: ID
    name: String!
    documentNumber: String!
    email: String
`;

const orderAttrs = `
    orderID: ID,
    customerID: Int!,
    total: Int!,
    date: String!,
`;

const typeDefs = `
    type Customer {
       ${customerAttrs}
    }

    type Order {
       ${orderAttrs}
    }

    type Query {
        getCustomer(id: ID!): Customer
        getCustomers: [Customer]
        getOrder(orderID: ID!): Order
        getOrders: [Order]
        getCustomerOrders(customerID: ID!): [Order]
    }

    input customerInput {
        ${customerAttrs}
    }

    input orderInput {
        ${orderAttrs}
    }


    type Mutation {
        createCustomer(input: customerInput): Customer
        createOrder(input: orderInput): Order
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });