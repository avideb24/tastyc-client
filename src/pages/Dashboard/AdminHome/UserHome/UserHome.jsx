import useAuth from "../../../../hooks/useAuth";

const UserHome = () => {

    const {user} = useAuth();
    console.log(user);

    return (
        <div className="p-10">
            <h2 className="text-3xl">
                <span className="mr-4">Welcome Back</span>
                {
                    user.displayName ? <p> {user?.displayName}</p> : 'Unknown'
                }
            </h2>
        </div>
    );
};

export default UserHome;