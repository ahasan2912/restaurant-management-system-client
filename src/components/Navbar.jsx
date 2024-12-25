import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../router/AuthProvider';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div className="navbar bg-base-100 shadow-md px-4 top-0 fixed w-full z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-md text-base font-semibold gap-3">
                        <NavLink to='/' className="hover:text-red-600">Home</NavLink>
                        <NavLink to='/allFoods' className="hover:text-red-600">All Foods</NavLink>
                        <NavLink to='/gellary' className="hover:text-red-600">Gallery</NavLink>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-semibold">Pastaria</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6 text-base font-semibold ">
                    <NavLink to='/' className="hover:text-red-600">Home</NavLink>
                    <NavLink to='/allFoods' className="hover:text-red-600">All Foods</NavLink>
                    <NavLink to='/gellary' className="hover:text-red-600">Gallery</NavLink>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <div className='flex'>
                    <ul className='menu menu-horizontal px-1'>
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
                                        <Link to='/mypostedfood' className='justify-between'>
                                            My Foods
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/myFoodOrder'>My Orders</Link>
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
                <div className='hidden md:block'>
                    <button className='p-2 rounded-full bg-base-200 shadow-md flex items-center justify-center' onClick={handleTheme} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
                        {
                            theme === "light" ? <FaSun className="text-gray-600 text-2xl"></FaSun> : <FaMoon className="text-blue-500 text-2xl"></FaMoon>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
