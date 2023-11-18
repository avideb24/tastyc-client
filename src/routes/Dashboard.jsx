import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaCartPlus, FaCreditCard, FaEvernote, FaHome, FaReceipt, FaUserFriends } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {


    const [isAdmin] = useAdmin();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex ">
                <div className="w-64 min-h-screen bg-orange-500 text-white text-xl p-4">
                    <ul className="space-y-8 ">
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to='/' className="flex items-center gap-2"><FaHome></FaHome> Admin Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/addItem' className="flex items-center gap-2"><FaCalendar></FaCalendar> Add Items</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manageItems' className="flex items-center gap-2"><FaCreditCard></FaCreditCard> Manage Items</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allUsers' className="flex items-center gap-2"><FaUserFriends></FaUserFriends> All Users</NavLink>
                                    </li>                                 
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to='/' className="flex items-center gap-2"><FaHome></FaHome> User Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='' className="flex items-center gap-2"><FaCalendar></FaCalendar> Reservation</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='' className="flex items-center gap-2"><FaCreditCard></FaCreditCard> Payment History</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/cart' className="flex items-center gap-2"><FaCartPlus></FaCartPlus> My Cart</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='' className="flex items-center gap-2"><FaAd></FaAd> Add A Review</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='' className="flex items-center gap-2"><FaBook></FaBook> My Bookings</NavLink>
                                    </li>
                                </>
                        }

                        <div className="divider"></div>

                        <li>
                            <NavLink to='/' className="flex items-center gap-2"><FaHome></FaHome> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/menu' className="flex items-center gap-2"><FaReceipt></FaReceipt> Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className="flex items-center gap-2"><FaEvernote></FaEvernote> Contact</NavLink>
                        </li>

                    </ul>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;