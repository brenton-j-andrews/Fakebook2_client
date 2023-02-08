import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import Navigation from "../../components/navigation_bar/Navigation";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import "./home.css";

const Home = () => {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Navigation />

      <div className="homeWrapper">
          <Leftbar user={user}/>
          <Feed />
          <Rightbar />
      </div>
    </>
  );
};

export default Home;