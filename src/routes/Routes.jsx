import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/Menu/OurMenu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }

])

export default Routes;