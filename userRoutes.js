const express = require("express");
const { registerUser } = require("./userController");

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
