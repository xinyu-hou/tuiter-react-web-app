import "./index.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profileItem = useSelector((state) => state.profile[0]);
    return(
        <>
            {/*header*/}
            <div className="row">
                <Link to="/tuiter" className="col-1 d-inline-flex align-items-center link-dark">
                    <h4 className="bi bi-arrow-left"></h4>
                </Link>
                <div className="col-11">
                    <h4 className="fw-bold mb-0">{profileItem.firstName} {profileItem.lastName}</h4>
                    <div className="text-muted">1,234 Tuits</div>
                </div>
            </div>
            {/*banner, profile pic, and edit profile button*/}
            <div>
                <img src="/images/banner.jpeg" alt="profile banner" width="100%"/>
                <img src="/images/profile.jpeg" alt="profile picture" width="100px" height="100px"
                     className="rounded-circle position-relative translate-middle-y wd-nudge-right
                                border border-white border-4"/>
                <button className="btn btn-light rounded-pill border mt-2 float-end">
                    <Link to="/tuiter/edit-profile" className="link-dark text-decoration-none">
                        <span>Edit profile</span>
                    </Link>
                </button>
            </div>
            {/*profile info*/}
            <div className="position-relative wd-nudge-right wd-nudge-bottom">
                <div className="fw-bold">{profileItem.firstName} {profileItem.lastName}</div>
                <div className="text-muted mb-2">{profileItem.handle}</div>
                <div>{profileItem.bio}</div>
                <div className="text-muted mt-2 mb-2">
                    <i className="bi bi-geo-alt d-inline "></i>
                    <div className="d-inline ms-1 me-4">{profileItem.location}</div>
                    <i className="bi bi-balloon d-inline"></i>
                    <div className="d-inline ms-1 me-4">Born {profileItem.dateOfBirth}</div>
                    <i className="bi bi-calendar3 d-inline"></i>
                    <div className="d-inline ms-1 me-4">Joined {profileItem.dateJoined}</div>
                </div>
                <div>
                    <div className="me-4 d-inline">
                        <span className="fw-bold">{profileItem.followingCount}</span>
                        <span className="text-muted"> Following</span>
                    </div>
                    <div className="d-inline">
                        <span className="fw-bold">{profileItem.followersCount}</span>
                        <span className="text-muted"> Followers</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;