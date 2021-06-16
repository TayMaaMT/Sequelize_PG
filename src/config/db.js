const { Sequelize } = require('sequelize');
const db = new Sequelize('postgres://dnwvcyhc:CpXJ5tDamkwt_UIVQYhcktsXQc2qZhRp@batyr.db.elephantsql.com/dnwvcyhc', {
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;