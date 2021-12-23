const CommentModel = require("./comment");
const PostModel = require("../post/post");

const createComment = async (req, res) => {
  const data = req.body;
  const { user } = req;

  const dataCommnet = {
    ...data,
    userId: user._id
  }

  const newComment = await CommentModel.create(dataCommnet)

  res.send({
    success: 1,
    data: newComment,
  });
}

const getCommentByPost = async (req, res) => {
  const { postId } = req.params

  const comments = await CommentModel
    .find({ postId })
    .populate({
      path: 'userId',
      select: 'username avatar'
    })

  res.send({
    success: true,
    data: comments
  })
}



// updateComment: async (req, res) => {
//   try {
//     const updateComment = req.body;
//     await CommentModel.findOneAndUpdate(
//       {
//         _id: req.params.id,
//         user: req.user._id,
//       },
//       updateComment,
//       { new: true }
//     );
//     if (!updateComment) return res.status(400).json({ msg: "loi" });

//     res.send({
//       success: 1,
//       data: updateComment,
//     });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// },
// likeComment: async (req, res) => {
//   try {
//     const comment = await CommentModel.find({
//       _id: req.params.id,
//       likes: req.user._id,
//     });
//     if (comment.length > 0)
//       return res.status(400).json({ msg: "You like this post" });

//     const newCommnet = await CommentModel.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         $push: { likes: req.user._id },
//       },
//       { new: true }
//     );

//     res.send({
//       success: "You liked comment!",
//       newCommnet,
//     });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// },
// unLikeComment: async (req, res) => {
//   try {
//     await CommentModel.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         $pull: { likes: req.user._id },
//       },
//       { new: true }
//     );

//     res.send({ msg: "UnLiked Comment!" });
//   } catch (err) {
//     return res.status(500).json({ msg: err.message });
//   }
// },

module.exports = {
  createComment,
  getCommentByPost
};
