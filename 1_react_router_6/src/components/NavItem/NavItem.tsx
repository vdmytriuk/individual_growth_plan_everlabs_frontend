import {FC} from "react";
import {Link, useMatch} from "react-router-dom";

interface INavItemProps {
    label: string;
    path: string;
    pattern?: string;
}

const NavItem: FC<INavItemProps> = ({label, path, pattern = path}) => {
    const match = useMatch(pattern);

    return (
        <li style={{fontSize: !!match ? "30px" : "20px"}}>
            <Link to={path}>
                {label}
            </Link>
        </li>
    );
};

export default NavItem;