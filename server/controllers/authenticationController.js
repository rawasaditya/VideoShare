const mongoose = require("mongoose");
const { createError } = require("../error");
const User = require("../models/User");
const { checkrequired } = require("../utils/validation.js");
const signup = async (req, res, next) => {
  const { firstName, lastName, userName, email, password, profilePicture } =
    req.body;
  const validationmessage = checkrequired({
    firstName,
    lastName,
    userName,
    email,
    password,
    profilePicture,
  });

  if (Object.keys(validationmessage).length) {
    res.status(400).json(validationmessage);
    return;
  }

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
      if (err) return next(createError(404,err));
      return res.status(200).json(user);
    });
  } catch (err) {
    next(createError(404,err));
    // todo
  }
};

module.exports = { signup };
