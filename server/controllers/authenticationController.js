const jwt = require("jsonwebtoken");
const createError = require("../error.js");
const User = require("../models/User");
const { checkrequired } = require("../utils/validation.js");

const signup = async (req, res, next) => {
  const { firstName, lastName, userName, email, password, profilePicture } =
    req.body;
  checkrequired(
    {
      firstName,
      lastName,
      userName,
      email,
      password,
      profilePicture,
    },
    next
  );

  try {
    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      password,
      profilePicture,
    });
    newUser.save((err, user) => {
      if (err) return next(createError(500, err));
      return res.status(200).json(user);
    });
  } catch (err) {
    next(createError(500, err));
    // todo
  }
};

const signin = async (req, res, next) => {
  var { userName, password } = req.body;
  checkrequired({ userName, password }, next);

  const user = await User.findOne({ userName: userName });
  if (!user) return next(createError(404, "User not found"));
  user.comparePassword(password, (err, isMatch) => {
    if (!isMatch) {
      return next(createError(401, "User name and password didn't match"));
    }
  });

  const token = user.generateToken(user._id);
  var { password, ...others } = user._doc;
  res
    .cookie("access_token", token)
    .status(200)
    .json(others);
};

const authenticate = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "Access Denied, please login"));
  jwt.verify(token, process.env.JWT, async (err, user) => {
    if (err) return next(createError(403, "Access Denied, invalid token"));
    user = await User.findById(user.id);
    if (user) {
      req.user = user;
      next();
    } else {
      next(createError(404, "User does not exist"));
    }
  });
};

module.exports = { signup, signin, authenticate };
