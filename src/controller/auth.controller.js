// service
const AuthService = require("@service/auth.service");

// message
const { AuthMessages } = require("@message/auth.message");

// helper
const { setCookie } = require("@helper/cookie");

// constants
const { Times } = require("@constants/times");

const Register = async (req, res, next) => {
  try {
    const { name, username, password, email, bio } = req.body;

    const data = await AuthService.Register({
      name,
      username,
      password,
      email,
      bio,
    });

    setCookie(res, "access_token", data.accessToken, Times["1w"]);
    setCookie(res, "refresh_token", data.refreshToken, Times["1y"]);

    res.status(201).json({ status: 201, message: AuthMessages.Created, data });
  } catch (error) {
    next(error);
  }
};

module.exports = { Register };
