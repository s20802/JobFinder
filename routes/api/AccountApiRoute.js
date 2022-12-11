const express = require('express');
const router = express.Router();

const accApiController = require('../../api/AccountAPI');

router.get('/', accApiController.getAccounts);
router.get('/:accId', accApiController.getAccountById);
router.post('/', accApiController.createAccount);
router.put('/:accId', accApiController.updateAccount);
router.delete('/:accId', accApiController.deleteAccount);

module.exports = router;