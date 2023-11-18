import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {

    const [isAdmin, isAdminLoading] = useAdmin();

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    // console.log(location);

    if (loading || isAdminLoading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;