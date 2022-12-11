const express = require('express');
const router = express.Router();

const jobOfferController= require('../controllers/jobOfferController');

router.get('/', jobOfferController.showJobOfferList);
router.get('/add', jobOfferController.showAddJobOfferForm);
router.get('/details/:jobId', jobOfferController.showJobOfferDetails);
router.get('/edit/:jobId', jobOfferController.showJobOfferEdit);

module.exports = router;