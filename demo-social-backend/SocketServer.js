let users = [];

const SocketSever = (socket) => {
  console.log("socket connected", socket.id);

  socket.on("join-user", (user) => {
    if (user?._id) {
      users.push({ id: user?._id, socketId: socket.id });
      console.log("9", users);
    }
  });

  /// nhan diện người vào bài viết để cmt
  socket.on("join-post", (postId) => {
    socket.join(`room-post-${postId}`);
    console.log(postId);
  });

  /// Likes
  socket.on("likePost", (newPost) => {
    socket.broadcast.emit("likeToClient", newPost);
  });
  socket.on("unlikePost", (newPost) => {
    socket.broadcast.emit("unLikeToClient", newPost);
  });

  /// Comments
  socket.on("newComment", (newCommet) => {
    console.log(newCommet);
    socket.broadcast.emit("newCommentClient", newCommet);
  });

  socket.on("disconnect", () => {
    console.log("socket disconnected", socket.id);
  });
};

module.exports = SocketSever;
