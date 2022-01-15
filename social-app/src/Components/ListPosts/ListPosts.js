import React from "react";
import PostCard from "../PostCard/PostCard";
import request from "../../Api/request";

export default function ListPosts() {
  const [status, setStatus] = React.useState("idle");
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = async () => {
    try {
      setStatus("loading");
      const res = await request({
        url: "/posts",
        method: "GET",
      });
      if (res && res.success) {
        const data = res.data;
        setStatus("done");
        setPosts(data);
        return;
      }
      setStatus("error");
    } catch (error) {
      setStatus("error");
    }
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);
  const handleDeletePost = async (value) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      const newPosts = posts.filter((post) => post._id !== value._id);
      setPosts(newPosts);
      await request({
        url: `/posts/${value._id}`,
        method: "DELETE",
      });
    }
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post._id} className="mb-3 bg-white p-2 rounded-3">
            <PostCard post={post} handleDeletePost={handleDeletePost} />
          </div>
        );
      })}
    </>
  );
}
