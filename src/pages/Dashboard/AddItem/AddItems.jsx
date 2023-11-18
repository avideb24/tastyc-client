import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`; 

const AddItems = () => {

    const axiosPublic = useAxiosPublic();

    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async(data) => {
        const imageFile = {image: data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            };

            const menuRes = await axiosSecure.post('/menu', menuItem);
            if(menuRes.data.insertedId){
                reset();
                Swal.fire({
                    icon: "success",
                    title: `${data.name} Added Successfully!`,
                });

            }
            console.log(menuRes.data);

        }
        console.log(res.data);
        console.log(data)
    };

    return (
        <div className="p-10">
            <SectionTitle heading={'Add Items'} subHeading={"---What's New---"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", {required: true})} className="border-2 border-black p-2 w-full my-2" placeholder="Recipe Name" />
                    <input {...register("price", {required: true})} className="border-2 border-black p-2 w-full my-2" placeholder="Price" />
                    <input {...register("recipe", {required: true})} className="border-2 border-black p-2 w-full my-2" placeholder="Recipe Details" />
                    <select {...register("category", {required: true})} className="select select-bordered border-black w-full" defaultValue={'default'}>
                        <option disabled value={'default'}>Select A Category</option>
                        <option>Offered</option>
                        <option>Dessert</option>
                        <option>Pizza</option>
                        <option>Salad</option>
                        <option>Soup</option>
                    </select>
                    <input {...register("image", {required: true})}  type="file" className="file-input w-full max-w-xs my-2" />
                    <button className="btn w-full btn-primary">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;