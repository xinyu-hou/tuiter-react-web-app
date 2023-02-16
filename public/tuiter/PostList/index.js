import PostItem from "./PostItem.js";
import posts from "./home-posts.js";
const PostList = () => {
    return (`
        <ul class="list-group mb-2">
            ${
                posts.map(post => {
                    return(PostItem(post));
                }).join('')
            }
        </ul>
    `);
}
export default PostList;