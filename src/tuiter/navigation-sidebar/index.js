import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-house-fill"></i> Home
                </div>
                <div className="d-xl-none">
                    <i className="bi bi-house-fill"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-hash"></i> Explore
                </div>
                <div className="d-xl-none">
                    <i className="bi bi-hash"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-bell-fill"></i> Notifications
                </div>
                <div className="d-xl-none">
                    <i className="bi bi-bell-fill"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-envelope-fill"></i> Messages
                </div>
                <div className="d-xl-none">
                    <i className="bi bi-envelope-fill"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-bookmark-fill"></i> Bookmarks
                </div>
                <div className="d-xl-none">
                    <i className="bi bi-bookmark-fill"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-list-ul"></i> Lists
                </div>
                <div className="d-xl-none">
                    <i className="bi bi-list-ul"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-person-fill"></i> Profile
                </div>
                <div className="d-xl-none">
                    <i className="bi bi-person-fill"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-three-dots"></i> More
                </div>
                <div className="d-xl-none">
                    <i className="bi bi-three-dots"></i>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;