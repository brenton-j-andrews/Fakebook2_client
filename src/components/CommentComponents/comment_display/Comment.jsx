import axios from "axios";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utilities/formatDate";
import { Tooltip } from "react-tooltip";

import CreateComment from "../create_comment/CreateComment";

import { Delete, ThumbUpOffAlt } from "@mui/icons-material";
import "./comment.css";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Comment = ({ comment }) => {

  const { user } = useContext(AuthContext);

  const [ commentIsLiked, setCommentIsLiked ] = useState(false);
  const [ replyMode, setReplyMode ] = useState(false);

  // Effect: Check comment like status by signed in user.
  useEffect(() => {
    setCommentIsLiked(comment.commentLikes.includes(user._id));
  }, [ user, comment.commentLikes ]);

  const handleCommentLike = async () => {
    try {
      axios.put(`/comment/${comment._id}/like`, { userId : user._id });
    }

    catch (error) {
      console.log(error);
    }
  }

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

            <button className="commentLikeButton" onClick={handleCommentLike}> 
              { commentIsLiked ? "Unlike" : "Like" } 
            </button>

            <ThumbUpOffAlt 
              className="commentLikeIcon"
              color="primary" 
              fontSize="small"
            />
            <span className="commentLikeCount"> { comment.commentLikes.length } </span>

            <button className="commentLikeButton" onClick={() => {setReplyMode(!replyMode)}}> 
              { replyMode ? "Cancel" : "Reply" }
            </button>
 
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

          { replyMode &&
            <div className="commentReplyForm">
              <CreateComment 
                commentId={comment._id}
              />
             </div>
          }

        </div>
      </div>

  )
}

export default Comment;