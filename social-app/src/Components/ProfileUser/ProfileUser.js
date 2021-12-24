import React from "react";
import request from "../../Api/request"

export default function ProfileUser({ userId }) {

  const [profile, setProfile] = React.useState({})

  // console.log(profile)

  const fetchProfile = async () => {
    const res = await request({
      url: `/profile/${userId}`,
      method: 'GET'
    })
    const profileUser = res.data
    setProfile(profileUser)
  }

  React.useEffect(() => {
    fetchProfile();
  }, [])

  return (
    <div className='my-2 d-flex justify-content-center align-items-center py-4 bg-white rounded-3'>
      <div className="overflow-hidden me-5">
        <img
          className='rounded-circle border border-white'
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          src={profile.userId?.avatar}
          alt="user"
        />
      </div>
      <div>
        <div><h4>{profile.userId?.username}</h4></div>
        <div>
          <span className='me-5'><b>{profile.postCount || 30}</b> Posts</span>
          <span className='me-5'><b>{profile.followerCount}</b> Follower</span>
          <span className='me-5'><b>{profile.followingCount}</b> Following</span>
        </div>
        <div>
          <span className='me-5'><b>BirthDay:</b> {profile.birthDay || '16/07/1996'}</span>
          <span className='me-5'><b>Gender:</b> {profile.gender}</span>
        </div>
        <div>
          <span className='me-5'><b>Email:</b> {profile.userId?.email}</span>
          <span className='me-5'><b>Mobile:</b> {profile.mobile || '--'}</span>
          <span className='me-5'><b>Address:</b> {profile.address || '--'}</span>
        </div>
        <div>
          <span><b>Story:</b> <i>{profile.story}</i></span>
        </div>
      </div>
    </div>

  )
}