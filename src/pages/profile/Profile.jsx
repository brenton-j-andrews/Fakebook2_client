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
              <img className="profileCoverImage" src="/assets/images/cover_image.jpeg" alt="test" />
              <img className="profileUserImage" src="/assets/images/post7.jpeg" alt="test" />
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