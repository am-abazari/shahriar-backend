const { Router } = require("express");

// controller
const PoemController = require("@controller/poem.controller");

// guard
const { AuthGuard } = require("@guard/auth.guard");

const router = Router();

router.post("/", AuthGuard, PoemController.CreatePoem);
router.get("/", PoemController.GetAllPoems);
router.get("/:id", PoemController.GetPoem);

module.exports = { PoemRouter: router };
