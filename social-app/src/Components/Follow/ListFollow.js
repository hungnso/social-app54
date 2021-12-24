import React from "react";
import FollowItem from './FollowItem';
import request from "../../Api/request";
import { AuthContext } from '../../App'


export default function ListFollow() {
  const { user } = React.useContext(AuthContext)

  const [follows, setFollows] = React.useState([])

  // console.log(follows)

  const fetchFollows = async () => {
    const res = await request({
      url: `/follows/${user._id}`,
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
    <div>
      <div className=' mt-2'>Friends ({friendsCount})</div>

      {follows.map(follow => {
        return (
          <div className='mb-1 d-flex mt-2' key={follow._id}>
            <FollowItem
              follow={follow}
              handleClickUnfollow={handleClickUnfollow}
            />
          </div>
        )
      })}
    </div>
  )
}