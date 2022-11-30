const { gql } = require("apollo-server-express");

//? will be constantly adding and changing based on progress

const mutations = gql`
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Boolean
  }
`;

module.exports = mutations;
