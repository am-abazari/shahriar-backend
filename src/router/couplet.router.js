const { Router } = require("express");

// controller
const CoupletController = require("@controller/couplet.controller");

// guard
const { AuthGuard } = require("@guard/auth.guard");

const router = Router();

router.post("/", AuthGuard, CoupletController.CreateCouplet);
router.get("/:id", CoupletController.GetAllCoupletsOfPoem);

module.exports = { CoupletRouter: router };
