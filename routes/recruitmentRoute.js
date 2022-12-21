const express = require('express');
const router = express.Router();

const recruitmentController= require('../controllers/recruitmentController');
const jobOfferController = require("../controllers/jobOfferController");

router.get('/', recruitmentController.showRecruitmentList);
router.get('/add', recruitmentController.showAddRecruitmentForm);
router.get('/details/:recId', recruitmentController.showRecruitmentDetails);
router.get('/edit/:recId', recruitmentController.showRecruitmentEdit);

router.post('/add', recruitmentController.addRecruitment);
router.post('/edit', recruitmentController.updateRecruitment);
router.get('/delete/:recId', recruitmentController.deleteRecruitment);
module.exports = router;