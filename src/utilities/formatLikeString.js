// Used to format like display label found on post and comment display. 

const formatLikeString = (likeCount, isLiked) => {

  if (likeCount === 0) {
    return "No likes."
  }

  else if (likeCount === 1) {
    if (isLiked) {
      return "You like this."
    }
    return "1 Like."
  }

  else if (likeCount === 2 && isLiked) {
    return "You and 1 other like this."
  }

  else if (likeCount >= 2 && !isLiked) {
    return `${likeCount} people like this.`
  }

  else {
    return `You and ${likeCount - 1} others like this.`
  }
}

export { formatLikeString };