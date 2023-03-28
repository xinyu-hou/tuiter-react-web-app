import React from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const profileItem = useSelector((state) => state.profile[0]);
    const profileUserName = profileItem.firstName + " " + profileItem.lastName;
    const updateToDateUsername = (profileItem.handle === tuit.handle) ? profileUserName : tuit.username;
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <div className="border border-muted">
            <div className="mt-2 mb-3 ms-2 me-2 row">
                <div className="col-1">
                    <img src={`/images/${tuit.image}`} className="wd-avatar"/>
                </div>
                <div className="col-11">
                    <div className="ms-2 me-4">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <div className="d-inline fw-bold">{updateToDateUsername} </div>
                        <div className="d-inline text-primary"><i className="bi bi-patch-check-fill"></i></div>
                        <div className="d-inline"> {tuit.handle} &middot; {tuit.time}</div>
                        <div>{tuit.tuit}</div>
                        <TuitStats
                            key={tuit._id}
                            tuit={tuit}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;