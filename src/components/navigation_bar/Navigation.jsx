import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Breakpoint } from "react-socks";

import { AuthContext } from "../../context/AuthContext";

import FriendRequestDropdown from "../notification_dropdown/FriendRequestDropdown";

import { Search, Person, ChatBubbleOutline, Notifications, HomeTwoTone } from "@mui/icons-material";
import "./navigation.css";


const Navigation = () => {

  const { user } = useContext(AuthContext);

  const [ displayNotifications, setDisplayNotifications ] = useState(false);

  const MobileNavBar = () => {
    return (
      <>
        <div className="mobileNavBarUpper">
          <div className="mobileNavbarSearch">
            <Search className="searchLogo"/>
            <input className="mobileSearchbarInput" placeholder="Search for friends, posts or events." type="text" />
          </div>
        </div>

        <div className="mobileNavBarLower">

          <Link to="/"> 
            <HomeTwoTone className="mobileNotificationIcon"/>
          </Link>

          <div className="notificationIconItem">
            <Person 
              className="mobileNotificationIcon" 
              onClick={() => {setDisplayNotifications(true)}}
            />
            <div className="notificationIconNumber">
              { user.receivedFriendRequests.length }
            </div>
          </div>

          {displayNotifications && 
            <FriendRequestDropdown 
              setDisplayNotifications={setDisplayNotifications}
            /> 
          }
  
          <Link to="/messenger">
            <div className="notificationIconItem">
              <ChatBubbleOutline className="mobileNotificationIcon"/>
              <div className="notificationIconNumber">
                1
              </div>
            </div>
          </Link>

          <div className="notificationIconItem">
            <Notifications className="mobileNotificationIcon"/>
            <div className="notificationIconNumber">
              1
            </div>
          </div>
        

          <Link to={`/profile/${user?.username}`}>
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
      </>
    )
  }

  const DesktopNavBar = () => {
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
            <span className="navbarLink"> <a className="navbarLinkAnchor" href={`/profile/${user?.username}`}> Profile </a></span>
            <span className="navbarLink"> <a className="navbarLinkAnchor" href="/"> Timeline </a> </span>
          </div>

          <div className="navbarNotificationIcons">

            <div className="notificationIconItem">
              <Person className="notificationIcon" onClick={() => {setDisplayNotifications(true)}}/>
              <div className="notificationIconNumber">
                  { user.receivedFriendRequests.length }
              </div>
            </div>

            { displayNotifications && 
              <FriendRequestDropdown 
                setDisplayNotifications={setDisplayNotifications}
              /> 
            }

            <Link to="/messenger">
              <div className="notificationIconItem">
                <ChatBubbleOutline className="notificationIcon"/>
                <div className="notificationIconNumber">
                    1
                </div>
              </div>
            </Link>
            

            <div className="notificationIconItem">
              <Notifications className="notificationIcon"/>
              <div className="notificationIconNumber">
                  1
              </div>
            </div>
          </div>

          <Link to={`/profile/${user?.username}`}>
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
    )
  }

  return (
    <>
      <Breakpoint className="navBreakpointSmall" small down>
        <MobileNavBar />
      </Breakpoint>

      <Breakpoint medium up style={{width : 100+"%"}}>
        <DesktopNavBar />
      </Breakpoint>
    </>
  );
};

export default Navigation;