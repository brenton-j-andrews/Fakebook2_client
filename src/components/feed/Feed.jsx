import { AddAPhoto, Label, LocationOn } from "@mui/icons-material";
import "./feed.css";

const Feed = () => {
    return (
        <div className="feed">

            <div className="feedWrapper">

                <div className="feedShare">
                    <div className="feedShareWrapper">

                        <div className="shareTop">
                            <img className="shareInputUserImage" src="/assets/defaultProfileImage.png" alt=""/>
                            <input className="shareInput" type="text" placeholder="What's on your mind?"/>
                        </div>

                        <hr className="shareHr" />

                        <div className="shareBottom">
                            <div className="shareOption">
                                <AddAPhoto />
                                <span className="shareOptionText"> Add a Photo </span>
                            </div>

                            <div className="shareOption">
                                <Label />
                                <span className="shareOptionText"> Tag Friends </span>
                            </div>

                            <div className="shareOption">
                                <LocationOn />
                                <span className="shareOptionText"> Add a Location </span>
                            </div>

                            <button className="shareButton"> Share </button>
                        </div>
                    </div>
                </div>

                <div className="post">
                    <div className="postWrapper">

                        <div className="postTop">
                            <img className="shareInputUserImage" src="/assets/defaultProfileImage.png" alt="" />
                            <div className="postTopRight">
                                <span className="postUsername">  Brenton Andrews </span>
                                <span className="postTimeStamp"> 5 minutes ago </span>
                            </div>
                        </div>

                        <div className="postCenter">
                            <span className="postText"> Hello everyone! It is a beautiful day here at the Maroon Bells! </span>
                            <img src="/assets/images/post1.jpeg" alt="" className="postImage" />
                        </div>

                        <div className="postBottom">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;