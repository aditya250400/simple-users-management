const express = require("express");
const router = express.Router();
const registerController = require("../controllers/RegisterController");
const loginController = require("../controllers/LoginController");
const UserController = require("../controllers/UserController");
const verifyToken = require("../middlewares/auth");

// validates
const { validateRegister, validateLogin } = require("../utils/validators/auth");
const { validateUser } = require("../utils/validators/user");

// routes

router.post("/register", validateRegister, registerController.register);
router.post("/login", validateLogin, loginController.login);
router.get("/admin/users", verifyToken, UserController.findUsers);
router.get("/admin/users/:id", verifyToken, UserController.findUserById);
router.put(
  "/admin/users/:id",
  verifyToken,
  validateUser,
  UserController.updateUser
);
router.post(
  "/admin/users",
  verifyToken,
  validateUser,
  UserController.createUser
);
router.delete("/admin/users/:id", verifyToken, UserController.deleteUser);

module.exports = router;
