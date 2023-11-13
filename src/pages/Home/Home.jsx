import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;