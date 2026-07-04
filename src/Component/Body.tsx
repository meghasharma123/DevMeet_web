import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

export default function Body() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}