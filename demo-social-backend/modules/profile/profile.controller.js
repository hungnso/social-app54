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

module.exports = {
  createProfile
};
