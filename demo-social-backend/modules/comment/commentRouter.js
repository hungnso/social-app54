const router = require("express").Router();
const auth = require("../../middleware/auth");
const CommentCtrl = require("./commentCtrl");

router.post("/create", auth, CommentCtrl.createComment);
router.get("/post/:postId", auth, CommentCtrl.getCommentByPost);

// router.patch("/comment/:id", auth, CommentCtrl.updateComment);

// router.patch("/comment/:id/like", auth, CommentCtrl.likeComment);

// router.patch("/comment/:id/unlike", auth, CommentCtrl.unLikeComment);

module.exports = router;
