import React from "react";
import homePostsArray from "./home-posts.json";
import HomePostItem from "./home-post-item";

const HomePostList = () => {
    return(
        <ul className="list-group mb-2 border border-muted">
            {
            homePostsArray.map(post =>
                <HomePostItem
                    key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default HomePostList;