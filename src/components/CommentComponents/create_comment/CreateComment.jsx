import axios from "axios";
import { useContext, useRef } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./createComment.css";

const CreateComment = ({ postId, commentId }) => {

  const { user } = useContext(AuthContext);
  const commentRef = useRef();

  // This stuff makes these things a little more entertaining. 
  // Need some dog pictures 

  const createComment = async (e) => {
    e.preventDefault();

    const newComment = {
      "postId" : postId,
      "commenterId" : user._id,
      "commentContent" : commentRef.current.value,
      "commenterUsername" : user.username,
      "commenterFullName" : `${user.firstName} ${user.lastName}`,
      "commenterProfileImageUrl" : user.profileImageUrl,
      "createdAt" : Date.now().toString()
    }

    try {
      await axios.post("/comment", newComment);
      window.location.reload();
    }

    catch (error) {
      console.log(error);
    }
  }

  // Bruce posting some hot takes. 

  return (
    <div className="createComment">

      <img 
        className="commentUserImage" 
        src= { user ? user?.profileImageUrl : "/assets/images/defaultProfileImage.png" }
        alt="" 
      />

      <form className="commentForm" onSubmit={createComment}>
        <textarea 
          placeholder={ postId ? "Leave a comment..." : "Leave a Reply..." }
          className="commentFormInput"
          cols="30" 
          rows="1" 
          ref={commentRef}
        />

        
        <button className="commentSubmitButton" type="submit"> 
          { postId ? "Comment" : "Reply" }
        </button>
      

      </form>
      
    </div>
  )
} 

export default CreateComment;