// Used to format like display label found on post and comment display. 

const formatLikeString = (likeCount, isLiked, setDisplayModal) => {

  if (likeCount === 0) {
    return ("No likes.")
  }

  else if (likeCount === 1) {
    if (isLiked) {
      return "You like this."
    }
    return ( <span className="postLikeModalToggle" onClick={() => {setDisplayModal(true)}}>  1 Like </span> )
  }

  else if (likeCount === 2 && isLiked) {
    return (
      <> 
        You and <span className="postLikeModalToggle" onClick={() => {setDisplayModal(true)}}> 1 other </span> like this.
      </>
    )
    }

  else if (likeCount >= 2 && !isLiked) {
    return (
      <>
        <span className="postLikeModalToggle" onClick={() => {setDisplayModal(true)}}> {likeCount} people </span> like this.
      </> 
    )
  }

  else {
    return (
      <>
        You and <span className="postLikeModalToggle" onClick={() => {setDisplayModal(true)}}> {likeCount - 1} others </span> like this.
      </> 
    )
  }
}

export { formatLikeString };