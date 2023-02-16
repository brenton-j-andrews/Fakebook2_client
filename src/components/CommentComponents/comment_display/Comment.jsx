import "./comment.css";

const Comment = () => {
  return (
    <div className="commentWrapper">
      <img 
        className="commentUserImage" 
        src="/assets/images/defaultProfileImage.png" 
        alt="" 
      />

      <div className="commentRight">
        <div className="commentRightUpper">
          <span className="commenterFullName"> Ginger Andrews </span>
          <div className="commentCenter">
            This is a funny comment!
          </div>
        </div>

        <div className="commentRightLower">
          <span className="commentTimeStamp"> 1 hour ago </span>
          <button className="commentLikeButton"> Like </button>
          <button className="commentLikeButton"> Reply </button>
        </div>
      </div>
    </div>
  )
}

export default Comment;