const { gql } = require("apollo-server-express");

//? will be constantly adding and changing based on progress
//TODO figure out google radius thing

//TODO might need to implement the date scalar--- will be important how Prisma does the date

//TODO figure out how to do registration etc
//TODO license could be photo

const queries = gql`
  type Car {
    _id: ID
    type: String
    images: [String]
    events: [Event]
    seats: Int
    driver: User
    license: String
    price: Int
    location: String
    registration: String
    availability: [String]
    drivingHistory: [Transaction]
    radiusDrive 
  }

  type Customer {
    _id: ID
    information: User
    takingHistory: [Transaction]
  }

  type Event {
    _id: ID
    event: String
    description: String
    cars: [Car]
    customers: [Customer]
  }

  type Review {
    _id: ID
    creatingReview: User
    beingReviewed: User
    rating: Int
    comment: String
    date: Date
  }

  type Transaction {
    _id: ID
    event: Event
    customer: Customer
    driver: Car
    payment: Int
    distance: Int
    time: Int
    review: Review
    location: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    dateJoined: Date
    bio: String
    location: String
    languages: [String]
    identityVerified: Boolean
    reviewsGiven: [Review]
    reviewsReceived: [Review]
    carsForRent: [Car]
    favourites: [Car]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    car(carId: ID!): Car
    cars: [Car]
    customer(customerId: ID!): Customer
    customers: [Customer]
    event(eventId: ID!): Event
    events: [Event]
    review(reviewId: ID!): Review
    reviews: [Review]
    transaction(transactionId: ID!): Transaction
    transactions: [Transaction]
    user(userId: ID!): User
    users: [User]
  }
`;

module.exports = queries;
