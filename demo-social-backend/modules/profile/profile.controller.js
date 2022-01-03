const ProfileModel = require("./profile");
const slugify = require("slugify");

const createProfile = async (req, res) => {
  const { userId, slugUsername } = req.body;

  const newProfile = await ProfileModel.create({
    userId,
    slugUsername: slugify(slugUsername)
  })

  res.send({
    success: true,
    data: newProfile
  })
}

const getProfileByUserId = async (req, res) => {

  const { userId } = req.params

  const user = await ProfileModel
    .findOne({ userId })
    .populate({
      path: 'userId',
      select: 'username avatar email'
    })


  res.send({
    success: true,
    data: user,
  });
}

const updateProfile = async (req, res) => {

  const { user } = req
  const dataUpdate = req.body

  const userUpdate = await ProfileModel
    .findOneAndUpdate(
      { userId: user._id },
      dataUpdate,
      { new: true }
    )

  res.send({
    success: true,
    data: userUpdate,
  });
}


module.exports = {
  createProfile,
  getProfileByUserId,
  updateProfile
};
