const { Router } = require("express");
const router = Router();

// controller
const AuthController = require("@controller/auth.controller");

router.post("/register", AuthController.Register);
router.post("/login", AuthController.Login);

module.exports = { AuthRouter: router };
