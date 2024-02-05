const Job = require('../models/Job');
const asyncHandler = require('express-async-handler');
const crypto = require('crypto');

const getJobs = asyncHandler(async(req,res)=>{
    const jobs = await Job.find({});
    console.log(jobs)
    res.status(200).json({jobs});
  
});

const createJob = asyncHandler(async(req,res)=>{
    const {jobTitle,jobCategory,positionType,location,description} = req.body;

    let uuid = crypto.randomUUID(); 
    const truncateId = uuid.slice(0,10);

    const jobObject = {jobTitle:jobTitle,jobCategory:jobCategory,positionType:positionType,location:location,reqId:truncateId,description:description};
    const job = await Job.create(jobObject);

    if(job){
        return res.status(200).json({message:`New user job created`})
    } else{
        return res.status(400).json({message:'Invalid data received'})
    }
  
});


module.exports = {
    getJobs,
    createJob

}