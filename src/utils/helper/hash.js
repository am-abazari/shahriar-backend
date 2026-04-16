const bcrypt = require("bcrypt");

const createHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const comparePasswordWithHash = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { createHash, comparePasswordWithHash };
