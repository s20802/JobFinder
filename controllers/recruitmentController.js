const RecruitmentRepository = require('../repository/sequelize/RecruitmentRepository');
const AccountRepository = require('../repository/sequelize/AccountRepository');
const JobOfferRepository = require('../repository/sequelize/JobOfferRepository');

exports.showRecruitmentList = (req, res, next) => {
    RecruitmentRepository.getRecruitments()
        .then(recs => {
            res.render('pages/recruitment/list', {
                recs: recs,
                navLocation: 'rec'
            });
        });
}

exports.showAddRecruitmentForm = (req, res, next) => {
    let allAccs, allJobs;

    AccountRepository.getAccounts()
        .then(accs => {
            allAccs = accs;
            return JobOfferRepository.getJobOffers();
        })
        .then(jobs => {
            allJobs = jobs;

            res.render('pages/recruitment/form', {
                rec: {},
                formMode: 'createNew',
                allAccs: allAccs,
                allJobs: allJobs,
                pageTitle: 'New recruitment',
                btnLabel: 'Add recruitment',
                formAction: '/recruitments/add',
                navLocation: 'rec',
            });
        });
}
exports.showRecruitmentDetails = (req, res, next) => {
    const recId = req.params.recId;
    let allAccs, allJobs, allRecs;

    RecruitmentRepository.getRecruitments()
        .then(recs => {
            allRecs = recs;
            return AccountRepository.getAccounts();
        })
        .then(accs => {
            allAccs = accs;
            return JobOfferRepository.getJobOffers();
        })
        .then(jobs => {
            allJobs = jobs;
            return RecruitmentRepository.getRecruitmentById(recId);
        }).then(rec => {
        res.render('pages/recruitment/form', {
            rec: rec,
            formMode: 'showDetails',
            pageTitle: 'Recruitment details',
            formAction: '/recruitment/details',
            navLocation: 'rec',
            allAccs: allAccs,
            allJobs: allJobs,
            allRecs: allRecs,
            validationErrors: []
        });
    });
}

exports.showRecruitmentEdit = (req, res, next) => {
    const recId = req.params.recId;
    let allAccs, allJobs, allRecs;

    RecruitmentRepository.getRecruitments()
        .then(recs => {
            allRecs = recs;
            return AccountRepository.getAccounts();
        })
        .then(accs => {
            allAccs = accs;
            return JobOfferRepository.getJobOffers();
        })
        .then(jobs => {
            allJobs = jobs;
            return RecruitmentRepository.getRecruitmentById(recId);
        }).then(rec => {
        res.render('pages/recruitment/form', {
            rec: rec,
            formMode: 'edit',
            pageTitle: 'Edit recruitment',
            btnLabel: 'Edit',
            formAction: '/recruitments/edit',
            navLocation: 'rec',
            allAccs: allAccs,
            allJobs: allJobs,
            allRecs: allRecs,
            validationErrors: []
        });
    });
}

