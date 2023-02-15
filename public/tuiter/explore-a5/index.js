/* global $ */
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js"
import WhoToFollowList from "../WhoToFollowList/index.js";

function exploreEntireComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                ${ExploreComponent()}
            </div>
            <div class="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                ${WhoToFollowList()}
            </div>
        </div>
   `);
}

$(exploreEntireComponent);