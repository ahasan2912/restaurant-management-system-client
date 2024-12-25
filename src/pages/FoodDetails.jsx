import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const FoodDetails = () => {
    const [food, setFood] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const foodData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food/${id}`)
            setFood(data);
        }
        foodData();
    }, [id])
    const { _id, fName, photo, category, quantity, price, origin, description } = food;
    return (
        <div className='max-w-6xl mx-auto px-3'>
            <div className='border flex flex-col lg:flex-row justify-center my-32 lg:my-32 gap-5 p-5 rounded-md'>
                <div className='lg:w-1/2'>
                    <img className='w-full h-full object-cover rounded-lg' src={photo} alt="" />
                </div>
                <div className='space-y-2 lg:w-1/2'>
                    <h1 className='text-3xl font-semibold'>{fName}</h1>
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
                    <p className='text-lg font-semibold'>Price: ${price}</p>
                    <p className='text-base text-justify'>{description}</p>
                    <p className='text-lg font-semibold'>Stock Status: <span className='border-2 rounded-md py-1 px-2 hover:cursor-pointer hover:bg-gray-400 transition'>Available</span></p>
                    <p className='text-lg font-semibold'>Availabel Quantity: {quantity}</p>
                    <p className='text-lg font-semibold'>Purchases Quantity: 0</p>
                    <p className='text-lg font-semibold'>Origin of product: {origin}</p>
                    <Link to={`/foodpurchases/${_id}`}>
                        <button className='btn text-base'>Add To Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;