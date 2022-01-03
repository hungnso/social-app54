import React from "react";
import FriendsLayout from "../../Components/Layout/FriendsLayout"
import RightLargeSidebarLayout from "../../Components/Layout/RightLargeSidebarLayout"
import useAuth from '../../hooks/useAuth';
import request from "../../Api/request";
import ProfileItemEdit from '../../Components/ProfileItemEdit/ProfileItemEdit'

export default function EditProfile() {
  const useMe = useAuth();
  const [profile, setProfile] = React.useState({});
  const [userMe, setUserMe] = React.useState({});

  const fetchProfile = async () => {
    const res = await request({
      url: `/profile/${useMe._id}`,
      method: 'GET',
    })
    setProfile(res.data)
    console.log(res.data)
  }

  const fetchUser = async () => {
    const res = await request({
      url: '/auth',
      method: 'GET',
    })
    setUserMe(res.data)
    console.log(res.data)
  }

  React.useEffect(() => {
    fetchProfile()
    fetchUser()
  }, [useMe])

  const handleSubmitData = async (data) => {
    const res = await request({
      url: '/profile',
      method: 'PUT',
      data
    })
    setProfile(res.data)
  }

  const handleSubmitUserName = async (data) => {
    const res = await request({
      url: '/auth/update',
      method: 'PUT',
      data
    })
    setUserMe(res.data)
  }


  return (
    <FriendsLayout>
      <RightLargeSidebarLayout>
        <div className="mx-5">
          <div>
            <ProfileItemEdit
              title='UserName'
              content={userMe.username}
              rule='username'
              handleSubmitData={handleSubmitUserName}
            />
          </div>
          <div>
            <ProfileItemEdit
              title='PassWord'
              rule='password'
              handleSubmitData={handleSubmitData}
            />
          </div>
          <div>
            <ProfileItemEdit
              title='Address'
              content={profile.address}
              rule='address'
              handleSubmitData={handleSubmitData}
            />
          </div>
          <div>
            <ProfileItemEdit
              title='BirthDay'
              content={profile.birthDay}
              rule='birthDay'
              type='date'
              handleSubmitData={handleSubmitData}
            />
          </div>
          <div>
            <ProfileItemEdit
              title='Gender'
              content={profile.gender}
              rule='gender'
              handleSubmitData={handleSubmitData}
            />
          </div>
          <div>
            <ProfileItemEdit
              title='Mobile'
              content={profile.mobile}
              rule='mobile'
              type='number'
              handleSubmitData={handleSubmitData}
            />
          </div>
          <div>
            <ProfileItemEdit
              title='Story'
              content={profile.story}
              rule='story'
              handleSubmitData={handleSubmitData}
            />
          </div>
        </div>

      </RightLargeSidebarLayout>
    </FriendsLayout>
  )
}