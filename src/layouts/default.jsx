import { Outlet } from "react-router-dom";

//components
import Navbar from "../components/header"
import Footer from "../components/footer";

export default function DefaultLayout()
{
    return(
        <div className="">
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}