import React from "react";
import PostCard from '../PostCard/PostCard';

export default function ListPosts({ posts }) {

  return (
    <>
      {
        posts.map(post => {
          return (
            <div key={post._id} className="mb-3 bg-white p-2 rounded-3">
              <PostCard post={post} />
            </div>
          )
        })
      }
    </>
  )
}