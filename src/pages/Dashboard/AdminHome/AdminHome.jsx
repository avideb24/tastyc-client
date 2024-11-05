import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminHome = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: adminStats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('admin-stats');
            return res.data
        }
    })

    // console.log(adminStats);

    return (
        <div className="p-10">
            <div className="mb-10">
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">{adminStats?.revenue}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value">{adminStats?.users}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Products</div>
                        <div className="stat-value">{adminStats?.menuItems}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{adminStats?.orders}</div>
                    </div>

                </div>
            </div>
            <h2 className="text-3xl">
                <span className="mr-10">Welcome Back</span>
                {
                    user ? user?.displayName : 'Unknown'
                }
            </h2>
        </div>
    );
};

export default AdminHome;