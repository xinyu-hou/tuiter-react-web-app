import React from "react";

const HomePostItem = ({post}) => {
    let showThread;
    let titleAndMessage;
    let retuited;
    if (post.showThisThread) {
        showThread = <a href="" className="mt-2 text-decoration-none">Show this thread</a>
    }
    if (post.title) {
        titleAndMessage =
            <div className="card-body">
                <div className="card-title">{post.title}</div>
                <div className="card-text">
                    <div>{post.message}</div>
                    <div><i className="bi bi-link-45deg"></i> {post.footnote}</div>
                </div>
            </div>
    }
    if (post.retuited) {
        retuited =
            <small className="fw-bold text-secondary ms-20">
                <i className="bi bi-arrow-repeat"></i> {post.retuited} Retuited
            </small>
    }
    return (
        <div className="border-bottom border-muted">
            <div className="mt-3 mb-3 ms-2 me-2 row">
                {retuited}
                <div className="col-1">
                    <img src={`/images/${post.avatarIcon}`} className="wd-avatar"/>
                </div>
                <div className="col-11">
                    <div className="me-4">
                        <div className="d-inline fw-bold">{post.userName} </div>
                        <div className="d-inline text-primary"><i className="bi bi-check-circle-fill"></i></div>
                        <div className="d-inline"> @{post.handle} &middot; {post.time}</div>
                        <div className="d-inline float-end text-muted">
                            <a href="" className="wd-stable-link fw-bold">...</a>
                        </div>
                        <div>{post.brief} <a href={post.href} className="text-decoration-none">{post.hrefName}</a></div>
                        <div className="card mt-2 mb-2 border border-muted bg-transparent rounded-4">
                            <div className="border-bottom border-light">
                                <img className="card-img-top rounded-4" src={`/images/${post.image}`}/>
                            </div>
                            {titleAndMessage}
                        </div>
                        <div className="row text-muted">
                            <div className="col-3">
                                <a href="#" className="wd-stable-link">
                                    <i className="bi bi-chat"></i>
                                    <div className="d-inline"> {post.numComments}</div>
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="#" className="wd-stable-link">
                                    <i className="bi bi-arrow-repeat"></i>
                                    <div className="d-inline"> {post.numRetuits}</div>
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="#" className="wd-stable-link">
                                    <i className="bi bi-heart"></i>
                                    <div className="d-inline"> {post.numLikes}</div>
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="#" className="wd-stable-link">
                                    <i className="bi bi-upload"></i>
                                </a>
                            </div>
                            {showThread}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePostItem;