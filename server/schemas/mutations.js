const { gql } = require("apollo-server-express");

//? will be constantly adding and changing based on progress

const mutations = gql`
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Boolean

    editInfo(bio: String, location: String, languages: [String]): User

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
    removeCar(carId: ID!): User

    addReview(
      creatingReview: ID!
      beingReviewed: ID!
      rating: Int!
      comment: String
    ): Review
    removeReview(reviewId: ID!): User

    createTransaction(
      event: String!
      customer: ID!
      driver: ID!
      payment: Int!
      distance: Int!
      time: Int!
      review: String
      location: String!
    ): Transaction
  }
`;

module.exports = mutations;
