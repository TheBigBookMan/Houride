const { AuthenticationError } = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require("graphql");
const { signToken, setCookie } = require("../utils/auth");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

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
      if (findUser) "User already exists.";

      const saltRounds = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, saltRounds);

      const user = await prisma.user.create({
        data: { username, email, password },
      });
      const token = signToken(user);
      return { user, token };
    },

    login: async (parent, { email, password }, { res }) => {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      const hashedPassword = user.password;
      if (bcrypt.compareSync(password, hashedPassword) === true) {
        const token = signToken(user);
        return { user, token };
      } else {
        throw Error("Credentials did not work, please try again...");
      }
    },

    logout: async (parent, args, { res, user }) => {
      if (!user) {
        return false;
      }
      return true;
    },
  },
};

module.exports = resolvers;
