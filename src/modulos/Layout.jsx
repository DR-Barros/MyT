import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function Layout ({carro}) {
    return(
        <>
            <Menu carro={carro} />
            <Outlet />
        </>
    )
}
export default Layout