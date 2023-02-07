import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import Navigation from "../../components/navigation_bar/Navigation";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";

import "./profile.css";

const Profile = () => {

  const { user } = useContext(AuthContext);
 
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
          <Leftbar 
            profile 
            user={user}
          />

          <div className="profileBottomRight">
            <Feed isProfile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;