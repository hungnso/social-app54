let users = [];

const SocketSever = (socket) => {
  console.log("socket connected", socket.id);

  socket.on("join-user", (user) => {
    if (user?._id) {
      users.push({ id: user?._id, socketId: socket.id });
      console.log(users);
    }
  });

  /// nhan diện người vào bài viết để cmt
  socket.on("join-post", (postId) => {
    socket.join(`room-post-${postId}`);
    console.log(postId);
  });

  /// Likes
  socket.on("likePost", (newPost) => {
    console.log("like", newPost);
    const clients = users.filter((user) => newPost.includes(user.id));
    if (clients.length > 0) {
      clients.forEach((client) => {
        socket.to(`${client.socketId}`).emit("likeToClient", newPost);
      });
    }
    console.log("23", clients);
  });
  socket.on("unlikePost", (newPost) => {
    console.log("unlike", newPost);
  });

  socket.on("disconnect", () => {
    console.log("socket disconnected", socket.id);
  });
};

module.exports = SocketSever;
