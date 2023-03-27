import { useState, useEffect, useRef, useContext } from "react";
import { Breakpoint } from "react-socks";
import axios from "axios";

import Navigation from "../../components/navigation_bar/Navigation";
import Message from "../../components/MessengerComponents/Message/Message";
import Conversation from "../../components/MessengerComponents/Conversation/Conversation";

import { Send, ChevronLeft } from "@mui/icons-material";
import "./messenger.css";

import { AuthContext } from "../../context/AuthContext";

const Messenger = () => {

  const { user: currentUser } = useContext(AuthContext);

  const [ conversations, setConversations ] = useState([]);
  const [ activeConversation, setActiveConversation ] = useState(null);
  const [ messages, setMessages ] = useState([]);
  
  const messageRef = useRef(null);
  const scrollRef = useRef(null);

  // Effect: load all current user conversations for selection.
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
      setMessages(response.data);
    }

    fetchConversationMessages();
  }, [ activeConversation ])

  // Effect: scroll to bottom of active conversation upon opening it or sending a new message.
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth"});
  }, [ messages ]);

  // Handle new message.
  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      conversationId : activeConversation._id,
      senderId : currentUser._id,
      messageContent : messageRef.current.value
    }

    try {
      const response = await axios.post("/message", newMessage);
      setMessages((prevState) => [...prevState, response.data]);
    }

    catch (error) {
      console.log(error);
    }
  }

  const DesktopMessenger = () => {
    return (
      <div className="messenger">
        <div className="messengerWrapper">

          <div className="conversationMenu">
            {conversations.map((conversation, index) => {
              return (
                <div 
                  className="conversationWrapper"
                  key={index} 
                  onClick={() => {setActiveConversation(conversation)}}
                >
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
                  {messages.map((message, index) => {
                    return (
                        <Message  
                          key={index}
                          isLoggedInUser={message.sender === currentUser._id}
                          message={message} 
                        />
                    )
                  })}

                  <form 
                    className="chatInputWrapper" 
                    ref={scrollRef} 
                    onSubmit={handleMessageSubmit}
                  >
                    <textarea 
                      type="text"
                      className="activeChatInput" cols="30" rows="10" 
                      placeholder="Write your message here." 
                      ref={messageRef}
                    />

                    <button className="chatSubmitButton" type="submit"> 
                      Send 
                    </button>
                  </form>
                </>
                : 
                <span className="noActiveMessagePrompt"> Click on a conversation to open it. </span>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  const MobileMessenger = () => {  
    return (
      <div className="mobileMessenger"> 

        {activeConversation == null &&
          <span className="noActiveMessagePrompt"> Select a conversation to open. </span>
        }

        {activeConversation === null && conversations.map((conversation, index) => {
          return (
            <div 
              className="conversationWrapper"
              key={index} 
              onClick={() => {setActiveConversation(conversation)}}
            >
              <Conversation 
                isActiveCoversation={activeConversation?._id === conversation._id}
                currentUser={currentUser}
                conversation={conversation} 
              />
            </div>
          )
        })} 



        {activeConversation && 
        <>
          <div className="mobileConversationSticky"> 
            <button 
                className="mobileStickyButton"
                onClick={() => {setActiveConversation(null)}}
              > <ChevronLeft /> </button>
              <span> Conversation with Nigel </span>
          </div>
          <div className="activeChatMenuWrapper">
            {messages.map((message) => {
              return (
                  <Message 
                    key={message._id}
                    isLoggedInUser={message.sender === currentUser._id}
                    message={message} 
                  />
              )
            })}

            <form 
              className="chatInputWrapper" 
              ref={scrollRef} 
              onSubmit={handleMessageSubmit}
            >
              <button 
                className="mobileChatButton"
                onClick={() => {setActiveConversation(null)}}
              > <ChevronLeft /> </button>
              <textarea 
                className="activeChatInput" cols="30" rows="10" 
                placeholder="Write your message here." 
                ref={messageRef}
              />
              <button className="mobileChatButton" type="submit"> <Send /> </button>
            </form>
          </div>
        </>
        }
      </div>
    )
  }

  return (
    <>
      <Navigation />
      <Breakpoint small down style={{width : 100+"%"}}>
        <MobileMessenger />
      </Breakpoint>

      <Breakpoint medium up style={{width : 100+"%"}}>
        <DesktopMessenger />
      </Breakpoint>
    </>
  )
}

export default Messenger;