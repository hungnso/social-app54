import React from "react";
import FriendsLayout from "../../Components/Layout/FriendsLayout"
import RightLargeSidebarLayout from "../../Components/Layout/RightLargeSidebarLayout"
import ListUser from "../../Components/ListUser/ListUser"

export default function AddFriends() {

  return (
    <FriendsLayout>
      <RightLargeSidebarLayout>
        <ListUser />
      </RightLargeSidebarLayout>
    </FriendsLayout>
  )
}