// import "./index.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";

const EditProfileComponent = () => {
    const profileItem = useSelector((state) => state.profile[0]);
    let [profileComponent, setPorfileComponent] = useState('');
    const dispatch = useDispatch();
    const fullName = profileItem.firstName + " " + profileItem.lastName;
    return(
        <>
            {/*header*/}
            <div className="row">
                <Link to="/tuiter/profile" className="col-1 align-items-center link-dark">
                    <h4 className="bi bi-x-lg"></h4>
                </Link>
                <div className="col-11">
                    <h4 className="fw-bold mb-0 d-inline">Edit Profile</h4>
                    <div className="d-inline float-end position-relative wd-nudge-up me-4">
                        <button className="btn btn-dark rounded-pill border">
                            <Link to="/tuiter/editProfile" className="link-light text-decoration-none">
                                <span>Save</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/*banner and profile pic*/}
            <div>
                <div className="position-relative">
                    <img src="/images/banner.jpeg" alt="profile banner" width="100%" className="opacity-50"/>
                    <div className="position-absolute wd-nudge-center">
                        <button className="btn btn-secondary rounded-circle me-3">
                            <i className="bi bi-camera"></i>
                        </button>
                        <button className="btn btn-secondary rounded-circle">
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className="position-absolute translate-middle-y wd-nudge-bottom-left">
                        <img src="/images/profile.jpeg" alt="profile picture" width="100px" height="100px"
                             className="rounded-circle opacity-50
                                border border-white border-4"/>
                        <div className="position-absolute wd-nudge-center">
                            <button className="btn btn-secondary rounded-circle">
                                <i className="bi bi-camera text-info"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*edit profile info*/}
            <div className="position-relative wd-nudge-down">
                <form className="form-floating mb-4">
                    <input type="text" className="form-control" id="nameInput"
                           value={fullName}/>
                        <label htmlFor="nameInput">Name</label>
                </form>
                <form className="form-floating mb-4">
                    <input type="text" className="form-control" id="bioInput"
                           value={profileItem.bio}/>
                    <label htmlFor="bioInput">Bio</label>
                </form>
                <form className="form-floating mb-4">
                    <input type="text" className="form-control" id="locationInput"
                           value={profileItem.location}/>
                    <label htmlFor="locationInput">Location</label>
                </form>
                <form className="form-floating mb-4">
                    <input type="text" className="form-control" id="websiteInput"
                           value={profileItem.website}/>
                    <label htmlFor="websiteInput">Website</label>
                </form>
                <form className="form-floating mb-4">
                    <input type="date" className="form-control" id="dobInput"
                           value={profileItem.dateOfBirth}/>
                    <label htmlFor="dobInput">Date of Birth</label>
                </form>
                <div>
                    <span className="d-inline">Switch to professional</span>
                    <a className="bi bi-chevron-right d-inline float-end text-black"></a>
                </div>
            </div>
        </>
    );
};
export default EditProfileComponent;