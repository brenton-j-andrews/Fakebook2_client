import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breakpoint } from "react-socks";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

import Navigation from "../../components/navigation_bar/Navigation";
import FriendsList from "../../components/friends_list/FriendsList";
import UserInformation from "../../components/user_information/UserInformation";
import Feed from "../../components/feed/Feed";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./profile.css";

const Profile = () => {

  const { user : currentUser } = useContext(AuthContext);

  const [ user, setUser ] = useState({});
  // const [ friends, setFriends ] = useState([]);
  // const [ isFriend, setIsFriend ] = useState(false);
  const username = useParams().username;

  // Effect: Fetch profile user data.
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/user?username=${username}`);
      setUser(response.data);
    }

    fetchUser();
  }, [ username ])

  // Effect: fetch user friend data.
  // useEffect(() => {
  //   const getUserFriends = async () => {
  //     try {
  //       const response = await axios.get(`/user/friends/${user._id}`);
  //       setFriends(response.data);
  //       setIsFriend(currentUser.friends.includes(user._id));
  //     }

  //     catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getUserFriends();
  // }, [ user, currentUser.friends ]);

  const DesktopProfile = () => {
    return (
      <div className="profileWrapper">
        <div className="profileTop">
          <div className="profileCover">
            <img 
              className="profileCoverImage" 
              src={ user?.coverImageUrl 
                ? ( user.coverImageUrl ) 
                : ("/assets/images/defaultCoverImage.jpeg" )
                } 
              alt="" 
            />
            
            <img 
            className="profileUserImage" 
              src={ user?.profileImageUrl 
              ? ( user.profileImageUrl ) 
              : ("/assets/images/defaultProfileImage.png" )
              } 
              alt="" 
            />

          </div>
          <span className="profileUsername"> {`${user.firstName} ${user.lastName}`}</span>
        </div>

        <div className="profileBottom">
          <div className="profileBottomLeft">
            <UserInformation 
              user={user}
              currentUser={currentUser}
            />
            <FriendsList userId={user._id}/>
          </div>


          <div className="profileBottomRight">
            <Feed username={username}/>
          </div>
        </div>
      </div>
    )
  }

  const MobileProfile = () => {
    return (
      <div className="profileWrapper">

        <div className="mobileProfileTop">
          <div className="mobileProfileCover">
            <img 
              className="mobileProfileCoverImage" 
              src={ user?.coverImageUrl 
                ? ( user.coverImageUrl ) 
                : ("/assets/images/defaultCoverImage.jpeg" )
                } 
              alt="" 
            />
            
            <img 
            className="mobileProfileUserImage" 
              src={ user?.profileImageUrl 
              ? ( user.profileImageUrl ) 
              : ("/assets/images/defaultProfileImage.png" )
              } 
              alt="" 
            />
          </div>
        </div>

        <div className="mobileProfileUser"> 
          <h1 className="profileUsername"> {`${user.firstName} ${user.lastName}`}</h1>
        </div>

        <Tabs
          justify
          defaultActiveKey="posts"
          className="mt-2 mb-3"
        >
          <Tab eventKey="posts" title="Posts">
            <Feed username={username}/>
          </Tab>

          <Tab eventKey="friends" title="Friends">
            <FriendsList userId={user._id} />
          </Tab>

          <Tab eventKey="user_info" title="Info">
            <UserInformation 
              user={user}
              currentUser={currentUser}
            />
          </Tab>

          <Tab eventKey="user_photos" title="Photos">
            My Photos
          </Tab>
        </Tabs>
      </div>
    )
  }

  return (
    <>
      <Navigation />
      <Breakpoint small down style={{width : 100+"%"}}>
        <MobileProfile />
      </Breakpoint>

      <Breakpoint medium up style={{width : 100+"%"}}>
        <DesktopProfile />
      </Breakpoint>
    </>
  );
};

export default Profile;