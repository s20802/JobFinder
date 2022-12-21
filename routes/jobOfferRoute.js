const express = require('express');
const router = express.Router();

const jobOfferController= require('../controllers/jobOfferController');
const accountController = require("../controllers/accountController");

router.get('/', jobOfferController.showJobOfferList);
router.get('/add', jobOfferController.showAddJobOfferForm);
router.get('/details/:jobId', jobOfferController.showJobOfferDetails);
router.get('/edit/:jobId', jobOfferController.showJobOfferEdit);

router.post('/add', jobOfferController.addJobOffer);
router.post('/edit', jobOfferController.updateJobOffer);
router.get('/delete/:jobId', jobOfferController.deleteJobOffer);

module.exports = router;