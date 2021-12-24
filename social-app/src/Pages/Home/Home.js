import React from "react";
import ContentLayout from "../../Components/Layout/ContentLayout";
import MainLayout from "../../Components/Layout/MainLayout";
import RightSidebarLayout from "../../Components/Layout/RightSidebarLayout";
import request from "../../Api/request";
import PostCard from '../../Components/PostCard/PostCard';
import ListFollow from '../../Components/Follow/ListFollow';

export default function Home() {
  const [posts, setPosts] = React.useState([])
  const fetchPosts = async () => {
    const res = await request({
      url: '/posts',
      method: 'GET',
    })
    if (res.data) {
      setPosts(res.data)
    }
  }

  React.useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <MainLayout>
      <ContentLayout>
        <div className='text-center my-2'>
          <h4>Home</h4>
        </div>
        <div className='flex-grow-1 overflow-auto'>
          {posts.map(post => {
            return (
              <div key={post._id} className="mb-3  bg-white p-2 rounded-3">
                <PostCard post={post} />
              </div>
            )
          })}
        </div>
      </ContentLayout>
      <RightSidebarLayout>
        <ListFollow />
      </RightSidebarLayout>
    </MainLayout>
  )
}