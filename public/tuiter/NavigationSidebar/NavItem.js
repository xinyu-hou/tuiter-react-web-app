const NavItem = (nav, active) => {
    if (active === nav.navName) {
        return(`
            <a href=${nav.ahrefLink} class="list-group-item list-group-item-action active">
                <div class="d-none d-xl-block">
                    <i class="${nav.iconClass}"></i> ${nav.navName}
                </div>
                <div class="d-xl-none">
                    <i class="${nav.iconClass}"></i>
                </div>
            </a>
        `)
    } else {
        return(`
            <a href=${nav.ahrefLink} class="list-group-item list-group-item-action">
                <div class="d-none d-xl-block">
                    <i class="${nav.iconClass}"></i> ${nav.navName}
                </div>
                <div class="d-xl-none">
                    <i class="${nav.iconClass}"></i>
                </div>
            </a>
        `)
    }
}
export default NavItem;