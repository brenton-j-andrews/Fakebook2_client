import "./navigation.css";

const Navigation = () => {
    return (
        <div className="navbarContainer">

            <div className="navbarLeft">
                <span className="navbarLeftLogo"> FakeBook </span>
            </div>

            <div className="navbarCenter">
                <span> This will be the search bar! </span>
            </div>

            <div className="navbarRight">
                <span> This will be other stuff.... </span>
            </div>
        </div>
    );
};

export default Navigation;