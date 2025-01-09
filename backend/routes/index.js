const express = require("express");

const router = express.Router();

const registerController = require("../controllers/RegisterController");

const { validateRegister } = require("../utils/validators/auth");

// routes

router.post("/register", validateRegister, registerController.register);

module.exports = router;
