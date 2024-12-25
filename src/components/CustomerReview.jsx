import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import customer1 from '../assets/customer1.png';
import customer2 from '../assets/customer2.png';
import customer3 from '../assets/customer3.png';
import customer4 from '../assets/customer4.png';
import customer5 from '../assets/customer5.png';

const CustomerReview = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto hidden lg:block px-3'>
                <h1 className='text-5xl font-bold text-center mt-10'>Our Customer Review</h1>
                <p className='w-[70%] mx-auto text-center mt-4'>Our customers love sharing their experiences! From quality products to excellent service, their reviews highlight the trust and satisfaction they have in us. Read their stories and see why we’re a favorite choice!</p>
                <div className='mt-10 mb-16'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                        <SwiperSlide>
                            <div className='border rounded-lg p-4'>
                                <img className='rounded-lg w-full h-[250px]' src={customer1} alt="" />
                                <div className='flex items-center justify-between mt-3'>
                                    <h1 className='text-2xl font-bold'>Emily Carter</h1>
                                    <div className='flex items-center gap-2'>
                                        <p className='font-semibold'>4.9</p>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-justify mt-1'>Customers are delighted with the exceptional product quality, fast delivery, user-friendly website, and efficient customer support, making their shopping experience reliable and enjoyable.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border rounded-lg p-4'>
                                <img className='rounded-lg w-full h-[250px]' src={customer2} alt="" />
                                <div className='flex items-center justify-between mt-3'>
                                    <h1 className='text-2xl font-bold'>James Parker</h1>
                                    <div className='flex items-center gap-2'>
                                        <p className='font-semibold'>4.9</p>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-justify mt-1'>Customers are delighted with the exceptional product quality, fast delivery, user-friendly website, and efficient customer support, making their shopping experience reliable and enjoyable.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border rounded-lg p-4'>
                                <img className='rounded-lg w-full h-[250px]' src={customer3} alt="" />
                                <div className='flex items-center justify-between mt-3'>
                                    <h1 className='text-2xl font-bold'>Sophia Johnson</h1>
                                    <div className='flex items-center gap-2'>
                                        <p className='font-semibold'>4.9</p>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-justify mt-1'>Customers are delighted with the exceptional product quality, fast delivery, user-friendly website, and efficient customer support, making their shopping experience reliable and enjoyable.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border rounded-lg p-4'>
                                <img className='rounded-lg w-full h-[250px]' src={customer4} alt="" />
                                <div className='flex items-center justify-between mt-3'>
                                    <h1 className='text-2xl font-bold'>Michael Brown</h1>
                                    <div className='flex items-center gap-2'>
                                        <p className='font-semibold'>4.5</p>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-justify mt-1'>Customers are delighted with the exceptional product quality, fast delivery, user-friendly website, and efficient customer support, making their shopping experience reliable and enjoyable.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border rounded-lg p-4'>
                                <img className='rounded-lg w-full h-[250px]' src={customer5} alt="" />
                                <div className='flex items-center justify-between mt-3'>
                                    <h1 className='text-2xl font-bold'>Olivia Williams</h1>
                                    <div className='flex items-center gap-2'>
                                        <p className='font-semibold'>4.6</p>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-justify mt-1'>Customers are delighted with the exceptional product quality, fast delivery, user-friendly website, and efficient customer support, making their shopping experience reliable and enjoyable.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;