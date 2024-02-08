const Application = require('../models/Application');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Job = require('../models/Job');
const crypto = require('crypto');

const createApplication = asyncHandler(async(req,res)=>{
    const {data} = req.body;
    const {token} = req.cookies
    const today = new Date();

    if(token===undefined){
        return res.status(500).json({message:'Unauthorized user'})
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const skills = data.skills.split(',');
    const experience = data.workExperience.split(',');

    const job = await Job.findOne({reqId:data.jobTitle}).exec()

    let uuid = crypto.randomUUID(); 
    const truncateId = uuid.slice(0,10);

    ApplicationObject = {
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
        experience:experience,
        skills:skills,
        coverLetter:data.coverLetter,
        applicantId:decoded.id,
        applicationDate:today,
        job:job,
        status: "Under Review",
        id:truncateId
    }

    const application = await Application.create(ApplicationObject);


    if(application){
        return res.status(200).json({message:'Successfully Applied'})
    } else{
        return res.status(400).json({message:'Unable to submit'})
    } 
    
    

})

const getApplications = asyncHandler(async(req,res)=>{
    const {token} = req.cookies

    if(token===undefined){
        return res.status(500).json({message:'Unauthorized user'})
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const applications = await Application.find({applicantId:decoded.id}).exec();
    

    if(applications){
        return res.status(200).json({applications:applications})
    }
    return res.status(400).json({message: 'No orders found'})

})


module.exports = {
    createApplication,
    getApplications
}