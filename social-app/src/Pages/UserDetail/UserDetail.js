import React from "react";
import { useParams } from 'react-router-dom';
import FriendsLayout from "../../Components/Layout/FriendsLayout"
import RightLargeSidebarLayout from "../../Components/Layout/RightLargeSidebarLayout"
import ListPosts from "../../Components/ListPosts/ListPosts";
import ProfileUser from "../../Components/ProfileUser/ProfileUser";
import request from "../../Api/request"

export default function UserDetail() {
  const params = useParams();
  const { userId } = params;

  const [posts, setPosts] = React.useState([]);

  const fetchPostsByUserId = async () => {
    const res = await request({
      url: `/posts/${userId}`,
      method: 'GET',
    })
    setPosts(res.data)
  }

  React.useEffect(()=> {
    fetchPostsByUserId()
  }, [userId])

  return (
    <FriendsLayout>
      <RightLargeSidebarLayout>
        <div className='overflow-auto'>
          <ProfileUser userId={userId} />
          <div className='col-8 mx-auto'>
            <ListPosts posts={posts} />
          </div>
        </div>

      </RightLargeSidebarLayout>
    </FriendsLayout>
  )
}