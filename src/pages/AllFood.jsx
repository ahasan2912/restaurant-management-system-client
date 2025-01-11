import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCart from '../components/FoodCart';

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState('')
    useEffect(() => {
        const allFoodData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allfoods?search=${search}`);
            setFoods(data);
        }
        allFoodData()
    }, [search])
    const handleSearch = e => {
        e.preventDefault();
        //if you want use onBlur
      }
    return (
        <div className='max-w-7xl mx-auto mt-28 mb-10 px-3'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <h1 className='text-5xl font-semibold text-center'>Our All Foods</h1>
                <form onSubmit={handleSearch}>
                    <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-gray-300 outline-none focus:placeholder-transparent rounded-l-md'
                            type='text'
                            name='search'
                            // value={search}
                            placeholder='Enter Job Title'
                            aria-label='Enter Job Title'
                            onChange={e => setSearch(e.target.value)}
                        // onBlur={e => setSearch(e.target.value)}
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-r-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-6'>
                {
                    foods.map(food => <FoodCart key={food._id} food={food}></FoodCart>)
                }
            </div>
        </div>
    );
};

export default AllFood;