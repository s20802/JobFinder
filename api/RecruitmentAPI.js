const RecruitmentRepository = require('../repository/sequelize/RecruitmentRepository');

exports.getRecruitments = (req, res, next) => {
    RecruitmentRepository.getRecruitments()
        .then(recruitments => {
            res.status(200).json(recruitments);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getRecruitmentById = (req, res, next) => {
    const recId= req.params.recId;
    RecruitmentRepository.getRecruitmentById(recId)
        .then(rec => {
            if(!rec) {
                res.status(404).json({
                    message: 'Account with id: ' + recId + ' not found'
                })
            } else {
                res.status(200).json(rec);
            }
        });
};

exports.createRecruitment = (req, res, next) => {
    RecruitmentRepository.createRecruitment(req.body)
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

exports.updateRecruitment = (req, res, next) => {
    const recId = req.params.recId;
    RecruitmentRepository.updateRecruitment(recId, req.body)
        .then(result => {
            req.status(200).json({message: 'Recruitments updated.', rec: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteRecruitment = (req, res, next) => {
    const recId = req.params.recId;
    RecruitmentRepository.deleteRecruitment(recId)
        .then(result => {
            res.status(200).json({message: 'Removed recruitment', rec:result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};