import Navigation from "../../components/navigation_bar/Navigation";
import Message from "../../components/MessengerComponents/Message/Message";

import "./messenger.css";

const Messenger = () => {

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
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Messenger;