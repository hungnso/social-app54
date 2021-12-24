import React from "react";

export default function FollowItem({ follow, handleClickUnfollow }) {

  return (
    <>
      <div className='mx-1 p-1 d-flex w-100 rounded' >
        <div className=" me-1">
          <img
            className='rounded-circle border border-white'
            style={{ width: 40, height: 40, objectFit: 'cover' }}
            src={follow.avatar}
            alt="user"
          />
        </div>
        <div className="flex-grow-1 p-2 me-2" >
          <div><b>{follow.username}</b></div>
        </div>
        <button
          className='btn btn-light rounded-pill p-1 m-1'
          onClick = {()=>{handleClickUnfollow(follow._id)}}
        >
          <small className="text-primary">unfollow</small>
        </button>
      </div>
    </>
  )
}