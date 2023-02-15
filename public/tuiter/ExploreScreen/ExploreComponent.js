import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="input-group mb-2">
                <span class="input-group-text bg-white"
                      style="border-right-color:transparent;
                      border-top-left-radius: 20px;
                       border-bottom-left-radius: 20px;">
                    <i class="fas fa-search text-secondary"></i>
                </span>
                <input type="text"
                       class="form-control"
                       style="border-left-color:transparent;
                       border-top-right-radius: 20px;
                       border-bottom-right-radius: 20px;"
                       placeholder="Search Tuiter"
                       aria-label="Search-Tuiter">
                <a href="explore-settings.html">
                    <i class="fa fa-cog fa-2x text-primary ms-3 mt-1"></i>
                </a>
            </div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="News.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="wd-img-container mt-2 mb-2">
                <img src="../images/starship.webp" style="width:100%;">
                <div class="wd-bottom-left"><h2 class="text-muted fw-bold">SpaceX's Starship</h2></div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
