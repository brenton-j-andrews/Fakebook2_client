import { useEffect, useRef } from "react";

import Navigation from "../../components/navigation_bar/Navigation";
import Message from "../../components/MessengerComponents/Message/Message";

import "./messenger.css";

const Messenger = () => {

  const scrollRef = useRef();

  // Handle new message.
  const handleMessageSubmit = () => {
    console.log("new message incoming!!!");
  }

  // Effect: scroll to bottom of conversation upon opening it or sending a new message.
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth"});
  }, [])

  return (
    <>
      <Navigation />

      <div className="messenger">

        <div className="messengerWrapper">

          <div className="conversationMenu">
            convo menu
          </div>

          <div className="activeChatMenu">
            <div className="activeChatMenuWrapper">

              <Message />
              <Message isLoggedInUser={true}/>
              <Message />
              <Message isLoggedInUser={true}/>
              <Message />
              <Message isLoggedInUser={true}/>
              <Message />
              <Message isLoggedInUser={true}/>
              

              <div className="chatInputWrapper">
                <textarea 
                  className="activeChatInput" cols="30" rows="10" 
                  placeholder="Write your message here." 
                />
                <button className="chatSubmitButton"> Send </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Messenger;