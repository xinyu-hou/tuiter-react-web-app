import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
import HomePostList from "../home-post-list"
import "./index.css";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            {/*<HomePostList/>*/}
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;