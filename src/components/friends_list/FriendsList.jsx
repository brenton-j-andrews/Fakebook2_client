// Renders on any profile page, displaying 10 friends of user whos profile is shown.
import { Link } from "react-router-dom";
import "./friends_list.css";

const FriendsList = ({friends}) => {

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

  return (
    // <MobileFriendsList />
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

export default FriendsList;