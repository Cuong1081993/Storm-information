const express = require("express");
const router = express.Router();
const stormController = require("../controller/storm");

router.get("/storm", stormController.getInformation);

module.exports = router;
