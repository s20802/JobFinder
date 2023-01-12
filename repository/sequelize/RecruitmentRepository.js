const Sequelize = require('sequelize');

const Recruitment = require('../../model/sequelize/Recruitment');
const Account = require('../../model/sequelize/Account');
const JobOffer = require('../../model/sequelize/JobOffer');

exports.getRecruitments = () => {
    return Recruitment.findAll({include: [
            {
                model: Account,
                as: 'account'
            },
            {
                model: JobOffer,
                as: 'jobOffer'
            }]
    });
};

exports.getRecruitmentById = (recId) => {
    return Recruitment.findByPk(recId, {
        include: [
            {
                model: Account,
                as: 'account'
            },
            {
                model: JobOffer,
                as: 'jobOffer'
            }]
    });
};

exports.createRecruitment = (data) => {
    console.log(JSON.stringify(data));

    return Recruitment.create({

        status: data.status,
        dateOpened: data.dateOpened,
        notes: data.notes,
        acc_id: data.acc_id === "" ? null : data.acc_id,
        job_id: data.job_id === "" ? null : data.job_id
    })
};

exports.updateRecruitment = (recId, data) => {
    return Recruitment.update(data, {where: {_id: recId}});
};

exports.deleteRecruitment = (recId) => {
    return Recruitment.destroy({
        where: {_id: recId}
    });
};

exports.deleteManyRecruitments = (recIds) => {
    return Recruitment.find({_id: {[Sequelize.Op.in]: recIds}});
}