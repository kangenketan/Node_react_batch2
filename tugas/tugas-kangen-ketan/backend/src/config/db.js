require("dotenv").config();
const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  host: process.env.hostname,
  user: process.env.username,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
});

connectionPool.getConnection(function (err) {
  if (err) {
    throw err;
  }
});

module.exports = { connectionPool };
