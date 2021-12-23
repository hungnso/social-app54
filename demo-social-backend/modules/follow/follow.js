const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
  followers: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  following: [{ type: mongoose.Types.ObjectId, ref: "user" }],
});

const FollowModel = mongoose.model("follow", followSchema);

module.exports = FollowModel
