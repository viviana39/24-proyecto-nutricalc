var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'krono12',
  database: 'nutrikal',
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});