import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#454444] text-white text-sm">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-10  py-14 max-w-7xl mx-auto px-5'>
                <nav className='lg:col-span-4 space-y-4'>
                    <div className='mb-2'>
                        <Link to="/" className="text-xl font-bold">
                            <h1 className='text-2xl uppercase'>Pastaria</h1>
                        </Link>
                    </div>
                    <p className=''>Pastaria is the newest pasta house in Bangladesh. Unique in its own kind, it's dedicated 100% in the making of fresh pasta accompanied by a variety of delicious sauces made with carefully chosen ingredients.</p>
                    <div className='flex items-center'>
                        <input className='py-4 px-6 rounded-l-xl outline-none text-gray-500 w-full sm:w-1/2' type="text" placeholder='Enter Your Email' defaultValue="ahasanhabib2912@gmail.com" />
                        <input className='bg-[#807d7c] cursor-pointer py-4 px-4 rounded-r-xl' type="submit" value="Send" />
                    </div>
                    <div className='flex gap-4'>
                        <Link className='border border-gray-400 rounded-full p-1'><FaFacebook size={22} /></Link>
                        <Link className='border border-gray-400 rounded-full p-1'>< FaLinkedin size={22} /></Link>
                        <Link className='border border-gray-400 rounded-full p-1'><FaGithub size={22} /></Link>
                    </div>
                </nav>
                <nav className='lg:col-span-2 flex flex-col space-y-4'>
                    <h6 className="text-xl mb-2">Useful links</h6>
                    <Link className="link link-hover">About</Link>
                    <Link className="link link-hover">Services</Link>
                    <Link className="link link-hover">Review</Link>
                    <Link className="link link-hover">Blogs</Link>
                </nav>
                <nav className='lg:col-span-2 flex flex-col space-y-4'>
                    <h6 className="text-xl mb-2">Top categories</h6>
                    <Link className="link link-hover">Margherita Pizza</Link>
                    <Link className="link link-hover">Grilled Chicken Burger</Link>
                    <Link className="link link-hover">Butter Chicken</Link>
                    <Link className="link link-hover">Tandoori Chicken</Link>
                </nav>
                <nav className='lg:col-span-2 flex flex-col space-y-4'>
                    <h6 className="text-xl mb-2">Help & support</h6>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Privacy Policy</Link>
                    <Link className="link link-hover">Terms</Link>
                    <Link className="link link-hover">Conditions</Link>
                </nav>
            </div>
            <div className='border border-gray-500'></div>
            <p className='text-center py-3'>Copyright © {new Date().getFullYear()} Pastaria</p>
        </footer>
    );
};

export default Footer;