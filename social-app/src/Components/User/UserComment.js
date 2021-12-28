import React from "react";
import { Link } from 'react-router-dom'
import request from "../../Api/request";
import useAuth from '../../hooks/useAuth';


export default function UserComment() {
  const user = useAuth();
  const userId = user._id;
  const [profile, setProfile] = React.useState({})

  const fetchUser = async () => {
    const res = await request({
      url: `/profile/${userId}`,
      method: 'GET',
    })
    setProfile(res.data)
  }

  React.useEffect(() => {
    fetchUser()
  }, [userId])

  return (
    <Link to={`/user/${userId}`} className='text-decoration-none text-dark'>
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
    </Link>
  )
}