import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../router/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

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
    ///deleleList/:id

    const handleDeleteOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`${import.meta.env.VITE_API_URL}/deleleList/${id}`);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Order has been cancelled.",
                        icon: "success"
                    });
                }
                catch (err) {
                    toast.error(err.message);
                }
                const remainingFood = foods.filter(fd => fd._id !== id);
                setFoods(remainingFood);
            }
        });
    }
    return (
        <div className='max-w-7xl mx-auto mt-28 px-3'>
            <div className='flex items-center gap-3'>
                <h1 className='text-4xl font-semibold '>{user?.displayName} Order List</h1>
                <div className='text-3xl font-bold bg-gray-300 text-gray-500 px-4 rounded-md'>{foods.length}</div>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="table border">
                    {/* head */}
                    <thead className=''>
                        <tr className='text-base border'>
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
                                <tr key={idx} className='hover border text-base'>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <img className='w-14 h-14 rounded-full' src={food.photoURL} alt="" />
                                    </td>
                                    <td className='font-semibold'>{food.fName}</td>
                                    <td className='font-semibold'>${food.price}</td>
                                    <td className='font-semibold'>{food.ownerName}</td>
                                    <td className='font-semibold'>{food.date}</td>
                                    <td>
                                        <button onClick={() => handleDeleteOrder(food._id)} className='btn font-semibold border'>Delete</button>
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

