const express = require('express');
const router = express.Router();
const controller = require("../controller/wordSearch")

router.get('/solve', controller.solve);

module.exports = router;