// Renders on any profile page, displaying 10 friends of user whos profile is shown.
import { useState, useEffect } from "react";
import axios from "axios";
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";
import "./friends_list.css";

const FriendsList = ({ userId }) => {

  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    const getUserFriends = async () => {
      try {
        const response = await axios.get(`/user/friends/${userId}`);
        setFriends(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    getUserFriends();
  }, [userId]);

  const MobileFriendsList = () => {
    return (
        <ul className="mobileFriendsList">

          {friends?.map((friend, index) => {
            return (
              <li className="mobileFriendItem" key={index}>
  
                <Link to={`/profile/${friend.username}`} >
                  <img 
                    className="mobileFriendImage" 
                    src={ friend.profileImageUrl 
                    ? ( friend.profileImageUrl ) :
                    ("/assets/images/defaultProfileImage.png")} 
                    alt=""
                  />
                </Link>
                
                <span className="mobileFriendName"><strong> {friend.firstName} {friend.lastName} </strong></span>
              </li>
            )
          })}
        </ul>

    )
  }

  const DesktopFriendsList = () => {
    return (
      <>
        <hr className="leftSideBarHr" />
        
        <div className="desktopFriendsListWrapper">
          <h4 className="desktopFiendsBanner"> Friends ({ friends?.length })</h4>
          <ul className="desktopFriendsList">

            {friends?.map((friend, index) => {
              return (
                <li className="desktopFriendItem" key={ index }>

                  <Link to={`/profile/${friend.username}`} >
                    <img 
                      className="desktopFriendImage" 
                      src={ friend.profileImageUrl 
                      ? ( friend.profileImageUrl ) :
                      ("/assets/images/defaultProfileImage.png")} 
                      alt=""
                    />
                  </Link>
                  
                  <span className="desktopFriendName"> {friend.firstName} {friend.lastName} </span>
                </li>
              )   
            })}
          </ul>
          <button className="leftSideBarListButton"> View All Friends </button>
        </div>
      </>
    )
  }

  return ( 
    <>
      <Breakpoint small down>
        <MobileFriendsList /> 
      </Breakpoint>

      <Breakpoint medium up>
        <DesktopFriendsList /> 
      </Breakpoint>
    </>
  )
}

export default FriendsList;