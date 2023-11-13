import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';

const Category = () => {

    return (
        <section>
            <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} heading={'Order online'}></SectionTitle>
            <div className="mt-6 mb-10">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className="mx-auto" src={img1} alt="" />
                        <p className="text-center text-white text-2xl uppercase -translate-y-14">Salad</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="mx-auto" src={img2} alt="" />
                        <p className="text-center text-white text-2xl uppercase -translate-y-14">Pizza</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="mx-auto" src={img3} alt="" />
                        <p className="text-center text-white text-2xl uppercase -translate-y-14">Soup</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="mx-auto" src={img4} alt="" />
                        <p className="text-center text-white text-2xl uppercase -translate-y-14">Cake</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="mx-auto" src={img5} alt="" />
                        <p className="text-center text-white text-2xl uppercase -translate-y-14">Salads</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;