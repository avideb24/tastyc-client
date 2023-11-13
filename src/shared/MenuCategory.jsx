import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const MenuCategory = ({ items, category }) => {
    return (
        <div className="max-w-7xl mx-auto pb-12">
            <div className="grid md:grid-cols-2 gap-6 py-6">
                {
                    items.map(item =>
                        <MenuItems key={item._id} item={item}></MenuItems>
                    )
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${category}`}>
                    <button className="btn btn-outline border-[#fff] border-b-4 border-b-[#000] uppercase">ORDER Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;