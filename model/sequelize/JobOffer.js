const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const JobOffer = sequelize.define('JobOffer', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    position: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    minSalary: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    maxSalary: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = JobOffer;
