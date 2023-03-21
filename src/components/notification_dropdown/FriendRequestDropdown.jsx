// This component renders current user friend requests as a dropdown on desktop and as a modal on mobile.
// User actions are handled via the useFriendRequest hook.

import { Breakpoint } from "react-socks";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import { Modal } from "react-bootstrap";

import "react-socks"

import { useFriendRequest } from "../../hooks/useFriendRequest";

import "./notifications_dropdown.css";

const FriendRequestDropdown = ({ setDisplayNotifications }) => {

  const isMobile = window.innerWidth <= 480;

  const { acceptFriendRequest } = useFriendRequest();

  const { user : currentUser } = useContext(AuthContext);
  const [ friendRequests, setFriendRequests ] = useState([]);

  // Effect: fetch friend request data upon render.
  useEffect(() => {
    const fetchFriendRequests = async () => {
      const response = await axios.get(`/user/friend_requests/${currentUser._id}`);
      setFriendRequests(response.data);
    }

    fetchFriendRequests();
  }, [currentUser._id]); 

  const FriendRequestContents = () => {
    return (
      <>
      { friendRequests.length > 0 ?
        <ul className="friendRequestList">
        <span className="notificationsBanner"> Friend Requests: </span>
          {friendRequests.map((user) => {

            let mutualFriendsSet = user.friends.filter(x => currentUser.friends.includes(x));

            return (
              <li className="friendRequestItem" key={user._id}>

                <div className="friendRequestUserData">
    
                  <Link to={`/profile/${user.username}`} >
                    <img 
                      className="desktopFriendImage" 
                      src={user.profileImageUrl 
                      ? ( user.profileImageUrl ) :
                      ("/assets/images/defaultProfileImage.png")} 
                      alt=""
                    />
                  </Link>

                  <div className="friendRequestUserDataRight">
                    <span className="friendRequestName">
                      {user.firstName} {user.lastName}
                    </span>

                    {mutualFriendsSet.length === 1 ? 
                      <span className="friendRequestMutualCount"> 1 mutual friend </span> 
                      : 
                      <span className="friendRequestMutualCount"> { mutualFriendsSet.length} mutual friends </span>
                    }
                  </div>
                </div>
              
                <div className="friendRequestActions">
                  <button 
                    className="friendRequestActionButton confirm"
                    onClick={() => {acceptFriendRequest(user, currentUser)}}
                  > Confirm </button>
                  <button className="friendRequestActionButton decline"> Decline </button>
                </div>
              </li>
            )
          })}
        </ul>

        :
        <>
        <span> You don't have any friend requests. </span>
        </>
      }
      </>
    )
  }


  const DesktopDropdown = () => {
    return (
      <div className="notificationsWrapper">
        <div className="pointer"></div>
        <FriendRequestContents />
        <button 
          className="friendRequestActionButton confirm" 
          onClick={() => {setDisplayNotifications(false)}}
        > Close </button>
      </div>
    )
  }

  const MobileModal = () => {
    
    return (
      <Modal show={true} centered>
        <Modal.Body>
          <FriendRequestContents />
        </Modal.Body>

        <Modal.Footer>
          <button onClick={() => {setDisplayNotifications(false)}}> Close </button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <>
    <Breakpoint small down>
      <MobileModal />
    </Breakpoint>

    <Breakpoint medium up>
      <DesktopDropdown />
    </Breakpoint>
    </>
  )

  // if (isMobile) {
  //   return (
  //     <MobileModal />
  //   )
  // }

  // else {
  //   return (
  //     <DesktopDropdown />
  //   )
  // }
}

export default FriendRequestDropdown;
