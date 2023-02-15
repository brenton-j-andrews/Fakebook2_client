import "./message.css";

const Message = ({ isLoggedInUser }) => {

  const FriendMessage = () => {
    return (
      <div className="messageWrapper">
        <img 
          className="messageUserImage" 
          src="/assets/images/defaultProfileImage.png" 
          alt="" 
        /> 

        <div className="messageInformation">
          <div className="messageTextContent" > 
            Howdy there partner! Howdy there partner! Howdy there partner! Howdy there partner! 
          </div>
          <span className="messageTimestamp"> 1 Hour ago </span>
        </div>
      </div>
    )
  }

  const LoggedInUserMessage = () => {

    return (
      <div className="messageWrapper own">
    
        <div className="messageInformation own">
          <div className="messageTextContent own" > 
            Howdy there partner! Howdy there partner! Howdy there partner! Howdy there partner! 
          </div>

          <span className="messageTimestamp"> 1 Hour ago </span>
        </div>
      </div>
    )
  }

  return (
    <>
    {
      isLoggedInUser 
      ? <LoggedInUserMessage />
      : <FriendMessage />
    }
    </>
  )
}

export default Message;