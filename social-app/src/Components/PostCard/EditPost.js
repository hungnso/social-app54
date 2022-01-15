import { useSelector, useDispatch } from "react-redux";
import request from "../../Api/request";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const EditPost = ({ post, posts, handleDeletePost }) => {
  let baseUrl = process.env.BASES_URL;
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useAuth();

  const handleEditPost = () => {};

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${baseUrl}/post/${post._id}`);
  };
  return (
    <div className="nav-item dropdown">
      <span className="material-icons" id="moreLink" data-toggle="dropdown">
        more_horiz
      </span>

      <div className="dropdown-menu">
        {user._id === post.userId?._id && (
          <>
            <div className="dropdown-item" onClick={handleEditPost}>
              <span className="material-icons">create</span> Edit Post
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleDeletePost(post)}
            >
              <span className="material-icons">delete_outline</span> Remove Post
            </div>
          </>
        )}

        <div className="dropdown-item" onClick={handleCopyLink}>
          <span className="material-icons">content_copy</span> Copy Link
        </div>
      </div>
    </div>
  );
};

export default EditPost;
