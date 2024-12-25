import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../router/AuthProvider';
import axios from 'axios';
import MyPostedFoodsCard from '../components/MyPostedFoodsCard';

const MyPostedFoods = () => {
    const [foods, setFoods] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const allFoodData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allfoods/${user?.email}`);
            setFoods(data);
        }
        allFoodData();
    }, [user]);

    return (
        <div className='max-w-7xl mx-auto my-14'>
            <div>
                <h1 className='text-4xl font-semibold text-center'>My Added Foods</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    foods.map(food => <MyPostedFoodsCard
                        key={food._id}
                        food={food}
                        foods={foods}
                        setFoods={setFoods}>
                    </MyPostedFoodsCard>)
                }
            </div>
        </div>
    );
};

export default MyPostedFoods;