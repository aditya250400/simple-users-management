const express = require("express");
const router = express.Router();
const registerController = require("../controllers/RegisterController");
const loginController = require("../controllers/LoginController");
const UserController = require("../controllers/UserController");
const verifyToken = require("../middlewares/auth");

// validates
const { validateRegister, validateLogin } = require("../utils/validators/auth");

// routes

router.post("/register", validateRegister, registerController.register);
router.post("/login", validateLogin, loginController.login);
router.get("/admin/users", verifyToken, UserController.findUsers);

module.exports = router;
