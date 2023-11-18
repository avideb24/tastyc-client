import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {

    const axiosSecure = useAxiosSecure();

    const [menu, , refetch] = useMenu();


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Item has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }

            }
        });
    }

    return (
        <div>
            <SectionTitle subHeading='---Hurry Up---' heading={'manage all items'}></SectionTitle>
            <div>
                <div className="p-4 text-2xl font-bold">Total Items: {menu.length}</div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, idx) =>
                                    <tr key={item._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>{item.name}</div>
                                        </td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Link to={`/dashboard/updateItem/${item._id}`}>
                                                <button className="btn btn-ghost text-3xl text-green-600"><FaPen></FaPen></button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-3xl text-red-600"><AiFillDelete></AiFillDelete></button>
                                        </td>
                                    </tr>
                                )
                            }
                            {/* row 1 */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;