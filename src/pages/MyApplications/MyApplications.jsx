import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { title } from 'motion/react-client';
import axios from 'axios';

const MyApplications = () => {
    const {user} = useAuth();
    const [jobs, setJobs] = useState([])


    useEffect(()=>{
        fetch(`http://localhost:5000/jobs-application?email=${user.email}`)
        .then(res=>res.json())
        .then(data =>{
            setJobs(data);
        })
       
        
    },[user.email])

    return (
        <>
        <div className='w-11/12 xl:w-8/12 mx-auto mt-20'>
            <h2 className="text-3xl">My Application:{jobs.length}</h2>
            <table className='w-full mt-20'>
            <tr className='bg-gray-100 h-16 font-bold'>
                <td>sl</td>
                <td>Job Title</td>
                <td>Company</td>
                <td>Location</td>
                <td>Logo</td>
                <td>Action</td>

            </tr>
            {
                jobs.map((job, idx)=><tr>
                    <td>{idx+1}</td>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                    <td><img src={job.company_logo} alt="" /></td>
                    <td><button>Delete</button></td>
                </tr>)
            }
        </table>
        </div>
       
        </>
    );
};

export default MyApplications;