const PostSummaryItem = (post) => {
    return(`
        <div class="list-group-item d-flex justify-content-between align-items-center">
            <div class="ms-2 me-auto">
                <div class="text-muted">${post.topic}</div>
                <div class="d-inline fw-bold">${post.userName}</div>
                <div class="d-inline"><i class="fas fa-check-circle"></i></div>
                <div class="d-inline text-muted"> - ${post.time}</div>
                <div class="fw-bold">
                    ${post.title}
                </div>
            </div>
            <img src=${post.image} class="wd-rounded-large-logo">
        </div>
    `);
}
export default PostSummaryItem;