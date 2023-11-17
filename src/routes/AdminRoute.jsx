import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    return
};

export default AdminRoute;