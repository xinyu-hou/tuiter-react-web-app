import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const toggleLike = () => {
        const updatedLiked = !tuit.liked;
        const updatedLikes = updatedLiked ? tuit.likes + 1 : tuit.likes - 1;
        dispatch(updateTuitThunk({
            ...tuit,
            likes: updatedLikes,
            liked: updatedLiked,
        }))
    };
    const toggleDislike = () => {
        const updatedDisliked = !tuit.disliked;
        const updatedDislikes = updatedDisliked ? tuit.dislikes + 1 : tuit.dislikes - 1;
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: updatedDislikes,
            disliked: updatedDisliked,
        }))
    };
    return (
        <div className="row text-muted mt-3">
            <div className="col-2">
                <a className="wd-stable-link">
                    <i className="bi bi-chat"></i>
                    <div className="d-inline"> {tuit.replies}</div>
                </a>
            </div>
            <div className="col-2">
                <a className="wd-stable-link">
                    <i className="bi bi-arrow-repeat"></i>
                    <div className="d-inline"> {tuit.retuits}</div>
                </a>
            </div>
            <div className="col-2" onClick={toggleLike}>
                <a className="wd-stable-link">
                    <i className={`${tuit.liked === true ? 'text-danger bi bi-heart-fill':'bi bi-heart'}`}></i>
                    <div className="d-inline"> {tuit.likes}</div>
                </a>
            </div>
            <div className="col-2" onClick={toggleDislike}>
                <a className="wd-stable-link">
                    <i className={`${tuit.disliked === true ? 'text-danger bi bi-hand-thumbs-down-fill':'bi bi-hand-thumbs-down'}`}></i>
                    <div className="d-inline"> {tuit.dislikes}</div>
                </a>
            </div>
            <div className="col-2">
                <a className="wd-stable-link">
                    <i className="bi bi-share"></i>
                </a>
            </div>
            <div className="col-2"/>
        </div>
    );
};
export default TuitStats;