import React from "react";
import momentDisplay from '../../lib/moment';

export default function Comment({ comment }) {
  return (
    <>
      <div className='mb-2 d-flex '>
        <div className=" me-1">
          <img
            className='rounded-circle border border-white'
            style={{ width: 40, height: 40, objectFit: 'cover' }}
            src={comment.userId?.avatar}
            alt="user"
          />
        </div>
        <div className="flex-grow-1 p-2 me-2 bg-white rounded-3" >
          <div><b>{comment.userId?.username}</b></div>
          <p className="mb-1 text-break">{comment.content}</p>
          <small style={{ color: 'gray' }}>{momentDisplay(comment.createdAt)}</small>
        </div>
      </div>
    </>


  )
}