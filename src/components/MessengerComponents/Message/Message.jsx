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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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