let Sequelize = require('sequelize');
let sequelize = new Sequelize("project2", "root", "root",{

    host: "localhost",
    dialect: "mysql",
    pool : {
        max: 5,
        min: 0,
        idle: 10000000
    }
});


module.exports = sequelize;