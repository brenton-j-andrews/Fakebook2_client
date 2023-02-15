import { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

import Navigation from "../../components/navigation_bar/Navigation";
import Message from "../../components/MessengerComponents/Message/Message";
import Conversation from "../../components/MessengerComponents/Conversation/Conversation";

import "./messenger.css";

const Messenger = () => {

  const { user: currentUser } = useContext(AuthContext);

  const [ conversations, setConversations ] = useState([]);
  const [ activeConversation, setActiveConversation ] = useState(null);
  const [ activeMessages, setActiveMessages ] = useState([]);
  const [ newMessageContent, setNewMessageContent ] = useState("");
  
  const scrollRef = useRef();

  // Effect: load all current user messages on the left panel. 
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get(`/conversation/${currentUser._id}`);
        setConversations(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchConversations();
  }, [ currentUser._id ]);

  // Effect: on change of active conversation, fetch all messages associated with selected conversation and save to be rendered.
  useEffect(() => {
    const fetchConversationMessages = async () => {
      const response = await axios.get(`/message/${activeConversation?._id}`);
      setActiveMessages(response.data);
    }

    fetchConversationMessages();
  }, [ activeConversation ])

  // Effect: scroll to bottom of active conversation upon opening it or sending a new message.
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth"});
  }, []);

  // Handle new message.
  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      conversationId : activeConversation._id,
      senderId : currentUser._id,
      messageContent : newMessageContent
    }

    try {
      const response = await axios.post("/message", newMessage);
      setNewMessageContent("");
      setActiveMessages((prevState) => [...prevState, response.data]);
    }

    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navigation />

      <div className="messenger">
        <div className="messengerWrapper">
          <div className="conversationMenu">

            {conversations.map((conversation, index) => {
              return (
                <div key={index} onClick={() => {setActiveConversation(conversation)}}>
                  <Conversation 
                    isActiveCoversation={activeConversation?._id === conversation._id}
                    currentUser={currentUser}
                    conversation={conversation} 
                  />
                </div>
              )
            })}
          </div>

          <div className="activeChatMenu">
            <div className="activeChatMenuWrapper">

              {
                activeConversation ? 
                <>
                  {activeMessages.map((message, index) => {
                    return (
                      <Message 
                        isLoggedInUser={message.sender === currentUser._id}
                        message={message} 
                        key={index}
                      />
                    )
                  })}
                  
                  <form className="chatInputWrapper" onSubmit={handleMessageSubmit}>

                    <textarea 
                      className="activeChatInput" cols="30" rows="10" 
                      placeholder="Write your message here." 
                      value={newMessageContent}
                      onChange={(e) => {setNewMessageContent(e.target.value)}}
                    />

                    <button className="chatSubmitButton" type="submit"> 
                      Send 
                    </button>

                  </form>
                </>
                : 
                <div className="msg"> Click on a conversation to open it! </div>
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger;