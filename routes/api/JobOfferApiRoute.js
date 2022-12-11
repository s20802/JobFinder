const express = require('express');
const router = express.Router();

const jobApiController = require('../../api/JobOfferAPI');

router.get('/', jobApiController.getJobOffers);
router.get('/:jobId', jobApiController.getJobOfferById);
router.post('/', jobApiController.createJobOffer);
router.put('/:jobId', jobApiController.updateJobOffer);
router.delete('/:jobId', jobApiController.deleteDeleteJobOffer);

module.exports = router;