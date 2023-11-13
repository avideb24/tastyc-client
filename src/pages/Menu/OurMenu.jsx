import { Helmet } from "react-helmet";
import SectionCover from "../../components/SectionCover";
import menuImg from '../../assets/menu/banner3.jpg';
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../../shared/MenuCategory";
import dessertBg from '../../assets/menu/dessert-bg.jpeg';
import pizzaBg from '../../assets/menu/pizza-bg.jpg';
import soupBg from '../../assets/menu/soup-bg.jpg';
import saladBg from '../../assets/menu/salad-bg.jpg';

const OurMenu = () => {

    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');

    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
            <SectionCover img={menuImg} title={'Our menu'} text="Would you like to try a dish?"></SectionCover>

            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered} category="offered"></MenuCategory>

            <SectionCover img={dessertBg} title="desserts" text="Explore Our Decadent Dessert Delights and Elevate Your Culinary Experience. From Luscious Chocolate Lava Cakes to Elegant Éclairs, We've Crafted Every Bite to Perfection."></SectionCover>
            <MenuCategory items={dessert} category="dessert"></MenuCategory>

            <SectionCover img={pizzaBg} title="Pizza" text="Explore Our Decadent Dessert Delights and Elevate Your Culinary Experience. From Luscious Chocolate Lava Cakes to Elegant Éclairs, We've Crafted Every Bite to Perfection."></SectionCover>
            <MenuCategory items={pizza} category="pizza"></MenuCategory>

            <SectionCover img={saladBg} title="Salad" text="Explore Our Decadent Dessert Delights and Elevate Your Culinary Experience. From Luscious Chocolate Lava Cakes to Elegant Éclairs, We've Crafted Every Bite to Perfection."></SectionCover>
            <MenuCategory items={salad} category="salad"></MenuCategory>

            <SectionCover img={soupBg} title="Soup" text="Explore Our Decadent Dessert Delights and Elevate Your Culinary Experience. From Luscious Chocolate Lava Cakes to Elegant Éclairs, We've Crafted Every Bite to Perfection."></SectionCover>
            <MenuCategory items={soup} category="soup"></MenuCategory>

        </div>
    );
};

export default OurMenu;