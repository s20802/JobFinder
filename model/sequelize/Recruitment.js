const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Recruitment = sequelize.define('Recruitment', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dateOpened: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    notes: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Recruitment;
