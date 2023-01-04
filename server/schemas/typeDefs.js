const { gql } = require("apollo-server-express");

//? will be constantly adding and changing based on progress

//? will be constantly adding and changing based on progress
//TODO figure out google radius thing

//TODO might need to implement the date scalar--- will be important how Prisma does the date

//TODO figure out how to do registration etc
//TODO license could be photo

const typeDefs = gql`
  scalar DateTime

  type Auth {
    token: ID
    user: User
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    dateJoined: DateTime
  }

  type Query {
    singleUser(_id: ID!): User
    allUsers: [User]
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Boolean
  }
`;

// const typeDefs = gql`
// scalar DateTime

// type Car {
//   _id: ID
//   type: String
//   images: [String]
//   events: [Event]
//   seats: Int
//   driver: User
//   license: String
//   price: Int
//   location: String
//   registration: String
//   availability: [String]
//   drivingHistory: [Transaction]
//   radiusDrive
// }

// type Customer {
//   _id: ID
//   information: User
//   takingHistory: [Transaction]
// }

// type Event {
//   _id: ID
//   event: String
//   description: String
//   cars: [Car]
//   customers: [Customer]
// }

// type Review {
//   _id: ID
//   creatingReview: User
//   beingReviewed: User
//   rating: Int
//   comment: String
//   date: Date
// }

// type Transaction {
//   _id: ID
//   event: Event
//   customer: Customer
//   driver: Car
//   payment: Int
//   distance: Int
//   time: Int
//   review: Review
//   location: String
// }

// type User {
//   _id: ID
//   username: String
//   email: String
//   password: String
//   dateJoined: Date
//   bio: String
//   location: String
//   languages: [String]
//   identityVerified: Boolean
//   reviewsGiven: [Review]
//   reviewsReceived: [Review]
//   carsForRent: [Car]
//   favourites: [Car]
// }

// type Auth {
//   token: ID
//   user: User
// }

// type Query {
//   car(carId: ID!): Car
//   cars: [Car]
//   customer(customerId: ID!): Customer
//   customers: [Customer]
//   event(eventId: ID!): Event
//   events: [Event]
//   review(reviewId: ID!): Review
//   reviews: [Review]
//   transaction(transactionId: ID!): Transaction
//   transactions: [Transaction]
//   user(userId: ID!): User
//   users: [User]
// }

//   type Mutation {
//     addUser(username: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
//     logout: Boolean

//     editInfo(bio: String, location: String, languages: [String]): User

//     addCar(
//       type: String!
//       images: [String]
//       events: [String!]
//       seats: Int
//       driver: String!
//       license: String!
//       price: Int!
//       location: String!
//       registration: String!
//       availability: [String!]
//     ): Car
//     removeCar(carId: ID!): User

//     addReview(
//       creatingReview: ID!
//       beingReviewed: ID!
//       rating: Int!
//       comment: String
//     ): Review
//     removeReview(reviewId: ID!): User

//     createTransaction(
//       event: String!
//       customer: ID!
//       driver: ID!
//       payment: Int!
//       distance: Int!
//       time: Int!
//       review: String
//       location: String!
//     ): Transaction
//   }
// `;

module.exports = typeDefs;
