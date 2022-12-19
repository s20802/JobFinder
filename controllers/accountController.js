const AccountRepository = require('../repository/sequelize/AccountRepository');

exports.showAccountList = (req, res, next) => {
    AccountRepository.getAccounts()
        .then(accs => {
            res.render('pages/account/list', {
                accs: accs,
                navLocation: 'acc'
            });
        });
}

exports.showAddAccountForm = (req, res, next) => {
    res.render('pages/account/form', {
        acc: {},
        formMode: 'createNew',
        pageTitle: 'New account',
        formAction: '/accounts/add',
        btnLabel: 'Add',
        navLocation: 'acc',
        buttonCSS: 'submit',
        validationErrors: []
    });
}

exports.showAccountDetails = (req, res, next) => {
    const accId = req.params.accId;
    AccountRepository.getAccountById(accId)
        .then(acc => {
            res.render('pages/account/form', {
                acc: acc,
                formMode: 'showDetails',
                pageTitle: 'Account details',
                formAction: '',
                navLocation: 'acc',
                buttonCSS: 'edit',
                validationErrors: []
            });
        });
}

exports.showAccountEdit = (req, res, next) => {
    const accId = req.params.accId;
    AccountRepository.getAccountById(accId)
        .then(acc => {
            res.render('pages/account/form', {
                acc: acc,
                formMode: 'edit',
                pageTitle: 'Edit account',
                btnLabel: 'Edit',
                formAction: '/accounts/edit',
                navLocation: 'acc',
                buttonCSS: 'edit',
                validationErrors: []
            });
        });
}

exports.addAccount = (req, res, next) => {
    const accData = {...req.body};
    AccountRepository.createAccount(accData)
        .then(result => {
            res.redirect('/accounts')
        });
}

exports.updateAccount = (req, res, next) => {

    const accId = req.body._id;
    const accData = { ...req.body};
    AccountRepository.updateAccount(accId, accData)
        .then(result => {
            res.redirect('/accounts');
        });
};

exports.deleteAccount = (req, res, next) => {
    const accId = req.params.accId;
    AccountRepository.deleteAccount(accId)
        .then( () => {
            res.redirect('/accounts');
        });
};