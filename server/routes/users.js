const {test} = require("../controllers/usersController.js");

const express = require("express");

const router = express.Router();

router.get("/test", test);

module.exports = router;
