import { RssFeed, ChatBubbleOutline, Groups, Bookmark, Event } from "@mui/icons-material";

import "./leftbar.css";

import { Users } from "../../mock_data";


const Leftbar = ({ profile, user }) => {


  const LeftBarFriendsList = () => {

    return (
      <>
        <hr className="leftSideBarHr" />

        <h4 className="leftSideBarFriendsBanner"> Friends ({ user?.friends?.length })</h4>

        <ul className="leftSideBarFriendsList">

            {Users.map((user, index) => {

                return (
                    <li className="leftSideBarFriendItem" key={ index } >
                        <img className="leftSideBarFriendImage" src="/assets/images/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> { user.username } </span>
                    </li>
                )
            })}

        </ul>

        <button className="leftSideBarListButton"> View All Friends </button>
      </>
    )
  }
    
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

  const ProfileLeftBar = () => {

      return (
        <>
          <div className="userInformationWrapper">
            <h4 className="userInformationTitle"> User Information </h4>

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
          </div>
        </>
      )
  }

  return (
    <div className="leftSideBar">
      <div className="leftSideBarWrapper">

        {profile ? <ProfileLeftBar /> : <HomeLeftBar />}

        <LeftBarFriendsList />

      </div>
    </div>
  );
}

export default Leftbar;