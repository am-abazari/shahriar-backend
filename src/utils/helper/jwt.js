const jwt = require("jsonwebtoken");
const signToken = (payload, expiresIn = "30d") => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });
  return token;
};

const verifyToken = (token) => {
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  return verified;
};

module.exports = { signToken, verifyToken };
