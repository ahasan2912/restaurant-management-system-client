import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../router/AuthProvider';

const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext);
    return (
        <div className='bg-base-100 w-full shadow-sm px-10'>
            <div className='navbar'>
                <div className='flex-1'>
                    <Link to='/' className='flex gap-2 items-center'>
                        <span className='font-bold text-2xl'>Pastaria</span>
                    </Link>
                </div>
                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/allFoods'>All Foods</Link>
                        </li>
                        <li>
                            <Link to='/gellary'>Gallery</Link>
                        </li>
                        {!user && (
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                        )}
                    </ul>

                    {
                        user && (
                            <div className='dropdown dropdown-end z-50'>
                                <div
                                    tabIndex={0}
                                    role='button'
                                    className='btn btn-ghost btn-circle avatar'
                                >
                                    <div title={user?.displayName} className='w-10 rounded-full'>
                                        <img
                                            referrerPolicy='no-referrer'
                                            alt='User Profile Photo'
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                                >
                                    <li>
                                        <Link to='/addFood'>Add Food</Link>
                                    </li>
                                    <li>
                                        <Link to='/add-job' className='justify-between'>
                                            My Foods
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/my-bids'>My Orders</Link>
                                    </li>
                                    <li className='mt-2'>
                                        <button
                                            onClick={handleLogOut}
                                            className='bg-gray-200 block text-center'
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;