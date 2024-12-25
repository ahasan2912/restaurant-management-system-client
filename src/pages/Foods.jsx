import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCart from '../components/FoodCart';
import { Link } from 'react-router-dom';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const allFoodData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allfood`);
            setFoods(data);
        }
        allFoodData()
    }, [])
    return (
        <div className='mt-16 max-w-7xl mx-auto'>
            <div className=''>
                <h1 className='text-5xl font-bold text-center'>Our Top Favourite Foods</h1>
                <p className='w-full md:w-[50%] mx-auto text-center mt-4'>Our top favourite foods showcases the most popular and highly-rated dishes loved by our customers. Indulge in a selection of irresistible flavors crafted with care and perfection!</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
                {
                    foods.map(food => <FoodCart key={food._id} food={food}></FoodCart>)
                }
            </div>
            <Link to='/allFoods'>
                <button className='btn my-4'>See More</button>
            </Link>
        </div>
    );
};

export default Foods;