import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { TbReceiptYuan } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyPostedFoodsCard = ({ food, foods, setFoods }) => {
    const { _id, photo, fName, price, description, category } = food;
    //postedDelete
    const handleDelteFood = async (id) => {
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
                    await axios.delete(`${import.meta.env.VITE_API_URL}/postedDelete/${id}`)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
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
        //   await axios.delete(`${import.meta.env.VITE_API_URL}/postedDelete/${id}`)
    }
    return (
        <div className="border border-gray-200 rounded-lg shadow-lg p-3">
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
                <h2 className="text-2xl font-semibold">{fName}</h2>
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
                <p className="text-gray-600 text-base">{description}</p>
                <div className='flex gap-3 text-sm'>
                    <Link to={`/food/${_id}`}>
                        <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Details</button>
                    </Link>
                    <Link to={`/postUpdate/${_id}`}>
                        <button className="mt-4 px-2 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Update</button>
                    </Link>
                    <Link onClick={() => handleDelteFood(_id)}>
                        <button className="mt-4 px-2 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Delete</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyPostedFoodsCard;