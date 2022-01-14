import React from "react";
import ButtonHome from "../Button/ButtonHome";
import UserTimeCreateAt from "../User/UserTimeCreateAt";
import HeaderPost from "./HeaderPost/HeaderPost";

export default function PostCard({ post }) {
  return (
    <>
      <div>
        <HeaderPost post={post} />
        <div className="me-1 ">
          <div
            className="mb-2  text-break"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="w-100">
            <img src={post.images} alt="anh" className="w-100" />
          </div>
        </div>
        <ButtonHome
          post={post}
          like={post.likes}
          commentCount={post.commentCount}
        />
      </div>
    </>
  );
}
