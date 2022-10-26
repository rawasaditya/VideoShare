const {addComment,getComment, deleteComment} = require("../controllers/commentsController");
const {authenticate} = require("../controllers/authenticationController")
const express = require("express");

const router = express.Router();

router.post("/", authenticate,addComment);
router.get("/:videoId",getComment);
router.delete("/:id", authenticate,deleteComment);


module.exports = router;
