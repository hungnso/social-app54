import React from 'react';
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather';
import request from "../../Api/request";
import useAuth from '../../hooks/useAuth';

export default function ButtonHome({ postId, like, commentCount }) {

  const [likes, setLikes] = React.useState([])
  const user = useAuth();

  React.useEffect(() => {
    setLikes(like)
  }, [like])

  const handleClickLike = async () => {

    if (likes.includes(user._id)) {
      setLikes(prev => prev.filter(like => like !== user._id))
      const res = await request({
        url: `/posts/${postId}/unLike`,
        method: 'PUT',
      })
    } else {
      setLikes(prev => [...prev, user._id])
      const res = await request({
        url: `/posts/${postId}/like`,
        method: 'PUT',
      })
    }
  }
  const cls = likes?.includes(user._id) ? 'btn btn-white text-primary w-50' : 'btn btn-white w-50'

  return (
    <div className="mt-2 border-top">
      <button
        className={cls}
        onClick={handleClickLike}
      >
        {<Icon.ThumbsUp />} {likes?.length}
      </button>
      <Link to={`/posts/${postId}`}>
        <button className='btn btn-white w-50'>
          {<Icon.MessageSquare />} {commentCount}
        </button>
      </Link>
    </div>
  )
}