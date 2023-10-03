import {FC} from "react";
import {Outlet} from "react-router-dom";

import AppNav from "@layouts/AppNav/AppNav";

const AppLayout: FC = () => {
    return (
        <>
            <AppNav />

            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default AppLayout;