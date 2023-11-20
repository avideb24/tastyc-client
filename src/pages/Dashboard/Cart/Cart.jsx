import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, refetch] = useCart();

    const axiosSecure = useAxiosSecure();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    };

    const handlePay = () => {

    }

    return (
        <div className="px-5 pt-3 pb-10">
            <SectionTitle subHeading='---my Cart---' heading='Wanna add more'></SectionTitle>
            <div className="text-2xl uppercase flex justify-around py-4">
                <h2>Total Orders: {cart.length}</h2>
                <p>Total Price: ${totalPrice}</p>
                {cart.length ? <Link to='/dashboard/payment'>
                    <button onClick={handlePay} className="btn btn-primary">Pay</button>
                </Link>
                    :
                    <button onClick={handlePay} disabled className="btn btn-primary">Pay</button>
                }
            </div>
            <div>

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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) =>
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
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-3xl text-red-600"><AiFillDelete></AiFillDelete></button>
                                        </th>
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

export default Cart;