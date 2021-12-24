import React from "react";
import request from "../../Api/request"

export default function UserComment({ userId }) {

  console.log(userId)

  const [profile, setProfile] = React.useState({})

  const fetchUser = async () => {
    const res = await request({
      url: `/profile/${userId}`,
      method: 'GET',
    })

    setProfile(res.data)
    console.log(res)
  }

  console.log('render')

  React.useEffect(() => {
    fetchUser()
  }, [userId])

  return (
    <div className='mt-3 px-3 py-2 d-flex justify-content-start align-items-center'>
      <div className="overflow-hidden me-1">
        <img
          className='rounded-circle border border-white'
          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          src={profile.userId?.avatar}
          alt="user"
        />
      </div>
      <div>
        <div><b>{profile.userId?.username}</b></div>
        <small style={{ color: 'gray' }}>{profile.followerCount} followers</small>
      </div>
    </div>
  )
}