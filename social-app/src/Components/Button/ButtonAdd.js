import React from 'react';
import * as Icon from 'react-feather';
import useAuth from '../../hooks/useAuth';

export default function ButtonAdd({
  userId,
  page,
  followers,
  following,
  handleClickUnfollow,
  handleClickfollow
}) {
  const userMe = useAuth();

  const renderHome = () => {
    return ''
  }

  const renderFollowers = () => {
    return (
      <div>
        {
          userId === userMe._id ? '' : (
            following.find(item => item._id === userId) ? (
              <button
                className='btn p-2 m-1 text-primary'
                onClick={() => { handleClickUnfollow(userId) }}
              >
                <Icon.UserMinus />
              </button>
            ) : (
              <button
                className='btn p-2 m-1'
                onClick={() => { handleClickfollow(userId) }}
              >
                <Icon.UserPlus />
              </button>
            ))
        }
      </div>
    )
  }

  const renderFollowing = () => {
    return (
      <div>
        {
          userId === userMe._id ? '' : (
            following.find(item => item._id === userId) ? (
              <button
                className='btn p-2 m-1 text-primary'
                onClick={() => { handleClickUnfollow(userId) }}
              >
                <Icon.UserMinus />
              </button>
            ) : (
              <button
                className='btn p-2 m-1'
                onClick={() => { handleClickfollow(userId) }}
              >
                <Icon.UserPlus />
              </button>
            ))
        }
      </div>
    )
  }

  const renderListUser = () => {
    return (
      <div>
        {
          userId === userMe._id ? '' : (
            followers.find(item => item._id === userMe._id) ? (
              <button
                className='btn p-2 m-1 text-primary'
                onClick={() => { handleClickUnfollow(userId) }}
              >
                <Icon.UserMinus />
              </button>
            ) : (
              <button
                className='btn p-2 m-1'
                onClick={() => { handleClickfollow(userId) }}
              >
                <Icon.UserPlus />
              </button>
            ))
        }
      </div>
    )
  }

  const renderButton = () => {
    return (
      page === 'home-following' ? renderHome() :
        page === 'userDetail-following' ? renderFollowing() :
          page === 'userDetail-follower' ? renderFollowers() :
            page === 'listuser' ? renderListUser() :
              ''
    )
  }

  return (
    <div className='d-flex align-items-center'>
      <div>
        <button
          className='btn p-1 m-1'
        // onClick={() => { handleClickUnfollow(follow._id) }}
        >
          <Icon.MessageCircle />
        </button>
      </div>
      {renderButton()}
    </div>
  )

}