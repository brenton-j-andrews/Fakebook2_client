import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

const Conversation = ({ conversation, isActiveCoversation, currentUser }) => {

  console.log(isActiveCoversation);
  const [ user, setUser ] = useState(null);

  // Effect: fetch user data of other participents of conversation.
  useEffect(() => {
    const friendId = conversation.members.find(( member ) => member !== currentUser._id );

    const fetchUserData = async () => {
      const response = await axios.get(`/user?userId=${friendId}`)
      setUser(response.data);
    } 

    fetchUserData();
  }, [ conversation, currentUser._id ]);

  return (
    <div className={ isActiveCoversation ? "activeConversation" : "conversation" }>
      <div className="conversationData">
        <img 
          className="conversationUserImage" 
          src= { user?.profileImageUrl ? user.profileImageUrl : "/assets/images/defaultProfileImage.png"}
          alt="" 
        /> 
        <span className="conversationUsername"> { user?.firstName } { user?.lastName }</span>
      </div>
      

      {
        isActiveCoversation && <div className="activeConversationMarker"></div>
      }

    </div>
  )
}

export default Conversation