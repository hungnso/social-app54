const UserModel = require("./auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenProvider = require("../../common/tokenProvider");
const HttpError = require("../../common/httpError");


const register = async (req, res) => {
  const { username, email, password } = req.body;
  /// check email có trùng hay ko?
  const existedEmail = await UserModel.findOne({ email });
  if (existedEmail) {
    throw new HttpError('Email existed', 400);
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const newUser = await UserModel.create({
    username,
    email,
    password: hashPassword,
  });

  res.send({
    success: true,
    data: {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    },
    message: 'Register Successfully'
  });
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const existedUser = await UserModel.findOne({ email });

  /// Check user đã gửi có đúng ko?
  if (!existedUser) {
    throw new HttpError(`Account don't exist`, 400);
  }

  const hashPassword = existedUser.password

  const verifyPassword = bcrypt.compareSync(password, hashPassword);

  if (!verifyPassword) {
    throw new HttpError('invalid Password', 400)
  }
  const token = tokenProvider.sign(existedUser._id);

  res.send({
    success: true,
    data: {
      _id: existedUser._id,
      email: existedUser.email,
      username: existedUser.username,
      avatar: existedUser.avatar,
      token,
    },
    message: 'Login Successfully'
  })
}

const getUser = async (req, res) => {
  const { user } = req

  const userInfo = user ? {
    username: user.username,
    avatar: user.avatar,
    _id: user._id
  } : null

  res.send({
    success: true,
    data: userInfo
  })
}

module.exports = {
  register,
  login,
  getUser
};
