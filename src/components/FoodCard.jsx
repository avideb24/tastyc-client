
const FoodCard = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl relative">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="absolute top-3 right-3 py-1 px-3 text-white bg-[#292828]">${price}</div>
            <div className="card-body text-center">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="border-b-4 font-bold duration-200 border-b-[#BB8506] bg-[#e2dede] py-2 px-4 rounded-md hover:bg-[#2e2d2d] mt-3 text-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;