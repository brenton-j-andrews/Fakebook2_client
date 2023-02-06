import { useState, useEffect } from "react";
import axios from "axios";
import { formatDate } from "../../utilities/formatDate";

import { MoreVert } from "@mui/icons-material";
import "./post.css";


const Post = ({ post }) => {

  const [ user, setUser ] = useState({});

  useEffect(() => {
    const fetchPostUser = async () => {
      const response = await axios.get(`/user/${post.userId}`);
      setUser(response.data);
    }
    fetchPostUser();
  }, [post.userId])

  return (
    <div className="post">
      <div className="postWrapper">

        <div className="postTop">
          <div className="postTopRight">
            <img className="shareInputUserImage" src="/assets/defaultProfileImage.png" alt="" />

            <div className="postTopRightData">
              <span className="postUsername"> { `${user.firstName} ${user.lastName}`} </span>
              <span className="postTimeStamp"> { formatDate(post.createdAt) } </span>
            </div>
          </div>

          <div className="postTopLeft">
            <MoreVert className="menuIcon"/>
          </div>
      </div>

        <div className="postCenter">
          <span className="postText"> { post.postContent } </span>
        </div>

        <div className="postBottom">
          <div className="postBottomUpper">
            <span className="postInteractionCounter"> { post.likes.length } likes </span>
            <span className="postInteractionCounter"> 2 Comments </span>
          </div>

          <hr className="postBottomHr" />

          <div className="postBottomLower">
              <button className="likeButton"> Like </button>
              <button className="likeButton"> Comment </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Post;