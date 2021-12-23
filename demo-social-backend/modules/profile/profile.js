const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user"
    },
    slugUsername: { type: String, required: true},
    followerCount:{ type: Number, default: 0},
    followingCount:{ type: Number, default: 0},
    gender: { type: String, default: "male" },
    mobile: { type: String, default: "" },
    address: { type: String, default: "" },
    story: {
      type: String,
      default: "Hello World",
      maxlength: 200,
    },
    website: { type: String, default: "" },
    saved: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  },
  {
    timestamps: true,
  }
);

const ProfileModel = mongoose.model("profile", profileSchema);

module.exports = ProfileModel;
