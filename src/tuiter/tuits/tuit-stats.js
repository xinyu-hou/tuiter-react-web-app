import React from "react";
import {useDispatch} from "react-redux";
import {likeToggle} from "./tuits-reducer";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const toggleLike = () => {
        dispatch(likeToggle(tuit))
    };
    return (
        <div className="row text-muted mt-3">
            <div className="col-3">
                <a className="wd-stable-link">
                    <i className="bi bi-chat"></i>
                    <div className="d-inline"> {tuit.replies}</div>
                </a>
            </div>
            <div className="col-3">
                <a className="wd-stable-link">
                    <i className="bi bi-arrow-repeat"></i>
                    <div className="d-inline"> {tuit.retuits}</div>
                </a>
            </div>
            <div className="col-3" onClick={toggleLike}>
                <a className="wd-stable-link">
                    <i className={`${tuit.liked === true ? 'text-danger bi bi-heart-fill':'bi bi-heart'}`}></i>
                    <div className="d-inline"> {tuit.likes}</div>
                </a>
            </div>
            <div className="col-3">
                <a className="wd-stable-link">
                    <i className="bi bi-share"></i>
                </a>
            </div>
        </div>
    );
};
export default TuitStats;