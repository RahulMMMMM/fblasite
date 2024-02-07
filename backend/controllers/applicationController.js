const Application = require('../models/Application');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Job = require('../models/Job');

const createApplication = asyncHandler(async(req,res)=>{
    const {data} = req.body;
    const {token} = req.cookies
    const today = new Date();

    if(token===undefined){
        return res.status(500).json({message:'Unauthorized user'})
    }
    console.log(data)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const skills = data.skills.split(',');

    const job = await Job.findOne({reqId:data.jobTitle}).exec()

    ApplicationObject = {
        job: job,
        info:{
            firstname:data.firstName,
            lastName:data.lastName,
            email:data.email
        },
        education:{
            school:data.school,
            degree:data.degree,
            major:data.major,
            gradYear:data.gradYear
        },
        experience:data.experience,
        skills:skills,
        coverLetter:data.coverLetter,
        applicantId:decoded.id,
        applicationDate:today
    }
    console.log(ApplicationObject)

    const application = await Application.create(ApplicationObject);

    console.log(application)

    if(application){
        return res.status(200).json({message:'Successfully Applied'})
    } else{
        return res.status(400).json({message:'Unable to submit'})
    } 
    
    

})


module.exports = {
    createApplication

}