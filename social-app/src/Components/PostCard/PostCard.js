import React from "react";
import Button from '../../Components/Button/Button'
import UserDetail from "../User/UserDetail";

export default function PostCard({ post }) {

  return (
    <>
      <div >
        <UserDetail post={post} />
        <div className='me-1 '>
          <div
            className='mb-2  text-break'
            dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="w-100">
            <img src={post.images} alt='anh' className='w-100' />
          </div>
        </div>
        <Button
          postId={post._id}
          like={post.likes}
          commentCount={post.commentCount}
        />
      </div>
    </>


  )
}