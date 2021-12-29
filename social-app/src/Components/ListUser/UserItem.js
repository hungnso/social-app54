import React from "react";
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import request from "../../Api/request";
import useAuth from "../../hooks/useAuth";

export default function UserItem({ user, handleClickfollow }) {
  const userMe = useAuth();
  const [story, setStory] = React.useState('')

  const profileUSer = async () => {
    const res = await request({
      url: `/profile/${user.userId._id}`,
      method: 'GET',
    })

    if (res.data) {
      setStory(res.data.story)
    }
  }

  React.useEffect(() => {
    profileUSer()
  }, [user])

  const handleClickUnfollow = async () => {
    const res = await request({
      url: 'follows/unfollow',
      method: 'PUT',
      data: { userId: user.userId._id }
    })
  }


  const renderButton = () => {
    if (userMe._id === user.userId._id) {
      return ''
    } else if (user.followers.includes(userMe._id)) {
      return (
        <button
          className='btn p-2 m-1'
          onClick={() => { handleClickUnfollow(user.userId._id) }}
        >
          <Icon.UserMinus />
        </button>
      )
    }

    return (
      <button
        className='btn p-2 m-1 text-primary'
        onClick={() => { handleClickfollow(user.userId._id) }}
      >
        <Icon.UserPlus />
      </button>
    )
  }

  return (
    <>
      <div className='d-flex bg-white w-100 justify-content-between'>
        <Link to={`/user/${user.userId._id}`} className='text-dark text-decoration-none'>
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
              <small>{user.followers?.length} followers</small>
              <small style={{ color: 'gray' }}>"{story}"</small>
            </div>
          </div>
        </Link>
        {renderButton()}
      </div>
    </>
  )
}