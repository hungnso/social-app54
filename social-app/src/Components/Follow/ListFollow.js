import React from "react";
import FollowItem from './FollowItem';
import request from "../../Api/request";

export default function ListFollow({ userIdProfile, page }) {

  const [follows, setFollows] = React.useState([])

  const fetchFollows = async () => {
    const res = await request({
      url: `/follows/${userIdProfile}`,
      method: 'GET',
    })
    if (res.data) {
      const following = res.data.following
      setFollows(following)
    }
  }

  React.useEffect(() => {
    fetchFollows()
  }, [userIdProfile])

  const friendsCount = React.useMemo(() => {
    return follows.length
  }, [follows])

  return (
    <>
      <div className=' mt-2'>Friends ({friendsCount})</div>
      <div className='flex-grow-1 overflow-auto list-group'>
        {follows.map(follow => {
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