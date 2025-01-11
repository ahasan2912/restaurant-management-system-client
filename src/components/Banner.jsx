import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'>
                <SwiperSlide>
                    <div className='w-full bg-center bg-cover bg-no-repeat h-[60vh] md:h-[70vh]' style={{ backgroundImage: `url(${banner2})` }}>
                        <div className='flex items-center justify-center w-full h-full bg-gray-900/30 '>
                            <div className='text-center'>
                                <div className='px-2 space-y-1'>
                                    <h1 className='text-3xl font-semibold text-white md:text-5xl'>Pastaria Hotel and Restaurant</h1>
                                    <p className='text-white text-sm md:text-base w-full px-10 mx-auto text-justify md:text-center max-w-7xl'>Pastaria is the newest pasta house in Bangladesh. Unique in its own kind, it's dedicated 100% in the making of fresh pasta accompanied by a variety of delicious sauces made with carefully chosen ingredients. We bring to you the best tastes, in full portions and reasonable prices! We see pasta as art, and we treat it as such. We never forget to add plenty of love and fantasy to our dishes!</p>
                                </div>
                                <br />
                                <Link
                                    to='/allFoods'
                                    className='w-full px-5 py-4 mt-4 text-base font-medium text-white capitalize transition-colors duration-300 transform bg-red-400 rounded-md lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-gray-500'
                                >
                                    Go To All Foods
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full bg-center bg-cover bg-no-repeat h-[60vh] md:h-[70vh]' style={{ backgroundImage: `url(${banner1})` }}>
                        <div className='flex items-center justify-center w-full h-full bg-gray-900/30'>
                            <div className='text-center'>
                                <div className='px-2 space-y-1'>
                                    <h1 className='text-3xl font-semibold text-white md:text-5xl'>Pastaria Hotel and Restaurant</h1>
                                    <p className='text-white text-sm md:text-base w-full px-10 mx-auto text-justify md:text-center max-w-7xl'>Pastaria is the newest pasta house in Bangladesh. Unique in its own kind, it's dedicated 100% in the making of fresh pasta accompanied by a variety of delicious sauces made with carefully chosen ingredients. We bring to you the best tastes, in full portions and reasonable prices! We see pasta as art, and we treat it as such. We never forget to add plenty of love and fantasy to our dishes!</p>
                                </div>
                                <br />
                                <Link
                                    to='/allFoods'
                                    className='w-full px-5 py-4 mt-4 text-base font-medium text-white capitalize transition-colors duration-300 transform bg-red-400 rounded-md lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-gray-500'
                                >
                                     Go To All Foods
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full bg-center bg-cover bg-no-repeat h-[60vh] md:h-[70vh]' style={{ backgroundImage: `url(${banner3})` }}>
                        <div className='flex items-center justify-center w-full h-full bg-gray-900/30 '>
                            <div className='text-center'>
                                <div className='px-2 space-y-2'>
                                    <h1 className='text-3xl font-semibold text-white md:text-5xl'>Pastaria Hotel and Restaurant</h1>
                                    <p className='text-white text-sm md:text-base w-full px-10 mx-auto text-justify md:text-center max-w-7xl'>Pastaria is the newest pasta house in Bangladesh. Unique in its own kind, it's dedicated 100% in the making of fresh pasta accompanied by a variety of delicious sauces made with carefully chosen ingredients. We bring to you the best tastes, in full portions and reasonable prices! We see pasta as art, and we treat it as such. We never forget to add plenty of love and fantasy to our dishes!</p>
                                </div>
                                <br />
                                <Link
                                    to='/allFoods'
                                    className='w-full px-5 py-4 mt-4 text-base font-medium text-white capitalize transition-colors duration-300 transform bg-red-400 rounded-md lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-gray-500'
                                >
                                     Go To All Foods
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
