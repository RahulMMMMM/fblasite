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
        <div>
            <h1>Current Job Listings</h1>
            {
                jobs.map((job)=>{
                    return(
                        <JobCard jobTitle={job.jobTitle} jobCategory={job.jobCategory} positionType={job.positionType} location={job.location} reqId={job.reqId} />
                    )
                })
            }
        </div>
    )
}