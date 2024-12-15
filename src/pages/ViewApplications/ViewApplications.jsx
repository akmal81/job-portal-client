import { tr } from 'motion/react-client';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id)=>{
       console.log(e.target.value, id); 
       const data ={
           status : e.target.value
        }
        fetch(`http://localhost:5000/job-applications/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div className='w-11/12 xl:w-8/12 mx-auto mt-40'>
            ViewApplications {applications.length}
            <table className='w-full'>
                <thead>
                <tr>
                    <th>Sl</th>
                    <th>Resume</th>
                    <th></th>
                    <th>Action</th>
                </tr>
                </thead>
               <tbody>
                {
                    applications.map((a, i)=>
                        <tr key={a._id}>
                            <td>{i+1}</td>
                            <td>{a.resume}</td>
                            <td>{a.applicant_email}</td>
                            <td>
                                <select name="" id=""
                                onChange={(e)=>handleStatusUpdate(e, a._id)}
                                    defaultValue={a.status ||'Change Status'}
                                >

                                    <option disabled>Change Status</option>
                                    <option>Under Review</option>
                                    <option>Set interview</option>
                                    <option>Hired</option>
                                    <option>Rejected</option>
                                    
                                </select>
                            </td>
                        </tr>
                        
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default ViewApplications;