const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item d-flex justify-content-between align-items-center">
            <img src=${who.avatarIcon} class="rounded-circle" height="40px" width="40px">
            <div class="ms-2 me-auto">
                <div class="d-inline fw-bold">${who.userName}</div>
                <div class="d-inline"><i class="fas fa-check-circle"></i></div>
                <div>@${who.handle}</div>
            </div>
            <button type="button" class="btn btn-primary bg-primary rounded-pill">Follow</button>
        </div>
    `);
}
export default WhoToFollowListItem;