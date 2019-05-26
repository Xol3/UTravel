// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode1',
  database: 'Users',
};

const connection = mysql.createConnection(config);

//Example mysql query using Promises

const userInfo = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Users', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

module.exports = {
  userInfo,
};
