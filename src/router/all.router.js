const { Router } = require("express");
const { AuthRouter } = require("./auth.router");
const { PoemRouter } = require("./poem.router");
const { CoupletRouter } = require("./couplet.router");

const router = Router();

router.use("/auth", AuthRouter);
router.use("/poem", PoemRouter);
router.use("/couplet", CoupletRouter);

module.exports = { AllRouter: router };
