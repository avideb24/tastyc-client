import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="p-10">
            <SectionTitle heading={'Add Items'} subHeading={"---What's New---"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} className="border-2 border-black p-2 w-full my-2" placeholder="Recipe Name" />
                    <input {...register("price")} className="border-2 border-black p-2 w-full my-2" placeholder="Price" />
                    <input {...register("recipe")} className="border-2 border-black p-2 w-full my-2" placeholder="Recipe Details" />
                    <select {...register("category")} className="select select-bordered border-black w-full">
                        <option disabled>Select A Category</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <input {...register("image")}  type="file" className="file-input w-full max-w-xs my-2" />
                    <button className="btn w-full btn-primary">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;