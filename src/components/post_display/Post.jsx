import { useState, useEffect, useContext } from "react";

import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { formatDate } from "../../utilities/formatDate";

import { Delete } from "@mui/icons-material";
import "./post.css";


const Post = ({ post }) => {

  const [ user, setUser ] = useState({});

  const { user : currentUser } = useContext(AuthContext); 

  const deletePost = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`/post/${post._id}`, { data : { userId : post.userId }});
      window.location.reload();
    }
    catch (error) {
      console.log(error);
    }
  }

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
          <div className="postTopLeft">

            <img 
              className="shareInputUserImage" 
              src={ user?.profileImageUrl 
              ? ( user.profileImageUrl ) 
              : ("/assets/images/defaultProfileImage.png" )
              } 
              alt="" 
            />

            <div className="postTopLeftData" onClick={deletePost}>
              <span className="postUsername"> { `${user.firstName} ${user.lastName}`} </span>
              <span className="postTimeStamp"> { formatDate(post.createdAt) } </span>
            </div>
          </div>


          { currentUser._id === user._id ? <Delete className="postTopRight" onClick={deletePost}/> : "test"}
          
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