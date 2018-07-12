//estabilsh connection here
const path = require('path');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host.    : 'localhost',
  user     : 'root',
  password : '',
  database : 'users'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log('connected as id ' + connection.threadId);
});

var getData = 'SELECT * FROM users';
var queryWithInput = 'SELECT ? FROM users'; //query(sqlString, ['david'], callback)

const getDataconnection.query(getData, function (error, results, fields) {
  if (error) {
    console.log('error, could not query db: ', error)
    return;
  };
  console.log('success: ', results);
  console.log('fields:', fields);
});

connection.query()






//export connection