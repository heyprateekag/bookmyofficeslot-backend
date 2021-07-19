const mysql = require("mysql");
//for connection with database
var mysqlConnection = mysql.createConnection({
  host: "bck869hwc7eqcy2ftcti-mysql.services.clever-cloud.com",
  user: "ucaxaq43lhhfwkt8",
  password: "yiHCUBk8BO0K7SwWBkTB",
  database: "bck869hwc7eqcy2ftcti",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Database Connected");
  } else {
    console.log("Database Connection failed");
  }
});

module.exports = mysqlConnection;
