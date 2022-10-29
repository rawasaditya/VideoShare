const createError = require("../error");
const Users = require("../models/User");
const Video = require("../models/Video");
const { checkrequired } = require("../utils/validation.js");

const addVideo = async (req, res, next) => {

  try {
    const { title, description, tags } = req.body;
    let splitags = tags.split(",")
      const userId = req.user._id;
      const video = req.files.video[0].filename;
      const thumbnail = req.files.thumbnail[0].filename;

      checkrequired(
        {
          userId,
          title,
          description,
          thumbnail,
          video,
        },
        next
      );
      const newVideo = new Video({
        userId: userId,
        title,
        description,
        thumbnail,
        video,
        tags: splitags
      });
      const vid = await newVideo.save();
      res.status(200).json(vid);

  } catch (err) {
    next(createError(500, err));
  }
};

const updateVideo = async (req, res, next) => {
  try {
    
    const { title, description, thumbnail, video } = req.body;
    const userId = req.user._id;
    checkrequired(
      {
        userId,
        title,
        description,
        thumbnail,
        video,
      },
      next
    );
    const vid = await Video.findById(req.params.id);
    if (!vid) return next(createError(404, "Video not found"));

    if (req.user.id === vid.userId) {
      const updatedVide = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      return res.status(200).json(updatedVide);
    } else {
      next(createError(403, "Only video owner can update video"));
    }
  } catch (err) {
    next(createError(500, err));
  }
};

const deleteVideo = async (req, res, next) => {
  try {
    const vid = await Video.findById(req.params.id);
    if (!vid) return next(createError(404, "Video not found"));
    if (req.user.id === vid.userId) {
      const updatedVide = await Video.findByIdAndDelete(req.params.id);
      return res.status(200).json("Video has been deleted");
    } else {
      next(createError(403, "Only video owner can delete video"));
    }
  } catch (err) {
    next(createError(500, err));
  }
};

const getVideo = async (req, res, next) => {
  try {
    const vid = await Video.findById(req.params.id);
    if (!vid) return next(createError(404, "Video not found"));
    return res.status(200).json(vid);
  } catch (err) {
    next(createError(500, err));
  }
};

const addview = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json("Views has been increased");
  } catch (err) {
    next(createError(500, err));
  }
};
const trends = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    next(createError(500, err));
  }
};
const random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (err) {
    next(createError(500, err));
  }
};
const subscribed = async (req, res, next) => {
  try {
    const user = await Users.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;
    const list = await Promise.all(
      subscribedChannels.map(async (channelid) =>
        Video.find({ userId: channelid })
      )
    );
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(createError(500, err));
  }
};

const getByTag = async (req, res, next) => {
  try {
    const tags = req.query.tags.split(",");
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(createError(500, err));
  }
};

const search = async (req, res, next) => {
  try {
    const query = req.query.q;
    const videos = await Video.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(videos);
  } catch (err) {
    next(createError(500, err));
  }
};

const liked = async (req,res,next)=>{
  try {
    const liked = req.user._id
    const videos = await Video.find({ likes: { $in: liked } });
    res.status(200).json(videos);
  } catch (err) {
    next(createError(500, err));
  }
}

module.exports = {
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
};
