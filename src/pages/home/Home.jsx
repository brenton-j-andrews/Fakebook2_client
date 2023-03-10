import { useContext } from "react";
import { Breakpoint } from "react-socks";

import { AuthContext } from "../../context/AuthContext";

import Navigation from "../../components/navigation_bar/Navigation";
import FriendsList from "../../components/friends_list/FriendsList";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./home.css";

const Home = () => {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Navigation />

      <Breakpoint small down>
        <div className="homeWrapper">
          <Tabs justify defaultActiveKey="feed">
            <Tab eventKey="feed" title="Feed">
              <Feed />
            </Tab>

            <Tab eventKey="friends" title="Friends">
              This will be the friends section once I figure that shit out...
            </Tab>
          </Tabs>
        </div>

      </Breakpoint>

      <Breakpoint medium up>
        <div className="homeWrapper">
          <Leftbar user={user}/>
          <Feed />
          <Rightbar />
        </div>
      </Breakpoint>
    </>
  );
};

export default Home;