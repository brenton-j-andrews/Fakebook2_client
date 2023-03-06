import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import axios from "axios";

import CreatePost from "../posts/create_post/CreatePost";
import Post from "../posts/post_display/Post";

import "./feed.css";

const Feed = ({ username }) => {

  const [ posts, setPosts ] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {

    const fetchPosts = async () => {

      let response = username 
      ? await axios.get(`/post/profile/${username}`) 
      : await axios.get(`/post/timeline/${user._id}`)
      
      setPosts(response.data.sort((a, b) => { 
        return new Date(b.createdAt) - new Date(a.createdAt);
      }));
    }

    fetchPosts();
  }, [ user, username ])


  
  return (
    <div className="feed">
      <div className="feedWrapper">
        
        {!username && <CreatePost /> }
        {user.username === username && <CreatePost /> }
    
        {posts.map((post, index) => {
          return (
            <Post key={index} post={post} /> 
          )
        })}
      </div>
    </div>
  );
};

export default Feed;