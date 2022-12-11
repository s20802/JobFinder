const JobOfferRepository = require('../repository/sequelize/JobOfferRepository');

exports.getJobOffers = (req, res, next) => {
    JobOfferRepository.getJobOffers()
        .then(jobOffers => {
            res.status(200).json(jobOffers);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getJobOfferById = (req, res, next) => {
    const jobId = req.params.jobId;
    JobOfferRepository.getJobOfferById(jobId)
        .then(job => {
            if(!job) {
                res.status(404).json({
                    message: 'Job offer with id: ' +jobId+ ' not found'
                })
            } else {
                res.status(200).json(job);
            }
        });
};

exports.createJobOffer = (req, res, next) => {
    JobOfferRepository.createJobOffer(req.body)
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

exports.updateJobOffer = (req, res, next) => {
    const jobId = req.params.jobId;
    JobOfferRepository.updateJobOffer(jobId, req.body)
        .then(result => {
            req.status(200).json({message: 'Job offers updated.', job: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteDeleteJobOffer = (req, res, next) => {
    const jobId= req.params.jobId;
    JobOfferRepository.deleteJobOffer(jobId)
        .then(result => {
            res.status(200).json({message: 'Removed job offer', job:result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};