const mongoose = require("mongoose");
const CommentsSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      require: true,
    },
    videoid: {
      type: String,
      require: true,
    },
    comments: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comments =
  mongoose.models.Comments || mongoose.model("Comments", CommentsSchema);

export default Comments;
