import { NavLink } from "components/atoms";

import "./NavBar.sass";

const NavBar = () => {
    return <div className="navBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="type">Type</NavLink>
    </div>
}

export default NavBar;