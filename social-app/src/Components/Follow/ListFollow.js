import React from "react";
import FollowItem from './FollowItem';
import request from "../../Api/request";

export default function ListFollow({ userId, item }) {

  const [follows, setFollows] = React.useState([])

  const fetchFollows = async () => {
    const res = await request({
      url: `/follows/${userId}`,
      method: 'GET',
    })
    if (res.data) {
      const following = res.data.following
      setFollows(following)
    }
  }

  React.useEffect(() => {
    fetchFollows()
  }, [])

  const friendsCount = React.useMemo(() => {
    return follows.length
  }, [follows])
  const handleClickUnfollow = async (userId) => {
    const res = await request({
      url: 'follows/unfollow',
      method: 'PUT',
      data: { userId }
    })
    if (res.data) {
      const unFollow = res.data.following
      setFollows(unFollow)
    }
  }


  return (
    <>
      <div className=' mt-2'>Friends ({friendsCount})</div>
      <div className='flex-grow-1 overflow-auto list-group'>
        {follows.map(follow => {
          return (
            <div key={follow._id} className='list-group-item mb-1 rounded-3'>
              <FollowItem
                follow={follow}
                handleClickUnfollow={handleClickUnfollow}
                userId={userId}
                item={item}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}