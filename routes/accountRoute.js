const express = require('express');
const router = express.Router();

const accountController= require('../controllers/accountController');

router.get('/', accountController.showAccountList);
router.get('/add', accountController.showAddAccountForm);
router.get('/details/:accId', accountController.showAccountDetails);
router.get('/edit/:accId', accountController.showAccountEdit);

router.post('/add', accountController.addAccount);
router.post('/edit', accountController.updateAccount);
router.get('/delete/:accId', accountController.deleteAccount);

module.exports = router;