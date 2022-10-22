const {update} = require("../controllers/usersController.js");

const express = require("express");

const router = express.Router();

router.get("/test", update);

module.exports = router;
