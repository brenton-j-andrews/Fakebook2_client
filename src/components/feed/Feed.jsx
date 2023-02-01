import CreatePost from "../create_post/CreatePost";
import Post from "../post_display/Post";

import "./feed.css";

import { Posts } from "../../mock_data";

const Feed = () => {

    return (
        <div className="feed">
            <div className="feedWrapper">
                <CreatePost />
            
                {Posts.map((post, index) => {
                    return (
                        <Post key={index} post={post} /> 
                    )
                })}
            </div>
        </div>
    );
};

export default Feed;