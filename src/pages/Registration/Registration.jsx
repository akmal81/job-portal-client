import React, { useContext } from 'react';
import Lottie from "lottie-react";
import register from '../../assets/lotti/register.json'
import AuthContext from '../../context/AuthContext/AuthContext';
const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // password validation and error showing
        createUser(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);

            })
            .catch((error) => {
                console.log(error.code);
            })
    }

    return (
        <section className='w-8/12 lg:flex mx-auto gap-10 mt-40 '>
            <div className='flex-1 flex flex-col items-center justify-center shadow-xl border p-8 '>
                <form onSubmit={handleRegistration} className='flex flex-col gap-8 w-2/3'>
                    <h2 className='text-2xl font-semibold'>Register Now!!</h2>
                    <button  className=''>Register With Google</button>
                    <input type="text" name="email" placeholder='Email' className='border py-4 px-4 w-full' />
                    <input type="text" name="password" placeholder='Password' className='border py-4 px-4 w-full' />
                    <input type="submit" className='py-3 px-4 bg-primary w-fit text-white font-medium rounded-lg' />
                </form>
            </div>
            <div className='flex-1'>
                <Lottie animationData={register}></Lottie>
            </div>
        </section>
    );
};

export default Registration;