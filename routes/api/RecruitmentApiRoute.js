const express = require('express');
const router = express.Router();

const recApiController = require('../../api/RecruitmentAPI');

router.get('/', recApiController.getRecruitments);
router.get('/:recId', recApiController.getRecruitmentById);
router.post('/', recApiController.createRecruitment);
router.put('/:recId', recApiController.updateRecruitment);
router.delete('/:recId', recApiController.deleteRecruitment);

module.exports = router;