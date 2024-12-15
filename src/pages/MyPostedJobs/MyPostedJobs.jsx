import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const {user} =useAuth();
  console.log(user.email);
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then((res) => res.json())
        .then((data)=>{
            setJobs(data)
            console.log(data);
        })
    },[user.email])
    return (
        <div className='w-11/12 xl:w-8/12 mx-auto mt-40'>
            <h2 className="text-3xl">My Posted Jobs: {jobs.length} </h2>

            <table className='w-full'>
                <tr>
                    <th>Sl</th>
                    <th>Title</th>
                    <th>DeadLine</th>
                    <th>Applied count</th>
                    <th>View Applications</th>
    
                </tr>
                {
                    jobs.map((job, idx)=>
                    <tr className='h-16'>
                        <td>{idx+1}</td>
                        <td>{job.title}</td>
                        <td className='text-center'>{job.applicationDeadline}</td>
                        <td className='text-center'>{job.applicationCount}</td>
                        <td><Link to={`/viewApplications/${job._id}`}  className='bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg'> View Application </Link></td>
                    </tr>
                    )
                }
            </table>
        </div>
    );
};

export default MyPostedJobs;