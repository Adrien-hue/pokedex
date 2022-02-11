import { Link as RouterLink, useResolvedPath, useMatch } from "react-router-dom";

import "./NavLink.sass";
  
const NavLink = ({ to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    let classes = "navLink";
    classes += (match) ? " navLink--active" : "";

    return (
        <RouterLink
            to={to}
            {...props}
            className={classes}
        />
    );
};
  
export default NavLink;