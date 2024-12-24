import React, { useContext } from 'react';
import { AuthContext } from '../router/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const handleAddFood = async(e) => {
        e.preventDefault();
        const form = e.target;
        const fName = form.fName.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const origin = form.origin.value;
        const description = form.description.value;
        const email = user?.email;
        const name = user?.displayName;

        const addData = { fName, photo, category, quantity, price, origin, description, email, name }
        // console.table(addData)

        try{
           await axios.post('http://localhost:5000/addfood', addData);
            form.reset();
            Swal.fire({
                title: 'Added Scuccess!',
                text: 'Food added successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
        catch(err){
            toast.error(err.message);
        }

    }
return (
    <div className='max-w-5xl mx-auto my-10'>
        <h2 className='text-4xl font-extrabold text-center mt-10'>Add Your Food</h2>
        <div className='bg-[#F4F3F0] px-6 py-10 rounded-xl mt-10'>
            <form onSubmit={handleAddFood}>
                {/* form row */}
                <div className='md:flex gap-6'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Food Name <span className='text-orange-500 text-lg'>*</span></span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Food Name' className='input input-bordered w-full' name='fName' required />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 '>
                        <label className='label'>
                            <span className='label-text font-semibold'>Food Image URL <span className='text-orange-500 text-lg'>*</span></span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Image URL' className='input input-bordered w-full' name='photo' required />
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
                            <input type="text" placeholder='Category Name' className='input input-bordered w-full' name='category' required />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Quantity <span className='text-orange-500 text-lg'>*</span></span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Quantity' className='input input-bordered w-full' name='quantity' required />
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
                            <input type="text" placeholder='Price' className='input input-bordered w-full' name='price' required />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Food Origin <span className='text-orange-500 text-lg'>*</span></span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Food Origin' className='input input-bordered w-full' name='origin' required />
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
                            <textarea type="text" rows="20" cols="50" placeholder='Description' className='input input-bordered w-full' name='description' required />
                        </label>
                    </div>
                </div>
                <div className='mt-6'>
                    <input type="submit" value='Add Food' className='btn btn-block input-bordered' />
                </div>
            </form>
        </div>
    </div>
)};

export default AddFood;