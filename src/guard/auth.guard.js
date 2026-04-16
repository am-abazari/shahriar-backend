// helper
const { getCookie } = require("@helper/cookie");
const { verifyToken } = require("@helper/jwt");

// message
const { AuthMessages } = require("@message/auth.message");

const AuthGuard = async (req, res, next) => {
  try {
    // const [bearer, token] = (req?.headers?.authorization).split(" ");
    // if (bearer.toLowerCase() !== "bearer")
    //   throw { status: 401, message: "user not authenticated" };

    const token = getCookie(req, "access_token");
    const result = verifyToken(token);

    req.user = result;
    next();
  } catch (error) {
    throw { status: 401, message: AuthMessages.LoginAgain };
  }
};

module.exports = { AuthGuard };
