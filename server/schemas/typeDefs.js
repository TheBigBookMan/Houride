const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    car(carId: ID!): Car
    cars: [Car]
    customer(customerId: ID!): Customer
    customers: [Customer]
    event(eventId: ID!): Event
    events: [Event]
    transaction(transactionId: ID!): Transaction
    transactions: [Transaction]
    user(userId: ID!): User
    users: [User]
  }
`;

module.exports = typeDefs;
