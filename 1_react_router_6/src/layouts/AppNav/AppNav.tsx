import {FC} from "react";

import NavItem from "@components/NavItem";

import {APP_NAV_ITEMS} from "@layouts/AppNav/_data/appNavItems";

const AppNav: FC = () => {
    return (
        <nav>
            <ul>
                {APP_NAV_ITEMS.map(navItem => (
                    <NavItem key={navItem.label} {...navItem}/>
                ))}
            </ul>
        </nav>
    );
};

export default AppNav;