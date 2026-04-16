const { Router } = require("express");
const AuthController = require("@controller/auth.controller");
const router = Router();

router.post("/register", AuthController.Register);

module.exports = { AuthRouter: router };
