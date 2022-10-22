const { addVideo } = require("../controllers/videosController");
const {authenticate} = require("../controllers/authenticationController")
const express = require("express");

const router = express.Router();

router.post("/",authenticate, addVideo);

module.exports = router;
