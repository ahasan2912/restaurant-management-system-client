import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCart from '../components/FoodCart';

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const allFoodData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allfoods`);
            setFoods(data);
        }
        allFoodData()
    }, [])
    return (
        <div className='max-w-7xl mx-auto mt-28 mb-10 px-3'>
            <h1 className='text-5xl font-semibold text-center'>Our All Foods</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6'>
                {
                    foods.map(food => <FoodCart key={food._id} food={food}></FoodCart>)
                }
            </div>
        </div>
    );
};

export default AllFood;