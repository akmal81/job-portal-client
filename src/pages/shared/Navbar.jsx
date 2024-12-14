import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import hamMenu from '../../assets/icons/menu.svg';
import './style.css'
import useAuth from '../../hooks/useAuth';
import { motion } from "framer-motion"

const Navbar = () => {
    const { user, signOutUser } = useAuth()


    const links = <>
        <NavLink to='/' className='font-light text-sm hover:text-primary'>Home</NavLink>
        <NavLink to='/findJob' className='font-light text-sm hover:text-primary'>Find a Job</NavLink>
        <NavLink to='/recruiters' className='font-light text-sm hover:text-primary'>Recruiters</NavLink>
        <NavLink to='/candidates' className='font-light text-sm hover:text-primary'>Candidates</NavLink>
        <NavLink to='/blog' className='font-light text-sm hover:text-primary'>Blog</NavLink>
    </>
    const handleSignOut = () => {
        signOutUser()
            .then(() => { })
            .catch((error) => { })
    }
    return (
        <section className='w-8/12 mx-auto flex justify-between items-center py-6'>
            <div>

                <h4 className='font-black text-3xl text-secondary'>Job Finder</h4>
            </div>
            <div className='hidden xl:flex gap-6 '>
                {links}
            </div>
            <div className='flex gap-10 items-center justify-between'>
                {
                    user && user?.email ?
                        <div className='flex gap-6 items-center'>
                            <div className='w-12 h-12 border rounded-full'>
                                {
                                    user && user.photoURL ? <img
                                        src={`${user?.photoURL}`}
                                        alt="" />
                                        :
                                        <h2 className='flex items-center justify-center w-full h-full text-3xl font-black bg-slate-200 rounded-full'>{user.email.slice(0, 1).toUpperCase()}</h2>
                                }
                            </div>
                            <motion.button
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: 0.8}}
                                onClick={handleSignOut}
                                className='bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg'>
                                Sing Out
                            </motion.button>
                        </div>
                        :
                        <>
                            <Link to='/registration'>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    Register
                                </motion.button>
                            </Link>
                            <Link to='/signin' className='bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg'>Sing In</Link>
                        </>
                }
                <img src={hamMenu} alt="" className='hidden' />
            </div>
        </section>
    );
};
export default Navbar;