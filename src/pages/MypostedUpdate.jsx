import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../router/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const MypostedUpdate = () => {
    const { user } = useContext(AuthContext);
    const [food, setFood] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const foodData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food/${id}`)
            setFood(data);
        }
        foodData();
    }, [id])
    const { fName, photo, category, quantity, price, origin, description, email, name } = food;
    const handleAddFood = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fName = form.fName.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const origin = form.origin.value;
        const description = form.description.value;
        const updateData = { fName, photo, category, quantity, price, origin, description }

        //postUpdate
        try{
            await axios.patch(`${import.meta.env.VITE_API_URL}/postUpdate/${id}`, updateData);
            form.reset();
            Swal.fire({
                title: 'Updated Scuccess!',
                text: 'Food Updated successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            navigate('/mypostedfood')
        }
        catch(err){
            console.log(err.message)
            toast.error(err.message)
        }
    }
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h2 className='text-4xl font-extrabold text-center mt-10'>Update Your Added Food</h2>
            <div className='bg-[#F4F3F0] px-6 py-10 rounded-xl mt-10'>
                <form onSubmit={handleAddFood}>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Food Name <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Food Name' className='input input-bordered w-full' name='fName' defaultValue={fName} required />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 '>
                            <label className='label'>
                                <span className='label-text font-semibold'>Food Image URL <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="url" placeholder='Image URL' className='input input-bordered w-full' name='photo' defaultValue={photo} required />
                            </label>
                        </div>
                    </div>
                    {/* form suplier row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Food Category <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Category Name' className='input input-bordered w-full' name='category' defaultValue={category} required />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Quantity <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="number" placeholder='Quantity' className='input input-bordered w-full' name='quantity' defaultValue={quantity} required />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Price <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="number" placeholder='Price' className='input input-bordered w-full' name='price' defaultValue={price} required />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Food Origin <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Food Origin' className='input input-bordered w-full' name='origin' defaultValue={origin} required />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Description <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <textarea type="text" rows="20" cols="50" placeholder='Description' className='input input-bordered w-full' name='description' defaultValue={description} required />
                            </label>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <input type="submit" value='Update Food' className='btn btn-block input-bordered' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MypostedUpdate;