import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./createComment.css";

const CreateComment = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="createComment">

      <img 
        className="commentUserImage" 
        src= { user ? user?.profileImageUrl : "/assets/images/defaultProfileImage.png" }
        alt="" 
      />

      <div className="commentFormWrapper">
        <form className="commentForm">
          <textarea 
            placeholder="Leave a comment..."
            className="commentFormInput"
            cols="30" 
            rows="1" 
          />
          <button className="commentSubmitButton"> Comment </button>
        </form>
      </div>
    </div>
  )
} 

export default CreateComment;