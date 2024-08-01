const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '192.168.1.224',
    user: 'JGHJaime',
    password: 'krono',
    database: 'nutrikal'
  });
}