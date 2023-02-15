const NavigationSidebar = () => {
    return(`
        <div class="list-group">
            <i class="fab fa-twitter list-group-item"></i>
            <a href="../home.html" class="list-group-item list-group-item-action">
                <div class="d-none d-xl-block">
                    <i class="fa fa-home"></i> Home
                </div>
                <div class="d-xl-none">
                    <i class="fa fa-home"></i>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action active">
                <div class="d-none d-xl-block">
                    <i class="fas fa-hashtag"></i> Explore
                </div>
                <div class="d-xl-none">
                    <i class="fas fa-hashtag"></i>
                </div>
            </a>
            <a href="../notifications.html" class="list-group-item list-group-item-action">
                <div class="d-none d-xl-block">
                    <i class="fas fa-bell"></i> Notifications
                </div>
                <div class="d-xl-none">
                    <i class="fas fa-bell"></i>
                </div>
            </a>
            <a href="../messages.html" class="list-group-item list-group-item-action">
                <div class="d-none d-xl-block">
                    <i class="fas fa-envelope"></i> Messages
                </div>
                <div class="d-xl-none">
                    <i class="fas fa-envelope"></i>
                </div>
            </a>
            <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                <div class="d-none d-xl-block">
                    <i class="fas fa-bookmark"></i> Bookmarks
                </div>
                <div class="d-xl-none">
                    <i class="fas fa-bookmark"></i>
                </div>
            </a>
            <a href="../lists.html" class="list-group-item list-group-item-action">
                <div class="d-none d-xl-block">
                    <i class="fas fa-list-ul"></i> Lists
                </div>
                <div class="d-xl-none">
                    <i class="fas fa-list-ul"></i>
                </div>
            </a>
            <a href="../profile.html" class="list-group-item list-group-item-action">
                <div class="d-none d-xl-block">
                    <i class="fas fa-user"></i> Profile
                </div>
                <div class="d-xl-none">
                    <i class="fas fa-user"></i>
                </div>
            </a>
            <a href="../more.html" class="list-group-item list-group-item-action">
                <div class="d-none d-xl-block">
                    <i class="fas fa-ellipsis-h"></i> More
                </div>
                <div class="d-xl-none">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </a>
        </div>
        <button type="button" class="btn btn-primary wd-override-btn mt-2">Tuit</button>
    `);
}
export default NavigationSidebar;

// NavigationSidebar Testing
// $('#wd-navibar').append(`${NavigationSidebar()}`);