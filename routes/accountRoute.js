const express = require('express');
const router = express.Router();

const accountController= require('../controllers/accountController');

router.get('/', accountController.showAccountList);
router.get('/add', accountController.showAddAccountForm);
router.get('details/::accId', accountController.showAccountDetails);

module.exports = router;