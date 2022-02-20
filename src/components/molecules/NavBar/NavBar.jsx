import { NavLink } from "components/atoms";

import { DefaultModal } from "Modal";

import "./NavBar.sass";

const NavBar = () => {
    return <div className="navBar">
        <div className="link">
            <NavLink to="/">Home</NavLink>
            <NavLink to="type">Type</NavLink>
            <NavLink to="favorites">Favorites</NavLink>
        </div>

        <div className="action">
            <DefaultModal/>
        </div>
    </div>
}

export default NavBar;