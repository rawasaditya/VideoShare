const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users.js")
const videoRoutes = require("./routes/videos.js")
const commentsRoutes = require("./routes/comments.js")
const authRoutes = require("./routes/authentication.js")
const cookieparser = require("cookie-parser");


// Middelware
const app = express();
dotenv.config();
app.use(express.json())
app.use(cookieparser());

// Routes registration
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/users",userRoutes);
app.use("/api/v1/video",videoRoutes);
app.use("/api/v1/comments",commentsRoutes);
app.use((err,req,res,next)=>{
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success:false,
    status,
    message
  })
})

const connect = () => {
  mongoose
    .connect(process.env.MONGOSE_URI)
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      throw err;
    });
};

app.listen(8800, () => {
  console.log("Connected to server");
  connect();
});
