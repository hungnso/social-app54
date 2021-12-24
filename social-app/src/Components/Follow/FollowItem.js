import React from "react";
import { Link } from "react-router-dom"
import * as Icon from 'react-feather';

export default function FollowItem({ follow, handleClickUnfollow }) {

  return (
    <>
      <div className='mx-1 p-1 d-flex w-100 rounded justify-content-between'>
        <div>
          <Link to={`/user/${follow._id}`} className='text-dark text-decoration-none'>
            <div className='d-flex'>
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
            </div>
          </Link>
        </div>
        <div>
          <button
            className='btn p-1 m-1'
            // onClick={() => { handleClickUnfollow(follow._id) }}
          >
            <Icon.MessageCircle />
          </button>
          <button
            className='btn p-1 m-1'
            onClick={() => { handleClickUnfollow(follow._id) }}
          >
            <Icon.UserMinus />
          </button>
        </div>
      </div>
    </>
  )
}