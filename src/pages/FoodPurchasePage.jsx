import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../router/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const FoodPurchasePage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [food, setFood] = useState({})
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        const foodData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food/${id}`)
            setFood(data);
        }
        foodData();
    }, [id])
    const { _id, fName, photo, category, quantity, price, origin, description, email, name } = food;
    const handleAddFood = async e => {
        e.preventDefault();
        const form = e.target;
        const fName = form.fname.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const date = startDate;
        const userName = form.user.value;
        const userEmail = form.email.value;
        const photoURL = photo;
        const ownerName = name;
        const ownerEmail = email;
        const foodId = _id;
        const addPurchases = { fName, price, quantity, date, userName, userEmail, photoURL, ownerName, ownerEmail, foodId}

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/add-purchases`, addPurchases);
            form.reset();
            Swal.fire({
                title: 'Purchase Scuccess!',
                text: 'Food purchase successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            navigate('/myFoodOrder');
        }
        catch (err) {
            toast.error()
        }
    }
    return (
        <div className='max-w-5xl mx-auto mb-10 my-28'>
            <h2 className='text-4xl font-extrabold text-center mt-10'>Please give me valid information and purchases product</h2>
            <div className='bg-[#F4F3F0] px-6 py-10 rounded-xl mt-5'>
                <form onSubmit={handleAddFood}>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Food Name <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Food Name' className='input input-bordered w-full' defaultValue={fName} name='fname' required />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Price <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="number" placeholder='Price' defaultValue={price} name='price' className='input input-bordered w-full' required />
                            </label>
                        </div>
                    </div>
                    {/* form suplier row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Quantity <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="number" placeholder='Quantity' className='input input-bordered w-full' name='quantity' required />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Date <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <DatePicker
                                className='border p-2 rounded-md input input-bordered w-full'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Name <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Buyer Name' className='input input-bordered w-full' name='user' defaultValue={user?.displayName} readOnly required />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Email <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Buyer Email' className='input input-bordered w-full' name='email' defaultValue={user?.email} readOnly required />
                            </label>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <input type="submit" value='Confirm Purchases' className='btn btn-block input-bordered' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FoodPurchasePage;