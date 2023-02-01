import { RssFeed, ChatBubbleOutline, Groups, Bookmark, Event } from "@mui/icons-material";

import "./leftbar.css";

import { Users } from "../../mock_data";

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

                <h4 className="leftSideBarFriendsBanner"> Friends ({Users.length})</h4>

                <ul className="leftSideBarFriendsList">

                    {Users.map((user, index) => {
                        return (
                            <li className="leftSideBarFriendItem" key={index} >
                                <img className="leftSideBarFriendImage" src={ user.profilePicture } alt=""/>
                                <span className="leftSideBarFriendName"> { user.username } </span>
                            </li>
                        )
                    })}

                </ul>

                <button className="leftSideBarListButton"> View All Friends </button>
            </div>
        </div>
    );
}

export default Leftbar;