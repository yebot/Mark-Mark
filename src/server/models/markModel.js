const dotenv = require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const PG_URI2 = 'postgres://vxvkhwivjxnbgm:c6e5e4a25da6f51ae1abf61f7c775d2fbf0ee533aac3f6d8a4c1b570cdaad334@ec2-34-230-115-172.compute-1.amazonaws.com:5432/dakde32udgr81d';

//const PG_URI = `postgres://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`;

// CONNECT
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
  host: process.env.DBHOST,
  dialect: 'postgres',
});

(async function connect(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

//const pool = new Pool({
//  connectionString: PG_URI
//});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/images/schema.png?raw=true

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
//module.exports = {
//  query: (text, params, callback) => {
//    console.log('executed query', text);
//    return pool.query(text, params, callback);
//  }
//};

module.exports = { sequelize };