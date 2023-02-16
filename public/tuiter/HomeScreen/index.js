/* global $ */
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

function homeComponent() {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar('Home')}
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                TODO Home
            </div>
            <div class="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                ${PostSummaryList()}
            </div>
        </div>
   `);
}

$(homeComponent);