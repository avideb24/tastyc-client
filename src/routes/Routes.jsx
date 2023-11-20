import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/Menu/OurMenu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Dashboard from "./Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/AddItem/AddItems";
import ManageItems from "../pages/Dashboard/ManageItem/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdatedItems/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";


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
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // users routes
            {
                path: '/dashboard/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },

            // Admin Routes
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addItem',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: '/dashboard/manageItems/',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: '/dashboard/updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            }
        ]
    }

])

export default Routes;