import axios from "axios";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utilities/formatDate";
import { Tooltip } from "react-tooltip";

import { Delete } from "@mui/icons-material";
import "./comment.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Comment = ({ comment }) => {

  const { user } = useContext(AuthContext);

  const deleteComment = async () => {
    try {
      await axios.delete(`/comment/${comment._id}`, { 
        data : { userId : comment.commenterId }
      });
      window.location.reload();
    }

    catch (error) {
      console.log(error);
    }
  }

  return (
      <div className="commentWrapper">
        <Link to={`/profile/${comment.commenterUsername}`}>
          <img 
            className="commentUserImage" 
            src= { comment.commenterProfileImageUrl 
              ? comment.commenterProfileImageUrl 
              : "/assets/images/defaultProfileImage.png" 
            } 
            alt="" 
          />
        </Link>
        
        <div className="commentRight">
          <div className="commentRightUpper">
            <span className="commenterFullName"> { comment.commenterFullName } </span>
            <div className="commentCenter">
              { comment.commentContent }
            </div>
          </div>

          <div className="commentRightLower">
            <span className="commentTimeStamp"> { formatDate(comment.createdAt) } </span>
            <button className="commentLikeButton"> Like </button>
            <button className="commentLikeButton"> Reply </button>

            { user._id === comment.commenterId && 
            <>
              <Delete 
                fontSize="12px"
                className="commentDelete"
                onClick={deleteComment}
                id="delete_comment"
                data-tooltip-content="Delete this comment."
              />
              <Tooltip anchorId="delete_comment" />
            </>

            }
          </div>
        </div>
      </div>

  )
}

export default Comment;