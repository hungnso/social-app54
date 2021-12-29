import React from "react";
import ContentLayout from "../../Components/Layout/ContentLayout";
import MainLayout from "../../Components/Layout/MainLayout";
import RightSidebarLayout from "../../Components/Layout/RightSidebarLayout";
import request from "../../Api/request";
import PostCard from '../../Components/PostCard/PostCard';
import ListFollow from '../../Components/Follow/ListFollow';
import ListPosts from "../../Components/ListPosts/ListPosts";
import useAuth from '../../hooks/useAuth'
export default function Home() {
  const user = useAuth();
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
          <ListPosts posts={posts} />
        </div>
      </ContentLayout>
      <RightSidebarLayout>
        <ListFollow userId={user._id} item='home' />
      </RightSidebarLayout>
    </MainLayout>
  )
}