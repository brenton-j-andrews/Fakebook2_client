import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

import axios from "axios";

import Comment from "../../CommentComponents/comment_display/Comment";

import { AuthContext } from "../../../context/AuthContext";
import { formatLikeString } from "../../../utilities/formatLikeString";
import { formatDate } from "../../../utilities/formatDate";

import { Delete } from "@mui/icons-material";
import "./post.css";


const Post = ({ post }) => {

  const [ postLikes, setPostLikes ] = useState(post.likes.length);
  const [ isLiked, setIsLiked ] = useState(false);
  const [ user, setUser ] = useState({});
  const { user : currentUser } = useContext(AuthContext); 

  // Check post like status. Used for conditional rendering of like button and like label.
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser, post.likes])
  
  // Get user information for post display.
  useEffect(() => {
    const fetchPostUser = async () => {
      const response = await axios.get(`/user?userId=${post.userId}`);
      setUser(response.data);
    }
    fetchPostUser();
  }, [post.userId])

  const deletePost = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`/post/${post._id}`, { data : { userId : post.userId }});
      window.location.reload();
    }
    catch (error) {
      console.log(error);
    }
  }

  const handlePostLike = () => {
    try {
      axios.put(`/post/${post._id}/like`, { userId : currentUser._id });
    }
    catch (error) {
      console.log(error);
    }
    setPostLikes(isLiked ? postLikes - 1 : postLikes + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrapper">

        <div className="postTop">
          <div className="postTopLeft">

            <Link to={`/profile/${user.username}`} >
              <img 
                className="shareInputUserImage" 
                src={ user?.profileImageUrl 
                ? ( user.profileImageUrl ) 
                : ("/assets/images/defaultProfileImage.png" )
                } 
                alt="" 
              />
            </Link>
           
            <div className="postTopLeftData">
              <span className="postUsername"> { `${user.firstName} ${user.lastName}`} </span>
              <span className="postTimeStamp"> { formatDate(post.createdAt) } </span>
            </div>

          </div>


          { currentUser._id === user._id && 
            <>
              <Delete 
              className="postTopRight" 
              onClick={deletePost}
              id="delete_post" 
              data-tooltip-content="Delete this post."
              /> 
              <Tooltip anchorId="delete_post"/>
            </>
          }
          
      </div>

        <div className="postCenter">
          <span className="postText"> { post.postContent } </span>
        </div>

        <div className="postBottom">
          <div className="postBottomUpper">

            <span className="postInteractionCounter"> { formatLikeString(postLikes, isLiked) } </span>
            <span className="postInteractionCounter"> 2 Comments </span>
          </div>

          <hr className="postBottomHr" />

          <div className="postBottomLower">
              <button className="likeButton" onClick={handlePostLike}> 
                { isLiked ? "Unlike" : "Like"}
              </button>
              <button className="likeButton"> Comment </button>
          </div>
        </div>

        <div className="comments">
          <Comment />
        </div>

      </div>
    </div>
  );
};

export default Post;