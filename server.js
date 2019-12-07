
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table")

// CREATING MY CONNECTION TO SQL DATABASE
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Damned13",
    database: "employee_DB"
})