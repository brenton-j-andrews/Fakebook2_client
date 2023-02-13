import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

import { useLogout } from "../../hooks/useLogout";
import { useFriendRequest } from "../../hooks/useFriendRequest";
import { AuthContext } from "../../context/AuthContext";

import { RssFeed, ChatBubbleOutline, Groups, Bookmark, Event, Edit, PersonAdd, PersonRemove } from "@mui/icons-material";



import "./leftbar.css";


const Leftbar = ({ profile, user }) => {
  
  const { user : currentUser } = useContext(AuthContext);
  const [ friends, setFriends ] = useState([]);
  const [ isFriend, setIsFriend ] = useState(false);

  const { logout } = useLogout();
  const { sendFriendRequest, acceptFriendRequest } = useFriendRequest();

  const handleLogOutClick = () => {
    logout();
    window.location.href = "/";
  }

  // Fetch user friend data.
  useEffect(() => {
    const getUserFriends = async () => {
      try {
        const response = await axios.get(`/user/friends/${user._id}`);
        setFriends(response.data);
        setIsFriend(currentUser.friends.includes(user._id));
      }
      catch (error) {
      }
    }
    getUserFriends();
  }, [ user, currentUser.friends ]);


  // Display friendship status between current user and other user on their profile page.
  const FriendStatus = () => {

    if (isFriend) {
      return (
        <div className="userFriendStatus">
          <span> Friends </span> 
          <PersonRemove 
            // onClick={() => {unfriendUser(user, currentUser)}}
            id="unfriend_tooltip"
            data-tooltip-content={`Unfriend ${user.firstName}.`}
            className="friendActionIcon"
          />
          <Tooltip anchorId="unfriend_tooltip" />
        </div>
      )
    }

    // If friend request has been sent.
    else if (currentUser.sentFriendRequests.includes(user._id)) {
      return (
        <div className="userFriendStatus">
          <span> Friend Request Sent </span> 
        </div>     
      )
    }

    // If friend request has been received.
    else if (currentUser.receivedFriendRequests.includes(user._id)) {
      return (
        <div className="userFriendStatus">
          <span> Friend Request Received </span> 
          <PersonAdd 
            onClick={() => {acceptFriendRequest(user, currentUser)}}
            className="friendActionIcon"
            id="accept_friend_tooltip"
            data-tooltip-content={`Accept friend request from ${user.firstName}.`}
          />
          <Tooltip anchorId="accept_friend_tooltip" />
        </div>   
      )
    }

    // If not friends.
    else if (!isFriend && currentUser._id !== user._id) {
      return (
        <div className="userFriendStatus">
          <span> Not Friends </span> 
          <PersonAdd 
            onClick={() => {sendFriendRequest(user, currentUser)}}
            className="friendActionIcon"
            id="add_friend_tooltip"
            data-tooltip-content={`Send friend request to ${user.firstName}.`}
          />
          <Tooltip anchorId="add_friend_tooltip" />
        </div>
      )
    }
  }

  // Renders on any profile page, displaying 10 friends of user whos profile is shown.
  const FriendsList = () => {

    return (
      <>
        <hr className="leftSideBarHr" />

        <h4 className="leftSideBarFriendsBanner"> Friends ({ friends?.length })</h4>

        <ul className="leftSideBarFriendsList">

          {friends?.map((friend, index) => {

            return (
              <li className="leftSideBarFriendItem" key={ index }>

                <Link to={`/profile/${friend.username}`} >
                  <img 
                    className="leftSideBarFriendImage" 
                    src={ friend.profileImageUrl 
                    ? ( friend.profileImageUrl ) :
                    ("/assets/images/defaultProfileImage.png")} 
                    alt=""
                  />
                </Link>
                
                <span className="leftSideBarFriendName"> {friend.firstName} {friend.lastName} </span>
              </li>
            )
            
          })}

        </ul>

        <button className="leftSideBarListButton"> View All Friends </button>
      </>
    )
  }
    
  // Renders on the timeline page.
  const HomeLeftBar = () => {
      return (
          <>
              <ul className="leftSideBarList">

                  <li className="leftSideBarListItem">
                      <RssFeed />
                      <span className="leftSideBarListText"> Feed </span>
                  </li>

                  <li className="leftSideBarListItem">
                      <ChatBubbleOutline />
                      <span className="leftSideBarListText"> Messages </span>
                  </li>

                  <li className="leftSideBarListItem">
                      <Groups />
                      <span className="leftSideBarListText"> Groups </span>
                  </li>

                  <li className="leftSideBarListItem">
                      <Bookmark />
                      <span className="leftSideBarListText"> Bookmarked </span>
                  </li>

                  <li className="leftSideBarListItem">
                      <Event />
                      <span className="leftSideBarListText"> Events </span>
                  </li>
              </ul>

              <button className="leftSideBarListButton"> Show More </button>
          </>
      )

  }

  // Renders on any profile page.
  const ProfileLeftBar = () => {

      return (
        <>
          <div className="userInformationWrapper">

            <div className="userInformationBanner">
              <h4 className="userInformationTitle"> User Information </h4>

              {currentUser._id === user._id && 
                <>
                  <Edit 
                    className="edit_icon"
                    id="user_information_tooltip" 
                    data-tooltip-content="Update your information"
                  /> 
                  <Tooltip anchorId="user_information_tooltip" />
                </>
              }

            </div>

            <div className="userInformationItem">
              <span className="userInformationKey"> Location: </span>
              <span className="userInformationValue"> { user.userData?.location } </span>
            </div>

            <div className="userInformationItem">
              <span className="userInformationKey"> Hometown: </span>
              <span className="userInformationValue"> { user?.userData?.hometown }</span>
            </div>

            <div className="userInformationItem">
              <span className="userInformationKey"> Education: </span>
              <span className="userInformationValue"> { user?.userData?.education } </span>
            </div>

            <div className="userInformationItem">
              <span className="userInformationKey"> Occupation: </span>
              <span className="userInformationValue"> { user.userData?.occupation }</span>
            </div>

            <FriendStatus />
            
          </div>
        </>
      )
  }

  return (
    <div className="leftSideBar">
      <div className="leftSideBarWrapper">

        {profile ? <ProfileLeftBar /> : <HomeLeftBar />}

        <FriendsList />

        <hr className="leftSideBarHr" />

        <button className="logoutButton" onClick={handleLogOutClick}> Log Out </button>
      </div>
    </div>
  );
}

export default Leftbar;