import React from "react";
import { Link } from "react-router-dom"
import * as Icon from 'react-feather';
import useAuth from '../../hooks/useAuth';

export default function FollowItem({ follow, handleClickUnfollow, userId, item = 'following' }) {
  const user = useAuth();
  return (
    <>
      <div className='d-flex rounded justify-content-between'>
        <div>
          <Link to={`/user/${follow._id}`} className='text-dark text-decoration-none'>
            <div className='d-flex align-items-center'>
              <div>
                <img
                  className='rounded-circle border border-white'
                  style={{ width: 40, height: 40, objectFit: 'cover' }}
                  src={follow.avatar}
                  alt="user"
                />
              </div>
              <div className="flex-grow-1 ms-2" >
                <div><b>{follow.username}</b></div>
              </div>
            </div>
          </Link>
        </div>
        <div>
          {userId === user._id ? (
            <div>
              <button
                className='btn p-1 m-1'
              // onClick={() => { handleClickUnfollow(follow._id) }}
              >
                <Icon.MessageCircle />
              </button>
              {item === 'following' ? (
                <button
                  className='btn p-1 m-1'
                  onClick={() => { handleClickUnfollow(follow._id) }}
                >
                  <Icon.UserMinus />
                </button>
              ) : ''}
            </div>
          ) : (
            <div>
              <button
                className='btn p-1 m-1'
              // onClick={() => { handleClickUnfollow(follow._id) }}
              >
                <Icon.MessageCircle />
              </button>
              <button
                className='btn p-1 m-1'
              // onClick={() => { handleClickUnfollow(follow._id) }}
              >
                <Icon.UserMinus />
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  )
}