import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddJob = () => {
    const navigate = useNavigate()
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData)
        console.log(initialData);

        // min max currency alada kore ak ta object bananot and shob data dia akta object banano
        const { min, max, currency, ...newJob } = initialData; // min max currency total data theke alada kora newjob er moddhe shob data gula newa
        newJob.requirements = newJob.requirements.split('\n'); // get textarea value in a new line
        newJob.responsibilities = newJob.responsibilities.split('\n'); // get textarea value in a new line
        newJob.salaryRange = { min, max, currency };
        console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Job Application submit successful!!! ",
                    showConfirmButton: false,
                    timer: 1500
                });}
            })
    }
    return (
        <div className='w-11/12 xl:w-8/12 mx-auto space-y-10 my-32'>
            <h2 className="text-2xl text-center">Add Job</h2>

            <div>
                <form onSubmit={handleAddJob} className='space-y-6 w-11/12 mx-auto xl:w-8/12'>
                    {/* job title */}
                    <div className='flex flex-col gap-2'>
                        <label>Job title*</label>
                        <input
                            type="text"
                            name='title'
                            placeholder='Job title'
                            className='border py-3 px-4 rounded-xl'
                            required />
                    </div>
                    {/* job location */}
                    <div className='flex flex-col gap-2'>
                        <label>Job location*</label>
                        <input
                            type="text"
                            name='location'
                            placeholder='Job location'
                            className='border py-3 px-4 rounded-xl'
                            required />
                    </div>
                    {/* job Type */}
                    <div className='flex flex-col gap-2'>
                        <label>Job Type*</label>
                        <select
                        defaultValue='Job Type'
                            name='jobType'
                            className='border py-3 px-4 rounded-xl'
                        >
                            <option disabled>Pick a job type</option>
                            <option>Full-Time</option>
                            <option>Inturn</option>
                            <option>Part Time</option>
                            <option>Onsite</option>
                            <option>Hybrid</option>
                        </select>
                    </div>
                    {/* job category */}
                    <div className='flex flex-col gap-2'>
                        <label>Job Category*</label>
                        <select
                        defaultValue='Job Category'
                            name='category'
                            className='border py-3 px-4 rounded-xl'
                        >
                            <option disabled>Pick a job Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Technology</option>
                            <option>Human Resource</option>
                        </select>
                    </div>
                    {/* application deadline */}
                    <div className='flex flex-col gap-2'>
                        <label>Application deadline*</label>
                        <input
                            type="date"
                            name='applicationDeadline'
                            className='border py-3 px-4 rounded-xl'
                            required />
                    </div>
                    {/* salary range */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label>Minimum*</label>
                            <input
                                type="number"
                                name='min'
                                placeholder='Min'
                                className='border py-3 px-4 rounded-xl'
                                required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Maximum*</label>
                            <input
                                type="number"
                                name='max'
                                placeholder='Max'
                                className='border py-3 px-4 rounded-xl'
                                required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Currency*</label>
                            <select
                                name='currency'
                                defaultValue='Currency'
                                className='border py-3 px-4 rounded-xl'
                            >
                                <option disabled>Currency</option>
                                <option>BDT tk</option>
                                <option>Dollar $</option>
                                <option>Euro</option>
                                <option>Real</option>
                                <option>Ringit</option>
                            </select>
                        </div>
                    </div>
                    {/* Job Description */}
                    <div className='flex flex-col gap-2'>
                        <label>Job Description*</label>
                        <textarea
                            type="text"
                            name='description'
                            placeholder='Description'
                            className='border py-3 px-4 rounded-xl'
                            required ></ textarea>
                    </div>
                    {/* company name */}
                    <div className='flex flex-col gap-2'>
                        <label>Company name*</label>
                        <input
                            type="text"
                            name='company'
                            placeholder='Company Name'
                            className='border py-3 px-4 rounded-xl'
                            required />
                    </div>
                    {/* requirements */}
                    <div className='flex flex-col gap-2'>
                        <label>Job Requirements*</label>
                        <textarea
                            type="text"
                            name='requirements'
                            placeholder='Job Requirements'
                            className='border py-3 px-4 rounded-xl'
                            required ></ textarea>
                    </div>
                    {/* responsibilities */}
                    <div className='flex flex-col gap-2'>
                        <label>Job Responsibilities*</label>
                        <textarea
                            type="text"
                            name='responsibilities'
                            placeholder='Job Responsibilities'
                            className='border py-3 px-4 rounded-xl'
                            required ></ textarea>
                    </div>
                    {/* status */}
                    <div className='flex flex-col gap-2'>
                        <label>Status*</label>
                        <input
                            type="text"
                            name='status'
                            placeholder='Status'
                            className='border py-3 px-4 rounded-xl'
                            required />
                    </div>
                    {/* hr email */}
                    <div className='flex flex-col gap-2'>
                        <label>Hr Email*</label>
                        <input
                            type="email"
                            name='hr_email'
                            placeholder='Hr Email'
                            className='border py-3 px-4 rounded-xl'
                            required />
                    </div>
                    {/* hr name */}
                    <div className='flex flex-col gap-2'>
                        <label>Hr name*</label>
                        <input
                            type="text"
                            name='hr_name'
                            placeholder='Hr Name'
                            className='border py-3 px-4 rounded-xl'
                            required />
                    </div>
                    {/* logo */}
                    <div className='flex flex-col gap-2'>
                        <label>Company Logo*</label>
                        <input
                            type="url"
                            name='company_logo'
                            placeholder='Company Logo Url'
                            className='border py-3 px-4 rounded-xl'
                            required />
                    </div>
                    {/* submit button */}
                    <div className='flex flex-col gap-2'>
                        <label>Company Logo*</label>
                        <input
                            type="submit"
                            value='Add Job'
                            className='border py-3 px-4 rounded-xl bg-primary text-white font-bold'
                            required />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;
