import React from "react";
import UserTimeCreateAt from "../../User/UserTimeCreateAt";
import EditPost from "../EditPost";

const HeaderPost = ({ post }) => {
  return (
    <div>
      <UserTimeCreateAt post={post} />
    </div>
  );
};

export default HeaderPost;
