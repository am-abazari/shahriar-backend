const AuthService = require("@service/auth.service");

const { resp } = require("@helper/response");

const Register = async (req, res, next) => {
  try {
    const data = await AuthService.Register();
    resp(res, 201, "Successfully registered user", data);
  } catch (error) {
    next(error);
  }
};

module.exports = { Register };
