import Axios from "../api/Axios";
import { useState,useEffect } from "react";
import JobCard from "../components/JobCard";

const JOB_URL = '/jobs/get-jobs'

export default function JobOpenings(){
    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        const getJobs = async () =>{
            try{
                const response = await Axios.get(JOB_URL)
                const jobs =response.data.jobs;
                setJobs(jobs);
            }
            catch(err){
                console.log(err);
            }
        }
        getJobs();
    },[]);

    return(
        <div className="bg-gradient-to-br from-[#0d0e23] from-20% to-[#6224A8] bg-gradient-to-bl from-[#0d0e23] from=20% to-[#6224A8] h-full flex flex-col items-center h-full w-full text-white flex flex-col items-center">
            <h1 className="mt-[70px] text-4xl">Current Job Listings</h1>
            <div className="h-4/5  p-[20px] flex flex-col items-center w-1/2 rounded-lg space-y-6">
            {
                jobs.map((job)=>{
                    return(
                        <JobCard jobTitle={job.jobTitle} jobCategory={job.jobCategory} positionType={job.positionType} location={job.location} reqId={job.reqId} />
                    )
                })
            }
            </div>
            
        </div>
    )
}