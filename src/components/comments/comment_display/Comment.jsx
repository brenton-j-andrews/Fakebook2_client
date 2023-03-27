// This component displays comments left on posts and data associated with the model.

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utilities/formatDate";
import { Tooltip } from "react-tooltip";
import axios from "axios";

import UsersModal from "../../modals/users_modal/UsersModal";
import CreateComment from "../create_comment/CreateComment";

import { Delete, ThumbUpOffAlt } from "@mui/icons-material";
import "./comment.css";

import { AuthContext } from "../../../context/AuthContext";

const Comment = ({ comment }) => {

  const { user } = useContext(AuthContext);

  const [ commentLikes, setCommentLikes ] = useState(comment.likes.length);
  const [ displayModal, setDisplayModal ] = useState(false); 
  const [ commentIsLiked, setCommentIsLiked ] = useState(false);
  const [ replyMode, setReplyMode ] = useState(false);

  // Effect: Check comment like status by signed in user.
  useEffect(() => {
    setCommentIsLiked(comment.likes.includes(user._id));
  }, [ user, comment.likes ]);

  const handleCommentLike = async () => {
    try {
      axios.put(`/comment/${comment._id}/like`, { userId : user._id });
    }

    catch (error) {
      console.log(error);
    }

    if (commentIsLiked) {
      setCommentLikes(commentLikes - 1);
      setCommentIsLiked(false);
    }
    
    else {
      setCommentLikes(commentLikes + 1);
      setCommentIsLiked(true);
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

            <span className="commentLikeCount" onClick={() => {setDisplayModal(true)}}> 
              <ThumbUpOffAlt 
                className="commentLikeIcon"
                color="primary" 
                fontSize="small"
              />
              { commentLikes } 
            </span>

            {displayModal && 
              <UsersModal 
                isPost={false}
                likedItem={comment}
                displayModal={displayModal}
                setDisplayModal={setDisplayModal}
              />
            }
          
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