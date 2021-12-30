import React from "react";
import { Link } from 'react-router-dom'
import request from "../../Api/request";
import useAuth from '../../hooks/useAuth';


export default function UserComment() {
  const userMe = useAuth();
  const [follow, setFollow] = React.useState({})

  const fetchUser = async () => {
    const res = await request({
      url: `/follows/${userMe._id}`,
      method: 'GET',
    })
    setFollow(res.data)
  }

  React.useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Link to={`/user/${userMe._id}`} className='text-decoration-none text-dark'>
      <div className='mt-3 px-3 py-2 d-flex justify-content-start align-items-center'>
        <div className="overflow-hidden me-1">
          <img
            className='rounded-circle border border-white'
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
            src={follow.userId?.avatar}
            alt="user"
          />
        </div>
        <div>
          <div><b>{follow.userId?.username}</b></div>
          <small style={{ color: 'gray' }}>{follow.followers?.length} followers</small>
        </div>
      </div>
    </Link>
  )
}