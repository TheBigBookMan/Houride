const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

if (!secret) throw new Error("JWT_SECRET missing from server .env file");
const expiration = "24h";
// const TOKEN_AGE = 1000 * 60 * 60 * 24

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (error) {
      console.log(error);
      console.log("invalid token");
    }

    return req;
  },
  signToken: function ({ _id }) {
    const payload = { _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  // setCookie: function (res, token) {
  //   res.cookie("token", token, {
  //     httpOnly: true,
  //     maxAge: TOKEN_AGE,
  //     domain: "http://localhost:5173"
  //   })
  // }
};
