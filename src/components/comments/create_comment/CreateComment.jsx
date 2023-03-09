import { useContext, useRef } from "react";
import { Breakpoint } from "react-socks";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

import { Check } from "@mui/icons-material";
import "./createComment.css";

const CreateComment = ({ postId, commentId }) => {

  const { user } = useContext(AuthContext);
  const commentRef = useRef();

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

        <Breakpoint small down>
          <button className="mobileCommentSubmitButton" type="submit"> 
           <Check type="submit"/>
          </button>
        </Breakpoint>        

        <Breakpoint medium up>
          <button className="desktopCommentSubmitButton" type="submit"> 
            { postId ? "Comment" : "Reply" }
          </button>
        </Breakpoint>
        
      

      </form>
      
    </div>
  )
} 

export default CreateComment;