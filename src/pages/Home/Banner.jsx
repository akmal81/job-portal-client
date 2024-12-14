import React from 'react';
import {easeOut, motion} from "framer-motion"
import { animate } from "motion"
import banner1 from '../../assets/banner/banner1.jpg'
import banner2 from '../../assets/banner/banner2.png'


const Banner = () => {
    return (
        <section className=' bg-[#F2F7FD]'>
            <div className=' w-11/12 xl:w-8/12 min-h-[600px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10'>
                <div className='w-1/2'>
                    <motion.h2
                        animate={{y:[50, 0]}}
                        transition={{duration:1, delay:0, ease:easeOut}}
                        
                        className="text-5xl leading-snug font-bold text-secondary relative z-50">The <span className='text-primary'>Easiest Way</span><br />
                        to Get Your New Job
                        <div className='absolute bg-slate-200 h-8 w-64 top-10 left-24 -z-10'></div>
                    </motion.h2>
                    <p className='w-2/3 mt-6 text-dark leading-loose'>Dolor sit amet consectetur adipisicing elit. Pariatur modi fugit in ipsam, corrupti doloribus quas consectetur labore.</p>
                    <div className='bg-white p-2 mt-8 rounded-lg flex justify-between gap-4 items-center text-secondary shadow-lg'>
                        <div className='text-secondary'>industry</div>
                        <div>industry</div>
                        <div>industry</div>
                        <button className='bg-primary text-white py-2 px-4 rounded-lg'>Search</button>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                <motion.img 
                animate={{y:[50,150,50]}}
                transition={{duration:15, repeat:Infinity}}

                className='w-80 rounded-t-[40px] rounded-br-3xl border-l-8 border-b-8 border-primary' src={banner1} alt="" />
                <motion.img 
                animate={{x:[100,200, 100]}}
                transition={{duration:15, repeat:Infinity}}
                className='w-60 rounded-t-[40px] rounded-br-3xl border-l-8 border-b-8 border-primary' src={banner2} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Banner;