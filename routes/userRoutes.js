const express = require("express");
const router = express.Router();
const User = require("../models/user");
const userController = require("../controllers/user.controller");

// Register User
router.post("/register", userController.createNewUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/", userController.getUserAndFilter);

module.exports = router;
