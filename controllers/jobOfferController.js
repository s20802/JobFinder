const JobOfferRepository = require('../repository/sequelize/JobOfferRepository');

exports.showJobOfferList = (req, res, next) => {
    JobOfferRepository.getJobOffers()
        .then(jobs => {
            res.render('pages/job_offers/list', {
                jobs: jobs,
                navLocation: 'job'
            });
        });
}

exports.showAddJobOfferForm = (req, res, next) => {
    res.render('pages/job_offers/form', {
        job: {},
        pageTitle: 'New job',
        formMode: 'createNew',
        btnLabel: 'Add',
        formAction: '/job-offers/add',
        navLocation: 'job',
        buttonCSS: 'submit',
        validationErrors: []
    });
}

exports.showJobOfferDetails = (req, res, next) => {
    const jobId = req.params.jobId;
    JobOfferRepository.getJobOfferById(jobId)
        .then(job => {
            res.render('pages/job_offers/form', {
                job: job,
                formMode: 'showDetails',
                pageTitle: 'Job details',
                formAction: '',
                navLocation: 'job',
                buttonCSS: 'edit',
                validationErrors: []
            });
        });
}

exports.showJobOfferEdit = (req, res, next) => {
    const jobId = req.params.jobId;
    JobOfferRepository.getJobOfferById(jobId)
        .then(job => {
            res.render('pages/job_offers/form', {
                job: job,
                formMode: 'edit',
                pageTitle: 'Edit job',
                btnLabel: 'Edit',
                formAction: '/job-offers/edit',
                navLocation: 'job',
                buttonCSS: 'edit',
                validationErrors: []
            });
        });
}