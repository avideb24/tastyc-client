import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {

    const {user} = useAuth();

    console.log(user);

    return (
        <div className="p-10">
            <h2 className="text-3xl">
                <span>Welcome Back</span>
                {
                    user ? user?.displayName : 'Unknown'
                }
            </h2>
        </div>
    );
};

export default AdminHome;