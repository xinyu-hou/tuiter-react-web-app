import NavItem from "./NavItem.js";
import navs from "./navs.js";
const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <i class="fab fa-twitter list-group-item"></i>
            ${
                navs.map(nav => {
                    return(NavItem(nav, active));
                }).join('')
            }
        </div>
        <button type="button" class="btn btn-primary wd-override-btn mt-2">Tuit</button>
    `);
}
export default NavigationSidebar;

// NavigationSidebar Testing
// $('#wd-navibar').append(`${NavigationSidebar()}`);