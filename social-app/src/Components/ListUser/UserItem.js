import React from "react";

export default function UserItem({ user, handleClickfollow }) {
  // console.log(user)

  const renderButton = () => {
    return (
      <button
        className='btn btn-light rounded-pill p-2 m-1 lh-1'
        onClick={() => { handleClickfollow(user.userId._id) }}
      >
        <small className="text-secondary">follow</small>
      </button>
    )
  }


  return (
    <>
      <div className='mx-1 p-1 d-flex w-100' style={{ backgroundColor: '#F0F2F5' }}>
        <div className=" me-1">
          <img
            className='rounded-circle border border-white'
            style={{ width: 80, height: 80, objectFit: 'cover' }}
            src={user.userId?.avatar}
            alt="user"
          />
        </div>
        <div className="flex-grow-1 d-flex flex-column p-2 me-2" >
          <div><b>{user.userId?.username}</b></div>
          <small>{user.followerCount} followers</small>
          <small style={{ color: 'gray' }}>"{user.story}"</small>

        </div>
        {renderButton()}
        {/* <button
          className='btn btn-light rounded-pill p-2 m-1 lh-1'
          onClick={() => { handleClickfollow(user.userId._id) }}
        >
          <small className="text-secondary">follow</small>
        </button> */}
      </div>
    </>
  )
}