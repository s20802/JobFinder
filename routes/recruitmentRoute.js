const express = require('express');
const router = express.Router();

const recruitmentController= require('../controllers/recruitmentController');

router.get('/', recruitmentController.showRecruitmentList);
router.get('/add', recruitmentController.showAddRecruitmentForm);
router.get('details/::recId', recruitmentController.showRecruitmentDetails);

module.exports = router;