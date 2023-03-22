import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import DatePicker from "./date-picker"
import {Link} from "react-router-dom";
import {saveProfile} from "../profile/profile-reducer";

const EditProfileComponent = () => {
    let profileItem = useSelector((state) => state.profile[0]);
    let [firstName, setFirstName] = useState(profileItem.firstName);
    let [lastName, setLastName] = useState(profileItem.lastName);
    let [fullName, setFullName] = useState(firstName + " " + lastName)
    let [bio, setBio] = useState(profileItem.bio);
    let [location, setLocation] = useState(profileItem.location);
    let [website, setWebsite] = useState(profileItem.website);
    let [dob, setDob] = useState(profileItem.dateOfBirth);
    const dispatch = useDispatch();
    const saveProfileClickHandler = () => {
        // Retrieve first and last names from full name
        const fullNameArray = fullName.split(/(\s+)/);
        firstName = (fullNameArray[0]) ? fullNameArray[0] : "";
        lastName = (fullNameArray[2]) ? fullNameArray[2] : "";
        profileItem = {
            ...profileItem,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dob
        }
        dispatch(saveProfile(profileItem));
    }
    const fullNameChangeHandler = (event) => {
        const updatedFullName = event.target.value;
        setFullName(updatedFullName);
    }
    const bioChangeHandler = (event) => {
        const updatedBio = event.target.value;
        setBio(updatedBio);
    }
    const locationChangeHandler = (event) => {
        const updatedLocation = event.target.value;
        setLocation(updatedLocation);
    }
    const websiteChangeHandler = (event) => {
        const updatedWebsite = event.target.value;
        setWebsite(updatedWebsite);
    }
    const dobChangeHandler = (updatedDob) => {
        setDob(updatedDob);
    }
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
                        <button className="btn btn-dark rounded-pill border" onClick={saveProfileClickHandler}>
                            <Link to="../profile" className="link-light text-decoration-none">
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
                           value={fullName} onChange={fullNameChangeHandler}/>
                        <label htmlFor="nameInput">Name</label>
                </form>
                <form className="form-floating mb-4">
                    <input type="text" className="form-control" id="bioInput"
                           value={bio} onChange={bioChangeHandler}/>
                    <label htmlFor="bioInput">Bio</label>
                </form>
                <form className="form-floating mb-4">
                    <input type="text" className="form-control" id="locationInput"
                           value={location} onChange={locationChangeHandler}/>
                    <label htmlFor="locationInput">Location</label>
                </form>
                <form className="form-floating mb-4">
                    <input type="text" className="form-control" id="websiteInput"
                           value={website} onChange={websiteChangeHandler}/>
                    <label htmlFor="websiteInput">Website</label>
                </form>
                <div className="mb-4">
                    <DatePicker defaultDate={dob} onChange={dobChangeHandler}/>
                    {dob}
                </div>
                <div>
                    <span className="d-inline">Switch to professional</span>
                    <a className="bi bi-chevron-right d-inline float-end text-black"></a>
                </div>
            </div>
        </>
    );
};
export default EditProfileComponent;