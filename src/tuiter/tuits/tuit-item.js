import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
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
                        <div className="d-inline fw-bold">{tuit.userName} </div>
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