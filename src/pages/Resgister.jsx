import React, { useContext, useState } from 'react';
import { AuthContext } from '../router/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import googleLogo from '../assets/google-icon.png'

const Resgister = () => {
    const { createUser, handleLogInWithGoogle, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const nevigate = useNavigate();
    const location = useLocation();

    const handleSignUpBtn = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        setError("");

        if (password.length < 6) {
            setError('Password should be at least 6 characters or longer');
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must contain at least one lowercase and one Uppercase and more 6 charecter");
            return;
        }

        try {
            const result = await createUser(email, password)
            await updateUserProfile(name, photo)
            setUser({ ...result.user, photoURL: photo, displayName: name })
            toast.success("You have successfully registered");
            nevigate('/')
            // nevigate(location?.state ? location.state : "/");
        }
        catch (err) {
            toast.error(err?.message)
        }


    };

    const handleSingInGoogle = () => {
        handleLogInWithGoogle()
            .then(res => {
                toast.success("You have successfully registered");
                // nevigate(location?.state ? location.state : "/");
            })
    }
    return (
        <div className='flex flex-col items-center justify-center my-14 px-5'>
            <div className='card bg-base-200 w-full max-w-md shrink-0'>
                <form onSubmit={handleSignUpBtn} className="card-body">
                    <div className='flex items-center justify-center'>
                        <h1 className='text-3xl font-semibold text-center'>SignUp your account</h1>
                        {/* <Lottie className='w-20' animationData={box}></Lottie> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                        <button type='button' onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute top-12 right-4'>
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />
                            }
                        </button>
                    </div>
                    <div className="form-control mt-6">
                        <button type='sumit' className="btn btn-primary text-white">SignUp</button>
                    </div>
                    {
                        error && (<p className='text-red-500 font-semibold text-center text-sm'>{error}</p>)
                    }
                    <div onClick={handleSingInGoogle} className='flex items-center justify-center py-2 btn btn-outline btn-primary mt-2 text-gray-700 hover:text-white'>
                        <img className='w-6' src={googleLogo} alt="" />
                        <span>Register with Google</span>
                    </div>
                    <Link to='/login' className='font-semibold text-red-500 text-center text-sm'>Allready Have an account ? SignIn</Link>
                </form>
            </div>
        </div>
    );
};

export default Resgister;