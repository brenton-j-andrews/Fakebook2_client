import { RssFeed, ChatBubbleOutline, Groups, Bookmark, Event } from "@mui/icons-material";

import "./leftbar.css";

function Leftbar() {
    return (
        <div className="leftSideBar">
            <div className="leftSideBarWrapper">

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

                <hr className="leftSideBarHr" />

                <h4 className="leftSideBarFriendsBanner"> Friends (12) </h4>

                <ul className="leftSideBarFriendsList">

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Bruce Andrews </span>
                    </li>

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Ginger Andrews </span>
                    </li>
                    
                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Coconut Andrews </span>
                    </li>
                    
                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Moose Andrews </span>
                    </li>

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Coconut Andrews </span>
                    </li>

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Coconut Andrews </span>
                    </li>

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Coconut Andrews </span>
                    </li>

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Coconut Andrews </span>
                    </li>

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Coconut Andrews </span>
                    </li>

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Coconut Andrews </span>
                    </li>

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Coconut Andrews </span>
                    </li>

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Coconut Andrews </span>
                    </li>

                    <li className="leftSideBarFriendItem">
                        <img className="leftSideBarFriendImage" src="/assets/defaultProfileImage.png" alt=""/>
                        <span className="leftSideBarFriendName"> Coconut Andrews </span>
                    </li>

                </ul>

                <button className="leftSideBarListButton"> View All Friends </button>
            </div>
        </div>
    );
}

export default Leftbar;