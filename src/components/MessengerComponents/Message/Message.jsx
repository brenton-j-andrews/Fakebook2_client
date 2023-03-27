import { formatDate } from "../../../utilities/formatDate";
import "./message.css";

const Message = ({ isLoggedInUser, message }) => {

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
            { message.messageContent }
          </div>
          <span className="messageTimestamp"> { formatDate(message.createdAt)} </span>
        </div>
      </div>
    )
  }

  const CurrentUserMessage = () => {

    return (
      <div className="messageWrapper own">
    
        <div className="messageInformation own">
          <div className="messageTextContent own" > 
          { message.messageContent }
          </div>

          <span className="messageTimestamp"> { formatDate(message.createdAt)}  </span>
        </div>
      </div>
    )
  }

  return (
    <>
    {
      isLoggedInUser 
      ? <CurrentUserMessage />
      : <FriendMessage />
    }
    </>
  )
}

export default Message;