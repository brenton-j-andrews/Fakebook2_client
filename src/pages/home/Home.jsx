import Navigation from "../../components/navigation_bar/Navigation";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import "./home.css";

const Home = () => {
    return (
        <>
            <Navigation />

            <div className="homeWrapper">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>
        </>
    );
};

export default Home;