import "./navigation.css";
import { Search, Person, ChatBubbleOutline, Notifications } from "@mui/icons-material";

const Navigation = () => {
    return (
        <div className="navbarContainer">

            <div className="navbarLeft">
                <span className="navbarLeftLogo"> FakeBook </span>
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

                
                <img className="navbarProfileImage" src="/assets/defaultProfileImage.png" alt="" />
            </div>
        </div>
    );
};

export default Navigation;