import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

const Root = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;