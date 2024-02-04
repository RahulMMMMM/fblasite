const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');



router.route('/create-application')
    .post(applicationController.createApplication)


module.exports = router
