import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const ApplyJob = () => {
    const { user } = useAuth()
    const { id } = useParams();
    const navigate = useNavigate()
    console.log(id, user); // 

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume); //

        if (!linkedIn || !github || !resume){
            Swal.fire('Pleas fill all field');
            return;
        }

            const jobApplication = {
                job_id: id,
                applicant_email: user.email,
                linkedIn,
                github,
                resume
            }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Application submit successful!!! ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')

                }
            })
    }

    return (
        <div className='w-11/12 xl:w-8/12 mx-auto mt-40'>
            <form onSubmit={submitJobApplication} className='w-2/3 mx-auto space-y-4'>
                <div className='space-y-2'>
                    <label> LinkedIn Url</label>
                    <input type="url" name='linkedIn' placeholder='LinkedIn url' className='w-full py-3 border rounded-lg px-4' />
                </div>
                <div className='space-y-2'>
                    <label> Github Url</label>
                    <input type="url" name='github' placeholder='Github Url' className='w-full py-3 border rounded-lg px-4' />
                </div>
                <div className='space-y-2'>
                    <label> Resume Url</label>
                    <input type="url" name='resume' placeholder='Resume Url' className='w-full py-3 border rounded-lg px-4' />
                </div>
                <div>
                    <input type='submit' value={'Apply'} className='bg-primary py-2 px-4 w-fit text-white font-medium rounded-xl' />
                </div>
            </form>
        </div>
    );
};

export default ApplyJob;