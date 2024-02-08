const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');



router.route('/create-application')
    .post(applicationController.createApplication)

router.route('/get-applications')
    .get(applicationController.getApplications)

module.exports = router
