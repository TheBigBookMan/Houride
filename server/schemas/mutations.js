const { gql } = require("apollo-server-express");

//? will be constantly adding and changing based on progress

const mutations = gql`
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Boolean

    addCar(
      type: String!
      images: [String]
      events: [String!]
      seats: Int
      driver: String!
      license: String!
      price: Int!
      location: String!
      registration: String!
      availability: [String!]
    ): Car
    removeCar(CarId: ID!): User
  }
`;

module.exports = mutations;
