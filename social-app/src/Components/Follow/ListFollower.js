import React from "react";
import FollowItem from './FollowItem';
import request from "../../Api/request";

export default function ListFollowers({ userIdProfile, page }) {

  const [followers, setFollowers] = React.useState([])

  const fetchFollows = async () => {
    const res = await request({
      url: `/follows/${userIdProfile}`,
      method: 'GET',
    })
    if (res.data) {
      const follower = res.data.followers
      setFollowers(follower)
    }
  }

  React.useEffect(() => {
    fetchFollows()
  }, [userIdProfile])

  const friendsCount = React.useMemo(() => {
    return followers.length
  }, [followers])

  return (
    <>
      <div className=' mt-2'>Friends ({friendsCount})</div>
      <div className='flex-grow-1 overflow-auto list-group'>
        {followers.map(follow => {
          return (
            <div key={follow._id} className='list-group-item mb-1 rounded-3'>
              <FollowItem
                follow={follow}
                page={page}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}