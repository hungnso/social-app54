const HttpError = require("../common/httpError");
const tokenProvider = require("../common/tokenProvider");
const UserModel = require("../modules/auth/auth");
const followModel = require("../modules/follow/follow");
const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new HttpError('Login required', 400)
  }
  const identityData = tokenProvider.verify(token);

  if (!identityData) {
    throw new HttpError('Login required', 400)
  }

  const user = await UserModel.findOne({ _id: identityData.userId });
  // const follow = await followModel.findOne({ _id: identityData.userId });
  req.user = user;
  // req.follow = follow;

  next();

};

module.exports = auth;
