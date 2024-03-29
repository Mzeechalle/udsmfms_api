//importing the node modules
const mongoose = require('mongoose');
const chalk = require('chalk');

const properties = require('./properties');

//importing the database
var dbURL = properties.DB;

//defining console text colors
var connected = chalk.bold.cyan;
var error = chalk.bold.red;
var disconnected = chalk.bold.yellow;
var termination = chalk.bold.magenta;

//handling database connection
module.exports = function(){

    const databaseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    };

    //connecting to the database url
    mongoose.Promise = global.Promise;
    mongoose.connect(dbURL);

    //on connection event
    mongoose.connection.on('connected', (e) => {
        console.log(connected("Mongoose default connection is open to : ", dbURL));
    });

    //on error event
    mongoose.connection.on('error', (e) => {
        console.log(error("Mongoose default connection has occured : " + e + "error"));
    });

    //on disconnection event
    mongoose.connection.on('disconnected', () => {
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log(termination("Mongoose default connection is terminated"));
            process.exit(0);
        });
    });
}