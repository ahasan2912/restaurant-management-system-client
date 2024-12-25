import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../router/AuthProvider';
import axios from 'axios';

const MyFoodOrders = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const foodsData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myFoodOrder/${user?.email}`);
            setFoods(data);
        }
        foodsData();
    }, [user]);

    useEffect(()=>{
        
    }, [])

    return (
        <div className='max-w-7xl mx-auto mt-10 px-3'>
            <div className='flex items-center gap-3'>
                <h1 className='text-4xl font-semibold '>{user?.displayName} Order List</h1>
                <div className='text-3xl font-bold bg-orange-300 text-gray-500 px-4 rounded-md'>{foods.length}</div>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-base border hover'>
                            <th>Serial</th>
                            <th>Food Imgage</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Food Owner</th>
                            <th>Date & Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map((food, idx) =>
                                <tr className='hover border text-base'>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <img className='w-14 h-14 rounded-full' src={food.photoURL} alt="" />
                                    </td>
                                    <td className='font-semibold'>{food.fName}</td>
                                    <td className='font-semibold'>${food.price}</td>
                                    <td className='font-semibold'>{food.ownerName}</td>
                                    <td className='font-semibold'>{food.date}</td>
                                    <td>
                                        <button className='btn font-semibold'>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodOrders;

