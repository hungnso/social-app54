import React from "react";
import { Link } from 'react-router-dom';
import request from "../../Api/request";
import ButtonAdd from "../Button/ButtonAdd"

export default function UserItem({ user, page }) {
  const [statusFollow, setStatusFollow] = React.useState(false);

  const [followers, setFollowers] = React.useState([])
  const fetchFollowId = async () => {
    const res = await request({
      url: `/follows/${user.userId._id}`,
      method: 'GET',
    })

    if (res.data) {
      setFollowers(res.data.followers)
    }
  }

  React.useEffect(() => {
    fetchFollowId()
  }, [statusFollow])

  const followersCount = React.useMemo(() => {
    return followers.length
  })


  const handleClickfollow = async (userId) => {
    const res = await request({
      url: 'follows/following',
      method: 'PUT',
      data: { userId }
    })
    if (res.data) {
      setStatusFollow(!statusFollow)
    }
  }

  const handleClickUnfollow = async (userId) => {
    const res = await request({
      url: 'follows/unfollow',
      method: 'PUT',
      data: { userId }
    })
    if (res.data) {
      setStatusFollow(!statusFollow)
    }
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
              <small>{followersCount} followers</small>
              <small style={{ color: 'gray' }}>"{user.story}"</small>
            </div>
          </div>
        </Link>
        <ButtonAdd
          page={page}
          userId={user.userId?._id}
          handleClickfollow={handleClickfollow}
          handleClickUnfollow={handleClickUnfollow}
          followers={followers}
        />
      </div>
    </>
  )
}