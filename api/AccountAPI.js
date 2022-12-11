const AccountRepository = require('../repository/sequelize/AccountRepository');

exports.getAccounts = (req, res, next) => {
    AccountRepository.getAccounts()
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAccountById = (req, res, next) => {
    const accId = req.params.accId;
    AccountRepository.getAccountById(accId)
        .then(acc => {
            if(!acc) {
                res.status(404).json({
                    message: 'Account with id: ' + accId + ' not found'
                })
            } else {
                res.status(200).json(acc);
            }
        });
};

exports.createAccount = (req, res, next) => {
    AccountRepository.createAccount(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateAccount = (req, res, next) => {
    const accId = req.params.accId;
    AccountRepository.updateAccount(accId, req.body)
        .then(result => {
            req.status(200).json({message: 'Accounts updated.', acc: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteAccount = (req, res, next) => {
    const accId = req.params.accId;
    AccountRepository.deleteAccount(accId)
        .then(result => {
            res.status(200).json({message: 'Removed account', acc:result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};