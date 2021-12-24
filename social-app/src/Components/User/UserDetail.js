import React from "react";
import momentDisplay from '../../lib/moment';

export default function PostUserDetail({ post }) {
  return (
    <div className='mb-2 d-flex justify-content-start'>
      <div className="overflow-hidden me-1">
        <img
          className='rounded-circle border border-white'
          style={{ width: 50, height: 50, objectFit: 'cover' }}
          src={post.userId?.avatar}
          alt="user"
        />
      </div>
      <div>
        <div><b>{post.userId?.username}</b></div>
        <small style={{ color: 'gray' }}>{momentDisplay(post.createdAt)}</small>
      </div>
    </div>
  )
}