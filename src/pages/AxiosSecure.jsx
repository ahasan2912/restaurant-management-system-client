import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../router/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const {handleLogOut} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(response => {
            return response;
        }, async error => {
            if(error.response.status === 401 || error.response.status === 403){
                handleLogOut();
                navigate('/login');
            }
        })
    }, [handleLogOut, navigate])
    return axiosSecure;
};

export default useAxiosSecure;