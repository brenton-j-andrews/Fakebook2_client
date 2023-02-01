import Navigation from "../../components/navigation_bar/Navigation";

import "./home.css";

const Home = () => {
    return (
        <>
            <Navigation />

            <div className="homeWrapper">
                This will be everything on the home page except for the navigation bar, which is above!
            </div>
        </>
    );
};

export default Home;