import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {

    const [, refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate();
    const location = useLocation();

    const { _id, name, image, price, recipe } = item;

    const { user } = useAuth();

    const handleAddToCart = item => {
        console.log(item);

        if (user) {
            const cartItem = { food_id: _id, user_email: user.email, name, image, price }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: `${name} Added To Cart`,
                            timer: 1500
                        });
                        
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You Have To Login First!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl relative">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="absolute top-3 right-3 py-1 px-3 text-white bg-[#292828]">${price}</div>
            <div className="card-body text-center">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>{recipe}</p>
                
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="border-b-4 font-bold duration-200 border-b-[#BB8506] bg-[#e2dede] py-2 px-4 rounded-md hover:bg-[#2e2d2d] mt-3 text-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;