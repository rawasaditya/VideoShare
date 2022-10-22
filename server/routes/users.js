const {update,del,get,subscribe,unsubscribe,like,dislike} = require("../controllers/usersController.js");
const {authenticate} = require("../controllers/authenticationController.js")
const express = require("express");
const router = express.Router();

router.put("/:id",authenticate, update);
router.delete("/:id",authenticate, del);
router.get("/find/:id",authenticate, get);
router.put("/sub/:id",authenticate, subscribe);
router.put("/unsub/:id",authenticate, unsubscribe);
router.put("/like/:videid",authenticate, like);
router.put("/dislike/:videid",authenticate, dislike);




module.exports = router;
