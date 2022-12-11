const Account = require("../../model/sequelize/Account");
const Recruitment = require("../../model/sequelize/Recruitment");
const JobOffer = require("../../model/sequelize/JobOffer");

exports.getJobOffers = () => {
    return JobOffer.findAll();
};

exports.getJobOfferById = (jobId) => {
    return JobOffer.findByPk(jobId,
        {
            include: [{
                model: Recruitment,
                as: 'recruitments',
                include: [{
                    model: Account,
                    as: 'account'
                }]
            }]
        });
};

exports.createJobOffer = (data) => {
    return JobOffer.create({
        companyName: data.companyName,
        position: data.position,
        description: data.description,
        location: data.location,
        minSalary: data.minSalary,
        maxSalary: data.maxSalary,
    });
};

exports.updateJobOffer = (jobId, jobData) => {
    const companyName = jobData.companyName;
    const position = jobData.position;
    const description = jobData.description;
    const location = jobData.location;
    const minSalary = jobData.minSalary;
    const maxSalary = jobData.maxSalary;
    return JobOffer.update(jobData, {where: {_id: jobId }});
};

exports.deleteJobOffer = (jobId) => {
    return JobOffer.destroy({
        where: {_id: jobId}
    });
};