const PostItem = (post) => {
    if (post.title) {
        return(`
            <div class="ms-2 mt-2">
                <div class="row">
                    <div class="col-1">
                        <img src=${post.avatarIcon} class="wd-avatar">
                    </div>
                    <div class="col-11">
                        <div class="me-4">
                            <div class="d-inline fw-bold text-white">${post.userName}</div>
                            <div class="d-inline"><i class="fas fa-check-circle text-white"></i></div>
                            <div class="d-inline">@${post.handle} &middot; ${post.time}</div>
                            <div class="d-inline float-end text-muted"><a href="#" class="wd-stable-link fw-bold">...</a></div>
                            <div class="text-white">${post.brief}</div>
                            <!--card component-->
                            <div class="card mt-2 mb-2 border border-light bg-transparent rounded-4" style="width: 100%;">
                                <div class="border-bottom border-light">
                                    <img class="card-img-top rounded-4" src=${post.image}>
                                </div>
                                <div class="card-body">
                                    <div class="card-title text-white">${post.title}</div>
                                    <div class="card-text">
                                        <div>${post.message}</div>
                                        <div><i class="fas fa-link"></i> ${post.footnote}</div>
                                    </div>
                                </div>
                            </div>
                            <!--bottom part-->
                            <div class="row text-muted">
                                <div class="col-3">
                                    <a href="#" class="wd-stable-link">
                                        <i class="far fa-comment me-2"></i>
                                        <div class="d-inline">${post.numComments}</div>
                                    </a>
                                </div>
                                <div class="col-3">
                                    <a href="#" class="wd-stable-link">
                                        <i class="fas fa-retweet me-2"></i>
                                        <div class="d-inline">${post.numRetuits}</div>
                                    </a>
                                </div>
                                <div class="col-3">
                                    <a href="#" class="wd-stable-link">
                                        <i class="fas fa-heart me-2"></i>
                                        <div class="d-inline">${post.numLikes}</div>
                                    </a>
                                </div>
                                <div class="col-3">
                                   <a href="#" class="wd-stable-link">
                                        <i class="fas fa-upload"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>           
                </div>
                <hr>
            </div>
        `);
    } else {
        return(`
            <div class="ms-2 mt-2">
                <div class="row">
                    <div class="col-1">
                        <img src=${post.avatarIcon} class="wd-avatar">
                    </div>
                    <div class="col-11">
                        <div class="me-4">
                            <div class="d-inline fw-bold text-white">${post.userName}</div>
                            <div class="d-inline"><i class="fas fa-check-circle text-white"></i></div>
                            <div class="d-inline">@${post.handle} &middot; ${post.time}</div>
                            <div class="d-inline float-end text-muted"><a href="#" class="wd-stable-link fw-bold">...</a></div>
                            <div class="text-white">${post.brief}</div>
                            <!--card component-->
                            <div class="card mt-2 mb-2 border border-light bg-transparent rounded-4" style="width: 100%;">
                                <img class="card-img-top rounded-4" src=${post.image}>
                            </div>
                            <!--bottom part-->
                            <div class="row text-muted">
                                <div class="col-3">
                                    <a href="#" class="wd-stable-link">
                                        <i class="far fa-comment me-2"></i>
                                        <div class="d-inline">${post.numComments}</div>
                                    </a>
                                </div>
                                <div class="col-3">
                                    <a href="#" class="wd-stable-link">
                                        <i class="fas fa-retweet me-2"></i>
                                        <div class="d-inline">${post.numRetuits}</div>
                                    </a>
                                </div>
                                <div class="col-3">
                                    <a href="#" class="wd-stable-link">
                                        <i class="fas fa-heart me-2"></i>
                                        <div class="d-inline">${post.numLikes}</div>
                                    </a>
                                </div>
                                <div class="col-3">
                                   <a href="#" class="wd-stable-link">
                                        <i class="fas fa-upload"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>           
                </div>
                <hr>
            </div>
        `);
    }
}
export default PostItem;