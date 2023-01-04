const { AuthenticationError } = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require("graphql");
const { signToken, setCookie } = require("../utils/auth");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const resolvers = {
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "DateTime scalar type",

    serialize(value) {
      const date = new Date(value);

      return date.toUTCString();
    },
    parseValue(value) {
      return new Date(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }

      return null;
    },
    serialize(value) {
      const date = new Date(value);
      return new Intl.DateTimeFormat("en-au", { dateStyle: "short" }).format(
        date
      );
    },
  }),

  Query: {},

  Mutation: {
    signUp: async (parent, { username, email, password }, { res }) => {
      //TODO add bcrypt hashing
      const findUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (findUser) {
        return "User already exists.";
      }

      const user = await prisma.user.create({
        data: { username, email, password },
      });

      return { user };
    },
  },
};

module.exports = resolvers;
