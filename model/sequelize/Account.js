const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');
const {now} = require("sequelize/lib/utils");
const Account = sequelize.define('Account', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Field cannot be empty!"
            },
            len: {
                args: [2, 60],
                msg: "Field should contain from 2 to 60 characters!"
            },
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field cannot be empty!"
            },
            len: {
                args: [8, 14],
                msg: "Field should contain from 8 to 14 characters!"
            },
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Field cannot be empty!"
            },
            isEmail: {
                msg: "Field must contain email!"
            },
            len: {
                args: [5, 60],
                msg: "Field should contain from 5 to 60 characters!"
            },

        }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field cannot be empty!"
            },
            len: {
                args: [2, 60],
                msg: "Field should contain from 2 to 60 characters!"
            },
        }
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field cannot be empty!"
            },
            len: {
                args: [2, 60],
                msg: "Field should contain from 2 to 60 characters!"
            },
        }
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field cannot be empty!"
            },
            len: {
                args: [2, 60],
                msg: "Field should contain from 2 to 60 characters!"
            },
        }
    },
    creationDate: {
        type: Sequelize.DATE,
        validate: {
            isPastDate(value) {
                if (value >= new Date()) {
                    throw new Error('Start date must be in the past');
                }
            }
        }
    }
});

module.exports = Account;