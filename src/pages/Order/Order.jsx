import SectionCover from "../../components/SectionCover";
import orderCover from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {

    const categories = ['offered', 'dessert', 'pizza', 'salad', 'soup'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    

    return (
        <div className="max-w-7xl mx-auto">
            <Helmet><title>Order</title></Helmet>
            <SectionCover img={orderCover} title="our shop" text="Would you like to order our food?"></SectionCover>
            <div className="my-14">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Offered</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Soup</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-4">
                            {
                                offered.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-4">
                            {
                                dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-4">
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-4">
                            {
                                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex flex-wrap justify-center gap-4">
                            {
                                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>

    );
};

export default Order;