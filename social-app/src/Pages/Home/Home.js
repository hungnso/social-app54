import React from "react";
import ContentLayout from "../../Components/Layout/ContentLayout";
import MainLayout from "../../Components/Layout/MainLayout";
import RightSidebarLayout from "../../Components/Layout/RightSidebarLayout";
import ListFollow from "../../Components/Follow/ListFollow";
import ListPosts from "../../Components/ListPosts/ListPosts";
import useAuth from "../../hooks/useAuth";
export default function Home() {
  const userMe = useAuth();

  const test = process.env.REACT_APP_SERVER_API_URL;
  console.log(test);

  return (
    <MainLayout>
      <ContentLayout>
        <div className="text-center my-2">
          <h4>Home</h4>
        </div>
        <div className="flex-grow-1 overflow-auto">
          <ListPosts />
        </div>
      </ContentLayout>
      <RightSidebarLayout>
        <ListFollow userIdProfile={userMe._id} page="home-following" />
      </RightSidebarLayout>
    </MainLayout>
  );
}
