import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
import "./index.css";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;