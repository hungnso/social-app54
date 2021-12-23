require("dotenv").config();
require('express-async-errors')
const cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
const AuthRouter = require("./modules/auth");
const ProfileRouter = require('./modules/profile/profile.router')
const UserRouter = require("./modules/user");
const FollowRouter = require("./modules/follow");
const PostRouter = require("./modules/post");
const CommentRouter = require("./modules/comment");
const UploadRouter = require("./modules/upload/upload.router")
const errorHandler = require("./common/errorHandler");

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);

  console.log("Mongodb connected");
  const app = express();

  app.use(express.json());
  app.use(cors())

  //Router

  app.use("/api/auth", AuthRouter);
  app.use("/api/profile", ProfileRouter);
  app.use("/api/upload", UploadRouter);
  app.use("/api/posts", PostRouter);
  app.use("/api/comments", CommentRouter);
  app.use("/api/follows", FollowRouter);
  app.use("/api/users", UserRouter);
  app.use(errorHandler)
  

  const port = process.env.PORT || 9000;

  app.listen(port, (err) => {
    if (err) throw err;

    console.log(`Server connected ${port}`);
  });
}

main();
