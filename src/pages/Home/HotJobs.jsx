import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [hotJobs, setHotJobs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then((res)=>res.json())
        .then((data)=>{
            setHotJobs(data);
        })
    },[])
console.log(hotJobs);
    return (
            <div className='w-11/12 xl:w-8/12 mx-auto mt-32 space-y-10'>
            <h2 className='text-3xl font-bold border-b'>Hot jobs</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
          {
              hotJobs.map((job)=><HotJobCard key={job._id} job={job}></HotJobCard>)
            }
        </div>
            </div>
    );
};

export default HotJobs;