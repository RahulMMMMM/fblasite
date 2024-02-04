const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');



router.route('/login')
    .post(authController.login)

router.route('/logout')
    .post(authController.logout)
    
router.route('/current-user')
    .get(authController.currentUser)

router.route('/signup')
    .post(authController.createUser)

router.route('/update-user')
    .post(authController.updateUser)

module.exports = router
