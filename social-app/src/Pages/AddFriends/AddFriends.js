import React from "react";
import * as Icon from 'react-feather';
import ContentLayout from "../../Components/Layout/ContentLayout";
import LeftSidebarLayout from "../../Components/Layout/LeftSidebarLayout";
import MainLayout from "../../Components/Layout/MainLayout";
import RightSidebarLayout from "../../Components/Layout/RightSidebarLayout";
import request from "../../Api/request";
import momentDisplay from '../../lib/moment';
import Button from '../../Components/Button/Button';
import PostCard from '../../Components/PostCard/PostCard'
import FriendsLayout from "../../Components/Layout/FriendsLayout"
import RightLargeSidebarLayout from "../../Components/Layout/RightLargeSidebarLayout"
import ListFollow from '../../Components/Follow/ListFollow'
import ListUser from "../../Components/ListUser/ListUser"

export default function AddFriends() {

  return (
    <FriendsLayout>
      <LeftSidebarLayout>
        <ListFollow />
      </LeftSidebarLayout>
      <RightLargeSidebarLayout>
        <ListUser />
      </RightLargeSidebarLayout>
    </FriendsLayout>
  )
}