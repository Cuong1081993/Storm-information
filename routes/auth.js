const express = require("express");

const authController = require("../controller/auth");

const router = express.Router();

router.post("/api/login", authController.login);
router.post("/api/register", authController.register);

module.exports = router;
