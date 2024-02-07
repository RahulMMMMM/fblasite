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
        <div className="bg-[#00000f] h-full text-white flex flex-col items-center">
            <div className="h-1/5 flex flex-col items-center ">
                <h1 className="mt-[70px] text-4xl">Current Job Listing</h1>
            </div>
            <div className="h-4/5 bg-[#0d0e23] p-[20px] flex flex-col items-center w-full rounded-lg">
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