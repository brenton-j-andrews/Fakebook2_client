import { MoreVert } from "@mui/icons-material";
import "./post.css";

import { Users } from "../../mock_data";

const Post = ({ post }) => {

    const user = Users.filter((user) => user.id === post.userId);

    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopRight">
                        <img className="shareInputUserImage" src="/assets/defaultProfileImage.png" alt="" />

                        <div className="postTopRightData">
                            <span className="postUsername">  { user[0].username } </span>
                            <span className="postTimeStamp"> { post.date }</span>
                        </div>
                    </div>

                    <div className="postTopLeft">
                        <MoreVert className="menuIcon"/>
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText"> { post.description } </span>
                    <img src= { post.photoSrc } alt="" className="postImage" />
                </div>

                <div className="postBottom">
                    <div className="postBottomUpper">
                        <span className="postInteractionCounter"> { post.like } </span>
                        <span className="postInteractionCounter"> { post.comment } Comments </span>
                    </div>

                    <hr className="postBottomHr" />

                    <div className="postBottomLower">
                        <button className="likeButton"> Like </button>
                        <button className="likeButton"> Comment </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Post;