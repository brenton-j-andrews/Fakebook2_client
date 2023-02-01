import "./createpost.css";
import { AddAPhoto, Label, LocationOn } from "@mui/icons-material";

const CreatePost = () => {
    return (
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
    );
};

export default CreatePost;