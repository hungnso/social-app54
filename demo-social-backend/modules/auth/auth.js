const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user"
    },
    avatar: {
      type: String,
      default: "https://cdt.org/files/2015/10/2015-10-06-FB-person.png"
    },
  }, {
  timestamps: true,
}
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;