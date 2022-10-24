const createError = require("../error");
const User = require("../models/User.js");
const Video = require("../models/Video");
const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      updateUser.save();
      res.status(200).json(updateUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(
      createError(403, "Access Denied, you can only update your account")
    );
  }
};

const del = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted!");
    } catch (err) {
      next(err);
    }
  } else {
    return next(
      createError(403, "Access Denied, you can only delete your own account")
    );
  }
};

const get = async (req, res, next) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (err) {
    next(err);
  }
};

const subscribe = async (req, res, next) => {
  try {
    console.log(req.user)
    const user = await User.findById(req.user.id);
    const channel = await User.findById(req.params.id);
    if(user && channel){
      if (user.subscribedUsers.indexOf(channel._id) === -1) {
        user.subscribedUsers.push(channel._id);
        user.save();
        channel.subscribers = channel.subscribers +  1
        channel.save();
        res.status(200).json(user);
      } else {
        res.status(500).json("Already Subscribed")
      }
    }else{
      next(createError(401,"Channel not found"))
    }

  } catch (err) {
    next(err);
  }
};

const unsubscribe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const channel = await User.findById(req.params.id);
    if(user && channel){
      if (user.subscribedUsers.indexOf(channel._id) !== -1) {
        const idx = user.subscribedUsers.indexOf(channel._id)
        user.subscribedUsers.splice(idx,1);
        user.save();
        channel.subscribers = channel.subscribers == 0 ? 0 : channel.subscribers - 1
        channel.save();
        res.status(200).json(user);
      } else {
        res.status(500).json("Already Unsubscribed")
      }
    }else{
      next(createError(401,"Channel not found"))
    }

  } catch (err) {
    next(err);
  }
};

const like = async (req, res, next) => {
try{
  const videoId = req.params.videoId;
  const id = req.user.id;
  await Video.findByIdAndUpdate(videoId,{
    $addToSet:{likes:id},
    $pull:{dislikes:id},
  });
  res.status(200).json("liked")
}catch(err){
  next.createError(500,err)
}
};


const dislike = async (req, res, next) => {
  try{
    const videoId = req.params.videoId;
    const id = req.user.id;
    await Video.findByIdAndUpdate(videoId,{
      $addToSet:{dislikes:id},
      $pull:{likes:id},
    });
    res.status(200).json("disliked")
  }catch(err){
    next.createError(500,err)
  }
  };
  


module.exports = { update, del, get, subscribe, unsubscribe, like, dislike };
