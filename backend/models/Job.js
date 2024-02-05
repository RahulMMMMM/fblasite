const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    jobTitle:{
        type:String
    },
    jobCategory:{
        type:String
    },
    positionType:{
        type:String
    },
    location:{
        type:String
    },
    reqId:{
        type:String
    },
    description:{
        type:String
    }
 

});

module.exports = mongoose.model('job', jobSchema);