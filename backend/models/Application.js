const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    jobTitle:{
        Type:String
    },
    info:{
        type:Object,
        
    },
    education:{
        type:Object,
       
    },
    experience:{
        type:Array,

    },
    skills:{
        type:Array,
    
    }, 
    coverLetter:{
        type:String
    },
    applicantId:{
        type:String
    },
 

});

module.exports = mongoose.model('application', applicationSchema);