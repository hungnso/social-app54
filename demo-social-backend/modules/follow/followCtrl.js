const FollowModel = require("./follow");
const AuthModel = require("../auth/auth");


const createNewFollowUser = async (req, res) => {
  const { userId } = req.body;

  const newFollow = await FollowModel.create({
    userId
  })

  res.send({
    success: true,
    data: newFollow
  })
}

const getFollowId = async (req, res) => {
  const { userId } = req.params

  const followId = await FollowModel
    .findOne({
      userId
    })
    .sort({ follower: -1 })
    .populate({
      path: "userId",
      select: "username avatar",
    })
    .populate({
      path: "following",
      select: "username avatar",
    })
    .populate({
      path: "followers",
      select: "username avatar",
    });

  res.send({
    success: true,
    data: followId
  })
}


// createfollow:
const follow = async (req, res) => {
  // const checkIdParams = await FollowModel.findById({
  //   _id: req.params.id,
  // });
  // const checkidUser = await FollowModel.findById({
  //   _id: req.user._id,
  // });

  /// Kiểm tra id xem có bị trùng trước khi tạo mới
  // if (checkIdParams === null) {
  //   await FollowModel.create({
  //     _id: req.params.id,
  //   });
  // }
  // if (checkidUser === null) {
  //   await followModle.create({
  //     _id: req.user._id,
  //   });
  // }

  // const user = await FollowModel.find({
  //   _id: req.params.id,
  //   followers: req.user._id,
  // });

  // if (user.length > 0)
  //   return res.status(500).json({ msg: "You followed this user." });

  const { user } = req;
  const { userId } = req.body

  const userFollowing = await FollowModel
    .findOneAndUpdate(
      { userId: user._id },
      { $push: { following: userId } },
      { new: true }
    )
  await FollowModel
    .findOneAndUpdate(
      { userId },
      { $push: { followers: user._id } },
      { new: true }
    )

    // const followId = await FollowModel
    // .findOne({
    //   userId
    // })
    // .sort({ follower: -1 })
    // .populate({
    //   path: "following",
    //   select: "username avatar",
    // })
    // .populate({
    //   path: "followers",
    //   select: "username avatar",
    // });

  res.send({
    success: true,
    data: userFollowing,
  });

}

const unfollow = async (req, res) => {

  const { user } = req;
  const personId = req.body

  const userFollower = await FollowModel
    .findOneAndUpdate(
      { userId: user._id },
      { $pull: { following: personId.userId } },
      { new: true }
    )
    .populate({
      path: "following",
      select: "username avatar",
    })
    .populate({
      path: "followers",
      select: "username avatar",
    });

  await FollowModel
    .findOneAndUpdate(
      { userId: personId.userId },
      { $pull: { followers: user._id } },
      { new: true }
    )

  res.send({
    success: true,
    data: userFollower,
  });
}

// /// Chức năng random gợi ý người follow
// suggestionUser: async (req, res) => {
//   try {
//     const myUser = await followModle.findById(req.user._id);

//     const newArr = [...myUser.following, req.user._id];

//     const num = req.query.num || 10;

//     const userRandom = await AuthModel.aggregate([
//       { $match: { _id: { $nin: newArr } } },
//       { $sample: { size: Number(num) } },
//     ]).project("-password");
//     res.send({
//       success: 1,
//       userRandom,
//     });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// },

module.exports = {
  createNewFollowUser,
  follow,
  getFollowId,
  unfollow,
};
