// model
const { UserModel } = require("@model/user.model");

// messages
const { AuthMessages } = require("@message/auth.message");

// helper
const { signToken } = require("@helper/jwt");
const { createHash, comparePasswordWithHash } = require("@helper/hash");

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
    password: createHash(password),
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

const Login = async (dto) => {
  const { username, password } = dto;

  let found = await UserModel.findOne({
    raw: true,
    where: {
      username,
    },
  });

  if (!found || !comparePasswordWithHash(password, found.password))
    throw { status: 404, message: AuthMessages.UserNotFound };

  const refreshToken = signToken(
    { name: found.name, username: found.username, email: found.email },
    "1y",
  );
  const accessToken = signToken(
    { name: found.name, username: found.username, email: found.email },
    "7d",
  );
  return {
    accessToken,
    refreshToken,
  };
};

module.exports = { Register, Login };
