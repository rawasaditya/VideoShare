const {
  signup,
  signin,
} = require("../controllers/authenticationController.js");

const express = require("express");

const router = express.Router();

// CREATE A USER
router.post("/signup", signup);

// SIGN IN
router.post("/signin", signin);
// GOOGLE AUTH

module.exports = router;
