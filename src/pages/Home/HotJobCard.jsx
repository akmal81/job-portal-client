import React from 'react';
import {easeOut, motion} from "framer-motion"
import { animate } from "motion"
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo
    } = job;


    return (
        <div className='space-y-6 p-6 border flex flex-col rounded-xl bg-blue-50'>
            <div className='flex items-center gap-2 '>

                <img className='w-10' src={company_logo} alt="" />
                <h4 className='text-xl font-bold text-dark'>{title}</h4>
            </div>
            <div className='flex gap-4'>
                <p>{jobType}</p>
                <p>{applicationDeadline}</p>
            </div>
            <p>{description.substring(0, 80)}</p>
            <div className='flex gap-2 flex-wrap '>
                {
                    requirements.slice(0,2).map((r, i) => <p key={i} className='bg-blue-100 px-2 py-1 text-sm rounded-sm'>{r}</p>)
                }
            </div>
            <div className='flex-grow flex justify-end items-end'>
                <Link to={`/jobs/${_id}`}>
            <motion.button
            
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            
            className='bg-blue-100 py-2 px-4 text-primary font-medium rounded-xl hover:bg-primary hover:text-white text-sm'>Apply Now</motion.button>
            </Link>
            
            </div>
        </div>
    );
};

export default HotJobCard;