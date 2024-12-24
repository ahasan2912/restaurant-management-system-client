import React from 'react';
import { Link } from 'react-router-dom';

const FoodCart = ({ food }) => {
    const { _id, photo, fName, price, description, category } = food;
    return (
        <div className="border border-gray-200 rounded-lg shadow-lg">
        <div className="relative">
            <img
                src={photo}
                alt="Rib-Eye Steak"
                className="rounded-t-lg w-full h-60"
            />
            <div className="absolute top-2 right-2 bg-red-600 text-white font-bold text-sm px-2 py-1 rounded">
                ${price}
            </div>
        </div>
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800">Rib-Eye Steak</h2>
            <div className='flex gap-2 justify-between my-1'>
                <p className='text-lg font-semibold'>{category}</p>
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
            <p className="text-gray-600 text-sm">{description}</p>
            <Link to={`/food/${_id}`}>
                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">View Details</button>
            </Link>
        </div>
    </div>
    );
};

export default FoodCart;