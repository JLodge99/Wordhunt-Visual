const express = require("express");
const router = express.Router();
const controller = require("../controller/wordSearch");

router.post("/solve", controller.solve);
router.get("/startUp", controller.initHash);

module.exports = router;
