import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return(
        <div className="row mt-2">
            <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <Routes>
                    <Route path=""    element={<ExploreComponent/>}/>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                <Routes>
                    <Route path=""    element={<WhoToFollowList/>}/>
                    <Route path="home"    element={<WhoToFollowList/>}/>
                    <Route path="explore" element={<WhoToFollowList/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default Tuiter;