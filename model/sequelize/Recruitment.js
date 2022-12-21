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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field is required!"
            },
        }
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field is required!"
            },
            len: {
                args: [2, 60],
                msg: "Field should contain from 2 to 60 characters!"
            }
        }
    },
    notes: {
        type: Sequelize.TEXT,
        allowNull: true,
        validate: {
            len: {
                args: [0, 255],
                msg: "Field should contain a maximum of 255 characters!"
            }
        },
    }
});

module.exports = Recruitment;
