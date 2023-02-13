import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navigation from "../../components/navigation_bar/Navigation";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


import "./profile.css";

const Profile = () => {


  const { user: currentUser } = useContext(AuthContext);

  console.log(currentUser);

  const [ user, setUser ] = useState({});
  const username = useParams().username;

  // Fetch profile user data.
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/user?username=${username}`);
      setUser(response.data);
    }
    fetchUser();
  }, [ username ])



  return (
    <>
      <Navigation />

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

          <Leftbar profile user={user} />

          <div className="profileBottomRight">
            <Feed username={username}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;