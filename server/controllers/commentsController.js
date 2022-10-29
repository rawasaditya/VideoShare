const createError = require("../error");
const Comments = require("../models/Comments");
const Video = require("../models/Video");
const { checkrequired } = require("../utils/validation");
const addComment = async (req, res, next) => {
  try {
    const {videoid, comments } = req.body;
    const userid = req.user.id;
    checkrequired({ userid, videoid, comments }, next);
    const newComment = new Comments({ userid, videoid, comments });
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    next(createError(500, err));
  }
};

const getComment = async (req, res, next) => {
  try {
    const videoId = req.params.videoId;
    checkrequired({videoId}, next);
    const comments = await Comments.find({videoid:videoId})
    res.status(200).json(comments)
  } catch (err) {
    console.log(err)
    next(createError(500, err));
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const comment = await Comments.findById(id);
    const video = await Videos.findById(id);
    if(comment.userid === id || video.userId === id){
        await Comments.findByIdAndDelete(id);
        res.status(200).json("Deleted")
    }else{
        next(403,"Access Denied, only comment owner can delete comment")
    }
  } catch (err) {
    next(createError(500, err));
  }
};

module.exports = { addComment, getComment, deleteComment };
