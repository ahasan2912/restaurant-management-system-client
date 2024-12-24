import React from 'react';
import errorPage from '../assets/error-pages.jpg'
const ErrorPages = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-6 px-6'>
            <h1 className='text-5xl font-semibold text-center'>Pages Not Found!</h1>
            <img className='rounded-lg' src={errorPage} alt="" />
        </div>
    );
};

export default ErrorPages;