import MenuItems from "../../shared/MenuItems";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();

    const popular = menu.filter(item => item.category === 'popular');

    return (
        <div className="max-w-7xl mx-auto pb-14">
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popular.map(item =>
                        <MenuItems key={item._id} item={item}></MenuItems>
                    )
                }
            </div>
        </div>
    );
};

export default PopularMenu;