const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      require: true,
      type: String,
    },
    lastName: {
      require: true,
      type: String,
    },
    userName: {
      require: true,
      type: String,
      unique: true,
    },
    email: {
      require: true,
      type: String,
      unique: true,
    },
    password: {
      require: true,
      type: String,
    },
    profilePicture: {
      type: String,
    },
    subscribers: {
      type: [String],
      default: 0,
    },
    subscribedUsers: {
      type: [String],
    },
  },
  { timestamps: true }
);



UserSchema.pre('save', function( next ) {
  var user = this;
  
  if(user.isModified('password')){    
      // console.log('password changed')
      bcrypt.genSalt(10, function(err, salt){
          if(err) return next(err);
  
          bcrypt.hash(user.password, salt, function(err, hash){
              if(err) return next(err);
              user.password = hash 
              next()
          })
      })
  } else {
      next()
  }
});
UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const Users = mongoose.models.Users || mongoose.model("Users", UserSchema);
module.exports = Users;
