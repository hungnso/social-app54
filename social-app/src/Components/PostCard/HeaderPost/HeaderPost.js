import React from "react";
import UserTimeCreateAt from "../../User/UserTimeCreateAt";
import EditPost from "../EditPost";

const HeaderPost = ({ post, posts, handleDeletePost }) => {
  return (
    <div>
      <UserTimeCreateAt
        post={post}
        posts={posts}
        handleDeletePost={handleDeletePost}
      />
    </div>
  );
};

export default HeaderPost;
