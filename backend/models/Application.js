const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    jobTitle:{
        Type:Object
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
    applicationDate:{
        tpye:Date
    }
 

});

module.exports = mongoose.model('application', applicationSchema);