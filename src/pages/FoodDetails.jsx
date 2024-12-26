import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../router/AuthProvider';

const FoodDetails = () => {
    const { user } = useContext(AuthContext)
    const [food, setFood] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const foodData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food/${id}`)
            setFood(data);
        }
        foodData();
    }, [id])
    const { _id, fName, photo, category, quantity, price, origin, description, email, name, order_coutn } = food;
    let available = parseInt(quantity - order_coutn);
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
                    <p className='text-lg font-semibold'>Stock Status:
                        {
                            available > 0 ? <span className='border-2 rounded-md py-1 px-2 hover:cursor-pointer hover:bg-gray-100 transition ml-2'>Available</span> :
                                <div className="tooltip" data-tip="Food is not available">
                                    <span className='border-2 rounded-md py-1 px-2 hover:cursor-pointer hover:bg-gray-400 transition ml-2'>Unavailable</span>
                                </div>

                        }
                    </p>
                    <p className='text-lg font-semibold'>Origin of product: {origin}</p>
                    <p className='text-lg font-semibold'>Availabel Quantity: {available}</p>
                    <p className='text-lg font-semibold'>Purchases Quantity: {order_coutn}</p>
                    <div className='divider'></div>
                    <div>
                        <h1 className='text-xl font-semibold'>Food Owner Information</h1>
                        <h1><span className='font-semibold text-lg'>Name: </span>{name}</h1>
                        <h1><span className='font-semibold text-lg'>Email: </span>{email}</h1>
                    </div>
                    <Link className='btn'
                        disabled={user?.email === email || available < 1}
                        to={`/foodpurchases/${_id}`}>Add To Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
