import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../hooks/useCart";

const NavBar = () => {

    const [cart] = useCart();
    // console.log(cart);

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(result => {
                // console.log(result);
                Swal.fire({
                    icon: "success",
                    title: "LogOut Successfully!",
                });
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Something Wrong!",
                });
            })
    }

    return (
        <div>
            <div className="navbar fixed z-40 bg-opacity-20 text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500  rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/menu'>Our Menu</Link></li>
                            <li><Link to='/order'>Order</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Tastyc</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Our Menu</Link></li>
                        <li><Link to='/order'>Order</Link></li>
                        <li>
                            <Link to='/dashboard/cart'>
                                <button className="btn bg-transparent p-0 px-2 m-0">
                                    <AiOutlineShoppingCart className="text-white text-xl hover:text-black"></AiOutlineShoppingCart>
                                    <div className="badge badge-secondary h-5">+{cart.length}</div>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>

                            :
                            <Link to='/login'>
                                <button className="btn btn-primary">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;