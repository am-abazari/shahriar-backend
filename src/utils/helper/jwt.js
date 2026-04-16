const jwt = require("jsonwebtoken");
const signToken = (payload, expiresIn = "30d") => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    return verified;
  } catch {
    return false;
  }
};

module.exports = { signToken, verifyToken };
