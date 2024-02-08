const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
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
        type:Date
    },
    job:{
        type:Object
    },
    status:{
        type:String
    },
    id:{
        type:String
    }
 

});

module.exports = mongoose.model('application', applicationSchema);