import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import CreatePost from "./Pages/CreatePost/CreatePost";
import PostDetail from "./Pages/PostDetail/PostDetail";
import AddFriends from "./Pages/AddFriends/AddFriends";
import UserDetail from "./Pages/UserDetail/UserDetail";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserInfo } from "./redux/userSlice";
import useAuth from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";
import GuestPage from "./Pages/RulePage/GuestPage";
import PrivatePage from "./Pages/RulePage/PrivatePage";
import EditProfile from "./Pages/EditProfile/Editprofile";
import socketClient from "./socket";

function App() {
  const status = useSelector((state) => state.user.status);
  const user = useAuth();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    socketClient.emit("join-user", user);

    return () => {
      socketClient.off("join-user");
    };
  }, [user]);
  React.useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  if (status === "idle" || status === "loading")
    return <div>Full page loading...</div>;
  if (status === "error") return <div>Error</div>;

  return (
    <Routes>
      <Route element={<GuestPage />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<PrivatePage />}>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/friends" element={<AddFriends />} />
        <Route path="/user/:userId" element={<UserDetail />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
