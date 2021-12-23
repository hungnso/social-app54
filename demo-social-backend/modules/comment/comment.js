const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    // tag: Object,
    // reply: mongoose.Types.ObjectId,
    // likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    postId: { type: mongoose.Types.ObjectId, ref: "post" },
  },
  {
    timestamps: true,
  }
);

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = CommentModel
