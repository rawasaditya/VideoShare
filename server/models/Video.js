const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    video: {
      type: String,
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Videos = mongoose.models.Videos || mongoose.model("Videos", VideoSchema);
module.exports = Videos;
