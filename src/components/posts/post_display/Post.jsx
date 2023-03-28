import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import axios from "axios";

import UsersModal from "../../modals/users_modal/UsersModal";
import CreateComment from "../../comments/create_comment/CreateComment";
import Comment from "../../comments/comment_display/Comment";

import { AuthContext } from "../../../context/AuthContext";
import { formatLikeString } from "../../../utilities/formatLikeString";
import { formatDate } from "../../../utilities/formatDate";

import { Delete } from "@mui/icons-material";
import "./post.css";


const Post = ({ post }) => {

  const { user : currentUser } = useContext(AuthContext); 

  const [ displayModal, setDisplayModal ] = useState(false); 
  const [ postLikes, setPostLikes ] = useState(post.likes.length);
  const [ postComments, setPostComments ] = useState([]);
  const [ isLiked, setIsLiked ] = useState(false);
  const [ user, setUser ] = useState({});

  // Effect: Check post like status. Used for conditiona  l rendering of like button and like label.
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [ currentUser, post.likes ])
  
  // Effect: Get post author information for post display.
  useEffect(() => {
    const fetchPostUser = async () => {
      const response = await axios.get(`/user/sanitized_user?userId=${post.userId}`);
      setUser(response.data);
    }
    fetchPostUser();
  }, [ post.userId ])

  // Effect: Get comments associated with post on display.
  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(`/comment/${post._id}`);
      setPostComments(response.data);
    }

    fetchComments();
  }, [ post._id ]);

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
          <img src={ post.postImageUrl } alt="" className="commentImage" />
        </div>

        <div className="postBottom">
          <div className="postBottomUpper">

            <span className="postInteractionCounter"> { formatLikeString(postLikes, isLiked, setDisplayModal) } </span>
            
            {displayModal && 
              <UsersModal 
                isPost={true}
                likedItem={post}
                displayModal={displayModal}
                setDisplayModal={setDisplayModal}
              />
            }

            <span className="postInteractionCounter"> { postComments.length } Comments </span>
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

          {
            postComments?.map((comment, index) => {
              return (
                <Comment 
                  comment={comment} 
                  key={index}
                />
              )
            })
          }

          <CreateComment 
            postId={ post._id } 
          />

        </div>

      </div>
    </div>
  );
};

export default Post;