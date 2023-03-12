import { useRef, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../../../context/AuthContext";

import { AddAPhoto, Label, LocationOn } from "@mui/icons-material";
import "./createpost.css";

const CreatePost = () => {

  const { user } = useContext(AuthContext);
  const postContent = useRef();

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      postContent: postContent.current.value
    }

    try {
      await axios.post("/post", newPost);
      window.location.reload();
    }

    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="feedShare">
      <form className="feedShareWrapper" onSubmit={handlePostSubmit}>

        <div className="shareTop">

          <img 
            className="shareInputUserImage" 
            src={ user?.profileImageUrl 
            ? ( user.profileImageUrl ) 
            : ("/assets/images/defaultProfileImage.png" )
            } 
            alt="" 
          />
          
          <input 
            className="shareInput" 
            type="text" 
            placeholder={`What's on your mind ${user.firstName}?`} 
            ref={postContent}
          />
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

          <button className="shareButton" type="submit"> Share </button>
        </div>

      </form>
    </div>
  );
};

export default CreatePost;