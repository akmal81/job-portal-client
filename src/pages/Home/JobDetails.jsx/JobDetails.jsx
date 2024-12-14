import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { easeOut, motion } from "framer-motion"
import { animate } from "motion"

const JobDetails = () => {

    const job = useLoaderData()

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
        <div className='w-11/12 xl:w-8/12 mx-auto'>
            <div className='border-b py-20 '>
                <h2 className='text-3xl font-bold'>{job.title}</h2>
                <div className='flex items-center  gap-2 mt-2 '>
                    <p>{jobType}</p>
                    <p>{applicationDeadline}</p>
                </div>

            </div>
            <div className=' space-y-4'>
                <h3 className='text-2xl'>Job Description</h3>
                <p>{description}</p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className='bg-blue-100 py-2 px-4 text-primary font-medium rounded-xl hover:bg-primary hover:text-white text-sm'
                >Apply</motion.button>
            </div>

        </div>
    );
};

export default JobDetails;