const { Router } = require("express");
const { AuthRouter } = require("./auth.router");
const { PoemRouter } = require("./poem.router");

const router = Router();

router.use("/auth", AuthRouter);
router.use("/poem", PoemRouter);

module.exports = { AllRouter: router };
