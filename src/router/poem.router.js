const { Router } = require("express");

// controller
const PoemController = require("@controller/poem.controller");

// guard
const { AuthGuard } = require("@guard/auth.guard");

const router = Router();

router.post("/", AuthGuard, PoemController.CreatePoem);

module.exports = { PoemRouter: router };
