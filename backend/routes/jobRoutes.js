const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');



router.route('/get-jobs')
    .get(jobController.getJobs)

router.route('/create-job')
    .post(jobController.createJob)

module.exports = router
