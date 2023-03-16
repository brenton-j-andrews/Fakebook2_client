import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import { useFriendRequest } from "../../hooks/useFriendRequest";

import "./notifications_dropdown.css";

const FriendRequestDropdown = ({ setDisplayNotifications }) => {

  const { acceptFriendRequest } = useFriendRequest();

  const { user : currentUser } = useContext(AuthContext);
  const [ friendRequests, setFriendRequests ] = useState([]);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      const response = await axios.get(`/user/friend_requests/${currentUser._id}`);
      setFriendRequests(response.data);
    }

    fetchFriendRequests();
  }, [currentUser._id]); 

  return (
    <div className="notificationsWrapper">
      <div className="pointer"></div>

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
                  className="friendRquestActionButton confirm"
                  onClick={() => {acceptFriendRequest(user, currentUser)}}
                > Confirm </button>
                <button className="friendRquestActionButton decline"> Decline </button>
              </div>
            </li>
          )
        })}
      </ul>

      <button className="friendRquestActionButton confirm" onClick={() => {setDisplayNotifications(false)}}> Close </button>
    </div>
  )
}

export default FriendRequestDropdown;