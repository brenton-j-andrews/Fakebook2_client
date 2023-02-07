import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import { Search, Person, ChatBubbleOutline, Notifications } from "@mui/icons-material";
import "./navigation.css";


const Navigation = () => {

  const { user } = useContext(AuthContext);

  return (
    
    <div className="navbarContainer">

      <div className="navbarLeft">
        <Link 
          to={`/`} 
          style={{textDecoration:"none"}}
        >
          <span className="navbarLeftLogo"> FakeBook </span>
        </Link>
      </div>

      <div className="navbarCenter">
        <div className="navbarSearch">
          <Search className="searchLogo"/>
          <input className="searchbarInput" placeholder="Search for friends, posts or events." type="text" />
        </div>
      </div>

      <div className="navbarRight">

        <div className="navbarLinks">
          <span className="navbarLink"> Profile </span>
          <span className="navbarLink"> Timeline </span>
        </div>

        <div className="navbarNotificationIcons">

          <div className="notificationIconItem">
            <Person className="notificationIcon"/>
            <div className="notificationIconNumber">
                1
            </div>
          </div>

          <div className="notificationIconItem">
            <ChatBubbleOutline className="notificationIcon"/>
            <div className="notificationIconNumber">
                1
            </div>
          </div>

          <div className="notificationIconItem">
            <Notifications className="notificationIcon"/>
            <div className="notificationIconNumber">
                1
            </div>
          </div>
        </div>

        <Link to={`/profile/${user.username}`}>
          <img 
            className="navbarProfileImage" 
            src={ user?.profileImageUrl 
            ? ( user.profileImageUrl ) 
            : ("/assets/images/defaultProfileImage.png" )
            } 
            alt="" 
           />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;