
const MenuItems = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="flex gap-8">
            <img className="w-20 h-20 object-cover rounded-full rounded-tl-none" src={image} alt="" />
            <div>
                <h2 className="text-xl">{name}---------------</h2>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItems;