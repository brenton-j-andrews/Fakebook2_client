import { Cake } from "@mui/icons-material";
import "./rightbar.css";

import { OnlineUsers } from "../../mock_data";

const Rightbar = () => {
    return (
        <div className="rightSideBar">
            <div className="rightSideBarWrapper">

                <div className="birthdayWrapper">
                    <Cake />
                    <span> <strong> Bruce Andrews </strong> and 2 other friends have birthdays today. </span>
                </div>

                <hr className="rightSideBarHr" />

                
                <div className="advertisementWrapper">
                    <div className="advertisementTop">
                        <img className="advertisementIconImage" src="/assets/images/ad_icon.png" alt="" />

                        <div className="advertisementTopRight">
                            <span className="postUsername"> Nuka Cola </span>
                            <span className="postTimeStamp"> Sponsered </span>
                        </div>
                    </div>

                    <img className="advertisementImage" src="/assets/images/ad_image.jpeg" alt="" />
                </div>

                <hr className="rightSideBarHr" />

                <div className="onlineFriendsWrapper">

                    <h4> Friends Online: </h4>

                    <ul className="onlineFriendsList">

                        {OnlineUsers.map((user, index) => {
                            return (
                                <li className="onlineFriend" key={index}>
                                    <img className="rightSideBarFriendImage" src={ "/assets/images/defaultProfileImage.png" } alt=""/>
                                    <div className="isActive"></div>
                                    <span className="rightSideBarFriendName"> { user.username } </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;