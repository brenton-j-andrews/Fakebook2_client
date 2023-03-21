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
import Accordian from "react-bootstrap/Accordion";
import "./home.css";
import Birthday from "../../components/birthday/Birthday";

const Home = () => {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Navigation />

      <Breakpoint small down style={{width : 100+"%"}}>
        <div className="homeWrapper">
          <Birthday />
          <Tabs justify defaultActiveKey="feed">
            <Tab eventKey="feed" title="Feed">
              <Feed />
            </Tab>

            <Tab eventKey="friends" title="Friends">
              <Accordian>
                <Accordian.Item eventKey="0">
                  <Accordian.Header> Friends Online: </Accordian.Header>
                  <Accordian.Body> This will be friends online some day... </Accordian.Body>
                </Accordian.Item>

                <Accordian.Item eventKey="1">
                  <Accordian.Header> Friends ({user.friends.length}) </Accordian.Header>
                  <Accordian.Body> 
                    <FriendsList userId={user._id} />
                  </Accordian.Body>
                </Accordian.Item>
              </Accordian>
            </Tab>
          </Tabs>
        </div>

      </Breakpoint>

      <Breakpoint medium up style={{width : 100+"%"}}>
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