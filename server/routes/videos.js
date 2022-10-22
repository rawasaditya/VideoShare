const {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addview,
trends,
random,
subscribed,
getByTag,
search
} = require("../controllers/videosController");
const { authenticate } = require("../controllers/authenticationController");
const express = require("express");

const router = express.Router();
router.post("/", authenticate, addVideo);
router.put("/:id", authenticate, updateVideo);
router.delete("/:id", authenticate, deleteVideo);
router.get("/find/:id",authenticate, getVideo);
router.put("/view/:id",authenticate, addview);
router.get("/trends",authenticate, trends);
router.get("/random",authenticate, random);
router.get("/subscribed",authenticate, subscribed);
router.get("/tags",getByTag)
router.get("/search",search)

module.exports = router;
