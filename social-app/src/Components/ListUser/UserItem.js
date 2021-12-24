import React from "react";
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

export default function UserItem({ user, handleClickfollow }) {
  // console.log(user)

  const renderButton = () => {
    return (
      <button
        className='btn p-2 m-1'
        onClick={() => { handleClickfollow(user.userId._id) }}
      >
        <Icon.UserPlus />
      </button>
    )
  }

  return (
    <>
      <div className='p-1 d-flex w-100 bg-white rounded-3 justify-content-between'>
        <Link to={`/user/${user.userId._id}`}  className='text-dark text-decoration-none'>
          <div className='d-flex'>
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
          </div>
        </Link>
        {renderButton()}
      </div>
    </>
  )
}