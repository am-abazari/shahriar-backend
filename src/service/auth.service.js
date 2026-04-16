const { Op } = require("@sequelize/core");

// model
const { UserModel } = require("@model/user.model");

// messages
const { AuthMessages } = require("@message/auth.message");
const { signToken } = require("../utils/helper/jwt");

const Register = async (dto) => {
  const { name, username, password, email, bio } = dto;

  let found = await UserModel.findOne({
    raw: true,
    where: {
      username,
    },
  });
  if (found) throw { status: 400, message: AuthMessages.DuplicatedUsername };
  found = await UserModel.findOne({
    raw: true,
    where: {
      email,
    },
  });
  if (found) throw { status: 400, message: AuthMessages.DuplicatedEmail };

  await UserModel.create({
    name,
    username,
    password,
    bio,
    email,
  });

  const refreshToken = signToken({ name, username, email }, "1y");
  const accessToken = signToken({ name, username, email }, "7d");
  return {
    accessToken,
    refreshToken,
  };
};

module.exports = { Register };
