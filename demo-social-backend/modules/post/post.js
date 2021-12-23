const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    content: String,
    images: String,
    likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    commentCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel
