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
  search,
  liked
} = require("../controllers/videosController");
const { authenticate } = require("../controllers/authenticationController");
const express = require("express");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dirpath = path
      .resolve(__dirname, "../public/video")
      .replaceAll("\\", "/");
    if (file.fieldname == "thumbnail") {
      dirpath = path
        .resolve(__dirname, "../public/thumbnail")
        .replaceAll("\\", "/");
    }

    cb(null, dirpath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();
router.post(
  "/",
  authenticate,
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "thumbnail", maxCount: 8 },
  ]),
  addVideo
);
router.put("/:id", authenticate, updateVideo);
router.delete("/:id", authenticate, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", authenticate, addview);
router.get("/trends", trends);
router.get("/random", random);
router.get("/liked",authenticate, liked);
router.get("/subscribed", authenticate, subscribed);
router.get("/tags", getByTag);
router.get("/search", search);

module.exports = router;
