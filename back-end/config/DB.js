
require("dotenv").config;
const mysql = require("mysql2");

const sqlDB = mysql.createPool({
    host : "localhost",
    user : "root",
    database : "PROJET_2CP_TEAM02",
    password : "bado@123"
});
module.exports = sqlDB.promise();