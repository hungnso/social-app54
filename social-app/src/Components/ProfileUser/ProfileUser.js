import React from "react";
import request from "../../Api/request";
import * as Icon from 'react-feather';
import useAuth from '../../hooks/useAuth';

export default function ProfileUser({ userId, postsNumber }) {
  const user = useAuth();
  const [profile, setProfile] = React.useState({});
  const [followers, setFollowers] = React.useState([]);
  const [following, setFollowing] = React.useState([]);
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
  }, [userId])

  const fetchFollowId = async () => {
    const res = await request({
      url: `/follows/${userId}`,
      method: 'GET'
    })
    setFollowers(res.data.followers)
    setFollowing(res.data.following)
  }

  React.useEffect(() => {
    fetchFollowId();
  }, [userId])

  const follow = React.useMemo(() => {
    return {
      followerCount: followers.length,
      followingCount: following.length
    }
  }, [followers, following])

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
        <div className="d-flex justify-content-between">
          <h4>{profile.userId?.username}</h4>
          {user._id === profile.userId?._id ? <button className="btn btn-light"><Icon.Edit3 /> Edit Profile</button> : ''}
        </div>
        <div>
          <span className='me-5'><b>{postsNumber}</b> Posts</span>
          <span className='me-5'><b>{follow.followerCount}</b> Follower</span>
          <span className='me-5'><b>{follow.followingCount}</b> Following</span>
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